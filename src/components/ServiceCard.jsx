import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { EASE } from './Reveal'

export default function ServiceCard({ icon: Icon, title, text, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.65, ease: EASE, delay: (index % 4) * 0.08 }}
      className="group flex flex-col border border-charcoal/10 bg-ivory p-6 transition-colors duration-500 hover:border-gold hover:bg-white sm:p-7"
    >
      <Icon size={30} strokeWidth={1.25} className="text-gold-deep" aria-hidden="true" />
      <h3 className="mt-8 text-2xl">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">{text}</p>
      <a href="#contact" aria-label={`Enquire about ${title}`} className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold">
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
    </motion.article>
  )
}
