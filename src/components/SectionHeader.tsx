interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
          <span className="w-8 h-px bg-gold-500" />
          {eyebrow}
        </span>
      )}
      <h2 className={`mb-4 ${light ? 'text-navy-900' : 'text-slate-50'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-slate-600' : 'text-slate-400'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
