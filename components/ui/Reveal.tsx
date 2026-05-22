'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

export function Reveal({
  children,
  className,
  delay = 0,
  once = true
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={clsx('reveal', visible && 'reveal-in', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
