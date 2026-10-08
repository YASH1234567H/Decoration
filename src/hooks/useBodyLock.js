import { useEffect } from 'react'

// Prevents background scrolling (native + Lenis) while a modal/menu is open.
export default function useBodyLock(locked) {
  useEffect(() => {
    if (!locked) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.lenis?.stop()
    return () => {
      document.body.style.overflow = prev
      window.lenis?.start()
    }
  }, [locked])
}
