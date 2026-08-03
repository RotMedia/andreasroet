import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['tutorial', 'article']).default('article'),
    topic: z.string().optional(),
    tags: z.array(z.string()).default([]),
    relatedProduct: z.string().optional(),  // product id from products.json       // e.g. Sound Design, Mixing, Workflow
    youtube: z.string().optional(),     // YouTube video ID for tutorials
    duration: z.string().optional(),    // e.g. "24:18"
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
