import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BRAND } from '../data/content'

/**
 * CurtainIntro — full-screen curtain-opening entrance animation.
 *
 * Timeline (all times are from page load):
 *   0 ms     – Both panels cover the full viewport; brand text fades in.
 *   550 ms   – Brand text fades out.
 *   700 ms   – Curtain panels begin sliding outward.
 *   2100 ms  – Panels fully off-screen.
 *   2300 ms  – Component unmounts (after framer exit transition completes).
 *
 * The Hero's own entrance animations (Hero.jsx: D = 1.0 s) begin
 * underneath the curtain, so the hero is fully rendered and mid-reveal
 * as the panels slide away — creating a cinematic "peek-through" feel.
 *
 * Reduced-motion: MotionConfig reducedMotion="user" in App.jsx suppresses
 * all transforms automatically, giving an instant opacity fade instead.
 */

// Premium cubic easing: starts fast, decelerates into place
const CURTAIN_EASE = [0.76, 0, 0.24, 1]

// How long each curtain panel takes to slide off (ms → seconds for framer)
const SLIDE_DURATION = 1.4

// Delay before the panels start opening (seconds)
const SLIDE_DELAY = 0.7

// Total time before the parent wrapper unmounts (ms)
const UNMOUNT_AFTER = 2600

export default function Loader() {
  const [show, setShow] = useState(true)
  const [open, setOpen] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    // Start the curtain open sequence
    const openTimer = setTimeout(() => setOpen(true), SLIDE_DELAY * 1000)

    // Unmount the whole overlay after animation completes
    timerRef.current = setTimeout(() => setShow(false), UNMOUNT_AFTER)

    return () => {
      clearTimeout(openTimer)
      clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="curtain-root"
          // Safety: ensure the wrapper itself fades away even if panels glitch
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            display: 'flex',
            pointerEvents: open ? 'none' : 'all',
            // Prevent any background bleed-through during the opening
            overflow: 'hidden',
          }}
        >
          {/* ── Left curtain panel ── */}
          <CurtainPanel side="left" open={open} />

          {/* ── Right curtain panel ── */}
          <CurtainPanel side="right" open={open} />

          {/* ── Brand badge (centered, fades out before curtain opens) ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 0 : 1 }}
            transition={
              open
                ? { duration: 0.35, ease: 'easeIn' }
                : { duration: 0.55, delay: 0.1, ease: 'easeOut' }
            }
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              placeItems: 'center',
              pointerEvents: 'none',
              // Sits above both panels
              zIndex: 1,
            }}
          >
            <div style={{ textAlign: 'center' }}>
              {/* Decorative divider line above */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: open ? 0 : 1 }}
                transition={{ duration: 0.6, delay: 0.15, ease: CURTAIN_EASE }}
                style={{
                  height: '1px',
                  background: '#B88A5A',
                  marginBottom: '1.25rem',
                  transformOrigin: 'center',
                }}
              />

              {/* Brand name */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: 'clamp(1.6rem, 5vw, 3rem)',
                  fontWeight: 500,
                  color: '#F8F5F0',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                  textWrap: 'balance',
                  padding: '0 1rem',
                }}
              >
                {BRAND}
              </motion.p>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#B88A5A',
                  marginTop: '1rem',
                }}
              >
                Creating beautiful spaces
              </motion.p>

              {/* Decorative divider line below */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: open ? 0 : 1 }}
                transition={{ duration: 0.6, delay: 0.15, ease: CURTAIN_EASE }}
                style={{
                  height: '1px',
                  background: '#B88A5A',
                  marginTop: '1.25rem',
                  transformOrigin: 'center',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * Individual curtain panel — slides to its respective side when `open` is true.
 */
function CurtainPanel({ side, open }) {
  const isLeft = side === 'left'

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: open ? (isLeft ? '-100%' : '100%') : 0 }}
      transition={{
        duration: SLIDE_DURATION,
        ease: CURTAIN_EASE,
        // Right panel lags by a tiny amount for a more organic, hand-drawn feel
        delay: open ? (isLeft ? 0 : 0.04) : 0,
      }}
      style={{
        flex: '0 0 50%',
        width: '50%',
        // Use 100dvh with fallback for mobile address bars
        height: '100vh',
        // Gradient: rich charcoal with subtle warm-tone sheen toward center
        background: isLeft
          ? 'linear-gradient(to right, #0f0f0f 0%, #171717 65%, #1e1a17 100%)'
          : 'linear-gradient(to left,  #0f0f0f 0%, #171717 65%, #1e1a17 100%)',
        position: 'relative',
        overflow: 'hidden',
        // Subtle inner edge shadow to give the curtain panels depth
        boxShadow: isLeft
          ? 'inset -6px 0 24px rgba(0,0,0,0.45)'
          : 'inset  6px 0 24px rgba(0,0,0,0.45)',
        willChange: 'transform',
      }}
    >
      {/* Subtle vertical sheen stripe — gives a fabric-like highlight */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(184,138,90,0.18) 50%, transparent 100%)',
          [isLeft ? 'right' : 'left']: 0,
        }}
      />

      {/* Very subtle noise/texture overlay to avoid flat look */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(90deg, transparent 0px, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  )
}
