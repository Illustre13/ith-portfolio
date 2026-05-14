import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import BlogCard from "@/components/ui/BlogCard";
import MotionReveal from "@/components/ui/MotionReveal";
import CTABand from "@/components/sections/CTABand";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI, software engineering, cloud infrastructure, and technology strategy for African institutions — from the Illustre Tech House team.",
};

const CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-20"
        style={{ backgroundColor: "var(--bg-page)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="wrap">
          <MotionReveal>
            <SectionLabel className="mb-4">Insights</SectionLabel>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-2xl"
              style={{ color: "var(--text-primary)" }}
            >
              From the ITH desk.
            </h1>
            <p className="text-lg max-w-xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Technical writing on AI, engineering, and digital strategy — for builders and decision-makers
              across East Africa.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-page)" }}>
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <MotionReveal key={post.slug} direction="up" delay={i * 0.08}>
                <BlogCard post={post} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
