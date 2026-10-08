import { Check } from 'lucide-react'
import Reveal from './Reveal'

export default function PackageCard({ pkg, index }) {
  const f = pkg.featured
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <article className={`relative flex h-full flex-col p-7 sm:p-9 ${f ? 'bg-charcoal text-ivory lg:-my-5 lg:py-14' : 'border border-charcoal/15 bg-white'}`}>
        {f && <span className="label absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold text-charcoal">Most chosen</span>}
        <h3 className="text-3xl">{pkg.name}</h3>
        <p className={`mt-2 text-sm ${f ? 'text-white/70' : 'text-charcoal/70'}`}>{pkg.blurb}</p>
        <p className={`mt-6 font-serif text-[clamp(2.2rem,4vw,3rem)] leading-none ${f ? 'text-gold' : 'text-charcoal'}`}>{pkg.price}</p>
        <ul className="mt-8 flex-1 space-y-3 text-sm">
          {pkg.features.map((x) => (
            <li key={x} className="flex gap-3"><Check size={18} className={`mt-0.5 shrink-0 ${f ? 'text-gold' : 'text-gold-deep'}`} aria-hidden="true" />{x}</li>
          ))}
        </ul>
        <a href="#contact" className={`btn mt-10 w-full ${f ? 'btn-gold' : 'btn-dark'}`}>Choose {pkg.name}</a>
      </article>
    </Reveal>
  )
}
