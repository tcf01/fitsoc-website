'use client';

import { useState, useEffect } from 'react';

type Phase = 'drawing' | 'filled' | 'revealing' | 'done';

export default function Preloader() {
  const [phase, setPhase] = useState<Phase>('drawing');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('filled'), 1500);
    const t2 = setTimeout(() => setPhase('revealing'), 2600);
    const t3 = setTimeout(() => setPhase('done'), 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <>
      <style>{`
        @keyframes strokeDraw {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes fillFadeIn {
          0% { fill-opacity: 0; }
          100% { fill-opacity: 1; }
        }
        @keyframes taglineFadeIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes dotPulse1 {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes dotPulse2 {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes dotPulse3 {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        .preloader-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #23110f;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }

        .preloader-overlay--revealing {
          animation: slideUp 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        .preloader-svg-text {
          font-family: var(--font-lexend), sans-serif;
          font-weight: 700;
          font-size: 80px;
          stroke: #FA5F47;
          stroke-width: 1.5;
          fill: #FA5F47;
          fill-opacity: 0;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: strokeDraw 1.4s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        .preloader-svg-text--filled {
          animation:
            strokeDraw 1.4s cubic-bezier(0.65, 0, 0.35, 1) forwards,
            fillFadeIn 0.8s ease forwards 1.5s;
        }

        .preloader-tagline {
          color: rgba(255, 255, 255, 0.7);
          font-family: var(--font-lexend), sans-serif;
          font-size: 14px;
          font-weight: 300;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 24px;
          opacity: 0;
        }

        .preloader-tagline--visible {
          animation: taglineFadeIn 0.6s ease forwards;
        }

        .preloader-dots {
          display: flex;
          gap: 6px;
          margin-top: 40px;
        }

        .preloader-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #FA5F47;
          opacity: 0.2;
        }

        .preloader-dot:nth-child(1) {
          animation: dotPulse1 1s ease-in-out infinite;
        }
        .preloader-dot:nth-child(2) {
          animation: dotPulse2 1s ease-in-out 0.15s infinite;
        }
        .preloader-dot:nth-child(3) {
          animation: dotPulse3 1s ease-in-out 0.3s infinite;
        }

        .preloader-dots--hidden {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
      `}</style>

      <div
        className={`preloader-overlay ${phase === 'revealing' ? 'preloader-overlay--revealing' : ''}`}
      >
        <svg
          viewBox="0 0 380 100"
          width="380"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="FitSoc"
        >
          <text
            x="50%"
            y="75"
            textAnchor="middle"
            className={`preloader-svg-text ${phase !== 'drawing' ? 'preloader-svg-text--filled' : ''}`}
          >
            FitSoc
          </text>
        </svg>

        <div
          className={`preloader-tagline ${phase !== 'drawing' ? 'preloader-tagline--visible' : ''}`}
        >
          Find Your Sport, Find Your People
        </div>

        <div className={`preloader-dots ${phase !== 'drawing' ? 'preloader-dots--hidden' : ''}`}>
          <span className="preloader-dot" />
          <span className="preloader-dot" />
          <span className="preloader-dot" />
        </div>
      </div>
    </>
  );
}
