import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { IMAGES } from '../data/content'
import { scrollToHash } from '../hooks/useSmoothScroll'
import Reveal from './Reveal'

export default function CTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  return (
    <section ref={ref} aria-labelledby="cta-h" className="relative isolate grid min-h-[80svh] place-items-center overflow-hidden px-4 py-24 text-center text-white">
      <motion.img src={IMAGES.cta} alt="" aria-hidden="true" loading="lazy" decoding="async" width="1920" height="1080" style={{ y }}
        className="absolute inset-x-0 -top-[10%] -z-20 h-[120%] w-full object-cover will-change-transform" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-charcoal/60" />
      <div className="mx-auto max-w-3xl">
        <Reveal as="h2" className="h-section"><span id="cta-h">READY TO CREATE SOMETHING BEAUTIFUL?</span></Reveal>
        <Reveal delay={0.1} className="mx-auto mt-5 max-w-md text-base text-white/85 sm:text-lg">Let's turn your vision into a space you'll never forget.</Reveal>
        <Reveal delay={0.2} className="mt-9">
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToHash('#contact') }} className="btn btn-gold">Start Your Project <ArrowRight size={18} /></a>
        </Reveal>
      </div>
    </section>
  )
}
