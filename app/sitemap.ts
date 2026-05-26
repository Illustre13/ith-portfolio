import type { MetadataRoute } from "next";
import { getBlogPostSlugs } from "@/lib/blog";
import { CASE_STUDIES } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://illustretech.rw";
  const now = new Date();

  const blogUrls: MetadataRoute.Sitemap = getBlogPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const workUrls: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${base}/work/${c.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: base,                    lastModified: now, changeFrequency: "weekly",  priority: 1 },
    { url: `${base}/services`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`,         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,          lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/contact`,       lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    ...blogUrls,
    ...workUrls,
  ];
}
