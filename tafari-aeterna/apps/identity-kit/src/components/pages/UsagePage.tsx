// src/components/pages/UsagePage.tsx
import { TafariLogo } from '../logos/TafariLogo';
import { CheckIcon, XIcon } from '../icons/IconSet';

function GoodCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-green-50 border-2 border-green-200 p-8 rounded-xl">
      <div className="flex items-start gap-3 mb-6">
        <CheckIcon size={24} color="#0D9488" />
        <p className="font-medium text-[14px]">{title}</p>
      </div>
      {children}
    </div>
  );
}

function BadCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-red-50 border-2 border-red-200 p-8 rounded-xl">
      <div className="flex items-start gap-3 mb-6">
        <XIcon size={24} color="#DC2626" />
        <p className="font-medium text-[14px]">{title}</p>
      </div>
      {children}
    </div>
  );
}

export function UsagePage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="mb-4">Usage & Misuse</h1>
        <p className="text-gray-600 max-w-3xl">
          Guidelines for proper and improper use of the Tafari brand identity.
          Follow these rules to keep the brand consistent and clean.
        </p>
      </section>

      {/* Clearspace */}
      <section>
        <h2 className="mb-8">Clearspace</h2>
        <div className="bg-[#F3F4F6] p-12 rounded-2xl">
          {/* Use padding instead of absolutely-positioned guides to avoid overflow */}
          <div className="max-w-2xl mx-auto">
            <div className="border-2 border-dashed border-[#0D9488] rounded-xl p-20 bg-white flex items-center justify-center">
              {/* p-20 = 80px ≈ 0.5× when the icon is 160px */}
              <TafariLogo size={160} />
            </div>
            <p className="text-center mt-4 text-[#0D9488] text-[12px] font-medium">
              Clearspace shown as 0.5× icon width (80px for a 160px icon)
            </p>
          </div>
          <p className="text-center mt-6 text-gray-600 text-[14px]">
            Maintain minimum clearspace of 0.5× the icon width on all sides.
          </p>
        </div>
      </section>

      {/* Minimum Sizes */}
      <section>
        <h2 className="mb-8">Minimum Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F3F4F6] p-8 rounded-xl text-center space-y-4">
            <div className="flex items-center justify-center">
              <TafariLogo size={24} />
            </div>
            <div>
              <p className="font-medium text-[14px]">Icon Only</p>
              <p className="text-gray-600 text-[12px] font-mono">24px minimum</p>
            </div>
          </div>

          <div className="bg-[#F3F4F6] p-8 rounded-xl text-center space-y-4">
            <div className="flex items-center justify-center h-[48px]">
              <div className="w-[120px]">
                {/* Using the icon as a proxy for the lockup width demo */}
                <TafariLogo size={48} />
              </div>
            </div>
            <div>
              <p className="font-medium text-[14px]">Horizontal Lockup</p>
              <p className="text-gray-600 text-[12px] font-mono">120px width minimum</p>
            </div>
          </div>

          <div className="bg-[#F3F4F6] p-8 rounded-xl text-center space-y-4">
            <div className="flex items-center justify-center h-[60px]">
              <div className="w-[80px]">
                <TafariLogo size={60} />
              </div>
            </div>
            <div>
              <p className="font-medium text-[14px]">Stacked Lockup</p>
              <p className="text-gray-600 text-[12px] font-mono">80px width minimum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Do's */}
      <section>
        <h2 className="mb-8">Do — Approved Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GoodCard title="Maintain proper clearspace">
            <div className="bg-white p-8 rounded-lg flex items-center justify-center">
              <div className="border-2 border-dashed border-[#0D9488] p-6 rounded-lg">
                <TafariLogo size={80} />
              </div>
            </div>
          </GoodCard>

          <GoodCard title="Use approved color variants">
            <div className="bg-white p-8 rounded-lg flex items-center justify-center gap-6">
              <TafariLogo mode="light" size={60} />
              <TafariLogo mode="mono" size={60} />
            </div>
          </GoodCard>

          <GoodCard title="Use on appropriate backgrounds">
            <div className="flex gap-4">
              <div className="flex-1 bg-[#F9FAFB] p-6 rounded-lg flex items-center justify-center">
                <TafariLogo size={60} />
              </div>
              <div className="flex-1 bg-[#0F172A] p-6 rounded-lg flex items-center justify-center">
                <TafariLogo mode="dark" size={60} />
              </div>
            </div>
          </GoodCard>

          <GoodCard title="Respect minimum sizes">
            <div className="bg-white p-8 rounded-lg flex items-center justify-center">
              <TafariLogo size={24} />
            </div>
            <p className="text-center mt-3 text-gray-600 text-[12px]">24px minimum</p>
          </GoodCard>
        </div>
      </section>

      {/* Don'ts */}
      <section>
        <h2 className="mb-8">Don't — Incorrect Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BadCard title="Don't distort or stretch">
            <div className="bg-white p-8 rounded-lg flex items-center justify-center opacity-60">
              <div style={{ transform: 'scaleX(1.5)' }}>
                <TafariLogo size={80} />
              </div>
            </div>
          </BadCard>

          <BadCard title="Don't rotate or tilt">
            <div className="bg-white p-8 rounded-lg flex items-center justify-center opacity-60">
              <div style={{ transform: 'rotate(15deg)' }}>
                <TafariLogo size={80} />
              </div>
            </div>
          </BadCard>

          <BadCard title="Don't use unapproved colors">
            <div className="bg-white p-8 rounded-lg flex items-center justify-center opacity-60">
              {/* Deliberately wrong color */}
              <svg width="80" height="80" viewBox="0 0 200 200" fill="none">
                <path d="M 20 30 L 20 50 L 60 80 L 100 80 L 100 30 L 80 30 L 60 45 Z" fill="#FF6B00" />
                <path d="M 180 30 L 180 50 L 140 80 L 100 80 L 100 30 L 120 30 L 140 45 Z" fill="#FF6B00" />
                <path d="M 70 80 L 70 170 L 90 170 L 90 80 Z" fill="#FF6B00" />
                <path d="M 110 80 L 110 170 L 130 170 L 130 80 Z" fill="#FF6B00" />
                <path d="M 30 170 L 70 170 L 70 150 L 50 135 L 30 150 Z" fill="#FF6B00" />
                <path d="M 170 170 L 130 170 L 130 150 L 150 135 L 170 150 Z" fill="#FF6B00" />
              </svg>
            </div>
          </BadCard>

          <BadCard title="Don't add effects or shadows">
            <div className="bg-white p-8 rounded-lg flex items-center justify-center opacity-60">
              <div style={{ filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.5))' }}>
                <TafariLogo size={80} />
              </div>
            </div>
          </BadCard>

          <BadCard title="Don't place on busy backgrounds">
            <div
              className="p-8 rounded-lg flex items-center justify-center opacity-60"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #ccc 0, #ccc 10px, #999 10px, #999 20px)',
              }}
            >
              <TafariLogo mode="dark" size={80} />
            </div>
          </BadCard>

          <BadCard title="Don't use below minimum size">
            <div className="bg-white p-8 rounded-lg flex items-center justify-center opacity-60">
              <TafariLogo size={16} />
            </div>
            <p className="text-center mt-3 text-gray-600 text-[12px]">16px (too small)</p>
          </BadCard>
        </div>
      </section>

      {/* Monochrome Usage */}
      <section>
        <h2 className="mb-8">Monochrome Usage</h2>
        <div className="bg-[#F3F4F6] p-8 rounded-2xl">
          <p className="mb-6 text-[14px]">
            When color reproduction is limited (embroidery, engraving, single-color print),
            use a monochrome variant:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl text-center">
              <TafariLogo mode="mono" size={100} />
              <p className="mt-4 text-[14px]">Navy on light backgrounds</p>
            </div>
            <div className="bg-[#0F172A] p-8 rounded-xl text-center">
              <TafariLogo mode="reversed" size={100} />
              <p className="mt-4 text-white text-[14px]">White on dark backgrounds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Backgrounds */}
      <section>
        <h2 className="mb-8">Logo on Photography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GoodCard title="Do: Use on clean, low-contrast areas">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-12 rounded-lg flex items-center justify-center">
              <TafariLogo size={80} />
            </div>
          </GoodCard>

          <BadCard title="Don't: Place on busy or high-contrast photos">
            <div
              className="p-12 rounded-lg flex items-center justify-center opacity-60"
              style={{
                backgroundImage: 'repeating-conic-gradient(#666 0% 25%, #999 0% 50%)',
                backgroundSize: '20px 20px',
              }}
            >
              <TafariLogo size={80} />
            </div>
          </BadCard>
        </div>
      </section>
    </div>
  );
}
