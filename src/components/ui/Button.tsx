'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary text-white rounded-full px-8 py-3 hover:bg-primary-hover shadow',
  secondary:
    'border border-primary text-primary rounded-full px-8 py-3',
  ghost: 'text-primary px-8 py-3',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = `${variantStyles[variant]} inline-flex items-center justify-center font-medium transition-colors ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}
