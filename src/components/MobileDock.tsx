import { CalendarDays, Phone } from 'lucide-react'
import { BUSINESS } from '../data/business'

export default function MobileDock() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-white/15 bg-ink/95 p-2 text-white shadow-2xl backdrop-blur-lg md:hidden">
      <a href={`tel:${BUSINESS.phoneTel}`} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 text-sm font-semibold"><Phone size={17} /> Sună acum</a>
      <a href="#programare" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-optic text-sm font-semibold"><CalendarDays size={17} /> Programare</a>
    </div>
  )
}
