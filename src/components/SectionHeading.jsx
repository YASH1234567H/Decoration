import Reveal from './Reveal'

export default function SectionHeading({ id, title, text, align = 'left', light = false, className = '' }) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : 'items-start'
  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignCls} ${className}`}>
      <Reveal as="h2" className={`h-section ${light ? 'text-white' : 'text-charcoal'}`}>
        <span id={id}>{title}</span>
      </Reveal>
      {text && (
        <Reveal delay={0.1} className={`max-w-xl text-base leading-relaxed ${light ? 'text-white/80' : 'text-charcoal/70'}`}>
          {text}
        </Reveal>
      )}
    </div>
  )
}
