import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import { SERVICES } from '../data/content'

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-h" className="section-pad">
      <div className="wrap">
        <SectionHeading id="services-h" title="DECORATION SERVICES" text="From a single arrangement to a complete venue, choose the support that fits your event." />
        <div className="mt-[clamp(2rem,5vw,4rem)] grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
