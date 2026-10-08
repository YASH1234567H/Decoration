import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { NAV } from '../data/content'
import useBodyLock from '../hooks/useBodyLock'
import { scrollToHash } from '../hooks/useSmoothScroll'

export default function MobileMenu({ open, onClose }) {
  const closeRef = useRef(null)
  useBodyLock(open)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const go = (e, href) => {
    e.preventDefault(); onClose()
    setTimeout(() => scrollToHash(href), 350)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu"
          initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[80] flex min-h-svh flex-col bg-charcoal text-ivory"
        >
          <div className="wrap flex items-center justify-between py-5">
            <span className="font-serif text-2xl">Madhesh <span className="text-gold">Decoration Studio</span></span>
            <button ref={closeRef} type="button" onClick={onClose} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full border border-white/30">
              <X size={22} />
            </button>
          </div>
          <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-center overflow-y-auto pb-10">
            <ul className="flex flex-col gap-1">
              {NAV.map((n, i) => (
                <motion.li key={n.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.06, duration: 0.5 }}>
                  <a href={n.href} onClick={(e) => go(e, n.href)} className="block py-2 font-serif text-[clamp(2rem,9vw,3.2rem)] leading-tight hover:text-gold">{n.label}</a>
                </motion.li>
              ))}
            </ul>
            <a href="#contact" onClick={(e) => go(e, '#contact')} className="btn btn-gold mt-8 w-full sm:w-auto sm:self-start">Get a Quote</a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
