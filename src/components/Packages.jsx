import SectionHeading from './SectionHeading'
import PackageCard from './PackageCard'
import { PACKAGES } from '../data/content'

export default function Packages() {
  return (
    <section id="packages" aria-labelledby="packages-h" className="section-pad bg-beige/40">
      <div className="wrap">
        <SectionHeading id="packages-h" title="PACKAGES" text="Starting points for your event. Every package can be adjusted to your venue and guest list." align="center" />
        <div className="mt-[clamp(2rem,5vw,4rem)] grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 [&>*:nth-child(2)]:md:order-first [&>*:nth-child(2)]:lg:order-none">
          {PACKAGES.map((p, i) => <PackageCard key={p.name} pkg={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
