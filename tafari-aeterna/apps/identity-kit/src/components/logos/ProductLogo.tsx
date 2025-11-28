interface ProductLogoProps {
  product: 'aeterna' | 'sankofa' | 'umoja' | 'khanyie';
  size?: number;
  mode?: 'light' | 'dark';
  className?: string;
}
const srcMap: Record<string, string> = {
  aeterna: '/brand/aeterna.png',
  sankofa: '/brand/sankofa.png',
  umoja: '/brand/umoja.png',
  khanyie: '/brand/khanyie.png'
};
export function ProductLogo({ product, size = 120, mode = 'light', className = '' }: ProductLogoProps) {
  const bg = mode === 'dark' ? '#0F172A' : '#FFFFFF';
  const padding = Math.round(size * 0.15);
  return (
    <div className={className} style={{ width: size, height: size, background: bg, borderRadius: 12, display:'flex',alignItems:'center',justifyContent:'center' }}>
      <img src={srcMap[product]} alt={product} style={{ maxWidth: size - padding, maxHeight: size - padding, objectFit:'contain' }} />
    </div>
  );
}
