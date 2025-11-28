// src/components/pages/ProductFamilyPage.tsx
import React from 'react';
import { TafariLogo, TafariHorizontal } from '../logos/TafariLogo';
import { AeternaLogo, AeternaHorizontal } from '../logos/AeternaLogo';
import { SankofaLogo, SankofaHorizontal } from '../logos/SankofaLogo';
import { UmojaLogo, UmojaHorizontal } from '../logos/UmojaLogo';
import { KhanyieLogo, KhanyieHorizontal } from '../logos/KhanyieLogo';

type Mode = 'light' | 'dark' | 'mono' | 'reversed';
type IconC = React.ComponentType<{ size?: number; mode?: Mode }>;
type HorizC = React.ComponentType<{ size?: number; mode?: 'light' | 'dark' }>;

const MODES: Mode[] = ['light', 'dark', 'mono', 'reversed'];
const bgFor = (m: Mode) => (m === 'dark' || m === 'reversed' ? 'bg-[#0F172A]' : 'bg-[#F3F4F6]');
const tileShell = 'rounded-2xl overflow-hidden flex items-center justify-center';

const brands: { name: string; description: string; color: string; Icon: IconC; Horizontal: HorizC }[] = [
  {
    name: 'Tafari Technologies',
    description: 'Master brand — innovative technology solutions',
    color: '#0D9488',
    Icon: TafariLogo,
    Horizontal: TafariHorizontal,
  },
  {
    name: 'Aeterna Suite',
    description: 'Premium software for enterprise',
    color: '#EAB308',
    Icon: AeternaLogo,
    Horizontal: AeternaHorizontal,
  },
  {
    name: 'Sankofa Learn',
    description: 'Educational platform for lifelong learning',
    color: '#0D9488',
    Icon: SankofaLogo,
    Horizontal: SankofaHorizontal,
  },
  {
    name: 'Umoja Business',
    description: 'Unified business solutions and analytics',
    color: '#EAB308',
    Icon: UmojaLogo,
    Horizontal: UmojaHorizontal,
  },
  {
    name: 'Khanyie',
    description: 'AI-powered conversational assistant',
    color: '#0D9488',
    Icon: KhanyieLogo,
    Horizontal: KhanyieHorizontal,
  },
];

function IconTile({ mode, Icon }: { mode: Mode; Icon: IconC }) {
  return (
    <div className={`${tileShell} ${bgFor(mode)} aspect-square p-8`}>
      <Icon mode={mode} size={80} />
    </div>
  );
}

function HorizontalTile({ mode, Horizontal }: { mode: 'light' | 'dark'; Horizontal: HorizC }) {
  return (
    <div className={`${tileShell} ${bgFor(mode)} w-full min-h-[220px] p-8`}>
      <div className="max-w-full overflow-hidden">
        {/* Keep size modest so the lockup never overflows */}
        <Horizontal mode={mode} size={240} />
      </div>
    </div>
  );
}

export function ProductFamilyPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="mb-4">Product Family</h1>
        <p className="text-gray-600 max-w-3xl">
          The Tafari brand family consists of five distinct products, each with its own identity while maintaining
          cohesion through shared design principles, color palette, and typography.
        </p>
      </section>

      {/* Family Harmony */}
      <section>
        <h2 className="mb-8">Family Harmony</h2>
        <div className="bg-[#F3F4F6] p-12 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {brands.map((b) => (
              <div key={b.name} className="text-center space-y-3">
                <div className="bg-white rounded-2xl p-8 flex items-center justify-center aspect-square">
                  <b.Icon size={80} />
                </div>
                <p className="font-medium text-[14px]">{b.name}</p>
                <p className="text-gray-500 text-[12px]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Brand Sections */}
      {brands.map((b) => (
        <section key={b.name} className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded" style={{ backgroundColor: b.color }} />
            <h2 className="m-0">{b.name}</h2>
          </div>
          <p className="text-gray-600">{b.description}</p>

          {/* Icon Variants */}
          <div>
            <h3 className="mb-4">Icon Variants</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {MODES.map((m) => (
                <div key={`${b.name}-icon-${m}`} className="space-y-2">
                  <IconTile mode={m} Icon={b.Icon} />
                  <p className="text-center text-gray-600 capitalize text-[12px]">{m}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Horizontal Lockup */}
          <div>
            <h3 className="mb-4">Horizontal Lockup</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(['light', 'dark'] as const).map((m) => (
                <div key={`${b.name}-h-${m}`} className="space-y-2">
                  <HorizontalTile mode={m} Horizontal={b.Horizontal} />
                  <p className="text-center text-gray-600 capitalize text-[12px]">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Usage Matrix */}
      <section>
        <h2 className="mb-8">Brand Color Applications</h2>
        <div className="bg-[#F3F4F6] rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0F172A] text-white">
                <th className="text-left p-4 text-[14px] font-semibold">Brand</th>
                <th className="text-left p-4 text-[14px] font-semibold">Primary Color</th>
                <th className="text-left p-4 text-[14px] font-semibold">Accent</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Tafari Technologies', '#0D9488', 'Teal', '—'],
                ['Aeterna Suite', '#EAB308', 'Gold', 'Suite (wordmark)'],
                ['Sankofa Learn', '#0D9488', 'Teal', 'Learn (wordmark)'],
                ['Umoja Business', '#EAB308', 'Gold', 'Business (wordmark)'],
                ['Khanyie', '#0D9488', 'Teal', '#5EEAD4 Light'],
              ].map(([brand, hex, name, accent]) => (
                <tr key={brand as string} className="border-t border-gray-300">
                  <td className="p-4 text-[14px]">{brand}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded" style={{ backgroundColor: hex as string }} />
                      <span className="text-[12px] font-mono">
                        {hex as string} {name as string}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-[14px]">
                    {accent === '#5EEAD4 Light' ? (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#5EEAD4]" />
                        <span className="text-[12px] font-mono">#5EEAD4 Light</span>
                      </div>
                    ) : (
                      accent
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// Keep default export to avoid HMR “export removed” issues even if you import the named export.
export default ProductFamilyPage;
