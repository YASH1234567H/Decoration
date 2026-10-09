import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ContactForm from './ContactForm'
import Reveal from './Reveal'
import { CONTACT } from '../data/content'

export const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/buddy.events', icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com/MadheshRoyal', icon: Facebook },
]

export function SocialLinks({ light = false }) {
  return (
    <ul className="flex gap-3">
      {SOCIALS.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className={`grid h-11 w-11 place-items-center rounded-full border transition-colors ${light ? 'border-white/25 hover:bg-gold hover:text-charcoal' : 'border-charcoal/20 hover:bg-charcoal hover:text-ivory'}`}>
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Contact() {
  const rows = [
    { icon: Phone, label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MapPin, label: 'Location', value: CONTACT.location },
  ]
  return (
    <section id="contact" aria-labelledby="contact-h" className="section-pad">
      <div className="wrap grid gap-[clamp(2.5rem,6vw,6rem)] lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading id="contact-h" title="LET'S PLAN YOUR EVENT" text="Tell us about your date and your ideas. We will reply within one working day." />
          <Reveal delay={0.15} className="mt-10 space-y-5">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <Icon size={20} className="mt-1 shrink-0 text-gold-deep" aria-hidden="true" />
                <div className="min-w-0"><p className="text-sm text-charcoal/60">{label}</p>
                  {href ? <a href={href} className="link-u break-words">{value}</a> : <p>{value}</p>}</div>
              </div>
            ))}
            <div className="pt-3"><SocialLinks /></div>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="bg-white p-6 sm:p-10"><ContactForm /></Reveal>
      </div>
    </section>
  )
}
