'use client'

import { useMemo, useState } from 'react'
import type { BlogPost } from '@/lib/blog'
import { BlogCard } from '@/components/BlogCard'
import { Reveal } from '@/components/ui/Reveal'

const INITIAL_VISIBLE_ARTICLES = 6
const ARTICLES_PER_LOAD = 3

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ARTICLES)
  const [featuredPost, ...otherPosts] = posts

  const visiblePosts = useMemo(() => otherPosts.slice(0, visibleCount), [otherPosts, visibleCount])
  const hasMorePosts = visibleCount < otherPosts.length

  return (
    <>
      {featuredPost && (
        <Reveal>
          <BlogCard post={featuredPost} featured />
        </Reveal>
      )}

      {visiblePosts.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map((post, index) => (
            <Reveal key={post.slug} delay={70 * (index % ARTICLES_PER_LOAD)}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      )}

      {hasMorePosts && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((current) => current + ARTICLES_PER_LOAD)}
            className="inline-flex items-center justify-center rounded-full border border-[#02a5a2]/55 bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-[#02a5a2] shadow-[0_10px_24px_rgba(2,165,162,0.10)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#02a5a2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#02a5a2] focus:ring-offset-2"
          >
            Load more articles
          </button>
        </div>
      )}
    </>
  )
}
