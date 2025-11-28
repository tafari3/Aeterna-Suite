// src/components/pages/MasterBrandPage.tsx
import React from 'react';
import { TafariLogo } from '../logos/TafariLogo';
import { Wordmark } from '../logos/Wordmark';

type Mode = 'light' | 'dark' | 'mono' | 'reversed';
const MODES: Mode[] = ['light', 'dark', 'mono', 'reversed'];

const bgFor = (m: Mode) =>
  m === 'dark' || m === 'reversed' ? 'bg-[#0F172A]' : 'bg-[#F3F4F6]';

const tileShell =
  'rounded-2xl overflow-hidden flex items-center justify-center';

function IconTile({ mode }: { mode: Mode }) {
  return (
    <div className={`${tileShell} ${bgFor(mode)} aspect-square p-8`}>
      <TafariLogo mode={mode} size={72} />
    </div>
  );
}

function HorizontalTile({ mode }: { mode: Mode }) {
  // Smaller, safe sizes that fit inside a wide tile
  const icon = 64;
  const text = 64; // keep text readable but contained
  return (
    <div className={`${tileShell} ${bgFor(mode)} w-full min-h-[220px] p-10`}>
      <div className="flex items-center gap-6 max-w-full">
        <TafariLogo mode={mode} size={icon} />
        <div className="shrink min-w-0">
          <Wordmark
            brand="tafaritech"
            mode={mode}
            size={text}
            className="whitespace-nowrap overflow-hidden text-ellipsis block"
            titleOverride="Tafari Technologies"
          />
        </div>
      </div>
    </div>
  );
}

function ReversedBanner() {
  // A compact banner that always fits (your “good” screenshot)
  return (
    <div className="rounded-2xl bg-[#0F172A] px-8 py-5 flex items-center gap-4 w-full">
      <TafariLogo mode="reversed" size={28} />
      <Wordmark
        brand="tafaritech"
        mode="reversed"
        size={32}
        className="leading-none"
        titleOverride="Tafari Technologies"
      />
    </div>
  );
}

function StackedTile({ mode }: { mode: Mode }) {
  // Purpose-built stacked lockup that fits inside a card
  const icon = 72;
  const text = 28;
  return (
    <div className={`${tileShell} ${bgFor(mode)} h-[260px] w-full p-8`}>
      <div className="flex flex-col items-center">
        <TafariLogo mode={mode} size={icon} />
        <Wordmark
          brand="tafaritech"
          mode={mode}
          size={text}
          className="mt-5 text-center leading-tight block"
          titleOverride="Tafari Technologies"
        />
      </div>
    </div>
  );
}

export default function MasterBrandPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="mb-4">Tafari Technologies</h1>
        <p className="text-gray-600 max-w-3xl">
          The master brand identity featuring the iconic double-sided axe
          forming a “T”. This mark represents strength, precision, and
          duality—core values of Tafari Technologies.
        </p>
      </section>

      {/* Icon Variants */}
      <section>
        <h2 className="mb-8">Icon — Logo Variants</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {MODES.map((m) => (
            <div key={`icon-${m}`} className="space-y-3">
              <IconTile mode={m} />
              <p className="text-center font-medium capitalize text-sm">{m}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Horizontal Lockup */}
      <section>
        <h2 className="mb-8">Horizontal Lockup</h2>
        <div className="space-y-10">
          {(['light', 'dark', 'mono'] as Mode[]).map((m) => (
            <div key={`h-${m}`} className="space-y-3">
              <p className="font-medium capitalize text-sm">{m}</p>
              <HorizontalTile mode={m} />
            </div>
          ))}
          <div className="space-y-3">
            <p className="font-medium text-sm">Reversed</p>
            <ReversedBanner />
          </div>
        </div>
      </section>

      {/* Stacked Lockup */}
      <section>
        <h2 className="mb-8">Stacked Lockup</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {MODES.map((m) => (
            <div key={`stack-${m}`} className="space-y-3">
              <StackedTile mode={m} />
              <p className="text-center font-medium capitalize text-sm">{m}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Size Guidelines */}
      <section>
        <h2 className="mb-8">Size Guidelines</h2>
        <div className="bg-[#F3F4F6] p-8 rounded-2xl space-y-8">
          <div className="space-y-6">
            <div>
              <p className="font-medium mb-4 text-sm">Minimum Sizes</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Icon only: 24px minimum</li>
                <li>• Horizontal lockup: 120px width minimum</li>
                <li>• Stacked lockup: 80px width minimum</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-4 text-sm">Clearspace</p>
              <p className="text-gray-700 text-sm">
                Maintain clearspace equal to at least 0.5× the icon width on all
                sides.
              </p>
            </div>
          </div>
          <div className="flex items-end gap-8 pt-8 border-t border-gray-300">
            {[80, 120, 160].map((v) => (
              <div key={v} className="text-center space-y-2">
                <TafariLogo size={v} mode="light" />
                <p className="text-gray-600 text-xs">{v}px</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
