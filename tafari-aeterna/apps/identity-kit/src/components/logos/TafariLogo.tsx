import * as React from 'react';

type Mode = 'light' | 'dark' | 'mono' | 'reversed';

interface BaseProps {
  mode?: Mode;
  size?: number;
  className?: string;
  /** Optional override for the glyph color (e.g. "#0D9488"). */
  color?: string;
  /** Optional override for the wordmark text. */
  label?: string;
}

const GLYPH_SRC = '/brand/tafaritech.png';

/**
 * Renders the axe-T via CSS mask so we can recolor without multiple assets.
 * Requires the PNG to have a transparent background.
 */
function TafariGlyph({ size = 120, color = '#0D9488' }: { size?: number; color?: string }) {
  const s: React.CSSProperties = {
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
  return <div style={s} aria-hidden />;
}

function colorsFor(mode: Mode): { glyph: string; text: string } {
  switch (mode) {
    case 'dark':
      return { glyph: '#F9FAFB', text: '#F9FAFB' };
    case 'mono':
      return { glyph: '#0F172A', text: '#0F172A' };
    case 'reversed':
      return { glyph: '#FFFFFF', text: '#0F172A' };
    case 'light':
    default:
      return { glyph: '#0D9488', text: '#0F172A' };
  }
}

export function TafariLogo({ mode = 'light', size = 120, className = '', color }: BaseProps) {
  const { glyph } = colorsFor(mode);
  const pad = Math.round(size * 0.15);

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        // No background tile — fully transparent
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TafariGlyph size={size - pad} color={color ?? glyph} />
    </div>
  );
}

/** Horizontal lockup: glyph + wordmark */
export function TafariHorizontal({
  mode = 'light',
  size = 64,
  className = '',
  color,
  label = 'Tafari Technologies',
}: BaseProps) {
  const { text, glyph } = colorsFor(mode);
  return (
    <div
      className={className}
      style={{ display: 'flex', alignItems: 'center', gap: 16 }}
    >
      <TafariGlyph size={size} color={color ?? glyph} />
      <span
        style={{
          fontFamily: 'Poppins, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: size * 0.9,
          color: text,
          letterSpacing: 0.5,
        }}
      >
        {label}
      </span>
    </div>
  );
}

/** Stacked lockup: glyph above wordmark */
export function TafariStacked({
  mode = 'light',
  size = 96,
  className = '',
  color,
  label = 'Tafari Technologies',
}: BaseProps) {
  const { text, glyph } = colorsFor(mode);
  return (
    <div
      className={className}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
    >
      <TafariGlyph size={size} color={color ?? glyph} />
      <span
        style={{
          fontFamily: 'Poppins, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: size * 0.45,
          color: text,
          letterSpacing: 0.5,
        }}
      >
        {label}
      </span>
    </div>
  );
}
