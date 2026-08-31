import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BUSINESS } from '../data/business'

const links = [
  ['Servicii', '#servicii'],
  ['Cum alegem', '#potrivire'],
  ['Recenzii', '#recenzii'],
  ['Program', '#vizita'],
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-ink/10 bg-paper/90 py-3 backdrop-blur-xl' : 'py-5'}`}>
      <div className="section-shell flex items-center justify-between">
        <a href="#" className="group flex min-h-12 items-center gap-3" aria-label="Optica Medicală Florești, începutul paginii">
          <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink transition-colors group-hover:border-optic">
            <span className="h-4 w-4 rounded-full bg-optic" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl">Optica Medicală</span>
            <span className="mt-1 block text-[10px] font-semibold tracking-[0.24em] text-ink-soft uppercase">Florești</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigație principală">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-ink-soft transition-colors hover:text-optic">{label}</a>
          ))}
        </nav>

        <a href={`tel:${BUSINESS.phoneTel}`} className="hidden min-h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-optic md:inline-flex">
          <Phone size={16} /> {BUSINESS.phoneDisplay}
        </a>

        <button type="button" className="grid h-12 w-12 place-items-center rounded-full border border-ink/20 lg:hidden" aria-label="Deschide meniul" aria-expanded={open} onClick={() => setOpen(true)}>
          <Menu size={21} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] flex h-dvh flex-col bg-ink px-6 py-5 text-paper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl">Optica Medicală</span>
              <button type="button" className="grid h-12 w-12 place-items-center rounded-full border border-white/25" aria-label="Închide meniul" onClick={() => setOpen(false)}><X /></button>
            </div>
            <nav className="my-auto flex flex-col" aria-label="Navigație mobilă">
              {links.map(([label, href], index) => (
                <motion.a key={href} href={href} className="border-b border-white/15 py-5 font-display text-4xl" onClick={() => setOpen(false)} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.06 }}>{label}</motion.a>
              ))}
            </nav>
            <a href={`tel:${BUSINESS.phoneTel}`} className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-optic font-semibold text-white"><Phone size={18} /> Sună: {BUSINESS.phoneDisplay}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
