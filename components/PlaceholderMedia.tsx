import clsx from 'clsx'

export function PlaceholderMedia({
  label = 'Image placeholder',
  ratio = 'aspect-[4/5]',
  className
}: {
  label?: string
  ratio?: string
  className?: string
}) {
  return (
    <div className={clsx('relative overflow-hidden rounded-[2rem] bg-sage-100 shadow-soft', ratio, className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_28%),radial-gradient(circle_at_70%_50%,rgba(184,132,107,0.18),transparent_25%),linear-gradient(135deg,#eef2e8,#cbd8c4)]" />
      <div className="absolute inset-x-8 bottom-8 rounded-3xl bg-white/70 p-5 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage-700">{label}</p>
        <p className="mt-2 text-sm text-sage-800">Replace from Sanity Media Library.</p>
      </div>
    </div>
  )
}

export function VideoPlaceholder({ label = 'Video placeholder' }: { label?: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-ink shadow-card">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,#203025,#73896c)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cream/90 text-3xl text-ink shadow-soft">▶</div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/75 p-4 text-sm text-ink backdrop-blur">
        {label} — add YouTube, Vimeo, Loom, or uploaded video in CMS.
      </div>
    </div>
  )
}
