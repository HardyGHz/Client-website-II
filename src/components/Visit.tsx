import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BUSINESS } from '../data/business'
import { isOpenNow } from '../lib/hours'
import Reveal from './Reveal'

export default function Visit() {
  const [open, setOpen] = useState<boolean | null>(null)
  useEffect(() => { setOpen(isOpenNow()) }, [])
  return (
    <section id="vizita" className="scroll-mt-24 bg-sage py-24 md:py-36">
      <div className="section-shell grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-ink">
          <img src="/images/google-place-4.jpg" alt="Clădirea în care se află Optica Medicală Florești" loading="lazy" width="1024" height="678" className="absolute inset-0 h-full w-full object-cover opacity-65" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-11">
            <MapPin className="mb-5 text-sage" />
            <h2 className="font-display text-5xl md:text-6xl">Ne găsiți pe Strada Cetății.</h2>
            <p className="mt-4 text-white/70">{BUSINESS.fullAddress}</p>
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 font-semibold text-ink">Indicații de orientare <ArrowUpRight size={17} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col justify-between rounded-[2.5rem] bg-paper p-8 md:p-11">
          <div>
            <div className="flex items-center justify-between"><p className="text-xs font-semibold tracking-[0.2em] text-optic uppercase">Program</p>{open !== null && <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1.5 text-xs font-semibold"><span className={`h-2 w-2 rounded-full ${open ? 'bg-green-600' : 'bg-coral'}`} />{open ? 'Deschis acum' : 'Închis acum'}</span>}</div>
            <div className="mt-9 divide-y divide-ink/15 border-y border-ink/15">
              <div className="flex justify-between py-5"><span>Luni–Vineri</span><strong>{BUSINESS.hours.weekdays}</strong></div>
              <div className="flex justify-between py-5"><span>Sâmbătă</span><strong>{BUSINESS.hours.saturday}</strong></div>
              <div className="flex justify-between py-5"><span>Duminică</span><strong>{BUSINESS.hours.sunday}</strong></div>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex items-center gap-3 text-sm text-ink-soft"><Clock3 size={18} /> Pentru consultație, sunați înainte.</div>
            <a href={`tel:${BUSINESS.phoneTel}`} className="mt-5 flex min-h-16 items-center justify-center gap-3 rounded-full bg-ink text-lg font-semibold text-white transition-colors hover:bg-optic"><Phone size={20} /> {BUSINESS.phoneDisplay}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
