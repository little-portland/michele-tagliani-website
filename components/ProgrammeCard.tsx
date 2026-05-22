import Link from 'next/link'
import { Programme } from '@/lib/content'
import { CheckIcon } from '@/components/ui/icons'
import { siteConfig } from '@/lib/site'

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-lg leading-8 text-black/82">
          <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#02a5a2]/10 text-[#02a5a2]">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ProgrammeCard({ programme }: { programme: Programme }) {
  const href = `${siteConfig.bookingUrl}?programme=${slugify(programme.name)}`

  return (
    <Link
      href={href}
      id={slugify(programme.name)}
      className="group block scroll-mt-32 rounded-[2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02a5a2] focus-visible:ring-offset-4"
      aria-label={`Discuss the ${programme.name} programme`}
    >
      <article className="overflow-hidden rounded-[2rem] border border-[#02a5a2]/35 bg-[linear-gradient(135deg,#d6ece0_0%,#edf5f1_44%,#ffffff_100%)] shadow-[0_22px_60px_rgba(2,165,162,0.11)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#02a5a2] group-hover:shadow-[0_28px_76px_rgba(2,165,162,0.16)]">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-full border border-[#02a5a2]/25 bg-white/82 px-3 py-1 text-xs font-bold uppercase tracking-[0.26em] text-[#02a5a2] shadow-[0_8px_20px_rgba(2,165,162,0.08)] backdrop-blur">
              {programme.eyebrow}
            </p>
            {programme.featured && (
              <span className="inline-flex rounded-full bg-[#02a5a2] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_20px_rgba(2,165,162,0.16)]">
                Most popular choice
              </span>
            )}
          </div>

          <h3 className="mt-4 font-serif text-[2.2rem] font-normal leading-none text-black sm:text-[2.55rem]">{programme.name}</h3>
          <p className="mt-3 font-serif text-[1.35rem] italic leading-snug text-black/58 sm:text-[1.55rem]">{programme.subtitle}</p>

          {programme.detail.length > 0 && (
            <div className="mt-6 space-y-4 text-lg leading-8 text-black/82">
              {programme.detail.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}

          <div className="mt-6 border-t border-[#02a5a2]/18 pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55">Format</p>
            <p className="mt-2 text-lg leading-8 text-black/82">{programme.cadence}</p>
            <p className="mt-3 font-serif text-[2rem] leading-none text-[#053f3d]">{programme.price}</p>
          </div>

          <div className="mt-7 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#02a5a2]">What&apos;s included</p>
              <DetailList items={programme.includes} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#02a5a2]">This programme is right for you if</p>
              <DetailList items={programme.bestFor} />
            </div>
          </div>

          <div className="mt-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#02a5a2]/30 bg-white px-5 py-3 text-sm font-semibold text-[#02a5a2] shadow-[0_10px_26px_rgba(2,165,162,0.08)] transition duration-300 group-hover:border-[#02a5a2] group-hover:bg-[#02a5a2] group-hover:text-white">
              <span>Discuss this programme</span>
              <span aria-hidden="true">›</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
