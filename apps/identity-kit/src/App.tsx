// src/App.tsx
import { useEffect, useMemo, useState } from 'react';
import { Navigation } from './components/Navigation';
import { OverviewPage } from './components/pages/OverviewPage';
import MasterBrandPage from './components/pages/MasterBrandPage';
import { ProductFamilyPage } from './components/pages/ProductFamilyPage';
import { ColorTypePage } from './components/pages/ColorTypePage';
import { IconographyPage } from './components/pages/IconographyPage';
import { UIComponentsPage } from './components/pages/UIComponentsPage';
import { SocialBannersPage } from './components/pages/SocialBannersPage';
import { FaviconsPage } from './components/pages/FaviconsPage';
import { WordmarksPage } from './components/pages/WordmarksPage';
import { UsagePage } from './components/pages/UsagePage';
import TemplatesPage from './components/pages/TemplatesPage';

type PageKey =
  | 'overview'
  | 'master'
  | 'family'
  | 'color-type'
  | 'icons'
  | 'ui'
  | 'social'
  | 'favicons'
  | 'wordmarks'
  | 'usage'
  | 'templates';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('overview');

  // ✅ Adapter so Navigation can keep its `(page: string) => void` prop
  const handlePageChange = (page: string) => {
    const allowed: PageKey[] = [
      'overview',
      'master',
      'family',
      'color-type',
      'icons',
      'ui',
      'social',
      'favicons',
      'wordmarks',
      'usage',
      'templates',
    ];
    setCurrentPage(allowed.includes(page as PageKey) ? (page as PageKey) : 'overview');
  };

  const pageTitle = useMemo<Record<PageKey, string>>(
    () => ({
      overview: 'Overview',
      master: 'Master Brand',
      family: 'Product Family',
      'color-type': 'Color & Type',
      icons: 'Iconography',
      ui: 'UI Components',
      social: 'Social & Banners',
      favicons: 'Favicons & App Icons',
      wordmarks: 'Wordmarks',
      usage: 'Usage & Misuse',
      templates: 'Templates',
    }),
    []
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    document.title = `Tafari Technologies Identity System — ${pageTitle[currentPage] || 'Overview'}`;
  }, [currentPage, pageTitle]);

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <OverviewPage />;
      case 'master':
        return <MasterBrandPage />;
      case 'family':
        return <ProductFamilyPage />;
      case 'color-type':
        return <ColorTypePage />;
      case 'icons':
        return <IconographyPage />;
      case 'ui':
        return <UIComponentsPage />;
      case 'social':
        return <SocialBannersPage />;
      case 'favicons':
        return <FaviconsPage />;
      case 'wordmarks':
        return <WordmarksPage />;
      case 'usage':
        return <UsagePage />;
      case 'templates':
        return <TemplatesPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">{renderPage()}</div>
      </main>
    </div>
  );
}
