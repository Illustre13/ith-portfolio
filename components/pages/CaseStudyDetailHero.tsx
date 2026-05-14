import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CaseStudyDetailHeroProps {
  title: string;
  client: string;
  sector: string;
  tag: string;
  result: string;
  thumbnail?: string;
}

const SECTOR_COLORS: Record<string, string> = {
  NGO: "#03a9f4",
  Government: "#00C896",
  SME: "#f59e0b",
  Education: "#8b5cf6",
};

export default function CaseStudyDetailHero({ title, client, sector, tag, result, thumbnail }: CaseStudyDetailHeroProps) {
  const accent = SECTOR_COLORS[sector] ?? "#03a9f4";

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {thumbnail && (
        <div className="absolute inset-0">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.85) 60%, rgba(13,17,23,0.97) 100%)" }}
          />
        </div>
      )}
      {!thumbnail && <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-page)" }} />}

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm mb-8 hover:text-brand transition-colors duration-200"
          style={{ color: "rgba(139,143,168,0.8)" }}
        >
          <ArrowLeft size={14} /> Back to Work
        </Link>

        <div className="flex items-center gap-3 mb-5">
          <span
            className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-widest font-medium"
            style={{ backgroundColor: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}
          >
            {sector}
          </span>
          <span className="text-brand font-mono text-xs uppercase tracking-widest">{tag}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3" style={{ color: "#F4F4F5" }}>
          {title}
        </h1>
        <p className="text-lg mb-8" style={{ color: "rgba(139,143,168,0.8)" }}>{client}</p>

        <div
          className="inline-flex flex-col p-4 rounded-xl"
          style={{ backgroundColor: "rgba(3,169,244,0.08)", border: "1px solid rgba(3,169,244,0.2)" }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: "rgba(139,143,168,0.7)" }}>
            Key Result
          </span>
          <span className="text-brand font-black text-xl">{result}</span>
        </div>
      </div>
    </section>
  );
}
