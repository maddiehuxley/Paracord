import { z } from 'zod';

export const ProjectCategory = z.enum(['software', 'hardware', 'web']);
export type ProjectCategory = z.infer<typeof ProjectCategory>;

export const ProjectStatus = z.enum(['active', 'beta', 'wip', 'archived']);
export type ProjectStatus = z.infer<typeof ProjectStatus>;

export const ProjectSchema = z.object({
  slug: z.string(),
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  category: ProjectCategory,
  status: ProjectStatus,
  version: z.string().optional(),
  url: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
  order: z.number().default(99),
  cover: z.string().optional()
});

export type Project = z.infer<typeof ProjectSchema>;

export const SiteSchema = z.object({
  tagline: z.string(),
  intro: z.string(),
  operator: z.object({
    name: z.string(),
    location: z.string(),
    domain: z.string()
  }),
  socials: z
    .array(z.object({ label: z.string(), url: z.string().url() }))
    .default([])
});

export type Site = z.infer<typeof SiteSchema>;
