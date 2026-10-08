import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import { NAV } from '../data/content'
import { scrollToHash } from '../hooks/useSmoothScroll'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => { e.preventDefault(); scrollToHash(href) }

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ${
          scrolled ? 'bg-ivory/80 py-2 shadow-[0_1px_0_rgba(23,23,23,0.08)] backdrop-blur-md' : 'bg-transparent py-5'
        }`}
      >
        <div className="wrap flex items-center justify-between gap-6">
          <Logo light={!scrolled} />
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={(e) => go(e, n.href)} className={`link-u text-sm font-medium ${scrolled ? 'text-charcoal' : 'text-white'}`}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" onClick={(e) => go(e, '#contact')} className={`btn hidden sm:inline-flex ${scrolled ? 'btn-dark' : 'btn-gold'} !min-h-11 !py-2`}>Get a Quote</a>
            <button
              type="button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu"
              className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${scrolled ? 'text-charcoal' : 'text-white'}`}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </motion.header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
