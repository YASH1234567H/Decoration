import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export default function Counter({ to, suffix = '+', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) { if (reduce) setN(to); return }
    const c = animate(0, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, reduce, to])

  return (
    <div ref={ref}>
      <p className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] leading-none text-charcoal" aria-label={`${to}${suffix} ${label}`}>
        <span aria-hidden="true">{n}{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-charcoal/70">{label}</p>
    </div>
  )
}
