// src/components/pages/WordmarksPage.tsx
type BrandWordmark = {
  name: string;
  primary: string;
  secondary?: string;
  hasAccent: boolean;
  accentColor: string;
};

const WORDMARKS: BrandWordmark[] = [
  { name: 'Tafari Technologies', primary: 'TAFARI TECHNOLOGIES', hasAccent: false, accentColor: '#0D9488' },
  { name: 'Aeterna Suite',     primary: 'AETERNA', secondary: 'SUITE', hasAccent: true,  accentColor: '#EAB308' },
  { name: 'Sankofa Learn',     primary: 'SANKOFA', secondary: 'LEARN', hasAccent: true,  accentColor: '#0D9488' },
  { name: 'Umoja Business',    primary: 'UMOJA',   secondary: 'BUSINESS', hasAccent: true, accentColor: '#EAB308' },
  { name: 'Khanyie',           primary: 'KHANYIE', hasAccent: false,      accentColor: '#0D9488' },
];

function WordmarkText({
  item,
  color,
  sizePx,
}: {
  item: BrandWordmark;
  color: string;
  sizePx: number;
}) {
  return (
    <p
      className="font-bold tracking-[-0.02em] leading-[1.2] text-center break-words"
      style={{ fontFamily: 'Poppins, sans-serif', fontSize: `${sizePx}px`, color }}
      aria-label={`${item.name} wordmark`}
    >
      {item.primary}{' '}
      {item.hasAccent && item.secondary ? (
        <span style={{ color: item.accentColor }}>{item.secondary}</span>
      ) : null}
    </p>
  );
}

function PreviewPanel({
  bg,
  border,
  children,
}: {
  bg: string;
  border?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${border ? 'border-2 border-gray-200' : ''} p-12 rounded-2xl flex items-center justify-center`}
      style={{ backgroundColor: bg }}
    >
      <div className="w-full max-w-[900px]">{children}</div>
    </div>
  );
}

export function WordmarksPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="mb-4">Wordmarks</h1>
        <p className="text-gray-600 max-w-3xl">
          Text-only signatures for all five brands in light and dark variants. Wordmarks use Poppins Bold with a
          brand accent on the secondary word where defined.
        </p>
      </section>

      {/* Wordmark Displays */}
      {WORDMARKS.map((item) => (
        <section key={item.name} className="space-y-6">
          <h2 className="mb-2">{item.name}</h2>

          {/* Light Background */}
          <div className="space-y-3">
            <p className="font-medium text-[14px]">Light Background</p>
            <PreviewPanel bg="#F9FAFB" border>
              <WordmarkText item={item} color="#0F172A" sizePx={48} />
            </PreviewPanel>
          </div>

          {/* Dark Background */}
          <div className="space-y-3">
            <p className="font-medium text-[14px]">Dark Background</p>
            <PreviewPanel bg="#0F172A">
              <WordmarkText item={item} color="#F9FAFB" sizePx={48} />
            </PreviewPanel>
          </div>

          {/* Sizes */}
          <div className="space-y-3">
            <p className="font-medium text-[14px]">Size Variations</p>
            <div className="bg-[#F3F4F6] p-8 rounded-2xl space-y-6">
              <div className="text-center">
                <WordmarkText item={item} color="#0F172A" sizePx={64} />
                <p className="text-gray-500 mt-2 text-[12px]">Large — 64px</p>
              </div>

              <div className="text-center pt-6 border-t border-gray-300">
                <WordmarkText item={item} color="#0F172A" sizePx={40} />
                <p className="text-gray-500 mt-2 text-[12px]">Medium — 40px</p>
              </div>

              <div className="text-center pt-6 border-t border-gray-300">
                <WordmarkText item={item} color="#0F172A" sizePx={24} />
                <p className="text-gray-500 mt-2 text-[12px]">Small — 24px</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Typography Specifications */}
      <section>
        <h2 className="mb-8">Typography Specifications</h2>
        <div className="bg-[#F3F4F6] rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0F172A] text-white">
                <th className="text-left p-4 text-[14px] font-semibold">Property</th>
                <th className="text-left p-4 text-[14px] font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Font Family</td>
                <td className="p-4 text-[14px] font-mono">Poppins</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Font Weight</td>
                <td className="p-4 text-[14px] font-mono">700 (Bold)</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Letter Spacing</td>
                <td className="p-4 text-[14px] font-mono">-0.02em</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Text Transform</td>
                <td className="p-4 text-[14px] font-mono">UPPERCASE</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Minimum Size</td>
                <td className="p-4 text-[14px] font-mono">24px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Color Application */}
      <section>
        <h2 className="mb-8">Color Application</h2>
        <div className="bg-[#F3F4F6] rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0F172A] text-white">
                <th className="text-left p-4 text-[14px] font-semibold">Brand</th>
                <th className="text-left p-4 text-[14px] font-semibold">Primary Text</th>
                <th className="text-left p-4 text-[14px] font-semibold">Accent Text</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Tafari Technologies</td>
                <td className="p-4 text-[14px]">Navy / White</td>
                <td className="p-4 text-[14px]">—</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Aeterna Suite</td>
                <td className="p-4 text-[14px]">Navy / White</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#EAB308]" />
                    <span className="text-[14px]">Gold</span>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Sankofa Learn</td>
                <td className="p-4 text-[14px]">Navy / White</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#0D9488]" />
                    <span className="text-[14px]">Teal</span>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Umoja Business</td>
                <td className="p-4 text-[14px]">Navy / White</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#EAB308]" />
                    <span className="text-[14px]">Gold</span>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-[14px]">Khanyie</td>
                <td className="p-4 text-[14px]">Navy / White or Teal / White</td>
                <td className="p-4 text-[14px]">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Export Instructions */}
      <section>
        <h2 className="mb-8">Export as SVG</h2>
        <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl">
          <p className="mb-4 text-[14px]">
            Export wordmarks as <strong>editable SVG text</strong> (not outlines). This preserves crisp rendering and keeps
            files small.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="text-[14px]">• Smaller file sizes</li>
            <li className="text-[14px]">• Text remains editable and accessible</li>
            <li className="text-[14px]">• Perfect rendering at any size</li>
            <li className="text-[14px]">• Proper text selection and SEO</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
