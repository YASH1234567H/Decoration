import SectionHeading from './SectionHeading'
import DesignCard from './DesignCard'
import { SIGNATURE } from '../data/content'

export default function Signature() {
  return (
    <section aria-labelledby="signature-h" className="section-pad">
      <div className="wrap">
        <SectionHeading id="signature-h" title="OUR SIGNATURE DESIGNS" text="Six ways we shape a space, each planned around the people who will be in it." />
        <div className="mt-[clamp(2rem,5vw,4rem)] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {SIGNATURE.map((s, i) => <DesignCard key={s.title} item={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
