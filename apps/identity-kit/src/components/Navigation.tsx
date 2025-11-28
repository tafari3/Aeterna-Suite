import { MenuIcon, XIcon } from './icons/IconSet';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const pages = [
  { id: 'overview', label: '00 — Overview' },
  { id: 'master', label: '01 — Master Brand' },
  { id: 'family', label: '02 — Product Family' },
  { id: 'color-type', label: '03 — Color & Type' },
  { id: 'icons', label: '04 — Iconography' },
  { id: 'ui', label: '05 — UI Components' },
  { id: 'social', label: '06 — Social & Banners' },
  { id: 'favicons', label: '07 — Favicons & App Icons' },
  { id: 'wordmarks', label: '08 — Wordmarks' },
  { id: 'usage', label: '09 — Usage & Misuse' },
  { id: 'templates', label: '10 — Templates' },
];

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-[#0F172A] text-white overflow-y-auto">
        <div className="p-6">
          <h1 className="mb-8" style={{ fontSize: '20px' }}>
            Tafari Identity System
          </h1>
          <ul className="space-y-1">
            {pages.map((page) => (
              <li key={page.id}>
                <button
                  onClick={() => onPageChange(page.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page.id
                      ? 'bg-[#0D9488] text-white'
                      : 'text-gray-300 hover:bg-[#1E293B]'
                  }`}
                  style={{ fontSize: '14px' }}
                >
                  {page.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 bg-[#0F172A] text-white z-50">
        <div className="flex items-center justify-between p-4">
          <h1 style={{ fontSize: '18px' }}>Tafari Identity</h1>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="bg-[#0F172A] border-t border-gray-700">
            <ul className="py-2">
              {pages.map((page) => (
                <li key={page.id}>
                  <button
                    onClick={() => {
                      onPageChange(page.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-6 py-3 ${
                      currentPage === page.id
                        ? 'bg-[#0D9488] text-white'
                        : 'text-gray-300'
                    }`}
                    style={{ fontSize: '14px' }}
                  >
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
