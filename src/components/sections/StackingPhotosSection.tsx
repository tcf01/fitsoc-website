'use client';

import { useTranslations } from 'next-intl';

const cards = [
  { src: '/images/stacking/stack-02.jpg', rotation: -4, textKey: 'card1' },
  { src: '/images/stacking/stack-03.jpg', rotation: 3, textKey: 'card2' },
  { src: '/images/stacking/stack-04.jpg', rotation: -2, textKey: 'card3' },
  { src: '/images/stacking/stack-05.jpg', rotation: 5, textKey: 'card4' },
];

export function StackingPhotosSection() {
  const t = useTranslations('stacking');

  return (
    <section className="px-6">
      <div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row"
        style={{ height: cards.length * 700 + (cards.length - 1) * 81 + 'px' }}
      >
        {/* LEFT — stacking sticky cards (48%) */}
        <div className="w-full lg:w-[48%] flex flex-col gap-[81px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="sticky top-0 flex-none overflow-hidden rounded-[10px] shadow-2xl"
              style={{
                height: '700px',
                maxWidth: '500px',
                zIndex: i + 1,
                transform: `rotate(${card.rotation}deg)`,
              }}
            >
              <img
                src={card.src}
                alt=""
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-medium tracking-wide">
                  {t(card.textKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — sticky headline (52%) */}
        <div className="hidden lg:flex w-[52%] sticky top-0 h-screen items-center justify-center px-12">
          <div>
            <div className="w-[77px] h-[3px] bg-primary mb-8" />
            <h2
              className="text-charcoal font-bold leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              {t('headline')}
            </h2>
            <div className="w-[77px] h-[3px] bg-primary mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
