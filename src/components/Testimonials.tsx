import { Star } from 'lucide-react'
import { BUSINESS, REVIEWS } from '../data/business'
import Reveal from './Reveal'

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <article className="flex w-[330px] shrink-0 flex-col rounded-[2rem] border border-ink/15 bg-white-warm p-7 md:w-[430px] md:p-9">
      <div className="flex gap-1 text-optic" aria-label="5 stele">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" />)}</div>
      <blockquote className="mt-7 flex-1 font-display text-2xl leading-snug">„{review.text}”</blockquote>
      <footer className="mt-8 border-t border-ink/10 pt-5 text-sm"><strong>{review.author}</strong><span className="ml-3 text-ink-soft">{review.date}</span></footer>
    </article>
  )
}

export default function Testimonials() {
  const loop = [...REVIEWS, ...REVIEWS]
  return (
    <section id="recenzii" className="scroll-mt-24 overflow-hidden py-24 md:py-36">
      <div className="section-shell">
        <Reveal className="grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-end">
          <div><p className="text-xs font-semibold tracking-[0.22em] text-optic uppercase">04 · Recenzii reale</p><div className="mt-6 flex items-baseline gap-3"><span className="font-display text-8xl">{BUSINESS.rating}</span><span className="text-optic">★★★★★</span></div></div>
          <h2 className="display-balance font-display text-5xl leading-none md:text-7xl">Oamenii își amintesc răbdarea. Și recomandarea potrivită.</h2>
        </Reveal>
      </div>
      <div className="marquee-wrap mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
        <div className="marquee-track flex w-max gap-5 pr-5">{loop.map((review, index) => <ReviewCard key={`${review.author}-${index}`} review={review} />)}</div>
      </div>
      <p className="mt-7 text-center text-sm text-ink-soft">{BUSINESS.reviewCount} recenzii Google · 34 dintre ele sunt de 5 stele</p>
    </section>
  )
}
