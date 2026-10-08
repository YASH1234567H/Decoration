import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BRAND } from '../data/content'

// Brief overlay (~1.4s). The site renders underneath, so nothing is blocked.
export default function Loader() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400)
    return () => clearTimeout(t)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-charcoal px-6 text-center"
          exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: 'easeInOut' }}
          role="status" aria-label="Loading"
        >
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-serif text-4xl text-ivory sm:text-5xl">
              {BRAND}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="label mt-4 text-gold">
              Creating beautiful spaces
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
