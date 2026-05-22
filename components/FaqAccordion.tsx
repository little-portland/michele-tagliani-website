'use client'

import { useState } from 'react'
import clsx from 'clsx'
import type { Faq } from '@/lib/content'

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mt-12 w-full space-y-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-[2rem] border border-[#02a5a2]/35 bg-[linear-gradient(135deg,#d6ece0_0%,#edf5f1_44%,#ffffff_100%)] shadow-[0_18px_52px_rgba(2,165,162,0.10)] transition duration-300"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center gap-4 px-5 py-5 text-left sm:gap-5 sm:px-7 sm:py-6"
              aria-expanded={isOpen}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#02a5a2] text-2xl font-light leading-none text-white shadow-[0_12px_28px_rgba(2,165,162,0.20)]">
                {isOpen ? '−' : '+'}
              </span>
              <span className="font-serif text-[1.45rem] leading-tight text-black sm:text-[1.8rem]">{faq.question}</span>
            </button>
            <div className={clsx('grid transition-[grid-template-rows] duration-500 ease-in-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
              <div className="overflow-hidden">
                <div className="px-5 pb-6 pl-[5.75rem] text-lg leading-8 text-black/82 sm:px-7 sm:pb-7 sm:pl-[6.8rem]">
                  <div className="space-y-4 border-t border-[#02a5a2]/20 pt-5">
                    {faq.answer.map((segment, segmentIndex) => {
                      if (segment.type === 'ul') {
                        return (
                          <ul key={segmentIndex} className="space-y-2">
                            {segment.items.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#02a5a2]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )
                      }

                      return <p key={segmentIndex}>{segment.text}</p>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
