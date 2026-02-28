'use client';

import Image from 'next/image';
import { type ReactNode } from 'react';

interface PhoneMockupProps {
  children?: ReactNode;
  src?: string;
  alt?: string;
  className?: string;
}

export default function PhoneMockup({
  children,
  src,
  alt = 'App screenshot',
  className = '',
}: PhoneMockupProps) {
  return (
    <div
      className={`relative aspect-[9/19.5] w-full max-w-[280px] rounded-[40px] border-[6px] border-gray-900 bg-black overflow-hidden shadow-2xl ${className}`}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" />
      ) : (
        children
      )}
    </div>
  );
}
