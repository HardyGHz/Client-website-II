import { Check, Phone } from 'lucide-react'
import { useState } from 'react'
import { BUSINESS } from '../data/business'
import Reveal from './Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')

  return (
    <section id="programare" className="scroll-mt-24 bg-optic py-24 text-white md:py-36">
      <div className="section-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-white/65 uppercase">05 · Programare</p>
          <h2 className="display-balance mt-7 font-display text-6xl leading-[0.95] md:text-8xl">Primul pas spre o vedere mai clară.</h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/75">Lăsați-ne numărul dumneavoastră sau sunați direct. Formularul va fi conectat la fluxul de programări după aprobarea site-ului.</p>
          <a href={`tel:${BUSINESS.phoneTel}`} className="mt-9 inline-flex min-h-14 items-center gap-3 border-b border-white pb-1 font-semibold"><Phone size={19} /> {BUSINESS.phoneDisplay}</a>
        </Reveal>

        <Reveal delay={0.08} className="rounded-[2.5rem] bg-white-warm p-6 text-ink md:p-10">
          {sent ? (
            <div className="grid min-h-[470px] place-items-center text-center" aria-live="polite">
              <div><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sage"><Check size={30} /></span><h3 className="mt-7 font-display text-4xl">Mulțumim{name ? `, ${name.split(' ')[0]}` : ''}!</h3><p className="mx-auto mt-4 max-w-sm text-ink-soft">Aceasta este starea demonstrativă a formularului. La lansare, cererea ajunge direct la echipă.</p><button type="button" onClick={() => setSent(false)} className="mt-7 min-h-12 cursor-pointer border-b border-ink font-semibold">Trimite o altă cerere</button></div>
            </div>
          ) : (
            <form onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
              <div className="mb-8 flex items-center justify-between border-b border-ink/15 pb-5"><h3 className="font-display text-3xl">Cerere de programare</h3><span className="rounded-full bg-paper-deep px-3 py-1 text-[10px] font-semibold tracking-[.15em] uppercase">Demo</span></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">Nume și prenume<input required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} className="mt-2 min-h-13 w-full rounded-xl border border-ink/20 bg-transparent px-4 outline-none transition-colors focus:border-optic" /></label>
                <label className="block text-sm font-semibold">Telefon<input required type="tel" autoComplete="tel" className="mt-2 min-h-13 w-full rounded-xl border border-ink/20 bg-transparent px-4 outline-none transition-colors focus:border-optic" /></label>
              </div>
              <label className="mt-5 block text-sm font-semibold">Cu ce vă putem ajuta?<select defaultValue="" className="mt-2 min-h-13 w-full rounded-xl border border-ink/20 bg-transparent px-4 outline-none transition-colors focus:border-optic"><option value="" disabled>Alegeți o opțiune</option><option>Consultație optometrică</option><option>Rame și lentile</option><option>Reglaj sau reparație</option><option>Vreau o recomandare</option></select></label>
              <label className="mt-5 block text-sm font-semibold">Mesaj opțional<textarea rows={4} className="mt-2 w-full rounded-xl border border-ink/20 bg-transparent p-4 outline-none transition-colors focus:border-optic" placeholder="Spuneți-ne pe scurt de ce aveți nevoie." /></label>
              <button type="submit" className="mt-6 min-h-14 w-full cursor-pointer rounded-full bg-ink px-7 font-semibold text-white transition-colors hover:bg-optic">Trimite cererea</button>
              <p className="mt-4 text-center text-xs text-ink-soft">Fără spam. Datele sunt folosite doar pentru confirmarea programării.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
