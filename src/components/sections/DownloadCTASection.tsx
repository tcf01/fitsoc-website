'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/animations/ScrollReveal';
import AppStoreBadge from '@/components/ui/AppStoreBadge';
import PhoneMockup from '@/components/ui/PhoneMockup';

export function DownloadCTASection() {
  const t = useTranslations('downloadCta');

  return (
    <section id="download" className="bg-black py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollReveal>
          <h2
            className="text-white font-bold tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {t('heading')}
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <a
            href="#"
            className="inline-block mt-8 px-12 py-4 bg-[#FA5F47] text-white font-bold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-[#E63F1C] transition-colors"
          >
            {t('cta')}
          </a>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-6 text-white/40 text-base md:text-lg max-w-lg mx-auto">
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
                <div className="w-full h-full bg-gradient-to-br from-[#FA5F47]/15 to-black" />
              </PhoneMockup>
            </div>
            <PhoneMockup>
              <div className="w-full h-full bg-gradient-to-br from-[#FA5F47]/25 to-black" />
            </PhoneMockup>
            <div className="hidden md:block opacity-60 rotate-6">
              <PhoneMockup className="!max-w-[200px]">
                <div className="w-full h-full bg-gradient-to-br from-[#FA5F47]/15 to-black" />
              </PhoneMockup>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
