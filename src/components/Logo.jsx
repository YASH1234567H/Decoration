import { BRAND } from '../data/content'

export default function Logo({ light = false, className = '' }) {
  return (
    <a href="#home" aria-label={`${BRAND} home`} className={`font-serif text-2xl font-semibold tracking-wide ${light ? 'text-white' : 'text-charcoal'} ${className}`}>
      Madhesh <span className="text-gold">Decoration Studio</span>
    </a>
  )
}
