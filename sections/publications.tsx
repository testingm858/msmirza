"use client";

import { motion } from "framer-motion";
import { publications } from "@/data/publications";
import { SectionHeading } from "@/components/ui/section-heading";
import { revealItem } from "@/components/ui/reveal";
import { ExpandableGrid } from "@/components/ui/expandable-grid";
import { GlowCard } from "@/components/ui/glow-card";
import { Icon } from "@/components/ui/icon";

const platformLabel: Record<string, string> = {
  medium: "Medium",
  substack: "Substack",
  kaggle: "Kaggle",
  journal: "Journal",
};

export function Publications() {
  return (
    <section id="publications" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Writing"
          title="Publications & Writing"
          subtitle="Notes on applied AI, data science, and the occasional QHSE dispatch — published on Medium, Substack, and Kaggle."
        />

        <ExpandableGrid
          items={publications}
          rows={2}
          columns={{ base: 1, sm: 2, lg: 3 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          gapClass="mt-5"
          getKey={(pub) => pub.id}
          moreLabel="More articles"
          render={(pub) => (
            <motion.div variants={revealItem} className="h-full">
              <a href={pub.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <GlowCard className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon name={pub.icon} className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      {platformLabel[pub.platform]}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold leading-snug text-foreground">
                    {pub.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{pub.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                    <time>{new Date(pub.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                    <span className="flex items-center gap-1 text-accent">
                      Read
                      <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </GlowCard>
              </a>
            </motion.div>
          )}
        />
      </div>
    </section>
  );
}
