import { motion } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1]

// Viewport-triggered fade-up. Reduced motion is handled globally by <MotionConfig reducedMotion="user">.
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </Tag>
  )
}
