import { defineField, defineType } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'answer', title: 'Answer', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' })
  ]
})
