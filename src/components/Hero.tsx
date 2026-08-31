import { ArrowDownRight, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BUSINESS } from '../data/business'
import { isOpenNow } from '../lib/hours'
import OpticalFocus from './OpticalFocus'

export default function Hero() {
  const [open, setOpen] = useState<boolean | null>(null)
  useEffect(() => {
    setOpen(isOpenNow())
    const timer = window.setInterval(() => setOpen(isOpenNow()), 60_000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden className="absolute -top-48 -left-48 h-[34rem] w-[34rem] rounded-full bg-optic-soft blur-3xl" />
      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="h-px w-10 bg-optic" />
            <span className="text-xs font-semibold tracking-[0.22em] text-ink-soft uppercase">Optică medicală · Florești</span>
            {open !== null && <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/50 px-3 py-1.5 text-xs font-medium"><span className={`h-2 w-2 rounded-full ${open ? 'bg-green-600' : 'bg-coral'}`} />{open ? 'Deschis acum' : 'Închis acum'}</span>}
          </div>
          <h1 className="display-balance font-display text-[clamp(3.6rem,8vw,7.1rem)] leading-[0.88] tracking-[-0.045em] text-ink">
            Vezi clar.<br />Alege ce ți se <em className="font-normal text-optic">potrivește.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Consultație atentă, explicații pe înțeles și rame alese împreună cu dumneavoastră, pentru vedere bună și confort în fiecare zi.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#programare" className="inline-flex min-h-14 items-center gap-3 rounded-full bg-optic px-7 font-semibold text-white transition-transform hover:-translate-y-0.5">Programează o consultație <ArrowDownRight size={18} /></a>
            <a href={`tel:${BUSINESS.phoneTel}`} className="inline-flex min-h-14 items-center gap-2 rounded-full border border-ink/25 px-7 font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-white"><Phone size={17} /> {BUSINESS.phoneDisplay}</a>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-ink/15 pt-5 text-sm text-ink-soft">
            <span className="font-display text-3xl text-ink">4,9</span>
            <span className="text-optic" aria-label="5 stele">★★★★★</span>
            <span>{BUSINESS.reviewCount} de recenzii Google</span>
          </div>
        </div>
        <OpticalFocus />
      </div>
    </section>
  )
}
