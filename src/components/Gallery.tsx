import { ArrowUpRight } from 'lucide-react'
import { BUSINESS } from '../data/business'
import Reveal from './Reveal'

export default function Gallery() {
  return (
    <section className="bg-white-warm py-24 md:py-36">
      <div className="section-shell">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="text-xs font-semibold tracking-[0.22em] text-optic uppercase">03 · La fața locului</p><h2 className="mt-6 font-display text-5xl md:text-7xl">Ușor de găsit.<br /><em className="text-optic">Greu de ales doar o ramă.</em></h2></div>
          <a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 self-start border-b border-ink text-sm font-semibold">Deschide în Google Maps <ArrowUpRight size={17} /></a>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-[1.45fr_.75fr]">
          <Reveal className="group relative min-h-[420px] overflow-hidden rounded-[2rem] md:min-h-[620px]">
            <img src="/images/google-place-1.jpg" alt="Intrarea în Optica Medicală Florești" loading="lazy" width="1440" height="1080" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-7 pt-28 text-white"><p className="font-display text-3xl">Strada Cetății</p><p className="mt-1 text-sm text-white/75">Florești · 407280</p></div>
          </Reveal>
          <Reveal delay={0.08} className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-paper-deep">
            <img src="/images/google-place-2.jpg" alt="Vitrina Optica Medicală Florești" loading="lazy" width="810" height="1080" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="absolute top-5 right-5 rounded-full bg-paper px-4 py-2 text-xs font-semibold">Rame · Lentile · Consultații</div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
