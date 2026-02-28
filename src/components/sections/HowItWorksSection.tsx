'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/animations/ScrollReveal';

const steps = [
  { key: 'download', number: '01' },
  { key: 'find', number: '02' },
  { key: 'play', number: '03' },
];

export function HowItWorksSection() {
  const t = useTranslations('howItWorks');

  return (
    <section id="how-it-works" className="bg-[#23110f] py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-tight tracking-tight mb-24 md:mb-32">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="space-y-20 md:space-y-32">
          {steps.map((step, i) => (
            <ScrollReveal key={step.key} delay={i * 0.15}>
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-16 items-start">
                <span className="text-6xl md:text-8xl font-bold text-primary/30 leading-none">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {t(`steps.${step.key}.title`)}
                  </h3>
                  <p className="mt-4 text-[#f8f6f5]/50 text-lg md:text-xl max-w-lg leading-relaxed">
                    {t(`steps.${step.key}.description`)}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="mt-20 md:mt-32 border-t border-white/10" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
