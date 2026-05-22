import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'name', title: 'Client Name', type: 'string' }),
    defineField({ name: 'detail', title: 'Client Detail', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['ADHD', 'Hormones', 'Gut Health', 'Children & Families', 'Programmes'] } }),
    defineField({ name: 'image', title: 'Optional Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'approved', title: 'Approved to publish', type: 'boolean', initialValue: false })
  ]
})
