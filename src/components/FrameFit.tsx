import { Check, ScanFace } from 'lucide-react'
import { useState } from 'react'
import Reveal from './Reveal'

const frameOptions = [
  { id: 'soft', label: 'Rotunjită', note: 'Linii moi, prezență calmă', path: 'M105 180 C115 135 205 130 218 180 C229 224 125 233 105 180 M382 180 C395 135 485 135 495 180 C503 226 400 231 382 180 M218 176 C270 154 330 154 382 176' },
  { id: 'square', label: 'Geometrică', note: 'Contur clar, aspect precis', path: 'M95 140 L226 140 L218 222 L110 222 Z M374 140 L505 140 L490 222 L382 222 Z M226 165 C275 150 325 150 374 165' },
  { id: 'lifted', label: 'Ascendentă', note: 'Colț ridicat, expresie luminoasă', path: 'M98 165 Q165 118 229 146 L216 218 Q145 235 108 190 Z M371 146 Q435 118 502 165 L492 190 Q455 235 384 218 Z M229 160 C276 145 324 145 371 160' },
] as const

export default function FrameFit() {
  const [selected, setSelected] = useState(0)
  const frame = frameOptions[selected]

  return (
    <section id="potrivire" className="scroll-mt-24 overflow-hidden bg-ink py-24 text-paper md:py-36">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-sage uppercase">02 · Potrivirea contează</p>
          <h2 className="display-balance mt-7 font-display text-5xl leading-[0.98] md:text-7xl">O ramă bună nu stă doar pe nas. Se așază în povestea feței tale.</h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70">Clienții vorbesc despre răbdarea și sfaturile primite la alegerea ramelor. Am transformat exact această experiență în centrul paginii.</p>
          <ul className="mt-9 space-y-4 text-sm text-paper/85">
            {['Proporții potrivite fizionomiei', 'Confort pentru purtare zilnică', 'Lentile explicate fără jargon'].map((item) => <li key={item} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-optic"><Check size={14} /></span>{item}</li>)}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="rounded-[2.5rem] border border-white/15 bg-white-warm p-4 text-ink shadow-[0_35px_100px_rgba(0,0,0,.32)] sm:p-7">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4 text-xs font-semibold tracking-[0.18em] uppercase"><span>Frame fitting study</span><ScanFace size={19} className="text-optic" /></div>
            <svg viewBox="0 0 600 420" className="mt-5 w-full" role="img" aria-label={`Simulare de ramă ${frame.label}`}>
              <defs><pattern id="measure-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#111513" strokeOpacity=".075" /></pattern></defs>
              <rect width="600" height="420" rx="24" fill="url(#measure-grid)" />
              <path d="M300 66 C205 66 170 145 184 248 C196 338 249 374 300 382 C351 374 404 338 416 248 C430 145 395 66 300 66Z" fill="#c9d5c7" fillOpacity=".55" stroke="#111513" strokeWidth="2" />
              <path d="M300 88V355M118 180H482M142 114H458M142 300H458" stroke="#1857ff" strokeOpacity=".32" strokeDasharray="6 8" />
              <path d={frame.path} fill="none" stroke="#111513" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="300" cy="180" r="4" fill="#f05a47" />
              <text x="30" y="398" fontFamily="DM Sans" fontSize="11" fill="#111513" opacity=".55">DEMO VIZUAL · RECOMANDAREA FINALĂ SE FACE ÎN MAGAZIN</text>
            </svg>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {frameOptions.map((option, index) => (
                <button key={option.id} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className={`min-h-16 cursor-pointer rounded-2xl border px-4 py-3 text-left transition-colors ${selected === index ? 'border-optic bg-optic text-white' : 'border-ink/15 hover:border-ink/50'}`}>
                  <strong className="block text-sm">{option.label}</strong><span className={`mt-1 block text-[11px] ${selected === index ? 'text-white/75' : 'text-ink-soft'}`}>{option.note}</span>
                </button>
              ))}
            </div>
          </div>
          <div aria-hidden className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-optic opacity-25 blur-3xl" />
        </Reveal>
      </div>
    </section>
  )
}
