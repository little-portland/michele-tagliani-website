import clsx from 'clsx'
import { CheckIcon } from './icons'

export function CheckList({
  items,
  className,
  columns = true
}: {
  items: string[]
  className?: string
  columns?: boolean
}) {
  return (
    <ul className={clsx('grid gap-3', columns && 'sm:grid-cols-2', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-[1.35rem] border border-[#02a5a2]/20 bg-white px-5 py-4 text-base leading-7 text-black shadow-[0_10px_24px_rgba(2,165,162,0.08)]">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#02a5a2]/10 text-[#02a5a2]">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
