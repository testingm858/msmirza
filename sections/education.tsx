"use client";

import { education, trainings } from "@/data/education";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education"
          title="Academic Foundation"
          subtitle="From matriculation to a Master's in Computer Sciences — the formal grounding behind two decades of technical and management-systems work."
        />

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={revealItem}
              className="group relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={edu.icon} className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">{edu.institution}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {edu.location} &middot; {edu.period}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{edu.description}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <div className="mt-14 rounded-2xl border border-card-border bg-card p-6">
            <h3 className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              <Icon name="briefcase" className="h-4 w-4 text-accent" />
              Additional Training
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {trainings.map((t, i) => (
                <div key={i} className="rounded-xl border border-border bg-background-alt p-4">
                  <p className="text-sm font-medium leading-snug text-foreground">{t.title}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{t.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
