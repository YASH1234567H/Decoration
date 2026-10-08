import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IMAGES } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

// The image sits inside an inset clip-path (rounded) and opens to full-bleed on scroll.
// clip-path + transform are paint-only, so no layout work. Reduced motion renders the final state.
export default function ExpandSection() {
  const section = useRef(null)
  const frame = useRef(null)
  const img = useRef(null)
  const text = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section.current, start: 'top top', end: '+=90%', scrub: 0.6, pin: true, anticipatePin: 1 },
      })
      tl.fromTo(frame.current, { clipPath: 'inset(14% 7% 14% 7% round 40px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none' }, 0)
        .fromTo(img.current, { scale: 1.2 }, { scale: 1, ease: 'none' }, 0)
        .fromTo(text.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: 'none' }, 0.45)
    })
    return () => mm.revert()
  }, [])

  return (
    <section ref={section} aria-label="Craft and detail" className="relative h-[100svh] overflow-hidden bg-ivory">
      <div ref={frame} className="absolute inset-0 will-change-[clip-path]">
        <img ref={img} src={IMAGES.expand} alt="Warmly lit banquet hall with floral arches" loading="lazy" decoding="async" width="1920" height="1080" className="h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-charcoal/45" />
        <div ref={text} className="absolute inset-0 grid place-items-center px-6 text-center text-white">
          <div className="max-w-3xl">
            <h2 className="h-section">Every detail is placed with intention</h2>
            <p className="mx-auto mt-5 max-w-lg text-base text-white/85 sm:text-lg">Texture, light and scent come together so the room feels as good as it looks.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
