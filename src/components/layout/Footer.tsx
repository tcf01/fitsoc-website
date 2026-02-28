'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#000] text-[#f8f6f5]/60 py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              FitSoc
            </h3>
            <p className="text-lg leading-relaxed max-w-sm">
              {t('tagline')}
            </p>
            <div className="mt-8">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
                {t('links')}
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('about')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('privacy')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('terms')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('contact')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
                {t('social')}
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 pt-8 border-t border-white/10 text-sm text-[#f8f6f5]/30">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
