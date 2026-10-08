import { Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import Home, { Footer } from './pages/Home'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import Cursor from './components/Cursor'
import useSmoothScroll from './hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll()
  return (
    // reducedMotion="user" disables transform/layout animations when the OS asks for less motion
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-charcoal">Skip to content</a>
      <Loader />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <Home />
      <Suspense fallback={null}><Footer /></Suspense>
    </MotionConfig>
  )
}
