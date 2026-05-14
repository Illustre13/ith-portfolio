"use client";

import Image from "next/image";
import { Code2, Brain, Layers, Server, BarChart3, GraduationCap, CheckCircle2, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import MotionReveal from "@/components/ui/MotionReveal";

const ICONS: Record<string, LucideIcon> = { Code2, Brain, Layers, Server, BarChart3, GraduationCap };

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  subServices: string[];
  stack: string[];
  idealFor: string;
  image?: string;
}

export default function ServiceCard({ id, icon, title, description, subServices, stack, idealFor, image }: ServiceCardProps) {
  const Icon = ICONS[icon] ?? Code2;

  return (
    <MotionReveal direction="scale">
      <motion.article
        id={id}
        className="card-theme flex flex-col rounded-2xl overflow-hidden h-full"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Image header */}
        {image && (
          <div className="relative h-52 overflow-hidden rounded-t-2xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,36,50,1) 0%, rgba(30,36,50,0.15) 100%)" }} />
            <div
              className="absolute bottom-5 left-6 w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "rgba(3,169,244,0.9)", boxShadow: "0 4px 16px rgba(3,169,244,0.3)" }}
            >
              <Icon size={20} className="text-obsidian" />
            </div>
          </div>
        )}

        <div className="card-body flex flex-col flex-1">
          {!image && (
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(3,169,244,0.1)", border: "1px solid rgba(3,169,244,0.2)" }}
            >
              <Icon size={22} className="text-brand" />
            </div>
          )}

          <h3 className="text-xl font-bold mb-3 mt-4" style={{ color: "var(--text-primary)" }}>{title}</h3>
          <p className="text-sm leading-relaxed mb-7 flex-1" style={{ color: "var(--text-muted)" }}>{description}</p>

          <ul className="space-y-2.5 mb-7">
            {subServices.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                <CheckCircle2 size={14} className="text-brand mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {stack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-7">
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
          )}

          <div className="mt-auto pt-6" style={{ borderTop: "1px solid var(--border)" }}>
            <p className="text-xs uppercase tracking-widest font-mono mb-1.5" style={{ color: "var(--text-muted)" }}>
              Ideal for
            </p>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "var(--text-primary)" }}>{idealFor}</p>
            <Button href="/contact" variant="outline" size="sm" showArrow>Get a quote</Button>
          </div>
        </div>
      </motion.article>
    </MotionReveal>
  );
}
