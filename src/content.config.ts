import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
	schema: z.object({
		title: z.string().optional(),
		date: z.date().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { docs };
