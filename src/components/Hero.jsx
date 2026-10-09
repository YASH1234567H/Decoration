import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { IMAGES } from '../data/content'
import { EASE } from './Reveal'
import { scrollToHash } from '../hooks/useSmoothScroll'

const D = 1.5 // offset so hero text reveals as the curtain panels slide away (curtain opens 0.7 s – 2.1 s)

const Line = ({ children, delay }) => (
  <span className="block overflow-hidden pb-[0.1em]">
    <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: EASE, delay }}>
      {children}
    </motion.span>
  </span>
)

export default function Hero() {
  const go = (e, h) => { e.preventDefault(); scrollToHash(h) }
  return (
    <section id="home" aria-label="Introduction" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-charcoal text-white">
      <motion.img
        src={IMAGES.hero} alt="Elegant event space with arches, florals and warm hanging lights"
        width="1920" height="1080" fetchpriority="high"
        initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: 'easeOut', delay: D - 0.4 }}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center] sm:object-center"
      />
      <motion.div aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: D - 0.2 }}
        className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/85 via-charcoal/45 to-charcoal/30" />

      <div className="wrap pb-[clamp(5rem,12vh,8rem)] pt-32">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: D + 0.1 }} className="label mb-5 text-beige">
          Creating beautiful spaces
        </motion.p>
        <h1 className="h-display">
          <Line delay={D + 0.25}>DECORATE</Line>
          <Line delay={D + 0.4}>YOUR DREAM</Line>
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: D + 0.8, ease: EASE }}
          className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
          Beautiful spaces. Beautiful moments. Unforgettable memories.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: D + 1, ease: EASE }}
          className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#gallery" onClick={(e) => go(e, '#gallery')} className="btn btn-gold">Explore Designs <ArrowRight size={18} /></a>
          <a href="#contact" onClick={(e) => go(e, '#contact')} className="btn btn-ghost">Get a Quote</a>
        </motion.div>
      </div>

      <motion.div aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: D + 1.4 }}
        className="absolute bottom-5 right-5 hidden flex-col items-center gap-1 text-xs text-white/70 sm:flex">
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}><ChevronDown size={18} /></motion.span>
      </motion.div>
    </section>
  )
}
