import * as React from 'react';

export type AeternaMode = 'light' | 'dark' | 'mono' | 'reversed';

export interface AeternaLogoProps {
  mode?: AeternaMode;
  size?: number;
  className?: string;
  /** Optional ring color override for mono/reversed (e.g. "#FFFFFF") */
  color?: string;
}

const RING_SRC = '/brand/aeterna.png'; // transparent PNG of your gold ring

function colorsFor(mode: AeternaMode) {
  switch (mode) {
    case 'dark':
      return { text: '#F9FAFB', accent: '#EAB308' };
    case 'mono':
      return { text: '#0F172A', accent: '#0F172A' };
    case 'reversed':
      return { text: '#F9FAFB', accent: '#F9FAFB' };
    case 'light':
    default:
      return { text: '#0F172A', accent: '#EAB308' };
  }
}

/**
 * Renders the ring. In light/dark we show the exact PNG (gold gradient).
 * In mono/reversed (or if color is provided) we recolor via CSS mask
 * so you don’t need separate assets.
 */
function AeternaRing({
  mode = 'light',
  size = 120,
  color,
}: { mode?: AeternaMode; size?: number; color?: string }) {
  if (mode === 'mono' || mode === 'reversed' || color) {
    const ringColor = color ?? (mode === 'reversed' ? '#FFFFFF' : '#0F172A');
    const masked: React.CSSProperties = {
      width: size,
      height: size,
      background: ringColor,
      WebkitMaskImage: `url(${RING_SRC})`,
      maskImage: `url(${RING_SRC})`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
    };
    return <div style={masked} aria-label="Aeterna ring" role="img" />;
  }

  // Exact gold ring
  return (
    <img
      src={RING_SRC}
      width={size}
      height={size}
      alt="Aeterna ring"
      style={{ display: 'block', width: size, height: size, objectFit: 'contain' }}
    />
  );
}

export function AeternaLogo({
  mode = 'light',
  size = 120,
  className = '',
  color,
}: AeternaLogoProps) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        // keep transparent so pages can decide background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
      }}
    >
      <AeternaRing mode={mode} size={size} color={color} />
    </div>
  );
}

/** Horizontal lockup: ring + “AETERNA SUITE” */
export function AeternaHorizontal({
  mode = 'light',
  size = 200,
  className = '',
  color,
}: AeternaLogoProps) {
  const { text, accent } = colorsFor(mode);

  return (
    <div className={`inline-flex items-center gap-4 ${className}`} style={{ height: size * 0.45 }}>
      <AeternaRing mode={mode} size={size * 0.45} color={color} />
      <div
        style={{
          fontFamily: 'Poppins, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: size * 0.18,
          letterSpacing: -0.5,
          color: text,
          lineHeight: 1,
        }}
      >
        AETERNA <span style={{ color: accent }}>SUITE</span>
      </div>
    </div>
  );
}

/** Stacked lockup: ring above the wordmark */
export function AeternaStacked({
  mode = 'light',
  size = 200,
  className = '',
  color,
}: AeternaLogoProps) {
  const { text, accent } = colorsFor(mode);

  return (
    <div className={`inline-flex flex-col items-center gap-3 ${className}`} style={{ width: size }}>
      <AeternaRing mode={mode} size={size * 0.62} color={color} />
      <div
        style={{
          fontFamily: 'Poppins, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: size * 0.11,
          letterSpacing: -0.5,
          textAlign: 'center',
          color: text,
          lineHeight: 1.05,
        }}
      >
        AETERNA <span style={{ color: accent }}>SUITE</span>
      </div>
    </div>
  );
}
