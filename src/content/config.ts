import { defineCollection, z, reference } from "astro:content";

const tags = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    tags: z.array(reference("tags")).optional(),
    url: z.string().optional(),
  }),
});

export const collections = { blog, projects, tags };
