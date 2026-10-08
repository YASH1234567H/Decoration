import { useEffect, useRef } from 'react'
import useFinePointer from '../hooks/useFinePointer'

// Desktop-only soft cursor ring. Uses transform only; never rendered on touch devices.
export default function Cursor() {
  const fine = useFinePointer()
  const ref = useRef(null)
  useEffect(() => {
    if (!fine) return
    const el = ref.current
    let x = 0, y = 0, tx = 0, ty = 0, raf
    const move = (e) => { tx = e.clientX; ty = e.clientY }
    const over = (e) => el.classList.toggle('is-hover', !!e.target.closest('a,button,[role="button"],input,textarea,select'))
    const loop = () => { x += (tx - x) * 0.18; y += (ty - y) * 0.18; el.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`; raf = requestAnimationFrame(loop) }
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    loop()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over) }
  }, [fine])
  if (!fine) return null
  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 rounded-full border border-gold/80 transition-[scale,background-color] duration-300 [&.is-hover]:scale-150 [&.is-hover]:bg-gold/20" />
  )
}
