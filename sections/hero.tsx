"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/personal";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { Particles } from "@/components/effects/particles";
import { TypingEffect } from "@/components/ui/typing-effect";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Icon } from "@/components/ui/icon";

const floatingBadges = [
  { icon: "shield-check", label: "ISO Lead Auditor", className: "left-[-8%] top-[12%]", delay: 0 },
  { icon: "brain-circuit", label: "Data & AI", className: "right-[-10%] top-[28%]", delay: 0.6 },
  { icon: "kaggle", label: "3x Kaggle Expert", className: "left-[-4%] bottom-[8%]", delay: 1.2 },
  { icon: "badge-check", label: "IRCA Certified", className: "right-[-6%] bottom-[18%]", delay: 1.8 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <AuroraBackground />
      <Particles className="absolute inset-0 h-full w-full opacity-70" count={50} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for consulting &amp; collaboration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m {personalInfo.firstName} —{" "}
            <span className="gradient-text">building trust in systems,</span>{" "}
            <span className="gradient-text">and insight from data.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 h-8 font-mono text-lg text-muted-foreground sm:text-xl"
          >
            <TypingEffect words={personalInfo.taglineWords} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <ButtonLink href="#contact" size="lg">
                Hire Me
                <Icon name="arrow-up-right" className="h-4 w-4" />
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink href={personalInfo.resumeUrl} download variant="outline" size="lg">
                Download CV
                <Icon name="download" className="h-4 w-4" />
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink href="#contact" variant="ghost" size="lg">
                Contact
                <Icon name="arrow-right" className="h-4 w-4" />
              </ButtonLink>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-12 flex items-center gap-4"
          >
            {personalInfo.social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-transparent to-accent-2/20 blur-2xl" />
          <div className="glass noise-overlay relative h-full w-full overflow-hidden rounded-[2.5rem] border-2 border-accent/20">
            <Image
              src={personalInfo.avatarUrl}
              alt={personalInfo.fullName}
              fill
              priority
              sizes="(min-width: 1024px) 384px, 0px"
              className="object-cover object-[center_5%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>

          {floatingBadges.map((badge) => (
            <motion.div
              key={badge.label}
              className={`glass absolute flex items-center gap-2 rounded-2xl px-3 py-2.5 shadow-lg ${badge.className}`}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: badge.delay, ease: "easeInOut" }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon name={badge.icon} className="h-4 w-4" />
              </span>
              <span className="whitespace-nowrap text-xs font-medium text-foreground">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <Icon name="chevron-down" className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
