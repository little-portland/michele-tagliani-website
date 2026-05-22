import clsx from 'clsx'

export function YouTubeEmbed({
  title,
  youtubeId,
  description,
  className
}: {
  title: string
  youtubeId: string
  description?: string
  className?: string
}) {
  return (
    <div className={clsx('overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br from-sage-800 via-sage-700 to-sage-600 p-3 shadow-card', className)}>
      <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-black/15">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="px-3 pb-3 pt-4 text-cream">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-100/80">Temporary video block</p>
        <h3 className="mt-2 font-serif text-3xl leading-tight">{title}</h3>
        {description && <p className="mt-3 max-w-2xl text-sm leading-7 text-cream/80">{description}</p>}
      </div>
    </div>
  )
}
