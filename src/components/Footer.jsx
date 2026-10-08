import Logo from './Logo'
import { SocialLinks } from './Contact'
import { CONTACT, NAV, SERVICES } from '../data/content'
import { scrollToHash } from '../hooks/useSmoothScroll'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="wrap grid gap-10 py-[clamp(3rem,7vw,5rem)] sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="max-w-xs">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-white/70">A decoration studio creating weddings, events and interiors with florals, lighting and careful styling.</p>
          <div className="mt-6"><SocialLinks light /></div>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-semibold text-gold">Navigate</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {NAV.map((n) => <li key={n.href}><a href={n.href} onClick={(e) => { e.preventDefault(); scrollToHash(n.href) }} className="link-u inline-block py-1">{n.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <h2 className="font-sans text-sm font-semibold text-gold">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {SERVICES.slice(0, 6).map((s) => <li key={s.title}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToHash('#services') }} className="link-u inline-block py-1">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold text-gold">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="link-u">{CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="link-u break-words">{CONTACT.email}</a></li>
            <li>{CONTACT.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        <p className="wrap">&copy; {new Date().getFullYear()} Madhesh Decoration Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}
