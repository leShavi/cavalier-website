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
        <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-navy-primary mb-4">
          <span className="w-8 h-px bg-navy-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className={`mb-4 ${light ? 'text-navy-primary' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-slate-500' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
