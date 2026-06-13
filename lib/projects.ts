import { promises as fs } from 'node:fs';
import path from 'node:path';
import { ProjectSchema, type Project } from './types';

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects');

/**
 * Reads all project folders from content/projects/.
 *
 * Folders starting with "_" (e.g. _template) are ignored. This is how you keep
 * scratch / template folders in the repo without having them show on the site.
 *
 * Each folder must contain a project.json validated against ProjectSchema.
 * Optionally a cover image (cover.png / cover.jpg / cover.svg) sitting next to it.
 */
export async function getAllProjects(): Promise<Project[]> {
  let entries: string[];
  try {
    entries = await fs.readdir(PROJECTS_DIR);
  } catch {
    return [];
  }

  const projects: Project[] = [];

  for (const entry of entries) {
    if (entry.startsWith('_') || entry.startsWith('.')) continue;
    const folder = path.join(PROJECTS_DIR, entry);
    const stat = await fs.stat(folder);
    if (!stat.isDirectory()) continue;

    const jsonPath = path.join(folder, 'project.json');
    let raw: string;
    try {
      raw = await fs.readFile(jsonPath, 'utf8');
    } catch {
      console.warn(`[paracord-center] Skipping ${entry}: no project.json`);
      continue;
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      console.error(`[paracord-center] ${entry}/project.json is not valid JSON:`, err);
      continue;
    }

    const result = ProjectSchema.safeParse({ ...(parsed as object), slug: entry });
    if (!result.success) {
      console.error(`[paracord-center] ${entry}/project.json failed validation:`, result.error.format());
      continue;
    }

    // Auto-detect cover image if not explicitly set
    if (!result.data.cover) {
      for (const ext of ['png', 'jpg', 'jpeg', 'svg', 'webp']) {
        const coverPath = path.join(folder, `cover.${ext}`);
        try {
          await fs.access(coverPath);
          result.data.cover = `/projects/${entry}/cover.${ext}`;
          break;
        } catch {
          /* not present */
        }
      }
    }

    projects.push(result.data);
  }

  return projects.sort((a, b) => a.order - b.order);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter((p) => p.featured);
}
