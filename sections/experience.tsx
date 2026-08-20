"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-background-alt/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Career Journey"
          subtitle="From network cabling and PHP scripts to leading ISO management systems — a career built on hands-on rigor."
        />

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-transparent sm:left-6" />

          <ul className="space-y-10">
            {experiences.map((exp, i) => (
              <li key={exp.id} className="relative pl-16 sm:pl-20">
                <Reveal direction="left" delay={i * 0.05}>
                  <motion.span
                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-background text-accent sm:h-12 sm:w-12"
                    whileInView={{ scale: [0.6, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon name={exp.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
                    {exp.current && (
                      <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
                    )}
                  </motion.span>
                </Reveal>

                <Reveal delay={i * 0.05 + 0.05}>
                  <div className="glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-sm font-medium text-accent">{exp.company}</p>
                      </div>
                      <Badge>
                        <Icon name="calendar" className="h-3 w-3" />
                        {exp.startDate} — {exp.endDate}
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{exp.location}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((a, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <Icon name="arrow-right" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
