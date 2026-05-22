'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

type Slide = {
  src: string
  alt: string
  caption?: string
}

export function ImageCarousel({
  slides,
  className,
  interval = 5000,
  aspectClass = 'aspect-[4/5]'
}: {
  slides: Slide[]
  className?: string
  interval?: number
  aspectClass?: string
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [slides.length, interval])

  const active = slides[index]

  return (
    <div className={clsx('relative', className)}>
      <div className={clsx('group relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/70 shadow-card', aspectClass)}>
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#173027]/50 via-transparent to-white/20" />
        {active.caption && (
          <div className="absolute bottom-4 left-4 right-4 rounded-[1.4rem] border border-white/40 bg-white/80 px-4 py-3 backdrop-blur-sm">
            <p className="text-sm font-medium text-sage-800">{active.caption}</p>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(slideIndex)}
              aria-label={`Show slide ${slideIndex + 1}`}
              className={clsx(
                'h-2.5 rounded-full transition-all',
                slideIndex === index ? 'w-9 bg-[#02a5a2]' : 'w-2.5 bg-sage-300 hover:bg-[#02a5a2]/60'
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIndex((current) => (current - 1 + slides.length) % slides.length)}
            className="rounded-full border border-[#02a5a2]/35 bg-white px-4 py-2 text-sm font-semibold text-[#02a5a2] transition hover:-translate-y-0.5 hover:bg-[#02a5a2] hover:text-white"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => setIndex((current) => (current + 1) % slides.length)}
            className="rounded-full border border-[#02a5a2]/35 bg-white px-4 py-2 text-sm font-semibold text-[#02a5a2] transition hover:-translate-y-0.5 hover:bg-[#02a5a2] hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
