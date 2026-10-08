import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import SectionHeading from './SectionHeading'
import { TESTIMONIALS } from '../data/content'

export default function TestimonialSlider() {
  return (
    <section aria-labelledby="testimonials-h" className="section-pad">
      <div className="wrap">
        <SectionHeading id="testimonials-h" title="KIND WORDS FROM OUR CLIENTS" align="center" />
        <Swiper
          className="testimonials mt-[clamp(2rem,5vw,4rem)] !pb-14"
          modules={[Pagination, Autoplay, A11y]} slidesPerView={1} spaceBetween={24} grabCursor
          pagination={{ clickable: true }} autoplay={{ delay: 6000, pauseOnMouseEnter: true, disableOnInteraction: true }}
          breakpoints={{ 1024: { slidesPerView: 2, spaceBetween: 32 } }}
          a11y={{ prevSlideMessage: 'Previous review', nextSlideMessage: 'Next review' }}
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.name} className="!h-auto">
              <figure className="flex h-full flex-col border border-charcoal/10 bg-white p-6 sm:p-9">
                <div className="flex gap-1 text-gold" role="img" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-[clamp(1.25rem,2.4vw,1.75rem)] leading-snug">{"\u201C"}{t.text}{"\u201D"}</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <img src={t.avatar} alt="" width="48" height="48" loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                  <span><span className="block font-semibold">{t.name}</span><span className="text-sm text-charcoal/70">{t.event}</span></span>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
