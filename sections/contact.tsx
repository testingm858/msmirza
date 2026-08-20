"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const engagementHighlights = [
  { icon: "target", label: "Focus Areas", value: "QHSE Audits · ISO 9001/45001/14001 · Data & AI" },
  { icon: "brain-circuit", label: "Currently Exploring", value: "Recommendation Systems & Applied AI" },
  { icon: "briefcase", label: "Engagement Type", value: "Consulting, audit support & advisory" },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(data: ContactForm) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Open to QHSE consulting, audit support, and data-driven projects. Send a message and I'll get back to you."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <Reveal>
              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name="handshake" className="h-5 w-5" />
                  <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-card bg-accent" />
                  </span>
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">Currently Available</p>
                  <p className="truncate text-xs text-muted-foreground">Open to new consulting & advisory work</p>
                </div>
              </div>
            </Reveal>

            {engagementHighlights.map((c, i) => (
              <Reveal key={c.label} delay={0.05 * (i + 1)}>
                <div className="glass flex items-center gap-4 rounded-2xl p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="truncate text-sm font-medium text-foreground">{c.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="flex gap-3 pt-2">
                {personalInfo.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon name={s.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal direction="left">
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: "Please enter your name" })}
                    className="w-full rounded-xl border border-border bg-background-alt px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Please enter your email",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                    })}
                    className="w-full rounded-xl border border-border bg-background-alt px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  {...register("subject", { required: "Please add a subject" })}
                  className="w-full rounded-xl border border-border bg-background-alt px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Please add a message" })}
                  className="w-full resize-none rounded-xl border border-border bg-background-alt px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <Magnetic>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-accent px-7 text-sm font-medium text-accent-foreground shadow-[0_0_0_1px_var(--accent)] transition-all hover:shadow-[0_0_24px_var(--accent-glow)] disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <motion.span animate={isSubmitting ? { x: [0, 4, 0] } : {}} transition={{ repeat: Infinity, duration: 0.8 }}>
                      <Icon name="send" className="h-4 w-4" />
                    </motion.span>
                  </button>
                </Magnetic>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1.5 text-sm text-accent"
                  >
                    <Icon name="badge-check" className="h-4 w-4" />
                    Message sent — thank you!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn("flex items-center gap-1.5 text-sm text-red-500")}
                  >
                    <Icon name="shield-alert" className="h-4 w-4" />
                    Something went wrong. Try again.
                  </motion.p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
