'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-dark-bg text-white/70">
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">FitSoc</h3>
            <p className="text-sm">{t('tagline')}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t('links')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('about')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('privacy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('terms')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t('social')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Language</h4>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm">
          {t('copyright')}
        </div>
      </SectionWrapper>
    </footer>
  );
}
