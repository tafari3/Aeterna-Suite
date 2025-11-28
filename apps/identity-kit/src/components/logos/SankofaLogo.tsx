import * as React from 'react';

type Mode = 'light' | 'dark' | 'mono' | 'reversed';

interface SankofaLogoProps {
  mode?: Mode;
  size?: number;
  className?: string;
  label?: string;     // for lockups
  color?: string;     // override glyph color for mono/reversed
}

const GLYPH_SRC = '/brand/sankofa.png'; // transparent PNG of the book mark

function palette(mode: Mode) {
  switch (mode) {
    case 'dark':
      return { text: '#F9FAFB', accent: '#0D9488', glyph: '#F9FAFB' };
    case 'mono':
      return { text: '#0F172A', accent: '#0F172A', glyph: '#0F172A' };
    case 'reversed':
      return { text: '#F9FAFB', accent: '#F9FAFB', glyph: '#F9FAFB' };
    case 'light':
    default:
      return { text: '#0F172A', accent: '#0D9488', glyph: '#0D9488' };
  }
}

/**
 * Use the PNG as a CSS mask so we can recolor cleanly while preserving
 * the exact linework. Requires the PNG to have a transparent background.
 */
function SankofaGlyph({
  size,
  color,
}: {
  size: number;
  color: string;
}) {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    background: color,
    WebkitMaskImage: `url(${GLYPH_SRC})`,
    maskImage: `url(${GLYPH_SRC})`,
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
  };
  return <div style={style} aria-label="Sankofa mark" role="img" />;
}

export function SankofaLogo({
  mode = 'light',
  size = 120,
  className = '',
  color,
}: SankofaLogoProps) {
  const { glyph } = palette(mode);
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SankofaGlyph size={size} color={color ?? glyph} />
    </div>
  );
}

export function SankofaHorizontal({
  mode = 'light',
  size = 200,
  className = '',
  label = 'SANKOFA LEARN',
}: SankofaLogoProps) {
  const { text, accent, glyph } = palette(mode);
  return (
    <div className={`inline-flex items-center gap-4 ${className}`} style={{ height: size * 0.42 }}>
      <SankofaGlyph size={size * 0.42} color={glyph} />
      <span
        style={{
          fontFamily: 'Poppins, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: size * 0.18,
          letterSpacing: 0.5,
          color: text,
          lineHeight: 1,
        }}
      >
        {/* Split coloring like your spec */}
        <span>SANKOFA </span>
        <span style={{ color: accent }}>LEARN</span>
      </span>
    </div>
  );
}

export function SankofaStacked({
  mode = 'light',
  size = 200,
  className = '',
  label = 'SANKOFA LEARN',
}: SankofaLogoProps) {
  const { text, accent, glyph } = palette(mode);
  return (
    <div className={`inline-flex flex-col items-center gap-3 ${className}`} style={{ width: size }}>
      <SankofaGlyph size={size * 0.62} color={glyph} />
      <div
        style={{
          fontFamily: 'Poppins, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: size * 0.11,
          letterSpacing: 0.5,
          textAlign: 'center',
          lineHeight: 1.05,
          color: text,
        }}
      >
        <span>SANKOFA </span>
        <span style={{ color: accent }}>LEARN</span>
      </div>
    </div>
  );
}
