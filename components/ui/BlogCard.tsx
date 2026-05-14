"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25, ease: "easeOut" }}>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="card-theme rounded-2xl overflow-hidden flex flex-col h-full">
          <div className="relative h-52 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,17,23,0.6), transparent)" }} />
            <span
              className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest"
              style={{ backgroundColor: "rgba(3,169,244,0.88)", color: "#0D1117" }}
            >
              {post.category}
            </span>
          </div>

          <div className="card-body flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
              <span style={{ color: "var(--border)" }}>·</span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
                <Clock size={11} />
                {post.readTime} min read
              </span>
            </div>

            <h3
              className="font-bold text-lg mb-3 leading-snug flex-1 group-hover:text-brand transition-colors duration-200"
              style={{ color: "var(--text-primary)" }}
            >
              {post.title}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              {post.excerpt.slice(0, 120)}…
            </p>
            <span
              className="inline-flex items-center gap-2 text-brand text-sm font-semibold group-hover:gap-3 transition-all duration-200 pt-5"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              Read more <ArrowRight size={14} />
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
