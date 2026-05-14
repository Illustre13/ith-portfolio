"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MotionReveal from "@/components/ui/MotionReveal";

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
  thumbnail?: string;
}

const SECTOR_COLORS: Record<string, string> = {
  NGO: "#03a9f4",
  Government: "#00C896",
  SME: "#f59e0b",
  Education: "#8b5cf6",
};

export default function CaseStudyCard({ id, sector, tag, title, client, problem, solution, result, stack, thumbnail }: CaseStudyCardProps) {
  const accent = SECTOR_COLORS[sector] ?? "#03a9f4";

  return (
    <MotionReveal direction="scale">
      <motion.article
        id={id}
        className="card-theme flex flex-col rounded-2xl overflow-hidden h-full"
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Thumbnail */}
        {thumbnail && (
          <div className="relative h-52 overflow-hidden rounded-t-2xl">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,17,23,0.92) 0%, transparent 60%)" }} />
            <div className="absolute bottom-5 left-6 flex items-center gap-2.5">
              <span
                className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest font-medium"
                style={{
                  backgroundColor: `${accent}22`,
                  color: accent,
                  border: `1px solid ${accent}44`,
                }}
              >
                {sector}
              </span>
              <span className="text-brand font-mono text-xs uppercase tracking-widest">{tag}</span>
            </div>
          </div>
        )}

        {/* Top bar (no thumbnail) */}
        {!thumbnail && (
          <div className="px-7 py-4 flex items-center gap-3" style={{ borderBottom: "1px solid var(--border)" }}>
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest font-medium"
              style={{
                backgroundColor: `${accent}18`,
                color: accent,
                border: `1px solid ${accent}40`,
              }}
            >
              {sector}
            </span>
            <span className="text-brand font-mono text-xs uppercase tracking-widest">{tag}</span>
          </div>
        )}

        {/* Body */}
        <div className="card-body flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{title}</h3>
          <p className="text-sm mb-7 font-mono" style={{ color: "var(--text-muted)" }}>{client}</p>

          <div className="space-y-5 flex-1">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>Problem</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>{problem}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>Solution</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>{solution}</p>
            </div>
          </div>

          <div
            className="mt-7 p-5 rounded-xl"
            style={{ backgroundColor: `${accent}0d`, border: `1px solid ${accent}33` }}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest mb-1.5" style={{ color: "var(--text-muted)" }}>
              Key Result
            </p>
            <p className="font-bold text-base leading-snug" style={{ color: accent }}>{result}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest font-medium"
                style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={`/work/${id}`}
            className="mt-7 inline-flex items-center gap-2 text-brand text-sm font-semibold hover:gap-3 transition-all duration-200 pt-6"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            Read full case study <ArrowRight size={14} />
          </Link>
        </div>
      </motion.article>
    </MotionReveal>
  );
}
