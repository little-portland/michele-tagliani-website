import { defineArrayMember, defineField, defineType } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text' }),
    defineField({ name: 'hideFromNavigation', title: 'Hide from Navigation', type: 'boolean', initialValue: false }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'heroSection',
          title: 'Hero Section',
          type: 'object',
          fields: [
            defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'body', title: 'Body', type: 'text' }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'primaryCtaLabel', title: 'Primary CTA Label', type: 'string' }),
            defineField({ name: 'primaryCtaUrl', title: 'Primary CTA URL', type: 'string' })
          ]
        }),
        defineArrayMember({
          name: 'textImageSection',
          title: 'Text + Image Section',
          type: 'object',
          fields: [
            defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'imageSide', title: 'Image Side', type: 'string', options: { list: ['left', 'right'] }, initialValue: 'right' })
          ]
        }),
        defineArrayMember({
          name: 'cardGridSection',
          title: 'Card Grid Section',
          type: 'object',
          fields: [
            defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'intro', title: 'Intro', type: 'text' }),
            defineField({
              name: 'cards',
              title: 'Cards',
              type: 'array',
              of: [{ type: 'object', fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'text', title: 'Text', type: 'text' }),
                defineField({ name: 'icon', title: 'Icon / Emoji', type: 'string' })
              ] }]
            })
          ]
        }),
        defineArrayMember({
          name: 'ctaSection',
          title: 'CTA Section',
          type: 'object',
          fields: [
            defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'body', title: 'Body', type: 'text' }),
            defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
            defineField({ name: 'ctaUrl', title: 'CTA URL', type: 'string' })
          ]
        })
      ]
    })
  ],
  preview: { select: { title: 'title', subtitle: 'slug.current' } }
})
