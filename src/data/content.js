import { Heart, Sparkles, Cake, Baby, Briefcase, Home, Theater, Flower2, GlassWater } from 'lucide-react'

// Swap any file in /public/images with real photography (same name) or edit paths here.
const img = (name) => `${import.meta.env.BASE_URL}images/${name}.jpg`

export const BRAND = 'Madhesh Decoration Studio'

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
]

export const IMAGES = {
  hero: img('wedding'), cta: img('cta'), expand: img('expand'), about: img('about'),
}

export const SIGNATURE = [
  { title: 'Wedding Decoration', text: 'Mandaps, aisles and florals composed around your story.', image: img('wedding') },
  { title: 'Event Decoration', text: 'Statement staging and lighting for gatherings of any size.', image: img('event') },
  { title: 'Birthday Decoration', text: 'Playful, polished setups for milestones big and small.', image: img('birthday') },
  { title: 'Interior Decoration', text: 'Warm, layered rooms styled with texture and restraint.', image: img('interior') },
  { title: 'Corporate Events', text: 'Launches and galas that look as sharp as your brand.', image: img('corporate') },
  { title: 'Luxury Events', text: 'Fully bespoke environments, built from the ground up.', image: img('luxury') },
]

export const SERVICES = [
  { icon: Heart, title: 'Wedding Decoration', text: 'Ceremony spaces, mandaps and aisles designed end to end.' },
  { icon: GlassWater, title: 'Reception Decoration', text: 'Dining, dance floor and entrance styled as one scene.' },
  { icon: Cake, title: 'Birthday Decoration', text: 'Themed backdrops, balloon work and table styling.' },
  { icon: Baby, title: 'Baby Shower', text: 'Soft palettes and gentle details for a welcoming day.' },
  { icon: Briefcase, title: 'Corporate Events', text: 'Branded staging, entrances and hospitality areas.' },
  { icon: Home, title: 'Home Decoration', text: 'Festive and seasonal styling for your own rooms.' },
  { icon: Theater, title: 'Stage Decoration', text: 'Backdrops and set pieces that photograph beautifully.' },
  { icon: Flower2, title: 'Floral Decoration', text: 'Fresh arrangements, installations and bouquets.' },
]

export const GALLERY = [
  { title: 'Garden Vows', category: 'Wedding', image: img('g1'), ar: '4 / 5', alt: 'Floral arch set for an outdoor wedding ceremony' },
  { title: 'Golden Hour Reception', category: 'Reception', image: img('g2'), ar: '5 / 4', alt: 'Reception hall with warm hanging lights' },
  { title: 'Amber Birthday', category: 'Birthday', image: img('g3'), ar: '1 / 1', alt: 'Birthday backdrop with beige and gold florals' },
  { title: 'The Long Table', category: 'Luxury', image: img('g4'), ar: '3 / 4', alt: 'Long banquet table with candles and florals' },
  { title: 'Product Launch', category: 'Corporate', image: img('g5'), ar: '4 / 3', alt: 'Corporate launch stage with layered lighting' },
  { title: 'Ivory Ceremony', category: 'Wedding', image: img('g6'), ar: '5 / 6', alt: 'Ivory arch with trailing greenery' },
  { title: 'Evening Soirée', category: 'Event', image: img('g7'), ar: '10 / 9', alt: 'Evening event space with suspended lights' },
  { title: 'Floral Canopy', category: 'Floral', image: img('g8'), ar: '4 / 5', alt: 'Canopy of fresh flowers above a seating area' },
  { title: 'Rooftop Dinner', category: 'Event', image: img('g9'), ar: '5 / 4', alt: 'Rooftop dinner styled with lanterns' },
]

export const TESTIMONIALS = [
  { name: 'Ananya & Rohan', event: 'Wedding', rating: 5, avatar: img('a1'), text: 'They understood our vision from the first call. Our guests are still talking about the ceremony space.' },
  { name: 'Meera Kapoor', event: 'Corporate Gala', rating: 5, avatar: img('a2'), text: 'Calm, precise and unfailingly tasteful. The venue felt transformed and everything ran on time.' },
  { name: 'Sara Thomas', event: 'Birthday Celebration', rating: 5, avatar: img('a3'), text: 'My daughter\u2019s party looked like a magazine shoot. The team handled every detail so I could enjoy it.' },
]

export const PACKAGES = [
  { name: 'Essential', price: '$1,200', blurb: 'For simple decoration.', features: ['One styled focal area', 'Fresh or faux florals', 'Setup and teardown', 'One design consultation'], featured: false },
  { name: 'Premium', price: '$3,500', blurb: 'For complete event decoration.', features: ['Full venue styling', 'Custom stage or backdrop', 'Lighting design', 'Dedicated on-site coordinator', 'Two design consultations'], featured: true },
  { name: 'Luxury', price: 'From $8,000', blurb: 'For high-end customized decoration.', features: ['Bespoke concept and 3D mockups', 'Large floral installations', 'Custom fabrication', 'Full team on event day', 'Unlimited revisions'], featured: false },
]

// Admin WhatsApp number: country code + number, digits only (e.g. 919876543210). No +, spaces or dashes.
export const WHATSAPP_NUMBER = '916281854428'

export const CONTACT = {
  phone: '+91 83098 71076', email: 'madheshdecorationstudio@gmail.com', location: 'Chittoor, Andhra Pradesh, India',
}
