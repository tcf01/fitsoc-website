'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import AppStoreBadge from '@/components/ui/AppStoreBadge';

export function DownloadCTASection() {
  const t = useTranslations('download');

  return (
    <section
      id="download"
      className="relative py-32 md:py-48 px-6 overflow-hidden bg-gradient-to-br from-primary to-primary-hover"
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

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-tight">
          {t('title')}
        </h2>
        <p className="mt-8 text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <AppStoreBadge />
        </div>
      </div>
    </section>
  );
}
