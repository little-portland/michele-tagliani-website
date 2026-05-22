import { createClient } from 'next-sanity'

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

export const client = createClient({
  projectId: projectId || 'abc12345',
  dataset,
  apiVersion,
  useCdn: true
})

export const hasSanityConfig = Boolean(projectId && dataset)
