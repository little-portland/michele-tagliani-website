import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { BlogCard } from '@/components/BlogCard'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { ChevronRightIcon } from '@/components/ui/icons'
import { getBlogPost, getBlogPosts, formatDate, isPlaceholderBody } from '@/lib/blog'
import { urlFor } from '@/sanity/lib/image'
import { ChevronRightIcon } from "@/components/ui/icons";
type BlogArticlePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) return { title: 'Article | Michele Tagliani' }

  return {
    title: post.seoTitle || `${post.title} | Michele Tagliani`,
    description: post.seoDescription || post.excerpt
  }
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset) return null
      return (
        <div className="my-10 overflow-hidden rounded-[1.8rem] border border-[#02a5a2]/20 bg-sage-50">
          <Image src={urlFor(value).width(1200).height(760).fit('crop').url()} alt={value.alt || ''} width={1200} height={760} className="h-auto w-full object-cover" />
        </div>
      )
    }
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => <h2>{children}</h2>,
    h3: ({ children }: { children?: React.ReactNode }) => <h3>{children}</h3>,
    normal: ({ children }: { children?: React.ReactNode }) => <p>{children}</p>
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => <ul className="article-check-list">{children}</ul>,
    number: ({ children }: { children?: React.ReactNode }) => <ol className="article-check-list article-number-list">{children}</ol>
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => <li className="article-check-list-item">{children}</li>,
    number: ({ children }: { children?: React.ReactNode }) => <li className="article-check-list-item">{children}</li>
  }
}

function ArticleBody({ body }: { body: any[] | undefined }) {
  if (!body?.length) {
    return <p>This article content can be edited in Sanity Studio.</p>
  }

  if (isPlaceholderBody(body)) {
    return (
      <>
        {body.map((block, index) => {
          if (block.type === 'heading') return <h2 key={`${block.text}-${index}`}>{block.text}</h2>
          if (block.type === 'list') {
            return (
              <ul key={`list-${index}`} className="article-check-list">
                {block.items.map((item) => <li key={item} className="article-check-list-item">{item}</li>)}
              </ul>
            )
          }
          return <p key={`${block.text}-${index}`}>{block.text}</p>
        })}
      </>
    )
  }

  return <PortableText value={body} components={portableTextComponents} />
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params
  const [post, posts] = await Promise.all([getBlogPost(slug), getBlogPosts()])

  if (!post) notFound()

  const currentIndex = posts.findIndex((item) => item.slug === post.slug)
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null
  const nextPost = currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  const relatedPosts = posts
    .filter((item) => item.slug !== post.slug && item.category === post.category)
    .concat(posts.filter((item) => item.slug !== post.slug && item.category !== post.category))
    .slice(0, 3)

  return (
    <>
      <Section className="top-gradient-soft !pb-4">
        <Reveal>
        <article className="w-full text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#02a5a2]">
            <span>{post.category || 'Article'}</span>
            <span className="h-1 w-1 rounded-full bg-[#02a5a2]/60" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <h1 className="mt-5 font-serif text-[2.8rem] font-normal leading-tight text-black sm:text-[3rem] lg:text-[3.4rem]">{post.title}</h1>
          <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-[#02a5a2]/15 via-[#02a5a2]/70 to-[#02a5a2]/15" />
          <p className="mt-7 text-lg leading-8 text-black/82">{post.excerpt}</p>
        </article>
        </Reveal>
      </Section>

      <Section className="bg-white !pt-4">
        <Reveal>
        <div className="w-full">
          <div className="relative mb-12 overflow-hidden rounded-[2rem] border border-[#02a5a2]/20 bg-[linear-gradient(135deg,#d6ece0_0%,#edf5f1_52%,#ffffff_100%)] shadow-[0_18px_48px_rgba(2,165,162,0.08)]">
            {post.mainImageUrl ? (
              <div className="relative aspect-[16/9]">
                <Image src={post.mainImageUrl} alt={post.title} fill sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" priority />
              </div>
            ) : (
              <div className="flex min-h-[360px] flex-col items-center justify-center px-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/85 shadow-[0_14px_32px_rgba(2,165,162,0.12)]">
                  <span className="font-serif text-4xl text-[#02a5a2]">M</span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-[#02a5a2]">Article thumbnail placeholder</p>
              </div>
            )}
          </div>

          <div className="prose-site max-w-none">
            <ArticleBody body={post.body} />
          </div>
        </div>
        </Reveal>
      </Section>

      <Section className="bg-sage-50">
        <Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {previousPost ? (
            <Link href={`/blog/${previousPost.slug}`} className="group rounded-[2rem] border border-[#02a5a2]/25 bg-white p-7 shadow-[0_14px_40px_rgba(24,50,42,0.06)] transition hover:-translate-y-1 hover:border-[#02a5a2]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#02a5a2]">Previous article</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-black">{previousPost.title}</h2>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#02a5a2]"><ChevronRightIcon /> Read previous </span>
            </Link>
          ) : <div />}

          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`} className="group rounded-[2rem] border border-[#02a5a2]/25 bg-white p-7 text-left shadow-[0_14px_40px_rgba(24,50,42,0.06)] transition hover:-translate-y-1 hover:border-[#02a5a2] md:text-right">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#02a5a2]">Next article</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-black">{nextPost.title}</h2>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#02a5a2]">Read next <ChevronRightIcon /></span>
            </Link>
          ) : <div />}
        </div>
        </Reveal>
      </Section>

      {relatedPosts.length > 0 && (
        <Section className="bg-white">
          <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">Related reading</p>
            <h2 className="mt-4 font-serif text-[2.5rem] font-normal leading-tight text-black sm:text-[3rem]">You might also like</h2>
            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relatedPosts.map((item) => <BlogCard key={item.slug} post={item} />)}
          </div>
          </Reveal>
        </Section>
      )}
    </>
  )
}
