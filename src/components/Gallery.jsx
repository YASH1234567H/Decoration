import { useState } from 'react'
import { Maximize2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import GalleryModal from './GalleryModal'
import Reveal from './Reveal'
import { GALLERY } from '../data/content'

export default function Gallery() {
  const [active, setActive] = useState(null)
  return (
    <section id="gallery" aria-labelledby="gallery-h" className="section-pad bg-white">
      <div className="wrap">
        <SectionHeading id="gallery-h" title="OUR RECENT WORK" text="A look at recent weddings, celebrations and installations. Tap any image to view it larger." />
        {/* CSS columns give a masonry flow: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <ul className="mt-[clamp(2rem,5vw,4rem)] columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
          {GALLERY.map((g, i) => (
            <li key={g.title} className="break-inside-avoid">
              <Reveal>
                <button type="button" onClick={() => setActive(i)} aria-label={`Open ${g.title}, ${g.category}`}
                  style={{ '--ar': g.ar }}
                  className="group relative block aspect-square w-full overflow-hidden bg-beige text-left sm:[aspect-ratio:var(--ar)]">
                  <img src={g.image} alt={g.alt} loading="lazy" decoding="async" width="800" height="1000"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105" />
                  <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/75 via-transparent to-transparent p-4 text-white opacity-100 transition-opacity duration-500 sm:p-5 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:opacity-100">
                    <span className="font-serif text-xl sm:text-2xl">{g.title}</span>
                    <span className="mt-1 flex items-center justify-between text-sm text-beige">
                      {g.category}
                      <span className="inline-flex items-center gap-1.5 font-semibold text-white">View <Maximize2 size={14} /></span>
                    </span>
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <GalleryModal items={GALLERY} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  )
}
