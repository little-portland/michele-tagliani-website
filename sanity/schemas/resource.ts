import { defineField, defineType } from 'sanity'

export const resource = defineType({
  name: 'resource',
  title: 'Resources / Lead Magnets',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'type', title: 'Type', type: 'string', options: { list: ['Lead magnet', 'Guide', 'Checklist', 'Meal kit', 'Video'] } }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'downloadFile', title: 'Download File', type: 'file' }),
    defineField({ name: 'emailFormUrl', title: 'Email Form URL', type: 'url' })
  ]
})
