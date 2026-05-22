'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'
import { mainNav, siteConfig } from '@/lib/site'
import { ChevronRightIcon } from '@/components/ui/icons'


export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent py-4">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex min-h-[72px] items-center justify-between gap-5 rounded-full border border-[#02a5a2] bg-[rgba(255,255,255,0.3)] px-4 py-2 shadow-[0_18px_42px_rgba(24,50,42,0.08)] backdrop-blur-2xl lg:px-5">
          <Link href="/" className="group flex shrink-0 items-center" aria-label="Michele Tagliani home">
            <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/90 bg-white shadow-sm transition duration-300 group-hover:scale-[1.04]">
              <Image src="/images/michele-logo-nutrition.png" alt="Michele Tagliani logo" fill sizes="56px" className="object-contain" priority />
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-7 lg:flex xl:gap-9">
            {mainNav.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'text-sm font-semibold transition-colors duration-200 hover:text-[#02a4a3]',
                    active ? 'text-[#02a4a3]' : 'text-black'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <Link
            href={siteConfig.bookingUrl}
            className="ml-auto hidden items-center gap-2 rounded-full bg-[#02a5a2] px-6 py-3 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#018f8c] lg:inline-flex"
          >
            Book a discovery call
            <ChevronRightIcon className="h-3.5 w-3.5" />
          </Link>

          <button
            className="rounded-full border border-sage-200/80 bg-white/80 px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:text-[#02a4a3] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div id="mobile-navigation" className="mt-3 overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 px-5 py-5 shadow-[0_18px_44px_rgba(24,50,42,0.10)] backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx('text-base font-semibold transition-colors hover:text-[#02a4a3]', (pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`))) ? 'text-[#02a4a3]' : 'text-black')}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.bookingUrl}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#02a5a2] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#018f8c]"
            >
              Book a discovery call
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </Link>
          </nav>
          </div>
        </div>
      )}
    </header>
  )
}
