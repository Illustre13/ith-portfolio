interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  /** Use "sm" for a lighter lift on smaller cards */
  size?: "default" | "sm";
}

export default function HoverCard({ children, className = "", size = "default" }: HoverCardProps) {
  const hoverCls = size === "sm" ? "hover-card-sm" : "hover-card";
  return (
    <div className={`card-theme ${hoverCls} rounded-xl ${className}`}>
      {children}
    </div>
  );
}
