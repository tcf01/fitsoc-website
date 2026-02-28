'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import AppStoreBadge from '@/components/ui/AppStoreBadge';
import PhoneMockup from '@/components/ui/PhoneMockup';

const floatingEmojis = ['🏀', '🎾', '🏸', '⚽', '🏊', '🧘', '🏃', '🚴'];

export function HeroSection() {
  const t = useTranslations('hero');
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-dark-bg overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(250,95,71,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line"
          >
            {t('headline')}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-white/70 max-w-lg"
          >
            {t('subtitle')}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
            <AppStoreBadge />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary/60 border-2 border-dark-bg"
                />
              ))}
            </div>
            <span className="text-sm text-white/60">{t('users')}</span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: phoneY }}
          className="relative flex justify-center"
        >
          <PhoneMockup>
            <div className="w-full h-full bg-gradient-to-b from-primary/20 to-primary/5 flex items-center justify-center text-4xl">
              🗺️
            </div>
          </PhoneMockup>

          {floatingEmojis.map((emoji, i) => (
            <motion.span
              key={i}
              className="absolute text-2xl select-none"
              style={{
                top: `${15 + (i % 4) * 20}%`,
                left: `${i % 2 === 0 ? -5 + i * 3 : 75 + (i % 3) * 8}%`,
              }}
              animate={{
                y: [0, -12, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
