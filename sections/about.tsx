"use client";

import { personalInfo, stats, values, funFacts } from "@/data/personal";
import { recognizedBy } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { Counter } from "@/components/ui/counter";
import { Icon } from "@/components/ui/icon";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Two disciplines, one operating system."
          subtitle="Fifteen years of building airtight management systems taught me to trust evidence over assumption — the same instinct now drives how I work with data."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            {personalInfo.bioLong.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="mb-5 text-balance leading-relaxed text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="self-start">
            <RevealGroup className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={revealItem}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="font-display text-4xl font-semibold text-accent">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-xs leading-snug text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </RevealGroup>

            <Reveal delay={0.2}>
              <div className="mt-4 rounded-2xl border border-card-border bg-card p-6">
                <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                  <Icon name="sparkles" className="h-4 w-4 text-accent" />
                  Fun Facts
                </h3>
                <ul className="space-y-3">
                  {funFacts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="mb-8 text-center font-display text-2xl font-semibold text-foreground">
              What drives the work
            </h3>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <motion.div key={value.title} variants={revealItem}>
                <GlowCard className="h-full">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon name={value.icon} className="h-5 w-5" />
                  </span>
                  <h4 className="mb-2 font-display text-base font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 border-t border-border pt-10">
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Certified &amp; Recognized By
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {recognizedBy.map((name) => (
                <GlowCard
                  key={name}
                  className="cursor-pointer select-none rounded-full border-card-border px-5 py-2.5 hover:-translate-y-0.5 hover:bg-accent-soft/30"
                >
                  <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    {name}
                  </span>
                </GlowCard>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
