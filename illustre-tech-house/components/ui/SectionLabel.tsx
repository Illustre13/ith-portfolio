interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={`text-brand font-mono text-xs uppercase tracking-[0.15em] font-medium ${className}`}>
      {children}
    </p>
  );
}
