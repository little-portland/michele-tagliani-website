import { defineField, defineType } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'mainImage', title: 'Thumbnail / Main Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text' })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage'
    }
  }
})
