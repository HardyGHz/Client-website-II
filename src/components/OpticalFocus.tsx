import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useId } from 'react'

const rows = [
  { text: 'E', y: 118, size: 84 },
  { text: 'F P', y: 202, size: 60 },
  { text: 'T O Z', y: 278, size: 45 },
  { text: 'L P E D', y: 346, size: 34 },
  { text: 'P E C F D', y: 408, size: 27 },
  { text: 'E D F C Z P', y: 463, size: 21 },
] as const

function ChartRows() {
  return (
    <g textAnchor="middle" fill="currentColor" fontFamily="DM Sans, sans-serif" fontWeight="700">
      {rows.map((row) => <text key={row.text} x="300" y={row.y} fontSize={row.size} letterSpacing={row.size * 0.24}>{row.text}</text>)}
    </g>
  )
}

export default function OpticalFocus() {
  const reduceMotion = useReducedMotion()
  const rawX = useMotionValue(390)
  const rawY = useMotionValue(285)
  const x = useSpring(rawX, { stiffness: 180, damping: 24 })
  const y = useSpring(rawY, { stiffness: 180, damping: 24 })
  const maskId = `lens-${useId().replace(/:/g, '')}`

  const onPointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (reduceMotion) return
    const box = event.currentTarget.getBoundingClientRect()
    rawX.set(((event.clientX - box.left) / box.width) * 600)
    rawY.set(((event.clientY - box.top) / box.height) * 560)
  }

  return (
    <div className="relative mx-auto aspect-[15/14] w-full max-w-[620px] overflow-hidden rounded-[2.5rem] border border-ink/15 bg-white-warm shadow-[0_30px_80px_rgba(17,21,19,0.12)]">
      <svg viewBox="0 0 600 560" className="h-full w-full text-ink" role="img" aria-label="Panou optometric care devine clar în interiorul unei lentile mobile" onPointerMove={onPointerMove} onPointerLeave={() => { rawX.set(390); rawY.set(285) }}>
        <defs>
          <filter id="chart-blur"><feGaussianBlur stdDeviation="7" /></filter>
          <mask id={maskId}><rect width="600" height="560" fill="black" /><motion.circle cx={x} cy={y} r="112" fill="white" /></mask>
          <pattern id="fine-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M 32 0 L 0 0 0 32" fill="none" stroke="#111513" strokeOpacity=".07" strokeWidth="1" /></pattern>
        </defs>
        <rect width="600" height="560" fill="#fffdf8" />
        <rect width="600" height="560" fill="url(#fine-grid)" />
        <g opacity=".2" filter="url(#chart-blur)"><ChartRows /></g>
        <g mask={`url(#${maskId})`}><ChartRows /></g>
        <motion.circle cx={x} cy={y} r="116" fill="none" stroke="#1857ff" strokeWidth="8" />
        <motion.circle cx={x} cy={y} r="104" fill="none" stroke="#111513" strokeOpacity=".22" strokeWidth="1" />
        <motion.line x1={x} y1={y} x2={x} y2={y} stroke="#1857ff" />
        <path d="M80 48h78M80 48v18M520 48h-78M520 48v18M80 512h78M80 512v-18M520 512h-78M520 512v-18" fill="none" stroke="#111513" strokeOpacity=".28" strokeWidth="2" />
        <text x="28" y="285" transform="rotate(-90 28 285)" fontFamily="DM Sans" fontSize="10" letterSpacing="4" fill="#111513" opacity=".5">CLARITATE · CONFORT · PRECIZIE</text>
      </svg>
      <div className="pointer-events-none absolute right-5 bottom-5 rounded-full bg-ink px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-paper uppercase">Mișcă lentila</div>
    </div>
  )
}
