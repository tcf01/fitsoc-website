'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/animations/ScrollReveal';
import PhoneMockup from '@/components/ui/PhoneMockup';

export function FeatureHighlightSection() {
  const t = useTranslations('feature');

  return (
    <section className="bg-black py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Massive heading */}
        <ScrollReveal>
          <h2
            className="text-center text-white font-bold tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            {t('heading')}
          </h2>
        </ScrollReveal>

        {/* Phone mockup centered */}
        <ScrollReveal>
          <div className="flex justify-center my-16 md:my-24">
            <PhoneMockup>
              <div className="w-full h-full bg-gradient-to-br from-[#FA5F47]/20 to-black" />
            </PhoneMockup>
          </div>
        </ScrollReveal>

        {/* Two-column text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <ScrollReveal>
            <div>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-4 tracking-wide">
                {t('leftTitle')}
              </h3>
              <p className="text-white/50 text-base md:text-lg leading-relaxed">
                {t('leftBody')}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-4 tracking-wide">
                {t('rightTitle')}
              </h3>
              <p className="text-white/50 text-base md:text-lg leading-relaxed">
                {t('rightBody')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
