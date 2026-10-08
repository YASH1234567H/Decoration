import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

// Signature category card. Info stays visible on touch; hover only adds polish.
export default function DesignCard({ item, index }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <a href="#gallery" className="group relative block aspect-[4/5] overflow-hidden bg-beige sm:aspect-[5/6]" aria-label={`${item.title}: view project`}>
        <img src={item.image} alt={`${item.title} styling example`} loading="lazy" decoding="async" width="1000" height="800"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent transition-colors duration-500 group-hover:from-charcoal/90 group-hover:via-charcoal/30" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
          <h3 className="text-[clamp(1.5rem,2.4vw,2rem)]">{item.title}</h3>
          <p className="mt-2 max-w-xs text-sm text-white/80 transition-transform duration-500 group-hover:-translate-y-1">{item.text}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-beige">
            View Project
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </a>
    </Reveal>
  )
}
