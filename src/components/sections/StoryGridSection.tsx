'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/animations/ScrollReveal';

const tiles = [
  { key: 'map', src: '/images/story/story-map.jpg', gradient: 'linear-gradient(160deg, rgba(250,95,71,0.15), rgba(10,10,10,0.95))' },
  { key: 'session', src: '/images/story/story-session.jpg', gradient: 'linear-gradient(160deg, rgba(80,60,40,0.3), rgba(10,10,10,0.95))' },
  { key: 'club', src: '/images/story/story-club.jpg', gradient: 'linear-gradient(160deg, rgba(60,80,60,0.25), rgba(10,10,10,0.95))' },
  { key: 'community', src: null, gradient: 'linear-gradient(160deg, rgba(90,70,50,0.2), rgba(10,10,10,0.95))' },
];

export function StoryGridSection() {
  const t = useTranslations('story');

  return (
    <section id="features" className="bg-black py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2
            className="text-center text-white font-bold tracking-tight mb-16 md:mb-24"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            {t('title')}
          </h2>
        </ScrollReveal>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <ScrollReveal key={tile.key}>
              <div
                className="relative aspect-[4/3] rounded-lg overflow-hidden flex items-end p-8 md:p-10"
                style={{ background: tile.gradient }}
              >
                {tile.src && (
                  <>
                    <img src={tile.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: tile.gradient }} />
                  </>
                )}
                {/* Film grain overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                  }}
                />
                <h3
                  className="relative z-10 text-white font-bold tracking-tight"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                >
                  {t(`tiles.${tile.key}`)}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tagline below grid */}
        <ScrollReveal>
          <p
            className="text-center text-white/50 mt-16 md:mt-24 tracking-wide uppercase"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)', letterSpacing: '0.15em' }}
          >
            {t('tagline')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
