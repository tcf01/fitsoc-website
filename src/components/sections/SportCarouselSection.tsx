'use client';

import { useTranslations } from 'next-intl';

const sportEmojis: Record<string, string> = {
  Basketball: '\u{1F3C0}',
  Tennis: '\u{1F3BE}',
  Running: '\u{1F3C3}',
  Badminton: '\u{1F3F8}',
  Hiking: '\u{26F0}\u{FE0F}',
  Football: '\u{26BD}',
  Swimming: '\u{1F3CA}',
  Volleyball: '\u{1F3D0}',
  Yoga: '\u{1F9D8}',
  Climbing: '\u{1F9D7}',
  'Table Tennis': '\u{1F3D3}',
  Boxing: '\u{1F94A}',
  '\u7C43\u7403': '\u{1F3C0}',
  '\u7DB2\u7403': '\u{1F3BE}',
  '\u8DD1\u6B65': '\u{1F3C3}',
  '\u7FBD\u6BDB\u7403': '\u{1F3F8}',
  '\u884C\u5C71': '\u{26F0}\u{FE0F}',
  '\u8DB3\u7403': '\u{26BD}',
  '\u6E38\u6CF3': '\u{1F3CA}',
  '\u6392\u7403': '\u{1F3D0}',
  '\u745C\u4F3D': '\u{1F9D8}',
  '\u6500\u5CA9': '\u{1F9D7}',
  '\u4E52\u4E53\u7403': '\u{1F3D3}',
  '\u62F3\u64CA': '\u{1F94A}',
};

export function SportCarouselSection() {
  const t = useTranslations('sports');
  const items = t('items').split(',');
  const doubled = [...items, ...items];

  return (
    <section className="overflow-hidden">
      <div className="relative">
        <div
          className="flex gap-6 whitespace-nowrap animate-marquee"
        >
          {doubled.map((sport, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-3 border border-primary/20 rounded-full"
            >
              <span className="text-2xl">{sportEmojis[sport.trim()] || '\u{1F3C5}'}</span>
              <span className="text-charcoal text-sm font-medium tracking-wide uppercase">
                {sport.trim()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
