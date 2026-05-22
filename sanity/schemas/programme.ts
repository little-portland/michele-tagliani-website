import { defineField, defineType } from 'sanity'

export const programme = defineType({
  name: 'programme',
  title: 'Programmes',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Programme Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 } }),
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text' }),
    defineField({ name: 'cadence', title: 'Cadence', type: 'string' }),
    defineField({ name: 'price', title: 'Price', type: 'string' }),
    defineField({ name: 'featured', title: 'Featured / Most Popular', type: 'boolean', initialValue: false }),
    defineField({ name: 'includes', title: 'What is included', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'bestFor', title: 'Right for you if', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' })
  ],
  orderings: [{ title: 'Sort order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }]
})
