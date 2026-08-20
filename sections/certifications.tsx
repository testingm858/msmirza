"use client";

import { certifications } from "@/data/education";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { Icon } from "@/components/ui/icon";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative bg-background-alt/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & Badges"
          subtitle="IRCA-certified lead auditor credentials, professional certificates, and technical certifications earned across a 20-year career."
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={revealItem} className="h-full">
              <GlowCard className="flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon name={cert.icon} className="h-6 w-6" />
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide",
                      cert.status === "active"
                        ? "bg-accent-soft text-accent"
                        : "bg-muted/20 text-muted-foreground"
                    )}
                  >
                    <Icon name={cert.status === "active" ? "badge-check" : "shield-alert"} className="h-3 w-3" />
                    {cert.status === "active" ? "Active" : "Expired"}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-foreground">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>

                <div className="mt-4 flex-1 space-y-1.5 text-xs text-muted-foreground">
                  <p>Issued: {cert.issueDate}</p>
                  {cert.expiryDate && <p>Expires: {cert.expiryDate}</p>}
                  {cert.credentialId && <p className="font-mono">ID: {cert.credentialId}</p>}
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                  >
                    Verify Credential
                    <Icon name="external-link" className="h-3 w-3" />
                  </a>
                )}
              </GlowCard>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
