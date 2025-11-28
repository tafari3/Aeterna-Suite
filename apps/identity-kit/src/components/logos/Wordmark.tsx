import * as React from 'react';

type Mode = 'light' | 'dark' | 'mono' | 'reversed';
type Brand = 'tafaritech' | 'aeterna' | 'sankofa' | 'umoja' | 'khanyie';

export interface WordmarkProps {
  brand: Brand;
  /** Base text color; overrides mode default */
  color?: string;
  /** Accent color for the second word on brands that split */
  accentColor?: string;
  /** Font size in px for the main word */
  size?: number;
  className?: string;
  /** light | dark | mono | reversed */
  mode?: Mode;
  /** Override the displayed text completely (no split) */
  titleOverride?: string;
}

const TITLES: Record<Brand, string> = {
  tafaritech: 'Tafari Technologies',
  aeterna: 'Aeterna Suite',
  sankofa: 'Sankofa Learn',
  umoja: 'Umoja Business',
  khanyie: 'Khanyie',
};

const DEFAULT_ACCENTS: Partial<Record<Brand, string>> = {
  aeterna: '#EAB308', // gold
  sankofa: '#0D9488', // teal
  umoja:  '#EAB308',  // gold
};

function textColorFor(mode: Mode): string {
  switch (mode) {
    case 'dark':
    case 'reversed':
      return '#F9FAFB';
    case 'mono':
      return '#0F172A';
    case 'light':
    default:
      return '#0F172A';
  }
}

/** Brands that split into two colored parts */
const SPLITABLE_BRANDS: Brand[] = ['aeterna', 'sankofa', 'umoja'];
const SPLITABLE: ReadonlySet<Brand> = new Set<Brand>(SPLITABLE_BRANDS);

export function Wordmark({
  brand,
  color,
  accentColor,
  size = 48,
  className = '',
  mode = 'light',
  titleOverride,
}: WordmarkProps) {
  const baseText = titleOverride ?? TITLES[brand];
  const text = color ?? textColorFor(mode);

  // If brand is splitable and no title override was provided, split on the space
  let first = baseText;
  let second: string | null = null;

  if (!titleOverride && SPLITABLE.has(brand)) {
    const i = baseText.indexOf(' ');
    if (i > 0) {
      first = baseText.slice(0, i);   // e.g., "Aeterna"
      second = baseText.slice(i + 1); // e.g., "Suite"
    }
  }

  // Accent resolves by priority: explicit prop -> brand default -> fallbacks
  let accent =
    accentColor ??
    DEFAULT_ACCENTS[brand as keyof typeof DEFAULT_ACCENTS] ??
    text;

  if (mode === 'mono') accent = text;          // single-color in mono
  if (mode === 'reversed') accent = '#F9FAFB'; // light on dark by default

  const baseStyle: React.CSSProperties = {
    fontFamily: 'Poppins, system-ui, sans-serif',
    fontWeight: 700,
    fontSize: size,
    letterSpacing: 0.5,
    lineHeight: 1,
    color: text,
    // Use Title Case for master brand and UPPERCASE for product brands:
    textTransform: brand === 'tafaritech' ? 'none' : 'uppercase',
    display: 'inline-block',
  };

  return (
    <span className={className} style={baseStyle} aria-label={baseText} role="text">
      {second ? (
        <>
          <span>{first} </span>
          <span style={{ color: accent }}>{second}</span>
        </>
      ) : (
        baseText
      )}
    </span>
  );
}
