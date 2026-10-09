import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'
import Signature from '../components/Signature'
import About from './About'
import Services from './Services'
import ExpandSection from '../components/ExpandSection'

// Everything below the pinned scroll section is code-split, so it cannot shift the pin's measurements.
const GalleryPage = lazy(() => import('./GalleryPage'))
const Packages = lazy(() => import('./Packages'))
const CTA = lazy(() => import('../components/CTA'))
const Contact = lazy(() => import('./Contact'))
const Footer = lazy(() => import('../components/Footer'))

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Signature />
      <About />
      <Services />
      <ExpandSection />
      <Suspense fallback={<div style={{ minHeight: '100svh' }} aria-hidden="true" />}>
        <GalleryPage />
        <Packages />
        <CTA />
        <Contact />
      </Suspense>
    </main>
  )
}

export { Footer }
