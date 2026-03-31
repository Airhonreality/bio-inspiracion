import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional(),
		date: z.date().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { docs };
