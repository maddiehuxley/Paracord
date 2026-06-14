import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { WhyParacord } from '@/components/why-paracord';
import { JoinUs } from '@/components/join-us';
import { Testimonials } from '@/components/testimonials';
import { Team } from '@/components/team';
import { Footer } from '@/components/footer';
import { AdRail } from '@/components/ad-rail';
import { getAllProjects, getFeaturedProjects } from '@/lib/projects';
import { getSite } from '@/lib/site';

export const dynamic = 'force-static';

export default async function HomePage() {
  const [projects, featured] = await Promise.all([
    getAllProjects(),
    getFeaturedProjects()
  ]);
  // site config is intentionally unused on this overhauled page
  // (the new design hardcodes most copy for tighter editorial voice).
  await getSite();

  const featuredOne = featured[0] ?? projects[0];

  return (
    <>
      <div className="page-shell">
        <Header />
        <main>
          <Hero featured={featuredOne} />
          <Projects projects={projects} />
          <WhyParacord />
          <JoinUs />
          <Testimonials />
          <div id="team">
            <Team />
          </div>
        </main>
        <Footer projects={projects} />
      </div>
      <AdRail />
    </>
  );
}
