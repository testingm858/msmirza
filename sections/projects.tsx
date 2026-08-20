"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categoryIcon: Record<string, string> = {
  "Data & Analytics": "line-chart",
  "Machine Learning": "brain-circuit",
  "Data App": "server",
  "Data Science": "database",
  "Web Development": "code-2",
};

export function Projects() {
  return (
    <section id="projects" className="section-padding relative bg-background-alt/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          subtitle="A mix of industrial dashboards, applied data-science projects, and the client web work that started it all."
        />

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {projects.map((project) => (
            <motion.div key={project.id} variants={revealItem} className="h-full">
              <div
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1.5",
                  project.featured ? "border-accent/30" : "border-card-border"
                )}
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/15 via-background-alt to-accent-2/10">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <Icon
                    name={categoryIcon[project.category] ?? "sparkles"}
                    className="relative h-12 w-12 text-accent/50 transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground">
                      Featured
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                    Preview placeholder
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-medium uppercase tracking-wide text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-accent"
                      >
                        <Icon name="github" className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-accent"
                      >
                        <Icon name="external-link" className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
