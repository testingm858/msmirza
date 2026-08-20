"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === active) ?? skillCategories[0];

  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Interactive Skills Dashboard"
          subtitle="Six domains, one throughline: turning raw information — regulatory or numeric — into decisions people can act on."
        />

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  active === cat.id
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                )}
              >
                <Icon name={cat.icon} className="h-4 w-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 rounded-3xl border border-card-border bg-card p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2"
            >
              {activeCategory.skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="font-mono text-xs text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-background-alt">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
