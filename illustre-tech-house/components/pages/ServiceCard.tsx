import { Code2, Brain, Layers, Server, BarChart3, GraduationCap, CheckCircle2, type LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ICONS: Record<string, LucideIcon> = { Code2, Brain, Layers, Server, BarChart3, GraduationCap };

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  subServices: string[];
  stack: string[];
  idealFor: string;
}

export default function ServiceCard({ id, icon, title, description, subServices, stack, idealFor }: ServiceCardProps) {
  const Icon = ICONS[icon] ?? Code2;

  return (
    <ScrollReveal direction="scale">
      <article id={id} className="card-theme hover-card flex flex-col rounded-xl p-8 h-full">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
          style={{ backgroundColor: "rgba(3,169,244,0.1)", border: "1px solid rgba(3,169,244,0.2)" }}
        >
          <Icon size={22} className="text-brand" />
        </div>

        <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>{title}</h3>
        <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--text-muted)" }}>{description}</p>

        <ul className="space-y-2 mb-6">
          {subServices.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
              <CheckCircle2 size={14} className="text-brand mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-widest font-medium"
                style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-widest font-mono mb-1" style={{ color: "var(--text-muted)" }}>
            Ideal for
          </p>
          <p className="text-sm mb-4" style={{ color: "var(--text-primary)" }}>{idealFor}</p>
          <Button href="/contact" variant="outline" size="sm" showArrow>Get a quote</Button>
        </div>
      </article>
    </ScrollReveal>
  );
}
