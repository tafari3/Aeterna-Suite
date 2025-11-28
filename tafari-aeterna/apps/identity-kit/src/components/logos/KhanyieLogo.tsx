import * as React from 'react';

type Mode = 'light' | 'dark' | 'mono' | 'reversed';

interface KhanyieLogoProps {
  mode?: Mode;
  size?: number;
  className?: string;
  /** Optional custom label for lockups */
  label?: string;
}

/** Transparent PNG of your chat-bubble K */
const KHANYIE_SRC = '/brand/khanyie.png';

function labelColor(mode: Mode) {
  switch (mode) {
    case 'dark':
    case 'reversed':
      return '#F9FAFB'; // white on dark
    default:
      return '#0F172A'; // ink on light
  }
}

/**
 * We keep the exact PNG for visual fidelity.
 * For mono/reversed we approximate with a neutral filter to work in docs,
 * but the brand PNG remains the default for production usage.
 */
function filterFor(mode: Mode): string | undefined {
  switch (mode) {
    case 'mono':
      // approximate mono ink without separate assets
      return 'grayscale(1) contrast(1.2) brightness(0.3)';
    case 'reversed':
      // light-on-dark approximation
      return 'grayscale(1) brightness(2.0) contrast(0.9)';
    default:
      return undefined;
  }
}

export function KhanyieLogo({
  mode = 'light',
  size = 120,
  className = '',
}: KhanyieLogoProps) {
  return (
    <img
      src={KHANYIE_SRC}
      alt="Khanyie mark"
      width={size}
      height={size}
      className={className}
      style={{
        display: 'block',
        width: size,
        height: size,
        objectFit: 'contain',
        filter: filterFor(mode),
      }}
    />
  );
}

export function KhanyieHorizontal({
  mode = 'light',
  size = 200,
  className = '',
  label = 'KHANYIE',
}: KhanyieLogoProps) {
  return (
    <div
      className={`inline-flex items-center gap-4 ${className}`}
      style={{ height: size * 0.42 }}
    >
      <KhanyieLogo mode={mode} size={size * 0.42} />
      <span
        style={{
          fontFamily: 'Poppins, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: size * 0.18,
          color: labelColor(mode),
          letterSpacing: 0.5,
          lineHeight: 1,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function KhanyieStacked({
  mode = 'light',
  size = 200,
  className = '',
  label = 'KHANYIE',
}: KhanyieLogoProps) {
  return (
    <div
      className={`inline-flex flex-col items-center gap-3 ${className}`}
      style={{ width: size }}
    >
      <KhanyieLogo mode={mode} size={size * 0.62} />
      <span
        style={{
          fontFamily: 'Poppins, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: size * 0.11,
          color: labelColor(mode),
          letterSpacing: 0.5,
          textAlign: 'center',
          lineHeight: 1.05,
        }}
      >
        {label}
      </span>
    </div>
  );
}
