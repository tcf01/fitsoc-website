import Link from 'next/link';

export default function AppStoreBadge() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="#"
        className="inline-flex items-center gap-2 bg-black text-white rounded-lg px-5 py-3 hover:bg-gray-800 transition-colors"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] leading-none">Download on the</div>
          <div className="text-sm font-semibold leading-tight">App Store</div>
        </div>
      </Link>

      <Link
        href="#"
        className="inline-flex items-center gap-2 bg-black text-white rounded-lg px-5 py-3 hover:bg-gray-800 transition-colors"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3.18 23.77c-.39-.2-.73-.52-.98-.93-.26-.42-.4-.9-.4-1.4V2.56c0-.71.32-1.37.84-1.8l10.1 10.1L3.18 23.77zm1.65 .53 9.6-9.6 2.87 2.87-11.03 6.37c-.49.28-1.01.4-1.44.36zm13.42-10.2 3.07-1.78c.5-.29.8-.78.8-1.32s-.3-1.03-.8-1.32l-3.07-1.78-3.22 3.22 3.22 3.22-.01-.04zm-3.97-3.97L4.83.77C5.26.73 5.78.85 6.27 1.13l11.03 6.37-3.02 2.63z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] leading-none">GET IT ON</div>
          <div className="text-sm font-semibold leading-tight">Google Play</div>
        </div>
      </Link>
    </div>
  );
}
