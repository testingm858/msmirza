"use client";

import { motion } from "framer-motion";
import { timelineItems } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/section-heading";
import { revealItem } from "@/components/ui/reveal";
import { ExpandableGrid } from "@/components/ui/expandable-grid";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const categoryStyles: Record<string, { icon: string; label: string }> = {
  work: { icon: "briefcase", label: "Career" },
  education: { icon: "graduation-cap", label: "Education" },
  certification: { icon: "badge-check", label: "Certification" },
  achievement: { icon: "trophy", label: "Achievement" },
};

export function Timeline() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Journey"
          title="The Full Timeline"
          subtitle="Career moves, credentials, and milestones — 2003 to today, in order."
        />

        <ExpandableGrid
          items={timelineItems}
          rows={2}
          columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          gapClass="mt-5"
          getKey={(item) => item.id}
          moreLabel="Show more milestones"
          render={(item) => {
            const meta = categoryStyles[item.category];
            return (
              <motion.div
                variants={revealItem}
                className={cn(
                  "glass h-full rounded-2xl border-t-2 p-6 transition-transform duration-300 hover:-translate-y-1",
                  item.category === "work" && "border-t-accent",
                  item.category === "education" && "border-t-accent-2",
                  item.category === "certification" && "border-t-accent",
                  item.category === "achievement" && "border-t-accent-2"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-semibold text-accent">{item.year}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon name={meta.icon} className="h-4 w-4" />
                  </span>
                </div>
                <span className="mt-3 inline-block text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  {meta.label}
                </span>
                <h3 className="mt-2 font-display text-sm font-semibold leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          }}
        />
      </div>
    </section>
  );
}
