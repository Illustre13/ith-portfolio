interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "li";
}

export default function Card({
  children,
  className = "",
  hover = true,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={`bg-slate-dark border border-slate-border rounded-xl p-6 transition-all duration-200 ${
        hover
          ? "hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
          : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
