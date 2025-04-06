import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CaseStudyCardProps {
  id: string;
  sector: string;
  tag: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
}

export default function CaseStudyCard({ id, sector, tag, title, client, problem, solution, result, stack }: CaseStudyCardProps) {
  return (
    <ScrollReveal direction="scale">
      <article id={id} className="card-theme hover-card flex flex-col rounded-xl overflow-hidden">
        {/* Top bar */}
        <div
          className="px-8 py-5 flex items-center gap-3"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-widest font-medium"
            style={{
              backgroundColor: "rgba(139,143,168,0.1)",
              color:           "var(--text-muted)",
              border:          "1px solid var(--border)",
            }}
          >
            {sector}
          </span>
          <span className="text-brand font-mono text-xs uppercase tracking-widest">{tag}</span>
        </div>

        {/* Body */}
        <div className="px-8 py-7 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>{title}</h3>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>{client}</p>

          <div className="space-y-4 flex-1">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Problem</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>{problem}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Solution</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>{solution}</p>
            </div>
          </div>

          <div
            className="mt-6 p-4 rounded-lg"
            style={{ backgroundColor: "rgba(3,169,244,0.06)", border: "1px solid rgba(3,169,244,0.2)" }}
          >
            <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>
              Key Result
            </p>
            <p className="text-brand font-bold">{result}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
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

          <Link
            href={`#${id}`}
            className="mt-6 inline-flex items-center gap-1.5 text-brand text-sm font-medium hover:gap-2.5 transition-all duration-200"
          >
            Read full case study <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    </ScrollReveal>
  );
}
