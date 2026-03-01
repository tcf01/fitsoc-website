'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/animations/ScrollReveal';
import AppStoreBadge from '@/components/ui/AppStoreBadge';
import PhoneMockup from '@/components/ui/PhoneMockup';

export function DownloadCTASection() {
  const t = useTranslations('downloadCta');

  return (
    <section id="download" className="bg-warm-bg py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollReveal>
          <h2
            className="text-charcoal font-bold tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {t('heading')}
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <a
            href="#"
            className="inline-block mt-8 px-12 py-4 bg-primary text-white font-bold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-primary-hover transition-colors shadow-[0_4px_14px_rgba(250,95,71,0.3)]"
          >
            {t('cta')}
          </a>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-6 text-warm-gray text-base md:text-lg max-w-lg mx-auto">
            {t('subtitle')}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 flex justify-center">
            <AppStoreBadge />
          </div>
        </ScrollReveal>

        {/* Phone mockups flanking */}
        <ScrollReveal>
          <div className="mt-16 flex justify-center items-end gap-8 md:gap-16">
            <div className="hidden md:block opacity-60 -rotate-6">
              <PhoneMockup className="!max-w-[200px]">
                <div className="w-full h-full bg-gradient-to-br from-[#FA5F47]/15 to-[#23110f]" />
              </PhoneMockup>
            </div>
            <PhoneMockup>
              <div className="w-full h-full bg-gradient-to-br from-[#FA5F47]/25 to-[#23110f]" />
            </PhoneMockup>
            <div className="hidden md:block opacity-60 rotate-6">
              <PhoneMockup className="!max-w-[200px]">
                <div className="w-full h-full bg-gradient-to-br from-[#FA5F47]/15 to-[#23110f]" />
              </PhoneMockup>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
