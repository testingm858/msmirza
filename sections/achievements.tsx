"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";

export function Achievements() {
  return (
    <section id="achievements" className="section-padding relative bg-background-alt/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & Recognition"
          subtitle="The moments that mark real progress — certifications earned, systems built, and titles reached."
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5" stagger={0.06}>
          {achievements.map((a) => (
            <motion.div
              key={a.id}
              variants={revealItem}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 text-center"
            >
              <motion.span
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent"
                whileHover={{ rotate: 12, scale: 1.08 }}
              >
                <Icon name={a.icon} className="h-7 w-7" />
              </motion.span>
              <span className="text-xs font-medium uppercase tracking-wide text-accent">{a.year}</span>
              <h3 className="mt-2 font-display text-sm font-semibold leading-snug text-foreground">
                {a.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.description}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
