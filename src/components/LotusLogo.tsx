import React from 'react';

interface LotusLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export const LotusLogo: React.FC<LotusLogoProps> = ({
  className = '',
  size = 40,
  color = '#C5A059',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Espaço Inovação Ícone"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAD293" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#9E7933" />
        </linearGradient>
      </defs>
      {/* Central Petal */}
      <path
        d="M50 8 C44 26 44 46 50 64 C56 46 56 26 50 8 Z"
        stroke="url(#goldGradient)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Left Petal */}
      <path
        d="M50 64 C36 48 30 32 38 18 C46 32 48 48 50 64 Z"
        stroke="url(#goldGradient)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Right Petal */}
      <path
        d="M50 64 C64 48 70 32 62 18 C54 32 52 48 50 64 Z"
        stroke="url(#goldGradient)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Outer Left Petal */}
      <path
        d="M50 64 C26 54 14 42 22 30 C34 42 42 54 50 64 Z"
        stroke="url(#goldGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Outer Right Petal */}
      <path
        d="M50 64 C74 54 86 42 78 30 C66 42 58 54 50 64 Z"
        stroke="url(#goldGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lowest Left Flank */}
      <path
        d="M50 64 C22 62 6 54 10 44 C24 52 38 58 50 64 Z"
        stroke="url(#goldGradient)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lowest Right Flank */}
      <path
        d="M50 64 C78 62 94 54 90 44 C76 52 62 58 50 64 Z"
        stroke="url(#goldGradient)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
