import { ArrowUp, MapPin, Phone } from 'lucide-react'
import { BUSINESS } from '../data/business'

export default function Footer() {
  return (
    <footer className="bg-ink pb-28 text-paper md:pb-8">
      <div className="section-shell py-16 md:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.4fr_.7fr_.7fr]">
          <div><div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-full border-2 border-paper"><span className="h-5 w-5 rounded-full bg-optic" /></span><span className="font-display text-3xl">Optica Medicală<br /><small className="font-body text-[10px] font-semibold tracking-[.25em] uppercase">Florești</small></span></div><p className="mt-7 max-w-sm text-sm leading-relaxed text-paper/60">Consultații, rame și lentile alese cu răbdare, pe Strada Cetății.</p></div>
          <div><h2 className="text-xs font-semibold tracking-[.2em] text-sage uppercase">Contact</h2><a href={`tel:${BUSINESS.phoneTel}`} className="mt-5 flex min-h-11 items-center gap-2 text-sm hover:text-sage"><Phone size={16} /> {BUSINESS.phoneDisplay}</a><a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer" className="mt-2 flex min-h-11 items-center gap-2 text-sm hover:text-sage"><MapPin size={16} /> Strada Cetății</a></div>
          <div><h2 className="text-xs font-semibold tracking-[.2em] text-sage uppercase">Navigare</h2><div className="mt-4 flex flex-col text-sm"><a className="py-2 hover:text-sage" href="#servicii">Servicii</a><a className="py-2 hover:text-sage" href="#recenzii">Recenzii</a><a className="py-2 hover:text-sage" href="#vizita">Program</a><a className="py-2 hover:text-sage" href="#programare">Programare</a></div></div>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-xs text-paper/45 md:flex-row md:items-center md:justify-between"><p>Propunere de redesign pentru Optica Medicală Florești.</p><div className="flex items-center gap-5"><a href="https://novusolv.com" target="_blank" rel="noreferrer" className="hover:text-white">Design & automatizări · Novusolv</a><a href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white" aria-label="Înapoi sus"><ArrowUp size={16} /></a></div></div>
      </div>
    </footer>
  )
}
