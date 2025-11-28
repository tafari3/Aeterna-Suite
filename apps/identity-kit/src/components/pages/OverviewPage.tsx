// src/components/pages/OverviewPage.tsx
import React from 'react';
import { TafariLogo } from '../logos/TafariLogo';
import { AeternaLogo } from '../logos/AeternaLogo';
import { SankofaLogo } from '../logos/SankofaLogo';
import { UmojaLogo } from '../logos/UmojaLogo';
import { KhanyieLogo } from '../logos/KhanyieLogo';

type BrandTileProps = {
  label: string;
  subtitle: string;
  Logo: React.ComponentType<{ size?: number; mode?: any }>;
};

const TileShell =
  'bg-[#F3F4F6] rounded-2xl p-8 flex items-center justify-center aspect-square overflow-hidden';

function BrandTile({ label, subtitle, Logo }: BrandTileProps) {
  return (
    <div className="text-center space-y-3">
      <div className={TileShell}>
        <Logo size={80} />
      </div>
      <p className="font-medium text-[14px]">{label}</p>
      <p className="text-gray-500 text-[12px]">{subtitle}</p>
    </div>
  );
}

export function OverviewPage() {
  const colors = [
    { name: 'Midnight Navy', hex: '#0F172A', usage: 'Primary text, backgrounds' },
    { name: 'Teal', hex: '#0D9488', usage: 'Tafari Technologies, Sankofa Learn' },
    { name: 'Teal Light', hex: '#5EEAD4', usage: 'Khanyie accents' },
    { name: 'Gold', hex: '#EAB308', usage: 'Aeterna Suite, Umoja Business' },
    { name: 'Light Grey', hex: '#F3F4F6', usage: 'Backgrounds, surfaces' },
    { name: 'White', hex: '#F9FAFB', usage: 'Backgrounds, reversed text' },
  ];

  const tokens = [
    { category: 'Spacing', values: '4, 8, 12, 16, 20, 24, 32, 40 px' },
    { category: 'Radii', values: '6, 8, 12, 16, 24 px' },
    { category: 'Icon Spec', values: '24×24 viewBox, 2px stroke, round caps/joins' },
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="mb-4">Tafari Identity System</h1>
        <p className="text-gray-600 max-w-3xl">
          A complete visual identity system for the Tafari brand family. This system includes five distinct brands
          unified by consistent design principles, color palette, typography, and iconography.
        </p>
      </section>

      {/* Brand Family */}
      <section>
        <h2 className="mb-8">Brand Family</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <BrandTile label="Tafari Technologies" subtitle="Master Brand" Logo={TafariLogo} />
          <BrandTile label="Aeterna Suite" subtitle="Premium Software" Logo={AeternaLogo} />
          <BrandTile label="Sankofa Learn" subtitle="Education Platform" Logo={SankofaLogo} />
          <BrandTile label="Umoja Business" subtitle="Business Solutions" Logo={UmojaLogo} />
          <BrandTile label="Khanyie" subtitle="AI Assistant" Logo={KhanyieLogo} />
        </div>
      </section>

      {/* Color Palette */}
      <section>
        <h2 className="mb-8">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {colors.map((c) => (
            <div key={c.hex} className="space-y-3">
              <div
                className="aspect-square rounded-xl border-2 border-gray-200"
                style={{ backgroundColor: c.hex }}
                aria-label={c.name}
              />
              <div>
                <p className="font-medium text-[14px]">{c.name}</p>
                <p className="text-gray-500 text-[12px] font-mono">{c.hex}</p>
                <p className="text-gray-600 mt-2 text-[12px]">{c.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="mb-8">Typography</h2>
        <div className="space-y-6 bg-[#F3F4F6] p-8 rounded-2xl">
          <div className="space-y-2">
            <p className="text-gray-600 text-[12px]">Headings / Logos</p>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '32px' }}>
              Poppins Bold
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600 text-[12px]">Body / UI</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px' }}>
              Inter Regular — The quick brown fox jumps over the lazy dog
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t border-gray-300">
            <div>
              <p className="text-gray-600 text-[12px]">H1</p>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '40px', lineHeight: 1.2 }}>Aa</p>
              <p className="text-gray-600 text-[12px]">40px</p>
            </div>
            <div>
              <p className="text-gray-600 text-[12px]">H2</p>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '32px', lineHeight: 1.2 }}>Aa</p>
              <p className="text-gray-600 text-[12px]">32px</p>
            </div>
            <div>
              <p className="text-gray-600 text-[12px]">H3</p>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '24px', lineHeight: 1.2 }}>Aa</p>
              <p className="text-gray-600 text-[12px]">24px</p>
            </div>
            <div>
              <p className="text-gray-600 text-[12px]">Body</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: 1.6 }}>Aa</p>
              <p className="text-gray-600 text-[12px]">16px</p>
            </div>
            <div>
              <p className="text-gray-600 text-[12px]">Caption</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: 1.4 }}>Aa</p>
              <p className="text-gray-600 text-[12px]">12px</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tokens */}
      <section>
        <h2 className="mb-8">Design Tokens</h2>
        <div className="bg-[#F3F4F6] rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0F172A] text-white">
                <th className="text-left p-4 text-[14px] font-semibold">Category</th>
                <th className="text-left p-4 text-[14px] font-semibold">Values</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((t, i) => (
                <tr key={i} className="border-t border-gray-300">
                  <td className="p-4 font-medium text-[14px]">{t.category}</td>
                  <td className="p-4 text-[14px] font-mono">{t.values}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// keep both exports to avoid HMR/import shape issues
export default OverviewPage;
