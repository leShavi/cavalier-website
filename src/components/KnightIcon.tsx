'use client';

interface KnightIconProps {
  className?: string;
  animated?: boolean;
}

export default function KnightIcon({ className = '', animated = false }: KnightIconProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animated ? 'animate-float' : ''}`}
    >
      {/* Base */}
      <rect x="15" y="105" width="70" height="10" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="20" y="95" width="60" height="12" rx="2" fill="currentColor" opacity="0.5" />

      {/* Knight Body - Stylized */}
      <path
        d="M35 95
           L35 75
           C35 65 30 55 30 45
           C30 35 35 25 45 20
           L50 18
           C55 16 60 18 65 25
           L68 32
           C72 40 70 50 68 55
           L65 60
           C63 65 65 70 65 75
           L65 95
           Z"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Mane */}
      <path
        d="M45 20
           C40 25 38 35 40 45
           L42 40
           C44 35 43 30 45 25
           C47 30 46 35 48 40
           L50 35
           C52 30 50 25 50 20
           L45 20Z"
        fill="currentColor"
        opacity="0.6"
      />

      {/* Head */}
      <path
        d="M50 18
           L60 22
           C70 25 78 30 80 40
           C82 50 78 55 70 58
           L60 60
           C55 61 50 58 48 55
           L45 50
           C42 45 45 38 50 35
           C55 32 60 35 62 40
           C58 38 54 40 54 44
           C54 48 58 50 62 48
           L65 45
           C68 42 68 38 65 35
           C62 30 55 28 50 30
           L45 35
           C40 40 40 48 45 52
           L50 55
           C45 52 42 45 45 40
           C48 35 55 32 60 35"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Eye */}
      <circle cx="58" cy="42" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="58" cy="42" r="1.5" fill="currentColor" />

      {/* Ear */}
      <path
        d="M52 22 L48 12 L55 18 Z"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Nostril */}
      <circle cx="72" cy="52" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
