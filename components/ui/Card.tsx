import clsx from 'clsx'

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        'hover-lift rounded-[2rem] border border-sage-200/80 bg-white/95 p-7 shadow-[0_14px_40px_rgba(24,50,42,0.08)] backdrop-blur-sm',
        className
      )}
    >
      {children}
    </div>
  )
}
