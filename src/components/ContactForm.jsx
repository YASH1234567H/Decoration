import { useState } from 'react'
import { Send } from 'lucide-react'
import { BRAND, WHATSAPP_NUMBER } from '../data/content'

const EVENT_TYPES = ['Wedding', 'Reception', 'Birthday', 'Baby Shower', 'Corporate Event', 'Home Decoration', 'Stage Decoration', 'Other']

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-charcoal/80">{label}</label>
      {children}
    </div>
  )
}

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const d = Object.fromEntries(new FormData(form))
    const formattedDate = d.date
  ? d.date.split('-').reverse().join('-')
  : '-';
    const text = [
      `*New enquiry | ${BRAND}*`,
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone || '-'}`,
      `Event type: ${d.type}`,
      `Event date: ${formattedDate}`,
      `Message: ${d.message || '-'}`,
    ].join('\n')
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    // Opens WhatsApp with the enquiry prefilled; falls back to same-tab if a popup is blocked.
    const w = window.open(url, '_blank')
    
    setSent(true)
    form.reset()
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2" aria-label="Enquiry form">
      <Field id="name" label="Name"><input id="name" name="name" type="text" autoComplete="name" required className="field" /></Field>
      <Field id="email" label="Email"><input id="email" name="email" type="email" autoComplete="email" className="field"/></Field>
      <Field id="phone" label="Phone"><input id="phone" name="phone" type="tel" autoComplete="tel" className="field" minLength={10} maxLength={12} pattern="[0-9]{10,12}" required/></Field>
      <Field id="type" label="Event Type">
        <select id="type" name="type" required defaultValue="" className="field">
          <option value="" disabled>Select an event</option>
          {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>
      <div className="sm:col-span-2 sm:max-w-[calc(50%-0.75rem)]">
        <Field id="date" label="Event Date"><input id="date" name="date" type="date" className="field" min={new Date().toISOString().split('T')[0]} /></Field>
      </div>
      <div className="sm:col-span-2">
        <Field id="message" label="Details about event"><textarea id="message" name="message" rows={4} className="field resize-y" /></Field>
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-dark w-full sm:w-auto">Send via WhatsApp <Send size={17} /></button>
        <p role="status" aria-live="polite" className="mt-4 min-h-6 text-sm text-gold-deep">{sent ? 'WhatsApp is opening with your enquiry. Press send there to deliver it to us.' : ''}</p>
      </div>
    </form>
  )
}
