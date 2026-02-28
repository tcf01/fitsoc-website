'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/animations/ScrollReveal';

const stats = [
  { key: 'users', value: 2000, suffix: '+' },
  { key: 'sessions', value: 500, suffix: '+' },
  { key: 'clubs', value: 50, suffix: '+' },
  { key: 'sports', value: 10, suffix: '+' },
];

const sportChips = [
  { label: 'Basketball', color: 'bg-orange-100 text-orange-700' },
  { label: 'Tennis', color: 'bg-green-100 text-green-700' },
  { label: 'Badminton', color: 'bg-blue-100 text-blue-700' },
  { label: 'Hiking', color: 'bg-emerald-100 text-emerald-700' },
  { label: 'Running', color: 'bg-red-100 text-red-700' },
  { label: 'Yoga', color: 'bg-purple-100 text-purple-700' },
  { label: 'Swimming', color: 'bg-cyan-100 text-cyan-700' },
  { label: 'Football', color: 'bg-lime-100 text-lime-700' },
  { label: 'Volleyball', color: 'bg-amber-100 text-amber-700' },
  { label: 'Cycling', color: 'bg-pink-100 text-pink-700' },
];

export function CommunityStatsSection() {
  const t = useTranslations('stats');

  return (
    <SectionWrapper id="community" className="bg-dark-bg text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        {t('title')}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat) => (
          <ScrollReveal key={stat.key}>
            <div className="text-center">
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                className="text-4xl md:text-5xl font-bold text-primary"
              />
              <p className="mt-2 text-white/60">{t(stat.key)}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {sportChips.map((chip) => (
          <span
            key={chip.label}
            className={`px-4 py-2 rounded-full text-sm font-medium ${chip.color}`}
          >
            {chip.label}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}
