import { promises as fs } from 'node:fs';
import path from 'node:path';
import { SiteSchema, type Site } from './types';

const FALLBACK: Site = {
  tagline: 'The workshop index',
  intro:
    'The workshop index for everything built under Paracord Commerce. Software, hardware, web. Catalogued, dated, archived. No tracking, no funnels, no popups.',
  operator: {
    name: 'Paracord Commerce s.r.o.',
    location: 'Prague, Czech Republic',
    domain: 'paracord.center'
  },
  socials: []
};

export async function getSite(): Promise<Site> {
  const sitePath = path.join(process.cwd(), 'content', 'site.json');
  try {
    const raw = await fs.readFile(sitePath, 'utf8');
    const parsed = JSON.parse(raw);
    const result = SiteSchema.safeParse(parsed);
    if (!result.success) {
      console.error('[paracord-center] site.json failed validation, using fallback', result.error.format());
      return FALLBACK;
    }
    return result.data;
  } catch {
    return FALLBACK;
  }
}
