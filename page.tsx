import { Suspense } from 'react';
import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Shipping } from '@/components/shipping';
import { ProjectGrid } from '@/components/project-grid';
import { Principles } from '@/components/principles';
import { Operator } from '@/components/operator';
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

      {featuredOne && <Shipping project={featuredOne} />}

      <Suspense fallback={null}>
        <ProjectGrid projects={projects} />
      </Suspense>

      <div id="principles">
        <Principles />
      </div>

      <div id="operator">
        <Operator site={site} />
      </div>

      <Footer site={site} projects={projects} />
    </main>
  );
}
