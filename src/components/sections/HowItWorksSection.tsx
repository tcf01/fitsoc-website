'use client';

import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ScrollReveal from '@/components/animations/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { key: 'download', emoji: '📲', number: 1 },
  { key: 'find', emoji: '🔍', number: 2 },
  { key: 'play', emoji: '🎉', number: 3 },
];

export function HowItWorksSection() {
  const t = useTranslations('howItWorks');
  const lineRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = lineRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: 1,
      },
    });

    return () => { tween.kill(); };
  }, []);

  return (
    <SectionWrapper id="how-it-works" className="bg-warm-bg">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
        {t('title')}
      </h2>

      <div ref={sectionRef} className="relative">
        <svg
          className="absolute top-1/2 left-0 w-full h-1 hidden md:block"
          viewBox="0 0 1000 2"
          preserveAspectRatio="none"
        >
          <path
            ref={lineRef}
            d="M 100 1 L 900 1"
            stroke="#FA5F47"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, i) => (
            <ScrollReveal key={step.key} delay={i * 0.2}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto">
                  {step.number}
                </div>
                <span className="block text-4xl mt-6">{step.emoji}</span>
                <h3 className="mt-4 text-xl font-semibold">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="mt-2 text-dark-bg/60 max-w-xs mx-auto">
                  {t(`steps.${step.key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
