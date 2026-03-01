'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const navCards = [
  { key: 'navHome', href: '#' },
  { key: 'navFeatures', href: '#features' },
  { key: 'navCommunity', href: '#community' },
];

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-dark-bg text-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Nav cards row */}
        <div className="flex justify-center gap-3 mb-16">
          {navCards.map((card) => (
            <a
              key={card.key}
              href={card.href}
              className="border border-white/15 rounded-lg px-4 py-5 text-center text-[11px] font-medium tracking-[0.15em] text-white/60 hover:text-white hover:border-white/30 transition-colors uppercase"
            >
              {t(card.key)}
            </a>
          ))}
        </div>

        {/* Social icons row */}
        <div className="flex justify-center gap-6 mb-12">
          {/* Instagram */}
          <a href="#" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          {/* Email */}
          <a href="mailto:admin@fitsoc.hk" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </a>
        </div>

        {/* Location + email */}
        <div className="text-center mb-8">
          <p className="text-white/30 text-sm tracking-wide">
            {t('location')} &middot; {t('email')}
          </p>
        </div>

        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="text-white/50 text-sm tracking-[0.15em] uppercase">
            {t('tagline')}
          </p>
        </div>

        {/* Language switcher */}
        <div className="flex justify-center mb-8">
          <LanguageSwitcher />
        </div>

        {/* Copyright in bordered box */}
        <div className="border border-white/10 rounded-lg px-6 py-4 text-center">
          <p className="text-white/30 text-xs tracking-wide">
            {t('copyright')}
          </p>
          <p className="text-white font-bold text-lg mt-1">FitSoc</p>
        </div>
      </div>
    </footer>
  );
}
