import clsx from 'clsx'
import { Container } from './Container'
import { Reveal } from './Reveal'

export function Section({
  children,
  className,
  containerClassName
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) {
  const isTopGradient = className?.includes('top-gradient')

  return (
    <section className={clsx('section-panel py-20 sm:py-24', isTopGradient && 'pt-32 sm:pt-36 lg:pt-40', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'left'
}: {
  eyebrow?: string
  title: string
  children?: React.ReactNode
  align?: 'left' | 'center'
}) {
  return (
    <Reveal>
      <div className={clsx('w-full', align === 'center' && 'text-center')}>
        {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sage-600">{eyebrow}</p>}
        <h2 className="font-serif text-[2.5rem] leading-tight text-ink sm:text-[3rem]">{title}</h2>
        <div className={clsx('mt-5 h-px w-24 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15', align === 'center' && 'mx-auto')} />
        {children && <div className="mt-5 text-lg leading-8 text-sage-800">{children}</div>}
      </div>
    </Reveal>
  )
}
