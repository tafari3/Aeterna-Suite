// src/components/pages/UIComponentsPage.tsx
import { useState } from 'react';
import { SearchIcon, DownloadIcon, CheckIcon } from '../icons/IconSet';

type Tab = 'overview' | 'details' | 'settings';

export function UIComponentsPage() {
  const [selectedTab, setSelectedTab] = useState<Tab>('overview');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'details', label: 'Details' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="mb-4">UI Components</h1>
        <p className="text-gray-600 max-w-3xl">
          Foundational UI components demonstrating the application of the Tafari design system.
          These components showcase proper use of colors, spacing tokens, and radii.
        </p>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="mb-8">Buttons</h2>

        <div className="space-y-8">
          {/* Teal Theme */}
          <div>
            <h3 className="mb-4">Teal Theme (Tafari, Sankofa, Khanyie)</h3>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="px-6 py-3 bg-[#0D9488] text-white hover:bg-[#0D9488]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]/40 transition-colors rounded-lg font-medium text-[16px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Primary Button
              </button>

              <button
                type="button"
                className="px-6 py-3 border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]/30 transition-colors rounded-lg font-medium text-[16px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Secondary Button
              </button>

              <button
                type="button"
                className="px-6 py-3 text-[#0D9488] hover:bg-[#F3F4F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]/20 transition-colors rounded-lg font-medium text-[16px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Ghost Button
              </button>

              <button
                type="button"
                disabled
                aria-disabled="true"
                className="px-6 py-3 bg-[#0D9488]/40 text-white cursor-not-allowed opacity-60 rounded-lg font-medium text-[16px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Disabled
              </button>
            </div>
          </div>

          {/* Gold Theme */}
          <div>
            <h3 className="mb-4">Gold Theme (Aeterna, Umoja)</h3>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="px-6 py-3 bg-[#EAB308] text-[#0F172A] hover:bg-[#EAB308]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]/40 transition-colors rounded-lg font-medium text-[16px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Primary Button
              </button>

              <button
                type="button"
                className="px-6 py-3 border-2 border-[#EAB308] text-[#EAB308] hover:bg-[#EAB308]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]/30 transition-colors rounded-lg font-medium text-[16px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Secondary Button
              </button>

              <button
                type="button"
                className="px-6 py-3 text-[#EAB308] hover:bg-[#F3F4F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]/20 transition-colors rounded-lg font-medium text-[16px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Ghost Button
              </button>
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h3 className="mb-4">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="px-6 py-3 bg-[#0D9488] text-white hover:bg-[#0D9488]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]/40 transition-colors rounded-lg font-medium text-[16px] flex items-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <DownloadIcon size={20} />
                Download
              </button>

              <button
                type="button"
                className="px-6 py-3 bg-[#EAB308] text-[#0F172A] hover:bg-[#EAB308]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]/40 transition-colors rounded-lg font-medium text-[16px] flex items-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <CheckIcon size={20} />
                Confirm
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Input Fields */}
      <section>
        <h2 className="mb-8">Input Fields</h2>
        <div className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <label htmlFor="input1" className="block font-medium text-[14px]">
              Default Input
            </label>
            <input
              id="input1"
              type="text"
              placeholder="Enter text..."
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#0D9488] focus:outline-none transition-colors rounded-lg text-[16px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="input2" className="block font-medium text-[14px]">
              With Icon
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <SearchIcon size={20} />
              </div>
              <input
                id="input2"
                type="text"
                placeholder="Search..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 focus:border-[#0D9488] focus:outline-none transition-colors rounded-lg text-[16px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="input3" className="block font-medium text-[14px]">
              Disabled Input
            </label>
            <input
              id="input3"
              type="text"
              placeholder="Disabled"
              disabled
              aria-disabled="true"
              className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-100 cursor-not-allowed rounded-lg text-[16px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>
        </div>
      </section>

      {/* Dropdowns / Select */}
      <section>
        <h2 className="mb-8">Dropdowns</h2>
        <div className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <label htmlFor="select1" className="block font-medium text-[14px]">
              Select Brand
            </label>
            <select
              id="select1"
              defaultValue="Tafari Technologies"
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#0D9488] focus:outline-none transition-colors rounded-lg text-[16px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <option>Tafari Technologies</option>
              <option>Aeterna Suite</option>
              <option>Sankofa Learn</option>
              <option>Umoja Business</option>
              <option>Khanyie</option>
            </select>
          </div>
        </div>
      </section>

      {/* Tags / Chips */}
      <section>
        <h2 className="mb-8">Tags / Chips</h2>
        <div className="flex flex-wrap gap-3">
          <span
            className="px-4 py-2 bg-[#0D9488] text-white rounded-full text-[14px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Tafari
          </span>

          <span
            className="px-4 py-2 bg-[#EAB308] text-[#0F172A] rounded-full text-[14px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Aeterna
          </span>

          <span
            className="px-4 py-2 bg-[#5EEAD4] text-[#0F172A] rounded-full text-[14px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Khanyie
          </span>

          <span
            className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-full text-[14px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Outlined
          </span>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="mb-8">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-gray-200 p-6 hover:border-[#0D9488] transition-colors rounded-2xl">
            <div className="w-12 h-12 bg-[#0D9488] rounded-lg mb-4 flex items-center justify-center text-white">
              <SearchIcon size={24} />
            </div>
            <h3 className="mb-2">Basic Card</h3>
            <p className="text-gray-600 text-[14px]">
              Cards use 16px border radius and 2px borders with hover states.
            </p>
          </div>

          <div className="bg-[#F3F4F6] p-6 rounded-2xl">
            <div className="w-12 h-12 bg-[#EAB308] rounded-lg mb-4 flex items-center justify-center text-[#0F172A]">
              <CheckIcon size={24} />
            </div>
            <h3 className="mb-2">Surface Card</h3>
            <p className="text-gray-600 text-[14px]">
              Cards can use grey backgrounds for subtle elevation.
            </p>
          </div>

          <div className="bg-[#0F172A] text-white p-6 rounded-2xl">
            <div className="w-12 h-12 bg-[#5EEAD4] rounded-lg mb-4 flex items-center justify-center text-[#0F172A]">
              <DownloadIcon size={24} />
            </div>
            <h3 className="mb-2">Dark Card</h3>
            <p className="text-gray-300 text-[14px]">
              Dark cards for emphasis or dark mode interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section>
        <h2 className="mb-8">Tabs</h2>
        <div className="space-y-6">
          <div role="tablist" aria-label="Example tabs" className="border-b-2 border-gray-200 flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={selectedTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setSelectedTab(tab.id)}
                className={`pb-3 border-b-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]/30 ${
                  selectedTab === tab.id
                    ? 'border-[#0D9488] text-[#0D9488]'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            id={`panel-${selectedTab}`}
            role="tabpanel"
            className="bg-[#F3F4F6] p-8 rounded-xl"
          >
            <p className="text-[14px]">
              Tab content for: <span className="font-medium capitalize">{selectedTab}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Spacing Examples */}
      <section>
        <h2 className="mb-8">Spacing System</h2>
        <div className="bg-[#F3F4F6] p-8 rounded-2xl space-y-6">
          <p className="font-medium text-[14px]">8px base scale</p>
          <div className="space-y-4">
            {[4, 8, 12, 16, 20, 24, 32, 40].map((space) => (
              <div key={space} className="flex items-center gap-4">
                <div className="bg-[#0D9488] h-6" style={{ width: `${space}px` }} />
                <span className="text-[14px]" style={{ fontFamily: 'monospace' }}>
                  {space}px
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Border Radii */}
      <section>
        <h2 className="mb-8">Border Radii</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { name: 'sm', value: 6 },
            { name: 'md', value: 8 },
            { name: 'lg', value: 12 },
            { name: 'xl', value: 16 },
            { name: '2xl', value: 24 },
          ].map((radius) => (
            <div key={radius.name} className="text-center space-y-3">
              <div className="bg-[#0D9488] w-full aspect-square" style={{ borderRadius: `${radius.value}px` }} />
              <p className="text-[14px]" style={{ fontFamily: 'monospace' }}>
                {radius.value}px
              </p>
              <p className="text-gray-600 text-[12px]">{radius.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
