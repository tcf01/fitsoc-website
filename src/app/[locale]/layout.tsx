import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Lexend, Noto_Sans_TC } from 'next/font/google';
import Preloader from '@/components/animations/Preloader';
import LenisProvider from '@/components/animations/LenisProvider';
import GsapProvider from '@/components/animations/GsapProvider';
import '../globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-lexend',
});

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-tc',
});

export const metadata: Metadata = {
  title: 'FitSoc HK - Find Your Sport, Find Your People',
  description:
    "Hong Kong's #1 app for discovering sports sessions, joining clubs, and meeting active people near you.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${lexend.variable} ${notoSansTC.variable}`}>
      <body className="font-sans">
        <Preloader />
        <NextIntlClientProvider messages={messages}>
          <LenisProvider>
            <GsapProvider>{children}</GsapProvider>
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
