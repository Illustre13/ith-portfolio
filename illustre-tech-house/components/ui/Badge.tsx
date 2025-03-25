interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "kigali" | "ash" | "outline";
  className?: string;
}

const variantClasses = {
  brand: "bg-brand/10 text-brand border border-brand/20",
  kigali: "bg-kigali/10 text-kigali border border-kigali/20",
  ash: "bg-ash/10 text-ash border border-ash/20",
  outline: "border border-slate-border text-ash",
};

export default function Badge({
  children,
  variant = "brand",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-widest font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
