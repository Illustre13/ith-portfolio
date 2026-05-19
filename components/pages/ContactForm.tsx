"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { CONTACT_SERVICES, BUDGET_RANGES } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  organisation: string;
  email: string;
  service: string;
  description: string;
  budget: string;
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5 text-muted-form">
        {label}{required && <span className="text-brand ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1 font-mono">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Project Enquiry — ${data.service}`);
    const body    = encodeURIComponent(
      `Name: ${data.name}\nOrganisation: ${data.organisation}\nEmail: ${data.email}\nService: ${data.service}\nBudget: ${data.budget || "Not specified"}\n\nProject Description:\n${data.description}`
    );
    window.location.href = `mailto:illustre.tech.house@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
          style={{ backgroundColor: "rgba(0,200,150,0.1)" }}>
          <CheckCircle2 size={28} className="text-kigali" />
        </div>
        <h3 className="font-bold text-xl mb-2" style={{ color: "var(--text-primary)" }}>
          Message prepared
        </h3>
        <p className="text-sm max-w-xs" style={{ color: "var(--text-muted)" }}>
          Your email client should have opened. If not, email us directly at{" "}
          <a href="mailto:illustre.tech.house@gmail.com" className="text-brand">illustre.tech.house@gmail.com</a>
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Full Name" required error={errors.name?.message}>
            <input type="text" placeholder="Your full name" className="ith-field"
              {...register("name", { required: "Name is required" })} />
          </Field>
          <Field label="Organisation" required error={errors.organisation?.message}>
            <input type="text" placeholder="Your organisation" className="ith-field"
              {...register("organisation", { required: "Organisation is required" })} />
          </Field>
        </div>

        <Field label="Email Address" required error={errors.email?.message}>
          <input type="email" placeholder="you@organisation.org" className="ith-field"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
            })} />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Service of Interest" required error={errors.service?.message}>
            <select className="ith-field cursor-pointer"
              {...register("service", { required: "Please select a service" })} defaultValue="">
              <option value="" disabled>Select a service…</option>
              {CONTACT_SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Budget Range">
            <select className="ith-field cursor-pointer" {...register("budget")} defaultValue="">
              <option value="">Prefer not to say</option>
              {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </Field>
        </div>

        <Field label="Project Description" required error={errors.description?.message}>
          <textarea rows={5} placeholder="Describe your project, goals, constraints, and any relevant deadlines…"
            className="ith-field resize-none"
            {...register("description", {
              required: "Please describe your project",
              minLength: { value: 30, message: "Please provide at least 30 characters" },
            })} />
        </Field>

        <Button type="submit" variant="primary" size="lg"
          className="w-full justify-center glow-brand" disabled={isSubmitting}>
          <Send size={16} />
          Send Message
        </Button>

        <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
          We respond to all enquiries within 24 hours.
        </p>
      </form>
    </>
  );
}
