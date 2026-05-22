import { BlogIndex } from '@/components/BlogIndex'
import { Section, SectionHeading } from '@/components/ui/Section'
import { getBlogPosts } from '@/lib/blog'

export const metadata = { title: 'Blog | Michele Tagliani' }

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <>
      <Section className="top-gradient-soft">
        <SectionHeading eyebrow="Blog" title="Articles, notes and guidance for ADHD brains, hormones and family life." align="center">
          <p>Browse the latest articles and notes.</p>
        </SectionHeading>
      </Section>

      <Section className="bg-sage-100/70">
        <BlogIndex posts={posts} />
      </Section>
    </>
  )
}
