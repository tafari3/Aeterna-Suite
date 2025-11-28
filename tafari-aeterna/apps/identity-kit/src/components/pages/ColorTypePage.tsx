import * as React from 'react';

type ColorDef = {
  slug: string;
  name: string;
  hex: string;
  rgb: string;
  usage: string;
  contrastNote: string;
  on: '#F9FAFB' | '#0F172A';
};

const PALETTE: ColorDef[] = [
  { slug: 'navy', name: 'Midnight Navy', hex: '#0F172A', rgb: '15, 23, 42', usage: 'Primary text, dark backgrounds, professional tone', contrastNote: 'WCAG AAA with white', on: '#F9FAFB' },
  { slug: 'teal', name: 'Teal', hex: '#0D9488', rgb: '13, 148, 136', usage: 'Tafari Technologies, Sankofa, interactive elements', contrastNote: 'WCAG AA with white', on: '#F9FAFB' },
  { slug: 'teal-light', name: 'Teal Light', hex: '#5EEAD4', rgb: '94, 234, 212', usage: 'Khanyie accents, highlights, hover states', contrastNote: 'WCAG AA with navy for regular text', on: '#0F172A' },
  { slug: 'gold', name: 'Gold', hex: '#EAB308', rgb: '234, 179, 8', usage: 'Aeterna Suite, Umoja Business, premium features', contrastNote: 'WCAG AA with navy', on: '#0F172A' },
  { slug: 'grey', name: 'Light Grey', hex: '#F3F4F6', rgb: '243, 244, 246', usage: 'Backgrounds, cards, subtle dividers', contrastNote: 'Background use; pair with navy text', on: '#0F172A' },
  { slug: 'white', name: 'White', hex: '#F9FAFB', rgb: '249, 250, 251', usage: 'Page backgrounds, reversed text on dark', contrastNote: 'WCAG AAA with navy', on: '#0F172A' },
];

// children is optional to silence “children required” errors
const Mono: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 14 }}>
    {children}
  </span>
);

// Use React.FC so React’s special `key` prop doesn’t trip TS
const Swatch: React.FC<{ c: ColorDef }> = ({ c }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Color tile */}
        <div className="w-full md:w-52 h-52 flex-shrink-0 relative" style={{ backgroundColor: c.hex }}>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4"
               style={{ color: c.on, fontWeight: 700 }}>
            {c.name}
          </div>
        </div>
        {/* Meta */}
        <div className="flex-1 p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">{c.name}</h3>
            <div className="flex flex-wrap gap-6">
              <div><Mono>HEX: {c.hex}</Mono></div>
              <div><Mono>RGB: {c.rgb}</Mono></div>
              <div><Mono>Token: var(--color-{/* keep braces literal in UI */}{c.slug})</Mono></div>
            </div>
          </div>
          <div>
            <p className="font-medium mb-1 text-sm">Usage</p>
            <p className="text-gray-600 text-sm">{c.usage}</p>
          </div>
          <div>
            <p className="font-medium mb-1 text-sm">Accessibility</p>
            <p className="text-gray-600 text-sm">{c.contrastNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TYPE_SCALE = [
  { name: 'H1', size: 40, weight: 700, family: 'Poppins', usage: 'Page titles, hero headlines' },
  { name: 'H2', size: 32, weight: 600, family: 'Poppins', usage: 'Section headers' },
  { name: 'H3', size: 24, weight: 600, family: 'Poppins', usage: 'Subsection titles' },
  { name: 'Body', size: 16, weight: 400, family: 'Inter', usage: 'Paragraphs, general text' },
  { name: 'Caption', size: 12, weight: 400, family: 'Inter', usage: 'Labels, metadata, footnotes' },
];

const TypeRow: React.FC<{ name: string; size: number; weight: number; family: string; usage: string }> = ({
  name, size, weight, family, usage,
}) => (
  <tr className="border-t border-gray-300">
    <td className="p-4 font-medium text-sm">{name}</td>
    <td className="p-4 text-sm"><Mono>{size}px / {weight}</Mono></td>
    <td className="p-4 text-sm">{family}</td>
    <td className="p-4 text-sm text-gray-600">{usage}</td>
  </tr>
);

export function ColorTypePage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="mb-4">Color & Typography</h1>
        <p className="text-gray-600 max-w-3xl">
          Consistent tokens for color and type across Tafari Technologies and products.
        </p>
      </section>

      {/* Color Swatches */}
      <section>
        <h2 className="mb-8">Color Palette</h2>
        <div className="space-y-6">
          {PALETTE.map((c) => (
            <Swatch key={c.slug} c={c} />
          ))}
        </div>
      </section>

      {/* Approved Combinations */}
      <section>
        <h2 className="mb-8">Approved Color Combinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0F172A] p-8 rounded-2xl text-center"><p className="text-white text-base">White on Navy</p></div>
          <div className="bg-[#0D9488] p-8 rounded-2xl text-center"><p className="text-white text-base">White on Teal</p></div>
          <div className="bg-[#EAB308] p-8 rounded-2xl text-center"><p className="text-[#0F172A] text-base">Navy on Gold</p></div>
          <div className="bg-[#F9FAFB] border-2 border-gray-200 p-8 rounded-2xl text-center"><p className="text-[#0F172A] text-base">Navy on White</p></div>
          <div className="bg-[#F3F4F6] p-8 rounded-2xl text-center"><p className="text-[#0F172A] text-base">Navy on Grey</p></div>
          <div className="bg-[#0F172A] p-8 rounded-2xl text-center"><p className="text-[#5EEAD4] text-base">Teal-Light on Navy</p></div>
        </div>
      </section>

      {/* Type Scale */}
      <section>
        <h2 className="mb-8">Typography Scale</h2>
        <div className="bg-[#F3F4F6] rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0F172A] text-white">
                <th className="text-left p-4 text-sm font-semibold">Style</th>
                <th className="text-left p-4 text-sm font-semibold">Size / Weight</th>
                <th className="text-left p-4 text-sm font-semibold">Family</th>
                <th className="text-left p-4 text-sm font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody>
              {TYPE_SCALE.map((t) => (
                <TypeRow
                  key={t.name}
                  name={t.name}
                  size={t.size}
                  weight={t.weight}
                  family={t.family}
                  usage={t.usage}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tokens (CSS) */}
      <section>
        <h2 className="mb-8">CSS Variable Reference</h2>
        <div className="bg-[#0F172A] text-white p-8 rounded-2xl overflow-x-auto">
          <pre style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 12, lineHeight: 1.8 }}>
{`:root {
  --color-navy: #0F172A;
  --color-teal: #0D9488;
  --color-teal-light: #5EEAD4;
  --color-gold: #EAB308;
  --color-grey: #F3F4F6;
  --color-white: #F9FAFB;

  --type-h1: 40px;
  --type-h2: 32px;
  --type-h3: 24px;
  --type-body: 16px;
  --type-caption: 12px;
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}
