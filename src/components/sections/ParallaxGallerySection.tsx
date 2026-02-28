'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const leftItems = [
  { type: 'image' as const, aspect: 'aspect-[3/4]' },
  { type: 'image' as const, aspect: 'aspect-[4/3]' },
  { type: 'image' as const, aspect: 'aspect-[3/4]' },
];

const rightItems = [
  { type: 'image' as const, aspect: 'aspect-[4/3]' },
  { type: 'image' as const, aspect: 'aspect-[3/4]' },
  { type: 'image' as const, aspect: 'aspect-[4/3]' },
];

export function ParallaxGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#000] py-32 md:py-48 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        {/* Left column — scrolls slightly up */}
        <motion.div style={{ y: leftY }} className="flex flex-col gap-8 md:gap-[150px]">
          {leftItems.map((item, i) => (
            <div
              key={`l-${i}`}
              className={`${item.aspect} w-full rounded-2xl bg-dark-bg/40 overflow-hidden`}
            >
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(${120 + i * 40}deg, rgba(250,95,71,0.1), rgba(35,17,15,0.6))`,
                }}
              />
            </div>
          ))}
        </motion.div>

        {/* Right column — scrolls slightly down, offset start */}
        <motion.div
          style={{ y: rightY }}
          className="flex flex-col gap-8 md:gap-[150px] mt-24 md:mt-48"
        >
          {rightItems.map((item, i) => (
            <div
              key={`r-${i}`}
              className={`${item.aspect} w-full rounded-2xl bg-dark-bg/40 overflow-hidden`}
            >
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(${200 + i * 40}deg, rgba(250,95,71,0.08), rgba(35,17,15,0.5))`,
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
