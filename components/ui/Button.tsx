import Link from 'next/link'
import clsx from 'clsx'
import { ChevronRightIcon } from './icons'

export function Button({
  href,
  children,
  variant = 'primary',
  className
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#02a5a2] focus:ring-offset-2',
        variant === 'primary' && 'bg-[#02a5a2] text-white shadow-[0_14px_32px_rgba(2,165,162,0.24)] hover:-translate-y-0.5 hover:bg-[#018f8c] hover:shadow-[0_18px_38px_rgba(2,165,162,0.30)]',
        variant === 'secondary' && 'border border-[#02a5a2]/55 bg-white text-[#02a5a2] shadow-[0_10px_24px_rgba(2,165,162,0.10)] hover:-translate-y-0.5 hover:bg-[#02a5a2] hover:text-white',
        variant === 'ghost' && 'text-[#02a5a2] underline-offset-4 hover:underline',
        className
      )}
    >
      {children}
      {variant !== 'ghost' && <ChevronRightIcon className="h-3.5 w-3.5" />}
    </Link>
  )
}
