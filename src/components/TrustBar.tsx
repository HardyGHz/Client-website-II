import { Clock3, Eye, Glasses, Star } from 'lucide-react'

const items = [
  [Star, '4,9 din 5', '35 recenzii Google'],
  [Eye, 'Consultație atentă', 'Recomandări explicate clar'],
  [Glasses, 'Rama potrivită', 'Alegere ghidată, fără grabă'],
  [Clock3, 'Program și sâmbătă', '10:00–14:00'],
] as const

export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-white-warm" aria-label="Motive de încredere">
      <div className="section-shell grid sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([Icon, title, detail]) => (
          <div key={title} className="flex items-center gap-4 border-b border-ink/10 py-6 sm:px-5 lg:border-r lg:border-b-0 first:pl-0 last:border-r-0">
            <Icon size={22} strokeWidth={1.6} className="shrink-0 text-optic" />
            <span><strong className="block text-sm">{title}</strong><span className="mt-1 block text-xs text-ink-soft">{detail}</span></span>
          </div>
        ))}
      </div>
    </section>
  )
}
