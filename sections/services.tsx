"use client";

import { motion } from "framer-motion";
import { services } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { Icon } from "@/components/ui/icon";

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="How I Can Help"
          subtitle="From building an ISO management system from scratch to turning your operational data into a clear dashboard."
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
          {services.map((service) => (
            <motion.div key={service.id} variants={revealItem} className="h-full">
              <GlowCard className="flex h-full flex-col">
                <motion.span
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent"
                >
                  <Icon name={service.icon} className="h-6 w-6" />
                </motion.span>
                <h3 className="font-display text-base font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Icon name="badge-check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
