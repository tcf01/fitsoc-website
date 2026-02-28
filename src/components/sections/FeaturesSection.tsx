'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/animations/ScrollReveal';

const cards = [
  {
    key: 'discover',
    gradient: 'linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#FA5F47',
  },
  {
    key: 'connect',
    gradient: 'linear-gradient(160deg, #23110f 0%, #3d1c10 50%, #5a2a0f 100%)',
    accent: '#FA5F47',
  },
  {
    key: 'improve',
    gradient: 'linear-gradient(160deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)',
    accent: '#FA5F47',
  },
];

export function FeaturesSection() {
  const t = useTranslations('features');

  return (
    <section id="features" className="bg-[#000] py-32 px-6">
      <div className="max-w-7xl mx-auto mb-20">
        <ScrollReveal>
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-tight tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[#f8f6f5]/50 max-w-xl">
            {t('subtitle')}
          </p>
        </ScrollReveal>
      </div>

      {/* Sticky stacking cards */}
      <div className="max-w-7xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={card.key}
            className="sticky top-8 md:top-12 mb-8 md:mb-12"
            style={{ zIndex: i + 1 }}
          >
            <div
              className="w-full max-w-[500px] mx-auto h-[600px] md:h-[700px] rounded-2xl p-10 md:p-14 flex flex-col justify-end relative overflow-hidden"
              style={{ background: card.gradient }}
            >
              {/* Accent glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[120px] opacity-30"
                style={{ backgroundColor: card.accent }}
              />

              <div className="relative z-10">
                <span
                  className="text-sm font-medium tracking-widest uppercase"
                  style={{ color: card.accent }}
                >
                  {t(`cards.${card.key}.label`)}
                </span>
                <h3 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
                  {t(`cards.${card.key}.title`)}
                </h3>
                <p className="mt-4 text-[#f8f6f5]/60 text-base md:text-lg leading-relaxed max-w-sm">
                  {t(`cards.${card.key}.description`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
