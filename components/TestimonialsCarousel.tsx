'use client'

import { useEffect, useState } from 'react'

type Testimonial = {
  quote: string
  name: string
  detail: string
}

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [items.length])

  if (!items.length) return null

  const goTo = (index: number) => setActiveIndex((index + items.length) % items.length)

  return (
    <div className="mt-10 w-full text-center">
      <div className="relative min-h-[16rem] sm:min-h-[15rem]">
        {items.map((item, index) => {
          const isActive = index === activeIndex
          return (
            <article
              key={item.quote}
              aria-hidden={!isActive}
              className={`absolute inset-0 rounded-[2rem] bg-mist/90 p-7 shadow-soft transition-all duration-700 ease-out sm:p-10 ${
                isActive ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-4 opacity-0'
              }`}
            >
              <blockquote className="w-full">
                <p className="font-serif text-[1.35rem] leading-snug text-ink sm:text-[1.65rem] sm:leading-snug">
                  “{item.quote}”
                </p>
                <footer className="mt-6 text-sm font-semibold text-sage-700 sm:text-base">
                  — {item.name}, {item.detail}
                </footer>
              </blockquote>
            </article>
          )
        })}
      </div>

      {items.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#02a5a2]/20 bg-white text-[#02a5a2] shadow-[0_8px_22px_rgba(2,165,162,0.10)] transition hover:border-[#02a5a2] hover:bg-[#02a5a2] hover:text-white"
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="flex items-center justify-center gap-2">
            {items.map((item, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={item.quote}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${isActive ? 'w-8 bg-[#02a5a2]' : 'w-2.5 bg-[#02a5a2]/30 hover:bg-[#02a5a2]/55'}`}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-pressed={isActive}
                />
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#02a5a2]/20 bg-white text-[#02a5a2] shadow-[0_8px_22px_rgba(2,165,162,0.10)] transition hover:border-[#02a5a2] hover:bg-[#02a5a2] hover:text-white"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}
