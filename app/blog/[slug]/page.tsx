import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import CTABand from "@/components/sections/CTABand";
import { BLOG_POSTS, getBlogPost, getBlogPostSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

function parseMarkdown(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.+?)__/g, '<strong>$1</strong>')
    .replace(/_(.+?)_/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]+?<\/li>)/g, '<ul>$1</ul>')
    .replace(/<\/ul>\s*<ul>/g, '')
    .split('\n\n')
    .map((block) => {
      if (block.startsWith('<h2>') || block.startsWith('<h3>') || block.startsWith('<ul>')) return block;
      if (block.trim()) return `<p>${block.replace(/\n/g, ' ')}</p>`;
      return '';
    })
    .filter(Boolean)
    .join('\n');
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <>
      {/* Cover image */}
      <div className="relative h-[55vh] min-h-72 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(13,17,23,0.6) 0%, rgba(13,17,23,0.92) 100%)" }}
        />
        <div className="absolute inset-0 flex items-end">
          <div className="wrap w-full pb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm mb-6 hover:text-brand transition-colors duration-200"
              style={{ color: "rgba(244,244,245,0.6)" }}
            >
              <ArrowLeft size={14} /> All posts
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest"
                style={{ backgroundColor: "rgba(3,169,244,0.85)", color: "#0D1117" }}
              >
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#F4F4F5" }}>
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Meta bar */}
      <div
        className="py-5"
        style={{ backgroundColor: "var(--bg-section-alt)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="wrap flex flex-wrap items-center gap-6" style={{ maxWidth: "48rem" }}>
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
            <Clock size={14} />
            {post.readTime} min read
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
            By <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Illustre Tech House</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="section-py" style={{ backgroundColor: "var(--bg-page)" }}>
        <div className="wrap" style={{ maxWidth: "48rem" }}>
          <div
            className="prose-ith"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
          />
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-py" style={{ backgroundColor: "var(--bg-section-alt)", borderTop: "1px solid var(--border)" }}>
          <div className="wrap" style={{ maxWidth: "48rem" }}>
            <h2 className="font-bold text-xl mb-8" style={{ color: "var(--text-primary)" }}>Related posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="hover-card card-theme rounded-xl p-5 block group"
                >
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest"
                    style={{ color: "#03a9f4" }}
                  >
                    {p.category}
                  </span>
                  <h3
                    className="font-semibold mt-1 mb-2 leading-snug group-hover:text-brand transition-colors duration-200"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {p.title}
                  </h3>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{p.readTime} min read</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
