'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import AppStoreBadge from '@/components/ui/AppStoreBadge';

export function DownloadCTASection() {
  const t = useTranslations('download');

  return (
    <section
      id="download"
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-primary to-primary-hover"
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 blur-3xl"
          style={{
            width: 200 + i * 100,
            height: 200 + i * 100,
            top: `${20 + i * 20}%`,
            left: `${10 + i * 30}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold">{t('title')}</h2>
        <p className="mt-6 text-lg text-white/80">{t('subtitle')}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <AppStoreBadge />
        </div>
      </div>
    </section>
  );
}
