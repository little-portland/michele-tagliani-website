import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import type { BlogPost } from '@/lib/blog'
import { ChevronRightIcon } from '@/components/ui/icons'

function formatArticleDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

function BlogThumbnail({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <div className={clsx('relative overflow-hidden rounded-[1.75rem] border border-[#02a5a2]/20 bg-[linear-gradient(135deg,#d6ece0_0%,#edf5f1_52%,#ffffff_100%)]', featured ? 'min-h-[320px]' : 'aspect-[16/10]')}>
      {post.mainImageUrl ? (
        <Image src={post.mainImageUrl} alt={post.title} fill sizes={featured ? '(min-width: 1024px) 520px, 100vw' : '(min-width: 1024px) 360px, 100vw'} className="object-cover transition duration-500 group-hover:scale-[1.035]" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 shadow-[0_14px_32px_rgba(2,165,162,0.12)]">
            <span className="font-serif text-3xl text-[#02a5a2]">M</span>
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-[#02a5a2]">Thumbnail placeholder</p>
        </div>
      )}
    </div>
  )
}

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02a5a2] focus-visible:ring-offset-4">
      <article className={clsx('h-full overflow-hidden rounded-[2rem] border border-[#02a5a2]/35 bg-[linear-gradient(135deg,#d6ece0_0%,#edf5f1_44%,#ffffff_100%)] shadow-[0_22px_60px_rgba(2,165,162,0.11)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#02a5a2] group-hover:shadow-[0_28px_76px_rgba(2,165,162,0.16)]', featured ? 'grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10' : 'flex flex-col p-5 sm:p-6')}>
        <BlogThumbnail post={post} featured={featured} />
        <div className={clsx(featured ? '' : 'mt-5 flex flex-1 flex-col')}>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#02a5a2]">
            <span>{post.category || 'Article'}</span>
            <span className="h-1 w-1 rounded-full bg-[#02a5a2]/60" />
            <span>{formatArticleDate(post.publishedAt)}</span>
          </div>
          <h2 className={clsx('mt-4 font-serif font-normal leading-tight text-black', featured ? 'text-[2.4rem] sm:text-[3rem]' : 'blog-card-title text-[1.72rem] sm:text-[1.95rem]')}>{post.title}</h2>
          <p className={clsx('text-black/82', featured ? 'mt-4 text-lg leading-8' : 'blog-card-excerpt mt-4 text-[1rem] leading-7')}>{post.excerpt}</p>
          <span className={clsx('inline-flex items-center gap-2 rounded-full border border-[#02a5a2]/30 bg-white px-5 py-3 text-sm font-semibold text-[#02a5a2] shadow-[0_10px_26px_rgba(2,165,162,0.08)] transition duration-300 group-hover:border-[#02a5a2] group-hover:bg-[#02a5a2] group-hover:text-white', featured ? 'mt-5' : 'mt-5 self-start')}>
            Read more
            <ChevronRightIcon className="h-3.5 w-3.5" />
          </span>
        </div>
      </article>
    </Link>
  )
}
