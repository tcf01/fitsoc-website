'use client';

import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === 'en' ? 'zh-HK' : 'en';
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggle}
      className={`relative inline-flex h-9 w-20 items-center rounded-full bg-gray-200 p-1 transition-colors ${className}`}
    >
      <span
        className={`absolute h-7 w-9 rounded-full bg-white shadow transition-transform ${
          locale === 'en' ? 'translate-x-0' : 'translate-x-10'
        }`}
      />
      <span
        className={`relative z-10 flex-1 text-center text-sm font-medium ${
          locale === 'en' ? 'text-gray-900' : 'text-gray-500'
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex-1 text-center text-sm font-medium ${
          locale === 'zh-HK' ? 'text-gray-900' : 'text-gray-500'
        }`}
      >
        繁
      </span>
    </button>
  );
}
