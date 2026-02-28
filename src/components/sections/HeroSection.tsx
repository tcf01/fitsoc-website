'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import AppStoreBadge from '@/components/ui/AppStoreBadge';

const carouselImages = [
  { src: '/images/hero-1.jpg', alt: 'Basketball session' },
  { src: '/images/hero-2.jpg', alt: 'Running club' },
  { src: '/images/hero-3.jpg', alt: 'Tennis match' },
  { src: '/images/hero-4.jpg', alt: 'Hiking group' },
  { src: '/images/hero-5.jpg', alt: 'Badminton game' },
];

export function HeroSection() {
  const t = useTranslations('hero');
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.8]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    setStartX(e.pageX - track.offsetLeft);
    setScrollLeft(track.scrollLeft);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !trackRef.current) return;
      e.preventDefault();
      const x = e.pageX - trackRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      trackRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  // Touch handlers for mobile drag
  const touchStartX = useRef(0);
  const touchScrollLeft = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const track = trackRef.current;
    if (!track) return;
    touchStartX.current = e.touches[0].pageX - track.offsetLeft;
    touchScrollLeft.current = track.scrollLeft;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const track = trackRef.current;
    if (!track) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - touchStartX.current) * 1.5;
    track.scrollLeft = touchScrollLeft.current - walk;
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animId: number;
    let speed = 0.5;

    const autoScroll = () => {
      if (!isDragging && track) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
          track.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(autoScroll);
    };
    animId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animId);
  }, [isDragging]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end bg-[#000] overflow-hidden"
    >
      {/* Draggable carousel */}
      <div
        ref={trackRef}
        className="absolute inset-0 flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide px-4 pt-20 pb-4 items-center"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {[...carouselImages, ...carouselImages].map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] md:w-[420px] lg:w-[500px] h-[400px] md:h-[520px] lg:h-[600px] rounded-2xl bg-dark-bg/40 overflow-hidden select-none"
          >
            {/* Placeholder gradient cards — replace with <Image> when assets are ready */}
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(${135 + i * 30}deg, rgba(250,95,71,${0.15 + (i % 3) * 0.1}), rgba(35,17,15,0.8))`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* Editorial headline overlay */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16 md:pb-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] text-white whitespace-pre-line tracking-tight">
            {t('headline')}
          </h1>

          <p className="mt-6 md:mt-8 text-lg md:text-xl text-[#f8f6f5]/70 max-w-xl leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-6">
            <AppStoreBadge />
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary/60 border-2 border-black"
                />
              ))}
            </div>
            <span className="text-sm text-[#f8f6f5]/50">{t('users')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
