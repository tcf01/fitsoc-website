'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/animations/ScrollReveal';

const testimonialKeys = ['1', '2', '3'] as const;

export function TestimonialsSection() {
  const t = useTranslations('testimonials');

  return (
    <section className="bg-[#23110f] py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-20 tracking-tight">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialKeys.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.15}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 relative">
                <span className="absolute top-4 right-6 text-7xl text-primary/15 font-serif leading-none">
                  &ldquo;
                </span>
                <p className="text-[#f8f6f5]/80 text-base md:text-lg leading-relaxed relative z-10">
                  {t(`items.${key}.quote`)}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20" />
                  <div>
                    <p className="font-semibold text-sm text-white">
                      {t(`items.${key}.name`)}
                    </p>
                    <span className="text-xs text-primary font-medium">
                      {t(`items.${key}.sport`)}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
