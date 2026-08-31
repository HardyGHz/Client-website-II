import { ArrowUpRight } from 'lucide-react'
import { PLACEHOLDERS, SERVICES } from '../data/business'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="servicii" className="scroll-mt-24 py-24 md:py-36">
      <div className="section-shell">
        <Reveal className="grid gap-6 border-b border-ink pb-10 md:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold tracking-[0.22em] text-optic uppercase">01 · Servicii</p>
          <div>
            <h2 className="display-balance font-display text-5xl leading-[0.98] md:text-7xl">De la prima măsurătoare până la perechea pe care o porți cu drag.</h2>
            <p className="mt-6 max-w-2xl text-ink-soft">Fiecare alegere pornește de la cum vedeți, cum lucrați și cum vreți să vă simțiți cu ochelarii dumneavoastră.</p>
          </div>
        </Reveal>
        <div>
          {SERVICES.map((service, index) => (
            <Reveal key={service.index} delay={index * 0.04}>
              <a href="#programare" className="group grid min-h-36 items-center gap-4 border-b border-ink/20 py-7 transition-colors hover:bg-white-warm md:grid-cols-[70px_1fr_1.2fr_180px_30px] md:px-4">
                <span className="font-display text-2xl italic text-optic">{service.index}</span>
                <h3 className="font-display text-3xl leading-tight md:text-4xl">{service.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-ink-soft">{service.description}</p>
                <span className="text-sm font-semibold md:text-right">{service.detail}</span>
                <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-soft"><strong className="text-ink">Tarife:</strong> {PLACEHOLDERS.prices}</p>
      </div>
    </section>
  )
}
