// src/components/pages/IconographyPage.tsx
import * as React from 'react';
import * as Icons from '../icons/IconSet';

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;
type IconDef = { name: string; Component: IconComponent };
type IconCategory = { name: string; icons: IconDef[] };

const ICON_CATEGORIES: IconCategory[] = [
  {
    name: 'UI Icons',
    icons: [
      { name: 'Home', Component: Icons.HomeIcon },
      { name: 'Search', Component: Icons.SearchIcon },
      { name: 'Settings', Component: Icons.SettingsIcon },
      { name: 'Users', Component: Icons.UsersIcon },
      { name: 'Bell', Component: Icons.BellIcon },
      { name: 'Cloud', Component: Icons.CloudIcon },
      { name: 'Upload', Component: Icons.UploadIcon },
      { name: 'Download', Component: Icons.DownloadIcon },
      { name: 'Lock', Component: Icons.LockIcon },
      { name: 'Unlock', Component: Icons.UnlockIcon },
      { name: 'Alert', Component: Icons.AlertIcon },
      { name: 'Check', Component: Icons.CheckIcon },
      { name: 'X', Component: Icons.XIcon },
      { name: 'Plus', Component: Icons.PlusIcon },
      { name: 'Minus', Component: Icons.MinusIcon },
      { name: 'Arrow Up', Component: Icons.ArrowUpIcon },
    ],
  },
  {
    name: 'Learn Icons',
    icons: [
      { name: 'Book Open', Component: Icons.BookOpenIcon },
      { name: 'Graduation', Component: Icons.GraduationIcon },
      { name: 'Document', Component: Icons.DocumentIcon },
      { name: 'Checkbox List', Component: Icons.CheckboxListIcon },
      { name: 'Certificate', Component: Icons.CertificateIcon },
      { name: 'Presentation', Component: Icons.PresentationIcon },
    ],
  },
  {
    name: 'Business Icons',
    icons: [
      { name: 'Bar Chart', Component: Icons.BarChartIcon },
      { name: 'Line Chart', Component: Icons.LineChartIcon },
      { name: 'Briefcase', Component: Icons.BriefcaseIcon },
      { name: 'File Invoice', Component: Icons.FileInvoiceIcon },
      { name: 'Cart', Component: Icons.CartIcon },
      { name: 'Box', Component: Icons.BoxIcon },
      { name: 'Wallet', Component: Icons.WalletIcon },
      { name: 'Receipt', Component: Icons.ReceiptIcon },
      { name: 'Kanban', Component: Icons.KanbanIcon },
      { name: 'Task List', Component: Icons.TaskListIcon },
    ],
  },
  {
    name: 'AI Icons',
    icons: [
      { name: 'Spark', Component: Icons.SparkIcon },
      { name: 'Wand', Component: Icons.WandIcon },
      { name: 'Mic', Component: Icons.MicIcon },
    ],
  },
];

const totalIcons = ICON_CATEGORIES.reduce((sum, c) => sum + c.icons.length, 0);

function SpecTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-6 rounded-xl" style={{ background: 'var(--color-grey,#F3F4F6)' }}>
      <p className="font-medium mb-2 text-sm">{label}</p>
      <p className="text-gray-600 text-sm font-mono">{value}</p>
    </div>
  );
}

// Use React.FC so React's special "key" prop is handled correctly by TS
const IconCard: React.FC<IconDef> = ({ name, Component }) => {
  return (
    <div className="space-y-3">
      <div
        className="rounded-xl p-6 flex items-center justify-center aspect-square transition-colors group"
        style={{ background: 'var(--color-grey,#F3F4F6)', color: 'var(--color-navy,#0F172A)' }}
      >
        {/* Icons should be authored with stroke="currentColor" fill="none" */}
        <Component size={32} />
      </div>
      <p className="text-center text-gray-600 text-xs">{name}</p>
    </div>
  );
};

export function IconographyPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="mb-4">Iconography</h1>
        <p className="text-gray-600 max-w-3xl">
          A comprehensive set of {totalIcons} stroke-based icons designed for the Tafari brand family.
          All icons follow consistent specs for visual harmony and clean implementation.
        </p>
      </section>

      {/* Specifications */}
      <section>
        <h2 className="mb-8">Icon Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SpecTile label="ViewBox" value="24 × 24" />
          <SpecTile label="Stroke Width" value="2 px" />
          <SpecTile label="Stroke Caps" value="round" />
          <SpecTile label="Stroke Joins" value="round" />
        </div>

        <div
          className="mt-6 p-6 rounded-xl"
          style={{ background: 'var(--color-navy,#0F172A)', color: 'var(--color-white,#F9FAFB)' }}
        >
          <p className="font-medium mb-3 text-sm">Implementation</p>
          <pre className="text-xs font-mono" style={{ lineHeight: 1.6, color: 'var(--color-teal-light,#5EEAD4)' }}>
{`stroke="currentColor"
fill="none"`}
          </pre>
          <p className="mt-4 text-gray-300 text-sm">
            Icons inherit color from their parent via <span className="font-mono">currentColor</span> for effortless theming.
          </p>
        </div>
      </section>

      {/* Icon grids by category */}
      {ICON_CATEGORIES.map((cat) => (
        <section key={cat.name}>
          <h2 className="mb-8">{cat.name}</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {cat.icons.map((icon) => (
              <IconCard key={icon.name} name={icon.name} Component={icon.Component} />
            ))}
          </div>
        </section>
      ))}

      {/* Color variations */}
      <section>
        <h2 className="mb-8">Color Variations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl" style={{ background: 'var(--color-grey,#F3F4F6)' }}>
            <div className="flex items-center justify-center gap-4" style={{ color: 'var(--color-navy,#0F172A)' }}>
              <Icons.HomeIcon size={32} />
              <Icons.SearchIcon size={32} />
              <Icons.SettingsIcon size={32} />
            </div>
            <p className="text-center mt-4 text-sm">Navy on Light</p>
          </div>

          <div
            className="p-8 rounded-2xl"
            style={{ background: 'var(--color-teal,#0D9488)', color: 'var(--color-white,#F9FAFB)' }}
          >
            <div className="flex items-center justify-center gap-4">
              <Icons.BookOpenIcon size={32} />
              <Icons.GraduationIcon size={32} />
              <Icons.DocumentIcon size={32} />
            </div>
            <p className="text-center mt-4 text-sm text-white">White on Teal</p>
          </div>

          <div
            className="p-8 rounded-2xl"
            style={{ background: 'var(--color-navy,#0F172A)', color: 'var(--color-gold,#EAB308)' }}
          >
            <div className="flex items-center justify-center gap-4">
              <Icons.BarChartIcon size={32} />
              <Icons.BriefcaseIcon size={32} />
              <Icons.WalletIcon size={32} />
            </div>
            <p className="text-center mt-4 text-sm text-white">Gold on Navy</p>
          </div>
        </div>
      </section>

      {/* Usage guidelines */}
      <section>
        <h2 className="mb-8">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border-2 border-green-200 bg-green-50">
            <div className="flex items-start gap-3 mb-4">
              <Icons.CheckIcon size={24} />
              <p className="font-medium text-sm">Do</p>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Use icons at 16, 20, 24, 32, or 40 px</li>
              <li>Keep 2 px stroke with round caps & joins</li>
              <li>Use currentColor for theming</li>
              <li>Align to text baseline when inline</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-2 border-red-200 bg-red-50">
            <div className="flex items-start gap-3 mb-4">
              <Icons.XIcon size={24} />
              <p className="font-medium text-sm">Don’t</p>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Change stroke width or cap/join style</li>
              <li>Add fills or gradients to stroke icons</li>
              <li>Mix inconsistent icon sizes</li>
              <li>Combine stroke and solid styles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Export specs */}
      <section>
        <h2 className="mb-8">Export Specifications</h2>
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--color-grey,#F3F4F6)' }}>
          <table className="w-full">
            <thead>
              <tr className="text-[var(--color-white,#F9FAFB)]" style={{ background: 'var(--color-navy,#0F172A)' }}>
                <th className="text-left p-4 text-sm font-semibold">Format</th>
                <th className="text-left p-4 text-sm font-semibold">Attributes</th>
                <th className="text-left p-4 text-sm font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-sm font-mono">SVG</td>
                <td className="p-4 text-sm font-mono">
                  viewBox=&quot;0 0 24 24&quot;
                  <br />
                  stroke=&quot;currentColor&quot;
                  <br />
                  strokeWidth=&quot;2&quot;
                </td>
                <td className="p-4 text-sm">Web, apps, scalable use</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4 text-sm font-mono">React</td>
                <td className="p-4 text-sm">Typed TS components</td>
                <td className="p-4 text-sm">React applications</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default IconographyPage;
