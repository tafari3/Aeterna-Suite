// src/components/pages/SocialBannersPage.tsx
import React from 'react';
import { TafariLogo } from '../logos/TafariLogo';
import { AeternaLogo } from '../logos/AeternaLogo';
import { SankofaLogo } from '../logos/SankofaLogo';
import { UmojaLogo } from '../logos/UmojaLogo';
import { KhanyieLogo } from '../logos/KhanyieLogo';

type Mode = 'light' | 'dark' | 'mono' | 'reversed';
type LogoC = React.ComponentType<{ size?: number; mode?: Mode; className?: string }>;

type BrandDef = {
  name: string;
  color: string;
  Logo: LogoC;
};

const BRANDS: BrandDef[] = [
  { name: 'Tafari Technologies', Logo: TafariLogo, color: '#0D9488' },
  { name: 'Aeterna Suite',       Logo: AeternaLogo, color: '#EAB308' },
  { name: 'Sankofa Learn',       Logo: SankofaLogo, color: '#0D9488' },
  { name: 'Umoja Business',      Logo: UmojaLogo,   color: '#EAB308' },
  { name: 'Khanyie',             Logo: KhanyieLogo, color: '#0D9488' },
];

export function SocialBannersPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="mb-4">Social & Banners</h1>
        <p className="text-gray-600 max-w-3xl">
          Social media templates and banner assets for all five brands in light and dark variants.
          All templates maintain proper spacing, clearspace, and brand consistency.
        </p>
      </section>

      {/* OG Images (1200x630) */}
      <section>
        <h2 className="mb-8">Open Graph / Meta Images (1200×630)</h2>
        <div className="space-y-12">
          {BRANDS.map((brand) => {
            const [first, second] = brand.name.split(' ');
            return (
              <div key={`og-${brand.name}`} className="space-y-4">
                <h3>{brand.name}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Light */}
                  <div className="space-y-2">
                    <div
                      className="bg-[#F9FAFB] flex items-center justify-between px-16 py-12 border-2 border-gray-200 rounded-xl overflow-hidden"
                      style={{ aspectRatio: '1200 / 630' }}
                      aria-label={`${brand.name} OG light preview`}
                    >
                      <brand.Logo size={140} />
                      <div className="text-right">
                        <p
                          style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 700,
                            fontSize: '32px',
                            color: '#0F172A',
                          }}
                        >
                          {first}
                        </p>
                        {second && (
                          <p
                            style={{
                              fontFamily: 'Poppins, sans-serif',
                              fontWeight: 600,
                              fontSize: '24px',
                              color: brand.color,
                            }}
                          >
                            {second}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 text-[12px]">Light • 1200×630px</p>
                  </div>

                  {/* Dark */}
                  <div className="space-y-2">
                    <div
                      className="bg-[#0F172A] flex items-center justify-between px-16 py-12 rounded-xl overflow-hidden"
                      style={{ aspectRatio: '1200 / 630' }}
                      aria-label={`${brand.name} OG dark preview`}
                    >
                      <brand.Logo mode="dark" size={140} />
                      <div className="text-right">
                        <p
                          style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 700,
                            fontSize: '32px',
                            color: '#F9FAFB',
                          }}
                        >
                          {first}
                        </p>
                        {second && (
                          <p
                            style={{
                              fontFamily: 'Poppins, sans-serif',
                              fontWeight: 600,
                              fontSize: '24px',
                              color: brand.color,
                            }}
                          >
                            {second}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 text-[12px]">Dark • 1200×630px</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Social Headers */}
      <section>
        <h2 className="mb-8">Social Headers (1500×500)</h2>
        <div className="space-y-12">
          {BRANDS.slice(0, 2).map((brand) => (
            <div key={`hdr-${brand.name}`} className="space-y-4">
              <h3>{brand.name}</h3>
              <div className="space-y-4">
                {/* Light */}
                <div className="space-y-2">
                  <div
                    className="bg-[#F9FAFB] flex items-center justify-center gap-8 px-12 border-2 border-gray-200 rounded-xl overflow-hidden"
                    style={{ aspectRatio: '1500 / 500' }}
                    aria-label={`${brand.name} header light`}
                  >
                    <brand.Logo size={120} />
                    <p
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: '40px',
                        color: '#0F172A',
                        letterSpacing: '-0.02em',
                      }}
                      className="text-center"
                    >
                      {brand.name.toUpperCase()}
                    </p>
                  </div>
                  <p className="text-gray-600 text-[12px]">Light • 1500×500px</p>
                </div>

                {/* Dark */}
                <div className="space-y-2">
                  <div
                    className="bg-[#0F172A] flex items-center justify-center gap-8 px-12 rounded-xl overflow-hidden"
                    style={{ aspectRatio: '1500 / 500' }}
                    aria-label={`${brand.name} header dark`}
                  >
                    <brand.Logo mode="dark" size={120} />
                    <p
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: '40px',
                        color: '#F9FAFB',
                        letterSpacing: '-0.02em',
                      }}
                      className="text-center"
                    >
                      {brand.name.toUpperCase()}
                    </p>
                  </div>
                  <p className="text-gray-600 text-[12px]">Dark • 1500×500px</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Square Posts */}
      <section>
        <h2 className="mb-8">Square Posts (1080×1080)</h2>
        <div className="space-y-12">
          {BRANDS.slice(0, 3).map((brand) => {
            const [first, second] = brand.name.split(' ');
            return (
              <div key={`sq-${brand.name}`} className="space-y-4">
                <h3>{brand.name}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Light */}
                  <div className="space-y-2">
                    <div
                      className="bg-[#F9FAFB] flex flex-col items-center justify-center gap-8 p-12 border-2 border-gray-200 rounded-xl overflow-hidden max-w-md mx-auto"
                      style={{ aspectRatio: '1 / 1' }}
                      aria-label={`${brand.name} square light`}
                    >
                      <brand.Logo size={180} />
                      <div className="text-center">
                        <p
                          style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 700,
                            fontSize: '36px',
                            color: '#0F172A',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {first}
                        </p>
                        {second && (
                          <p
                            style={{
                              fontFamily: 'Poppins, sans-serif',
                              fontWeight: 600,
                              fontSize: '24px',
                              color: brand.color,
                            }}
                          >
                            {second}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 text-center text-[12px]">Light • 1080×1080px</p>
                  </div>

                  {/* Dark */}
                  <div className="space-y-2">
                    <div
                      className="bg-[#0F172A] flex flex-col items-center justify-center gap-8 p-12 rounded-xl overflow-hidden max-w-md mx-auto"
                      style={{ aspectRatio: '1 / 1' }}
                      aria-label={`${brand.name} square dark`}
                    >
                      <brand.Logo mode="dark" size={180} />
                      <div className="text-center">
                        <p
                          style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 700,
                            fontSize: '36px',
                            color: '#F9FAFB',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {first}
                        </p>
                        {second && (
                          <p
                            style={{
                              fontFamily: 'Poppins, sans-serif',
                              fontWeight: 600,
                              fontSize: '24px',
                              color: brand.color,
                            }}
                          >
                            {second}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 text-center text-[12px]">Dark • 1080×1080px</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Export Specifications */}
      <section>
        <h2 className="mb-8">Export Specifications</h2>
        <div className="bg-[#F3F4F6] rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0F172A] text-white">
                <th className="text-left p-4 text-[14px] font-semibold">Format</th>
                <th className="text-left p-4 text-[14px] font-semibold">Dimensions</th>
                <th className="text-left p-4 text-[14px] font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Open Graph / Meta</td>
                <td className="p-4 text-[14px] font-mono">1200×630px</td>
                <td className="p-4 text-[14px]">Social sharing, link previews</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Social Header</td>
                <td className="p-4 text-[14px] font-mono">1500×500px</td>
                <td className="p-4 text-[14px]">Profile headers, banners</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Square Post</td>
                <td className="p-4 text-[14px] font-mono">1080×1080px</td>
                <td className="p-4 text-[14px]">Feed posts, general sharing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// Keep default export for stable HMR even if importing the named export elsewhere.
export default SocialBannersPage;
