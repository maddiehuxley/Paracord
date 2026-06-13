import { Suspense } from 'react';
import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Featured } from '@/components/featured';
import { ProjectGrid } from '@/components/project-grid';
import { Footer } from '@/components/footer';
import { getAllProjects, getFeaturedProjects } from '@/lib/projects';
import { getSite } from '@/lib/site';

export const dynamic = 'force-static';

export default async function HomePage() {
  const [projects, featured, site] = await Promise.all([
    getAllProjects(),
    getFeaturedProjects(),
    getSite()
  ]);

  const featuredOne = featured[0] ?? projects[0];

  return (
    <main>
      <Suspense fallback={null}>
        <Nav />
      </Suspense>

      <Hero intro={site.intro} />

      {featuredOne && <Featured project={featuredOne} />}

      <Suspense fallback={null}>
        <ProjectGrid projects={projects} />
      </Suspense>

      <Footer site={site} />
    </main>
  );
}
