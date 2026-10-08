import Reveal from './Reveal'
import Counter from './Counter'
import { IMAGES } from '../data/content'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="section-pad bg-white">
      <div className="wrap grid items-center gap-[clamp(2rem,6vw,6rem)] lg:grid-cols-2">
        <Reveal>
          <div className="mx-auto aspect-[4/5] w-full max-w-xl overflow-hidden bg-beige lg:max-w-none">
            <img src={IMAGES.about} alt="Ivory floral arch styled for an intimate ceremony" loading="lazy" decoding="async" width="900" height="1100" className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <div>
          <Reveal as="h2" className="h-section"><span id="about-h">WE TURN SPACES INTO EXPERIENCES</span></Reveal>
          <Reveal delay={0.1} className="mt-6 max-w-xl space-y-4 leading-relaxed text-charcoal/75">
            <p>Madhesh Decoration studio is a decoration studio for weddings, celebrations and interiors. We start with how you want the day to feel, then build the florals, lighting and layout to match.</p>
            <p>Our team handles design, sourcing, installation and teardown, so the space is ready when your first guest walks in.</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 grid grid-cols-1 gap-6 border-t border-charcoal/15 pt-8 min-[420px]:grid-cols-3">
            <Counter to={10} label="Years Experience" />
            <Counter to={500} label="Events" />
            <Counter to={1000} label="Happy Clients" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
