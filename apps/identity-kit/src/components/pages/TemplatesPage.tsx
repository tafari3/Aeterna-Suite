// src/components/pages/TemplatesPage.tsx
import React from 'react';
import { TafariLogo } from '../logos/TafariLogo';
import { AeternaLogo } from '../logos/AeternaLogo';
import { SankofaLogo } from '../logos/SankofaLogo';
import { UmojaLogo } from '../logos/UmojaLogo';
import { KhanyieLogo } from '../logos/KhanyieLogo';

export function TemplatesPage() {
  // keep domain as-is unless you tell me to change it
  const Site = 'www.tafari.industries';

  const TafariWordmark = ({
    color = '#0F172A',
    size = 48,
    className = '',
  }: { color?: string; size?: number; className?: string }) => (
    <span
      className={className}
      style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        fontSize: `${size}px`,
        letterSpacing: '-0.02em',
        color,
        lineHeight: 1.2,
        display: 'inline-block',
      }}
    >
      Tafari <span>Technologies</span>
    </span>
  );

  const BrandLockup = ({
    dark = false,
  }: { dark?: boolean }) => (
    <div className="flex items-center gap-3">
      <TafariLogo size={32} mode={dark ? 'reversed' : 'light'} />
      <TafariWordmark size={28} color={dark ? '#F9FAFB' : '#0F172A'} />
    </div>
  );

  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="mb-4">Templates</h1>
        <p className="text-gray-600 max-w-3xl">
          Ready-to-use templates for business cards, letterhead, email signatures, presentations,
          and digital applications. All templates use the design system tokens and are fully customizable.
        </p>
      </section>

      {/* Business Card */}
      <section>
        <h2 className="mb-8">Business Card (3.5&quot; × 2&quot;)</h2>
        <div className="space-y-6">
          {/* Front */}
          <div className="space-y-3">
            <p className="font-medium text-[14px]">Front</p>
            <div className="max-w-3xl">
              <div className="bg-[#0F172A] p-8 rounded-xl" style={{ aspectRatio: '3.5/2' }}>
                <div className="h-full w-full flex flex-col items-center justify-center text-center gap-3">
                  <TafariLogo mode="reversed" size={56} />
                  <TafariWordmark size={24} color="#FFFFFF" />
                </div>
                <div className="absolute right-8 bottom-6">
                  <p
                    className="text-white"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600 }}
                  >
                    {Site}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="space-y-3">
            <p className="font-medium text-[14px]">Back</p>
            <div className="max-w-3xl">
              <div
                className="bg-white border-2 border-gray-200 p-8 rounded-xl"
                style={{ aspectRatio: '3.5/2' }}
              >
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-1">
                    <p
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#0F172A',
                      }}
                    >
                      John Smith
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#0D9488' }}>
                      Senior Product Manager
                    </p>
                    <p
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#0F172A',
                        marginTop: '4px',
                      }}
                    >
                      Tafari Technologies
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#0F172A' }}>
                      john.smith@tafari.industries
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#0F172A' }}>
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Letterhead */}
      <section>
        <h2 className="mb-8">Letterhead (8.5&quot; × 11&quot;)</h2>
        <div className="max-w-2xl">
          <div
            className="relative bg-white border-2 border-gray-200 rounded-xl overflow-hidden"
            style={{ aspectRatio: '8.5/11' }}
          >
            {/* Header */}
            <div className="border-b border-gray-200 p-6 flex items-center justify-between">
              <BrandLockup />
              <div className="text-right">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#0F172A' }}>
                  123 Innovation Drive
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#0F172A' }}>
                  Tech City, TC 12345
                </p>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-4">
              <p className="text-gray-400 text-[11px]">[Letter content area]</p>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-4 bg-[#F3F4F6]">
              <div className="flex items-center justify-between">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#0F172A' }}>{Site}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#0F172A' }}>
                  info@tafari.industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signature */}
      <section>
        <h2 className="mb-8">Email Signature</h2>
        <div className="max-w-xl bg-[#F3F4F6] p-8 rounded-xl">
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#0D9488] rounded-lg flex items-center justify-center">
                  <TafariLogo mode="reversed" size={40} />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <p
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#0F172A',
                    }}
                  >
                    John Smith
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#0D9488' }}>
                    Senior Product Manager
                  </p>
                  <p
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#0F172A',
                      marginTop: '4px',
                    }}
                  >
                    Tafari Technologies
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-200 space-y-1">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#0F172A' }}>
                    📧 john.smith@tafari.industries
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#0F172A' }}>
                    📱 +1 (555) 123-4567
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#0D9488' }}>🌐 {Site}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Slide */}
      <section>
        <h2 className="mb-8">Presentation Cover Slide (16:9)</h2>
        <div className="space-y-6">
          {/* Light Version */}
          <div className="space-y-3">
            <p className="font-medium text-[14px]">Light Version</p>
            <div className="bg-[#F9FAFB] border-2 border-gray-200 rounded-xl p-12" style={{ aspectRatio: '16/9' }}>
              <div className="h-full flex flex-col justify-between">
                <BrandLockup />
                <div>
                  <h1 style={{ color: '#0F172A', marginBottom: '12px' }}>Presentation Title</h1>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#0D9488' }}>
                    Subtitle or tagline goes here
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#0F172A' }}>Presenter Name</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#0F172A' }}>November 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Version */}
          <div className="space-y-3">
            <p className="font-medium text-[14px]">Dark Version</p>
            <div className="bg-[#0F172A] rounded-xl p-12" style={{ aspectRatio: '16/9' }}>
              <div className="h-full flex flex-col justify-between">
                <BrandLockup dark />
                <div>
                  <h1 style={{ color: '#F9FAFB', marginBottom: '12px' }}>Presentation Title</h1>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#5EEAD4' }}>
                    Subtitle or tagline goes here
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9FAFB' }}>Presenter Name</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F9FAFB' }}>November 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Header */}
      <section>
        <h2 className="mb-8">Web Header</h2>
        <div className="space-y-6">
          {/* Light Header */}
          <div className="space-y-3">
            <p className="font-medium text-[14px]">Light Header</p>
            <div className="bg-white border-2 border-gray-200 rounded-xl">
              <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
                <BrandLockup />
                <nav className="flex items-center gap-6">
                  <a
                    href="#"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#0F172A' }}
                  >
                    Products
                  </a>
                  <a
                    href="#"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#0F172A' }}
                  >
                    About
                  </a>
                  <a
                    href="#"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#0F172A' }}
                  >
                    Contact
                  </a>
                  <button
                    className="px-5 py-2 bg-[#0D9488] text-white rounded-lg"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
                  >
                    Get Started
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Dark Header */}
          <div className="space-y-3">
            <p className="font-medium text-[14px]">Dark Header</p>
            <div className="bg-[#0F172A] rounded-xl">
              <div className="flex items-center justify-between px-8 py-4">
                <BrandLockup dark />
                <nav className="flex items-center gap-6">
                  <a
                    href="#"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F9FAFB' }}
                  >
                    Products
                  </a>
                  <a
                    href="#"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F9FAFB' }}
                  >
                    About
                  </a>
                  <a
                    href="#"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F9FAFB' }}
                  >
                    Contact
                  </a>
                  <button
                    className="px-5 py-2 bg-[#0D9488] text-white rounded-lg"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
                  >
                    Get Started
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Icon Tiles */}
      <section>
        <h2 className="mb-8">App Icon Display</h2>
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 md:p-10 rounded-3xl shadow-xl border border-white/20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
            {/* Tafari */}
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] w-full max-w-[180px] aspect-square flex items-center justify-center">
                <TafariLogo size={64} />
              </div>
              <p className="text-white text-sm font-medium">Tafari</p>
            </div>

            {/* Aeterna */}
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] w-full max-w-[180px] aspect-square flex items-center justify-center">
                <AeternaLogo size={64} />
              </div>
              <p className="text-white text-sm font-medium">Aeterna</p>
            </div>

            {/* Sankofa */}
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] w-full max-w-[180px] aspect-square flex items-center justify-center">
                <SankofaLogo size={64} />
              </div>
              <p className="text-white text-sm font-medium">Sankofa</p>
            </div>

            {/* Umoja */}
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] w-full max-w-[180px] aspect-square flex items-center justify-center">
                <UmojaLogo size={64} />
              </div>
              <p className="text-white text-sm font-medium">Umoja</p>
            </div>

            {/* Khanyie */}
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] w-full max-w-[180px] aspect-square flex items-center justify-center">
                <KhanyieLogo size={64} />
              </div>
              <p className="text-white text-sm font-medium">Khanyie</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TemplatesPage;
