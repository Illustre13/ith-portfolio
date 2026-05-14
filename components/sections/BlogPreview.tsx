import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import MotionReveal from "@/components/ui/MotionReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { BLOG_POSTS } from "@/lib/blog";

export default function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="section-py-lg" style={{ backgroundColor: "var(--bg-section-alt)" }}>
      <div className="wrap">
        <MotionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 section-head">
            <div>
              <SectionLabel className="mb-3">Insights</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
                From the ITH desk.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand transition-colors duration-200 shrink-0 self-start sm:self-end px-4 py-2 rounded-lg"
              style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
            >
              All posts <ArrowRight size={13} />
            </Link>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <MotionReveal key={post.slug} direction="up" delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="card-theme hover-card rounded-2xl overflow-hidden flex flex-col h-full">
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,17,23,0.55), transparent)" }} />
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest"
                      style={{ backgroundColor: "rgba(3,169,244,0.88)", color: "#0D1117" }}
                    >
                      {post.category}
                    </span>
                  </div>

                  <div className="card-body flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span style={{ color: "var(--border)" }}>·</span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
                        <Clock size={11} />
                        {post.readTime} min
                      </span>
                    </div>
                    <h3
                      className="font-bold text-sm sm:text-base mb-3 leading-snug flex-1 group-hover:text-brand transition-colors duration-200"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {post.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-brand text-sm font-medium group-hover:gap-2.5 transition-all duration-200">
                      Read more <ArrowRight size={13} />
                    </span>
                  </div>
                </article>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
