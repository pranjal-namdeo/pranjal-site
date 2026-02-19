import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    type: z.enum(["bugfix", "best-practice", "build-log"]).default("bugfix"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const learning = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    course: z.string().default("OpenCV University – CVIP"),
    module: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    codeLink: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(["idea", "in-progress", "shipped"]).default("in-progress"),
    level: z.enum(["beginner", "intermediate", "advanced"]).default("beginner"),
    stack: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, learning, projects };