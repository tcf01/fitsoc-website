'use client';

import { useTranslations } from 'next-intl';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/animations/ScrollReveal';

const stats = [
  { key: 'users', value: 2000, suffix: '+' },
  { key: 'sessions', value: 500, suffix: '+' },
  { key: 'clubs', value: 50, suffix: '+' },
  { key: 'sports', value: 10, suffix: '+' },
];

const sportChips = [
  'Basketball', 'Tennis', 'Badminton', 'Hiking', 'Running',
  'Yoga', 'Swimming', 'Football', 'Volleyball', 'Cycling',
];

export function CommunityStatsSection() {
  const t = useTranslations('stats');

  return (
    <section id="community" className="bg-[#000] py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-tight tracking-tight text-center mb-24">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-24">
          {stats.map((stat) => (
            <ScrollReveal key={stat.key}>
              <div className="text-center">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary"
                />
                <p className="mt-4 text-[#f8f6f5]/40 text-base md:text-lg uppercase tracking-wider">
                  {t(stat.key)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {sportChips.map((chip) => (
            <span
              key={chip}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 text-[#f8f6f5]/60 border border-white/10"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
