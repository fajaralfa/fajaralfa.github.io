import { defineContentConfig, defineCollection, z, } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    post: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    }),
    page: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    }),
  }
})
