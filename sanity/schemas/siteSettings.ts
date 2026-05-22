import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Website Title', type: 'string' }),
    defineField({ name: 'description', title: 'SEO Description', type: 'text' }),
    defineField({ name: 'bookingUrl', title: 'Booking URL', type: 'url' }),
    defineField({ name: 'contactEmail', title: 'Contact Email', type: 'string' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'clientPortalUrl', title: 'Client Portal URL', type: 'url' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } })
  ]
})
