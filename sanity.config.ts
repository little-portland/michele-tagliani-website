import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'abc12345'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'michele_tagliani_website',
  title: 'Michele Tagliani Website',
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes
  },
  plugins: [structureTool(), visionTool()]
})
