'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

const photos = [
  { rotation: -6, src: null, gradient: 'linear-gradient(135deg, rgba(250,95,71,0.25), rgba(20,10,5,0.9))' },
  { rotation: 4, src: '/images/stacking/stack-02.jpg', gradient: 'linear-gradient(155deg, rgba(80,60,40,0.4), rgba(10,10,10,0.9))' },
  { rotation: -3, src: '/images/stacking/stack-03.jpg', gradient: 'linear-gradient(145deg, rgba(60,80,60,0.3), rgba(15,10,5,0.9))' },
  { rotation: 7, src: '/images/stacking/stack-04.jpg', gradient: 'linear-gradient(170deg, rgba(250,95,71,0.15), rgba(20,15,10,0.9))' },
  { rotation: -5, src: '/images/stacking/stack-05.jpg', gradient: 'linear-gradient(160deg, rgba(90,70,50,0.3), rgba(10,10,10,0.9))' },
];

function StackingPhoto({
  photo,
  index,
  scrollYProgress,
}: {
  photo: (typeof photos)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const y = useTransform(
    scrollYProgress,
    [0.05 + index * 0.08, 0.15 + index * 0.08],
    [100, 0]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.05 + index * 0.08, 0.15 + index * 0.08],
    [0, 1]
  );

  return (
    <motion.div
      className="absolute rounded-lg overflow-hidden shadow-2xl border-[6px] border-white/10"
      style={{
        width: 'clamp(240px, 50%, 360px)',
        height: 'clamp(320px, 70%, 460px)',
        rotate: photo.rotation,
        left: `${index * 50}px`,
        top: `${index * 30}px`,
        y,
        opacity,
        zIndex: index,
        background: photo.gradient,
      }}
    >
      {photo.src && (
        <>
          <img src={photo.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: photo.gradient }} />
        </>
      )}
    </motion.div>
  );
}

export function StackingPhotosSection() {
  const t = useTranslations('stacking');
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* LEFT — stacking tilted photos */}
        <div className="relative w-full lg:w-1/2 h-[500px] md:h-[600px]">
          {photos.map((photo, i) => (
            <StackingPhoto
              key={i}
              photo={photo}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* RIGHT — editorial headline */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-charcoal font-bold leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {t('headline')}
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
