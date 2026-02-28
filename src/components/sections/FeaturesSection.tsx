'use client';

import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from '@/components/ui/SectionWrapper';
import PhoneMockup from '@/components/ui/PhoneMockup';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { key: 'map', emoji: '📍', color: 'bg-blue-50', activeColor: 'bg-blue-100', screen: '🗺️' },
  { key: 'sessions', emoji: '⚡', color: 'bg-amber-50', activeColor: 'bg-amber-100', screen: '📋' },
  { key: 'clubs', emoji: '👥', color: 'bg-green-50', activeColor: 'bg-green-100', screen: '🏟️' },
  { key: 'chat', emoji: '💬', color: 'bg-purple-50', activeColor: 'bg-purple-100', screen: '💬' },
  { key: 'ai', emoji: '🤖', color: 'bg-cyan-50', activeColor: 'bg-cyan-100', screen: '🤖' },
];

export function FeaturesSection() {
  const t = useTranslations('features');
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const trigger = ScrollTrigger.create({
        trigger: card,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
      triggers.push(trigger);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  const active = features[activeIndex];

  return (
    <SectionWrapper id="features">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">{t('title')}</h2>
        <p className="mt-4 text-lg text-dark-bg/60">{t('subtitle')}</p>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="hidden lg:flex justify-center sticky top-1/4">
          <PhoneMockup>
            <div
              className={`w-full h-full flex items-center justify-center text-6xl transition-colors duration-500 ${active.activeColor}`}
            >
              {active.screen}
            </div>
          </PhoneMockup>
        </div>

        <div className="space-y-8">
          {features.map((feature, i) => (
            <div
              key={feature.key}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`p-8 rounded-2xl transition-all duration-300 ${
                activeIndex === i ? feature.activeColor + ' shadow-lg scale-[1.02]' : feature.color
              }`}
            >
              <span className="text-3xl">{feature.emoji}</span>
              <h3 className="mt-4 text-xl font-semibold">
                {t(`items.${feature.key}.title`)}
              </h3>
              <p className="mt-2 text-dark-bg/60">
                {t(`items.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
