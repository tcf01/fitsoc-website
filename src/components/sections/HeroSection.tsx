'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

const carouselImages = [
  { src: '/images/hero/hero-01.jpg', gradient: 'linear-gradient(135deg, rgba(250,95,71,0.2), rgba(20,10,5,0.9))', alt: 'Basketball session' },
  { src: '/images/hero/hero-02.jpg', gradient: 'linear-gradient(165deg, rgba(80,60,40,0.4), rgba(10,10,10,0.9))', alt: 'Running club' },
  { src: '/images/hero/hero-03.jpg', gradient: 'linear-gradient(145deg, rgba(250,95,71,0.15), rgba(30,20,10,0.9))', alt: 'Tennis match' },
  { src: '/images/hero/hero-04.jpg', gradient: 'linear-gradient(155deg, rgba(60,80,60,0.3), rgba(10,10,10,0.9))', alt: 'Pickleball session' },
  { src: '/images/hero/hero-05.jpg', gradient: 'linear-gradient(170deg, rgba(250,95,71,0.1), rgba(20,15,10,0.9))', alt: 'Badminton game' },
];

const WAITLIST_URL = process.env.NEXT_PUBLIC_WAITLIST_URL || '';

export function HeroSection() {
  const t = useTranslations('hero');
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setWaitlistStatus('loading');
    try {
      const res = await fetch(WAITLIST_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error();
      setWaitlistStatus('success');
      setEmail('');
      setTimeout(() => {
        setModalOpen(false);
        // Reset after close animation
        setTimeout(() => setWaitlistStatus('idle'), 400);
      }, 2500);
    } catch {
      setWaitlistStatus('error');
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setWaitlistStatus('idle');
      setEmail('');
    }, 400);
  };

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
    <>
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
              className="flex-shrink-0 w-[360px] md:w-[480px] lg:w-[600px] h-[55vh] rounded-2xl overflow-hidden select-none"
            >
              <div className="relative w-full h-full">
                <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: img.gradient }} />
              </div>
            </div>
          ))}
        </div>

        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        {/* Centered brand name + CTA button */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-white font-bold tracking-tight select-none"
            style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
          >
            {t('brand')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/50 text-sm md:text-base tracking-[0.2em] uppercase select-none"
          >
            {t('tagline')}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-[#FA5F47] text-white font-bold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-[#E63F1C] transition-colors"
          >
            {t('waitlistCta')}
          </motion.button>
        </div>
      </section>

      {/* Waitlist Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-8 md:p-10"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors text-xl leading-none"
              >
                &times;
              </button>

              <AnimatePresence mode="wait">
                {waitlistStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-8"
                  >
                    <div className="text-4xl mb-4">&#10003;</div>
                    <h3 className="text-white font-bold text-xl mb-2">
                      {t('waitlistSuccessTitle')}
                    </h3>
                    <p className="text-white/50 text-sm">
                      {t('waitlistSuccess')}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-white font-bold text-2xl tracking-tight mb-2">
                      {t('waitlistModalTitle')}
                    </h3>
                    <p className="text-white/50 text-sm mb-8">
                      {t('waitlistModalDesc')}
                    </p>

                    <form onSubmit={handleWaitlist} className="flex flex-col gap-4">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('waitlistPlaceholder')}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/40 transition-colors"
                        autoFocus
                      />
                      <button
                        type="submit"
                        disabled={waitlistStatus === 'loading'}
                        className="w-full py-3 rounded-lg bg-[#FA5F47] text-white font-semibold text-sm tracking-wide hover:bg-[#E63F1C] transition-colors disabled:opacity-50"
                      >
                        {waitlistStatus === 'loading' ? '...' : t('waitlistCta')}
                      </button>
                      {waitlistStatus === 'error' && (
                        <p className="text-red-400 text-xs text-center">{t('waitlistError')}</p>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
