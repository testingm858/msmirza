"use client";

import { tryhackme, tryhackmeBadges } from "@/data/tryhackme";
import type { Credential } from "@/data/credentials";
import { Icon } from "@/components/ui/icon";

export function TryHackMeBadges({
  badges,
  onOpen,
}: {
  badges: Credential[];
  onOpen: (id: string) => void;
}) {
  return (
    <div className="mt-16">
      <div className="mb-3 flex items-center gap-4">
        <span className="h-px flex-1 bg-border" />
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <Icon name="terminal" className="h-4 w-4" />
          TryHackMe Highlights
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
        {tryhackme.stats.map((s) => (
          <span key={s.label}>
            <span className="font-semibold text-foreground">{s.value}</span> {s.label.toLowerCase()}
          </span>
        ))}
        <a
          href={tryhackme.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
        >
          View all {tryhackmeBadges.length} badges
          <Icon name="external-link" className="h-3 w-3" />
        </a>
      </div>

      <div className="grid grid-cols-4 gap-3 lg:grid-cols-7">
        {badges.map((b) => (
          <button
            key={b.id}
            onClick={() => onOpen(b.id)}
            className="group flex flex-col items-center rounded-xl border border-card-border bg-card p-3 text-center transition-all duration-200 hover:-translate-y-1 hover:border-accent/40"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={b.file}
              alt={b.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20"
            />
            <span className="mt-2 line-clamp-2 text-[10px] font-medium leading-snug text-foreground sm:text-[11px]">
              {b.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
