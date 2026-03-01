'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/animations/ScrollReveal';

const audiences = [
  {
    key: 'casual',
    src: '/images/audience/audience-casual.jpg',
    gradient: 'linear-gradient(160deg, rgba(250,95,71,0.15), rgba(10,10,10,0.95))',
  },
  {
    key: 'community',
    src: '/images/audience/audience-community.jpg',
    gradient: 'linear-gradient(160deg, rgba(80,60,40,0.3), rgba(10,10,10,0.95))',
  },
  {
    key: 'coach',
    src: '/images/audience/audience-coach.jpg',
    gradient: 'linear-gradient(160deg, rgba(60,80,60,0.25), rgba(10,10,10,0.95))',
  },
];

export function TargetAudienceSection() {
  const t = useTranslations('audience');

  return (
    <section className="bg-warm-bg py-32 md:py-48">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2
            className="text-center text-charcoal font-bold tracking-tight mb-16 md:mb-24"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {audiences.map((item, i) => (
            <ScrollReveal key={item.key} delay={i * 0.1}>
              <div
                className="relative aspect-[3/4] rounded-lg overflow-hidden flex flex-col justify-end p-8 md:p-10"
                style={{ background: item.gradient }}
              >
                {item.src && (
                  <>
                    <img
                      src={item.src}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: item.gradient }}
                    />
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
                  {t(`${item.key}Title` as 'casualTitle' | 'communityTitle' | 'coachTitle')}.
                </h3>
                <p className="relative z-10 text-white/50 text-sm md:text-base leading-relaxed mt-3">
                  {t(`${item.key}Desc` as 'casualDesc' | 'communityDesc' | 'coachDesc')}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
