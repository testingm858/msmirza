"use client";

import { useCallback, useEffect, useMemo, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  credentials,
  credentialCategories,
  getAspect,
  type Credential,
  type CredentialCategory,
} from "@/data/credentials";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { TryHackMeBadges } from "@/sections/tryhackme-badges";
import { tryhackme, featuredBadges } from "@/data/tryhackme";
import { cn } from "@/lib/utils";

type Filter = "all" | CredentialCategory;

// Badges are artwork for certificates already in the vault, so they live in
// their own shelf below it instead of duplicating cards in the main grid.
const vault = credentials.filter((c) => c.category !== "badges");
const badges = credentials.filter((c) => c.category === "badges");
// TryHackMe badges reuse the same modal as the other badges.
const thmBadges: Credential[] = featuredBadges.map((b, i) => ({
  id: `thm-${i}`,
  title: b.name,
  issuer: "TryHackMe",
  category: "badges",
  date: "TryHackMe profile badge",
  icon: "terminal",
  file: b.image,
  kind: "badge",
  verifyUrl: tryhackme.profileUrl,
}));
const vaultCategories = credentialCategories.filter((c) => c.id !== "badges");

export function Certifications() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? vault : vault.filter((c) => c.category === filter)),
    [filter]
  );
  // Prev/next stays within whichever group the open item belongs to.
  const group = badges.some((b) => b.id === activeId)
    ? badges
    : thmBadges.some((b) => b.id === activeId)
      ? thmBadges
      : visible;
  const activeIndex = group.findIndex((c) => c.id === activeId);
  const active = activeIndex >= 0 ? group[activeIndex] : null;

  const step = useCallback(
    (dir: 1 | -1) => {
      if (activeIndex < 0) return;
      setActiveId(group[(activeIndex + dir + group.length) % group.length].id);
    },
    [activeIndex, group]
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, step]);

  const count = (id: Filter) =>
    id === "all" ? vault.length : vault.filter((c) => c.category === id).length;

  return (
    <section id="certifications" className="section-padding relative bg-background-alt/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials Vault"
          subtitle="Lead auditor registrations, safety qualifications, data & AI certificates and academic degrees — tap any card to view the original."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Credential categories">
          {[{ id: "all" as const, label: "All", icon: "layers" }, ...vaultCategories].map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={filter === cat.id}
              onClick={() => setFilter(cat.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-all sm:text-sm",
                filter === cat.id
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
              )}
            >
              <Icon name={cat.icon} className="h-3.5 w-3.5" />
              {cat.label}
              <span className="rounded-full bg-background/60 px-1.5 text-[10px] tabular-nums">
                {count(cat.id)}
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((c) => (
              <CredentialCard key={c.id} credential={c} onOpen={() => setActiveId(c.id)} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Digital badges shelf */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
              <Icon name="medal" className="h-4 w-4" />
              Digital Badges
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {badges.map((b) => (
              <button
                key={b.id}
                onClick={() => setActiveId(b.id)}
                className="group flex flex-col items-center rounded-xl border border-card-border bg-card p-3 text-center transition-all duration-200 hover:-translate-y-1 hover:border-accent/40"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.file}
                  alt={b.title}
                  loading="lazy"
                  className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="mt-2 line-clamp-2 text-[11px] font-medium leading-snug text-foreground">
                  {b.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        <TryHackMeBadges badges={thmBadges} onOpen={setActiveId} />
      </div>

      <AnimatePresence>
        {active && (
          <CredentialModal
            key="modal"
            credential={active}
            position={`${activeIndex + 1} / ${group.length}`}
            onClose={() => setActiveId(null)}
            onStep={step}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function CredentialCard({ credential: c, onOpen }: { credential: Credential; onOpen: () => void }) {
  const art = c.kind === "badge" ? c.file : c.thumb;
  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      onClick={onOpen}
      className="group flex items-center gap-3.5 rounded-xl border border-card-border bg-card p-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
        {art ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={art} alt="" loading="lazy" className="h-full w-full object-contain p-1" />
        ) : (
          <Icon name={c.icon} className="h-5 w-5" />
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-foreground">{c.title}</span>
        <span className="mt-0.5 block truncate text-xs text-muted-foreground">{c.issuer}</span>
        <span className="mt-0.5 block truncate text-[11px] text-muted-foreground/70">{c.date}</span>
      </span>
      <span className="flex shrink-0 flex-col items-end gap-1">
        {c.status === "expired" ? (
          <span className="rounded-full bg-muted/20 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-muted-foreground">
            Expired
          </span>
        ) : c.file ? (
          <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-accent">
            {c.kind === "pdf" ? "PDF" : c.kind === "badge" ? "Badge" : "Scan"}
          </span>
        ) : null}
        <Icon
          name="chevron-right"
          className="h-4 w-4 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </span>
    </motion.button>
  );
}

function CredentialModal({
  credential: c,
  position,
  onClose,
  onStep,
}: {
  credential: Credential;
  position: string;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
}) {
  const categoryLabel = credentialCategories.find((x) => x.id === c.category)?.label;
  const aspect = getAspect(c);
  const art = c.kind === "badge" ? c.file : c.thumb;

  // The preview frame takes the exact shape of the document, so the modal
  // hugs its content with no empty bands: height is capped by the viewport
  // height and by the width budget left next to the 340px details column.
  const vars = {
    "--h": `min(80vh, 820px, calc(min(66vw, 1000px) / ${aspect}))`,
  } as CSSProperties;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-label={c.title}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        onClick={(e) => e.stopPropagation()}
        style={vars}
        className="my-auto flex w-full max-w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-2xl border border-card-border bg-background shadow-2xl md:w-fit md:max-w-[96vw] md:flex-row"
      >
        {/* Preview — sized to the document's own aspect ratio */}
        <div
          style={{ aspectRatio: String(aspect) }}
          className={cn(
            "relative mx-auto w-full shrink-0 overflow-hidden md:mx-0 md:h-[var(--h)] md:w-auto",
            c.kind === "badge" ? "bg-background-alt" : "bg-neutral-900"
          )}
        >
          {c.file && c.kind === "image" && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={c.file} alt={c.title} className="absolute inset-0 h-full w-full object-contain" />
          )}
          {c.file && c.kind === "pdf" && (
            <iframe
              src={`${c.file}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
              title={c.title}
              className="absolute inset-0 h-full w-full border-0"
            />
          )}
          {c.file && c.kind === "badge" && (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent-2/20" />
              <div className="absolute inset-0 grid-pattern opacity-30" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.file}
                alt={c.title}
                referrerPolicy="no-referrer"
                className="absolute left-1/2 top-1/2 w-[68%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              />
            </>
          )}
          {!c.file && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Icon name={c.icon} className="h-10 w-10" />
              </span>
              <p className="max-w-xs text-sm text-muted-foreground">
                Credential on record. A scanned copy is available on request.
              </p>
            </div>
          )}
        </div>

        {/* Details */}
        <aside className="flex w-full shrink-0 flex-col overflow-y-auto border-t border-card-border p-5 md:max-h-[var(--h)] md:w-[340px] md:border-l md:border-t-0">
          <div className="flex items-start justify-between gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-accent-soft text-accent">
              {art && c.kind !== "badge" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={art} alt="" className="h-full w-full object-contain p-1" />
              ) : (
                <Icon name={c.icon} className="h-5 w-5" />
              )}
            </span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent-soft hover:text-accent"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
          </div>

          <span className="mt-4 text-[10px] font-medium uppercase tracking-widest text-accent">
            {categoryLabel}
          </span>
          <h3 className="mt-1 font-display text-xl font-semibold leading-snug text-foreground">{c.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
          {c.summary && <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.summary}</p>}

          <dl className="mt-5 space-y-3 border-t border-border pt-4 text-xs">
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <Icon name="calendar" className="h-3.5 w-3.5 text-accent" />
              <dt className="sr-only">Date</dt>
              <dd>{c.date}</dd>
            </div>
            {c.credentialId && (
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Icon name="file-check" className="h-3.5 w-3.5 text-accent" />
                <dt className="sr-only">Credential ID</dt>
                <dd className="break-all font-mono">{c.credentialId}</dd>
              </div>
            )}
            {c.status && (
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Icon
                  name={c.status === "active" ? "badge-check" : "shield-alert"}
                  className="h-3.5 w-3.5 text-accent"
                />
                <dt className="sr-only">Status</dt>
                <dd className="capitalize">{c.status}</dd>
              </div>
            )}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {c.file && (
              <a
                href={c.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Icon name="eye" className="h-3.5 w-3.5" />
                Open full size
              </a>
            )}
            {c.file && !c.file.startsWith("http") && (
              <a
                href={c.file}
                download
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon name="download" className="h-3.5 w-3.5" />
                Download
              </a>
            )}
            {c.verifyUrl && (
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon name="external-link" className="h-3.5 w-3.5" />
                Verify
              </a>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between pt-6 text-xs text-muted-foreground">
            <button
              onClick={() => onStep(-1)}
              aria-label="Previous credential"
              className="rounded-full border border-border p-2 transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Icon name="chevron-left" className="h-4 w-4" />
            </button>
            <span className="tabular-nums">{position}</span>
            <button
              onClick={() => onStep(1)}
              aria-label="Next credential"
              className="rounded-full border border-border p-2 transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Icon name="chevron-right" className="h-4 w-4" />
            </button>
          </div>
        </aside>
      </motion.div>
    </motion.div>
  );
}
