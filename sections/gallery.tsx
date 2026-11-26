"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryItems } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { GalleryArt } from "@/components/ui/gallery-art";

export function Gallery() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(galleryItems.map((g) => g.category)))],
    []
  );
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<(typeof galleryItems)[number] | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="section-padding relative bg-background-alt/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Visual Portfolio"
          subtitle="Data visualizations, web work and industrial photography — placeholders ready to be swapped for real screenshots."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <RevealGroup className="columns-1 gap-5 sm:columns-2 lg:columns-3" stagger={0.05}>
          {filtered.map((item) => (
            <motion.button
              key={item.id}
              variants={revealItem}
              onClick={() => setActive(item)}
              className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-card-border bg-card text-left"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/15 via-background-alt to-accent-2/10">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <GalleryArt
                  category={item.category}
                  className="absolute inset-0 opacity-25 transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-background/0 text-background/0 backdrop-blur-0 transition-all duration-300 group-hover:bg-background/60 group-hover:text-foreground group-hover:backdrop-blur-sm">
                  <Icon name="zoom-in" className="h-6 w-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </div>
              <div className="p-4">
                <span className="text-[10px] font-medium uppercase tracking-wide text-accent">
                  {item.category}
                </span>
                <p className="mt-1 text-sm font-medium text-foreground">{item.title}</p>
              </div>
            </motion.button>
          ))}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong w-full max-w-lg rounded-2xl border border-card-border p-6"
            >
              <div className="relative mb-4 h-48 overflow-hidden rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/10">
                <GalleryArt category={active.category} className="absolute inset-0 opacity-25" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wide text-accent">{active.category}</span>
              <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{active.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{active.description}</p>
              <button
                onClick={() => setActive(null)}
                className="mt-5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent"
              >
                <Icon name="close" className="h-3.5 w-3.5" />
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
