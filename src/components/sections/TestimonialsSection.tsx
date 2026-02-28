'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ScrollReveal from '@/components/animations/ScrollReveal';

const testimonialKeys = ['1', '2', '3'] as const;

export function TestimonialsSection() {
  const t = useTranslations('testimonials');

  return (
    <SectionWrapper>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        {t('title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialKeys.map((key, i) => (
          <ScrollReveal key={key} delay={i * 0.15}>
            <div className="bg-white rounded-2xl p-8 shadow-sm relative">
              <span className="absolute top-4 right-6 text-6xl text-primary/10 font-serif leading-none">
                &ldquo;
              </span>
              <p className="text-dark-bg/80 relative z-10">
                {t(`items.${key}.quote`)}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20" />
                <div>
                  <p className="font-semibold text-sm">{t(`items.${key}.name`)}</p>
                  <span className="text-xs text-primary font-medium">
                    {t(`items.${key}.sport`)}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
