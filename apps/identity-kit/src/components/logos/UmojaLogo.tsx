import * as React from 'react';

type Mode = 'light' | 'dark' | 'mono' | 'reversed';

interface UmojaLogoProps {
  mode?: Mode;
  size?: number;
  className?: string;
  label?: string;   // for lockups
  color?: string;   // override glyph color for mono/reversed
}

const GLYPH_SRC = '/brand/umoja.png'; // transparent PNG of the UB monogram

function palette(mode: Mode) {
  switch (mode) {
    case 'dark':
      return { text: '#F9FAFB', accent: '#EAB308', glyph: '#EAB308' };
    case 'mono':
      return { text: '#0F172A', accent: '#0F172A', glyph: '#0F172A' };
    case 'reversed':
      return { text: '#F9FAFB', accent: '#F9FAFB', glyph: '#F9FAFB' };
    case 'light':
    default:
      return { text: '#0F172A', accent: '#EAB308', glyph: '#EAB308' };
  }
}

/** Render the monogram using the PNG as a CSS mask so we can recolor cleanly. */
function UmojaGlyph({ size, color }: { size: number; color: string }) {
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
  return <div style={style} aria-label="Umoja Business monogram" role="img" />;
}

export function UmojaLogo({
  mode = 'light',
  size = 120,
  className = '',
  color,
}: UmojaLogoProps) {
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
      <UmojaGlyph size={size} color={color ?? glyph} />
    </div>
  );
}

export function UmojaHorizontal({
  mode = 'light',
  size = 200,
  className = '',
  label = 'UMOJA BUSINESS',
  color,
}: UmojaLogoProps) {
  const { text, accent, glyph } = palette(mode);
  return (
    <div className={`inline-flex items-center gap-4 ${className}`} style={{ height: size * 0.42 }}>
      <UmojaGlyph size={size * 0.42} color={color ?? glyph} />
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
        {/* Split color like the spec */}
        <span>UMOJA </span>
        <span style={{ color: accent }}>BUSINESS</span>
      </span>
    </div>
  );
}

export function UmojaStacked({
  mode = 'light',
  size = 200,
  className = '',
  label = 'UMOJA BUSINESS',
  color,
}: UmojaLogoProps) {
  const { text, accent, glyph } = palette(mode);
  return (
    <div className={`inline-flex flex-col items-center gap-3 ${className}`} style={{ width: size }}>
      <UmojaGlyph size={size * 0.62} color={color ?? glyph} />
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
        <span>UMOJA </span>
        <span style={{ color: accent }}>BUSINESS</span>
      </div>
    </div>
  );
}
