// src/components/pages/FaviconsPage.tsx
import * as React from 'react';
import { TafariLogo } from '../logos/TafariLogo';
import { AeternaLogo } from '../logos/AeternaLogo';
import { SankofaLogo } from '../logos/SankofaLogo';
import { UmojaLogo } from '../logos/UmojaLogo';
import { KhanyieLogo } from '../logos/KhanyieLogo';

type Mode = 'light' | 'dark' | 'mono' | 'reversed';
type LogoProps = { mode?: Mode; size?: number; className?: string };

type BrandDef = {
  name: string;
  color: string; // base brand color for maskable gradient
  LogoComponent: React.ComponentType<LogoProps>;
};

const BRANDS: BrandDef[] = [
  { name: 'Tafari Technologies', LogoComponent: TafariLogo, color: '#0D9488' },
  { name: 'Aeterna Suite',     LogoComponent: AeternaLogo, color: '#EAB308' },
  { name: 'Sankofa Learn',     LogoComponent: SankofaLogo, color: '#0D9488' },
  { name: 'Umoja Business',    LogoComponent: UmojaLogo,   color: '#EAB308' },
  { name: 'Khanyie',           LogoComponent: KhanyieLogo, color: '#0D9488' },
];

const FAVICON_SIZES = [16, 32, 48, 64] as const;
const APP_ICON_SIZES = [192, 512] as const;

function AppIconTile({
  brand,
  boxPx,
  radius = '16px',
  mode,
  caption,
}: {
  brand: BrandDef;
  boxPx: number;
  radius?: string;
  mode?: Mode;
  caption: React.ReactNode;
}) {
  const Logo = brand.LogoComponent;
  return (
    <div className="space-y-3">
      <div
        className="flex items-center justify-center aspect-square"
        style={{
          width: boxPx,
          height: boxPx,
          borderRadius: radius,
          background: 'var(--color-white, #F9FAFB)',
          border: '2px solid #e5e7eb',
        }}
      >
        <Logo mode={mode} size={Math.round(boxPx * 0.65)} />
      </div>
      <p className="text-center text-xs font-mono">{caption}</p>
    </div>
  );
}

export function FaviconsPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="mb-4">Favicons &amp; App Icons</h1>
        <p className="text-gray-600 max-w-3xl">
          Complete favicon and app icon sets for all five brands. Icons are optimized for
          browsers, iOS, Android, and PWAs.
        </p>
      </section>

      {/* Favicon previews */}
      <section>
        <h2 className="mb-8">Favicon Sizes</h2>
        <div className="space-y-12">
          {BRANDS.map((brand) => {
            const Logo = brand.LogoComponent;
            return (
              <div key={brand.name} className="space-y-4">
                <h3>{brand.name}</h3>
                <div className="p-8 rounded-2xl" style={{ background: 'var(--color-grey, #F3F4F6)' }}>
                  <div className="flex items-end gap-8 flex-wrap">
                    {FAVICON_SIZES.map((px) => (
                      <div key={px} className="text-center space-y-2">
                        <div
                          className="flex items-center justify-center mx-auto"
                          style={{
                            width: px * 2,
                            height: px * 2,
                            borderRadius: 4,
                            background: 'var(--color-white, #F9FAFB)',
                            border: '2px solid #e5e7eb',
                          }}
                          aria-label={`${brand.name} ${px}×${px} favicon preview`}
                        >
                          {/* ~80% of tile to avoid clipping */}
                          <Logo size={px * 1.6} />
                        </div>
                        <p className="text-xs font-mono">
                          {px}×{px}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* App icons */}
      <section>
        <h2 className="mb-8">App Icons</h2>
        <div className="space-y-12">
          {BRANDS.map((brand) => {
            const Logo = brand.LogoComponent;
            return (
              <div key={brand.name} className="space-y-4">
                <h3>{brand.name}</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-start">
                  {/* Apple touch icon (rounded-rect) */}
                  <AppIconTile
                    brand={brand}
                    boxPx={180}
                    radius="22%"
                    caption={<>apple-touch-icon<br />180×180</>}
                  />

                  {/* icon-192 */}
                  <AppIconTile
                    brand={brand}
                    boxPx={192}
                    caption={<>icon-192.png<br />192×192</>}
                  />

                  {/* icon-512 */}
                  <AppIconTile
                    brand={brand}
                    boxPx={220}
                    caption={<>icon-512.png<br />512×512</>}
                  />

                  {/* Maskable icon with safe zone */}
                  <div className="space-y-3">
                    <div
                      className="flex items-center justify-center aspect-square relative"
                      style={{
                        width: 220,
                        height: 220,
                        borderRadius: 16,
                        background: `linear-gradient(135deg, ${brand.color} 0%, ${brand.color}dd 100%)`,
                      }}
                      aria-label={`${brand.name} maskable-512 preview`}
                    >
                      <Logo mode="dark" size={Math.round(220 * 0.55)} />
                      <div
                        className="absolute border-2 border-white/60 border-dashed"
                        style={{ width: '80%', height: '80%', borderRadius: '50%' }}
                        aria-hidden
                      />
                    </div>
                    <p className="text-center text-xs font-mono">
                      maskable-512<br />512×512
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Export manifest */}
      <section>
        <h2 className="mb-8">Required Exports</h2>
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--color-grey, #F3F4F6)' }}>
          <table className="w-full">
            <thead>
              <tr className="text-[var(--color-white,#F9FAFB)]" style={{ background: 'var(--color-navy, #0F172A)' }}>
                <th className="text-left p-4 text-sm font-semibold">File</th>
                <th className="text-left p-4 text-sm font-semibold">Size</th>
                <th className="text-left p-4 text-sm font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['favicon.ico', 'Multi-size', 'Legacy browsers'],
                ['favicon-16x16.png', '16×16', 'Browser tabs (small)'],
                ['favicon-32x32.png', '32×32', 'Browser tabs (standard)'],
                ['apple-touch-icon.png', '180×180', 'iOS home screen'],
                ['icon-192.png', '192×192', 'Android home screen'],
                ['icon-512.png', '512×512', 'PWA splash'],
                ['icon-maskable-512.png', '512×512', 'Android adaptive (maskable)'],
              ].map(([file, size, purpose]) => (
                <tr key={file as string} className="border-t border-gray-300">
                  <td className="p-4 text-sm font-mono">{file}</td>
                  <td className="p-4 text-sm font-mono">{size}</td>
                  <td className="p-4 text-sm">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* HTML reference */}
      <section>
        <h2 className="mb-8">HTML Implementation</h2>
        <div
          className="p-6 rounded-xl text-[var(--color-white,#F9FAFB)]"
          style={{ background: 'var(--color-navy, #0F172A)' }}
        >
          <pre className="text-xs font-mono leading-7">
{`<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png">`}
          </pre>
        </div>
      </section>
    </div>
  );
}

export default FaviconsPage;
