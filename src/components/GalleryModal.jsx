import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import useBodyLock from '../hooks/useBodyLock'

export default function GalleryModal({ items, index, onClose, onChange }) {
  const open = index !== null
  const closeRef = useRef(null)
  const lastFocus = useRef(null)
  useBodyLock(open)

  const step = useCallback((d) => onChange((index + d + items.length) % items.length), [index, items.length, onChange])

  useEffect(() => {
    if (!open) return
    lastFocus.current = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); lastFocus.current?.focus?.() }
  }, [open, onClose, step])

  const item = open ? items[index] : null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog" aria-modal="true" aria-label={`${item.title}, ${item.category}`} data-lenis-prevent
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[90] flex flex-col bg-charcoal/95 p-4 text-white backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
            <p className="text-sm text-white/70" aria-live="polite">{index + 1} / {items.length}</p>
            <button ref={closeRef} type="button" onClick={onClose} aria-label="Close gallery" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 hover:bg-white/10"><X size={22} /></button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center py-3">
            <button type="button" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous image" className="absolute left-0 z-10 grid h-11 w-11 place-items-center rounded-full bg-charcoal/60 hover:bg-gold hover:text-charcoal sm:left-2"><ChevronLeft size={22} /></button>
            <AnimatePresence mode="wait">
              <motion.img
                key={item.image} src={item.image} alt={item.alt}
                initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.25}
                onDragEnd={(_, i) => { if (i.offset.x < -70) step(1); else if (i.offset.x > 70) step(-1) }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full max-w-full cursor-grab select-none object-contain active:cursor-grabbing"
                style={{ touchAction: 'pan-y' }} draggable={false}
              />
            </AnimatePresence>
            <button type="button" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next image" className="absolute right-0 z-10 grid h-11 w-11 place-items-center rounded-full bg-charcoal/60 hover:bg-gold hover:text-charcoal sm:right-2"><ChevronRight size={22} /></button>
          </div>

          <div className="text-center" onClick={(e) => e.stopPropagation()}>
            <p className="font-serif text-2xl">{item.title}</p>
            <p className="text-sm text-beige">{item.category}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
