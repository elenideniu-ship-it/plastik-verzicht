export default function SectionHeader({ label, title, description }) {
  return (
    <div className="mb-10">
      {label && <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2 block">{label}</span>}
      <h2 className="font-inter font-semibold text-2xl md:text-3xl text-foreground tracking-tight leading-tight">{title}</h2>
      {description && <p className="mt-3 text-muted-foreground text-base leading-relaxed max-w-2xl">{description}</p>}
    </div>
  );
}