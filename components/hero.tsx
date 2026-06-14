import type { Project } from '@/lib/types';
import { Spotlight } from './spotlight';

export function Hero({ featured }: { featured?: Project }) {
  return (
    <section id="top" className="section pb-16">
      <div className="grid gap-10 md:gap-14 md:grid-cols-[1.05fr_1fr] items-center">
        {/* left: copy */}
        <div className="animate-fade-up">
          <div className="t-eyebrow mb-4">
            Paracord Commerce · Prague
          </div>

          <h1
            className="t-display"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 56px)',
              color: 'var(--ink)',
              marginBottom: 22
            }}
          >
            Paracord is the workshop
            where it all gets built.
          </h1>

          <p
            className="mb-7"
            style={{
              fontSize: 17,
              lineHeight: 1.55,
              color: 'var(--ink-2)',
              maxWidth: 540
            }}
          >
            The home for everything Paracord Commerce ships. Software, hardware,
            web. Real products you can hold, install, or open in a browser. No rent,
            no API keys, no tracking.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              Browse projects
            </a>
            <a href="#shipping" className="btn btn-outline">
              See what's shipping
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap gap-x-7 gap-y-2 items-center"
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: 11,
              color: 'var(--ink-3)',
              letterSpacing: '0.04em'
            }}
          >
            <span>{featured ? `${featured.name} ${featured.version ?? ''} live` : 'v1.0 stable'}</span>
            <span style={{ color: 'var(--ink-4)' }}>·</span>
            <span>No tracking</span>
            <span style={{ color: 'var(--ink-4)' }}>·</span>
            <span>EU-hosted</span>
            <span style={{ color: 'var(--ink-4)' }}>·</span>
            <span>Open source where possible</span>
          </div>
        </div>

        {/* right: spotlight */}
        <div className="animate-fade-up delay-2">
          <Spotlight project={featured} />
        </div>
      </div>
    </section>
  );
}
