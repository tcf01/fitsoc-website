'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

const carouselImages = [
  { gradient: 'linear-gradient(135deg, rgba(250,95,71,0.2), rgba(20,10,5,0.9))', alt: 'Basketball session' },
  { gradient: 'linear-gradient(165deg, rgba(80,60,40,0.4), rgba(10,10,10,0.9))', alt: 'Running club' },
  { gradient: 'linear-gradient(145deg, rgba(250,95,71,0.15), rgba(30,20,10,0.9))', alt: 'Tennis match' },
  { gradient: 'linear-gradient(155deg, rgba(60,80,60,0.3), rgba(10,10,10,0.9))', alt: 'Hiking group' },
  { gradient: 'linear-gradient(170deg, rgba(250,95,71,0.1), rgba(20,15,10,0.9))', alt: 'Badminton game' },
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
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);

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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animId: number;
    const speed = 0.5;

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
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Draggable carousel behind everything */}
      <div
        ref={trackRef}
        className="absolute inset-0 flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing px-4 items-center"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {[...carouselImages, ...carouselImages, ...carouselImages].map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] md:w-[420px] lg:w-[500px] h-[70vh] rounded-2xl overflow-hidden select-none"
          >
            <div
              className="w-full h-full"
              style={{ background: img.gradient }}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* Centered brand name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative z-10 text-white font-bold tracking-tight select-none"
        style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
      >
        {t('brand')}
      </motion.h1>
    </section>
  );
}
