"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RevealGroup } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

/** Column counts at Tailwind's base / sm / md / lg / xl breakpoints. */
export interface GridColumns {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const breakpoints: [keyof GridColumns, number][] = [
  ["xl", 1280],
  ["lg", 1024],
  ["md", 768],
  ["sm", 640],
];

function columnsAt(width: number, cols: GridColumns): number {
  let value = cols.base;
  for (const [key, min] of breakpoints.slice().reverse()) {
    if (width >= min && cols[key] !== undefined) value = cols[key] as number;
  }
  return value;
}

function useColumns(cols: GridColumns): number {
  const [count, setCount] = useState(() => cols.lg ?? cols.sm ?? cols.base);
  useEffect(() => {
    const update = () => setCount(columnsAt(window.innerWidth, cols));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [cols]);
  return count;
}

interface ExpandableGridProps<T> {
  items: T[];
  /** Rows visible before expanding. */
  rows: number;
  columns: GridColumns;
  /** Tailwind classes for the grid itself (columns + gap). */
  className: string;
  /** Tailwind margin-top matching the grid gap, e.g. "mt-5". */
  gapClass: string;
  getKey: (item: T) => string;
  render: (item: T) => ReactNode;
  stagger?: number;
  moreLabel?: string;
  lessLabel?: string;
}

/** A grid that shows N rows and slides the remaining items open on demand. */
export function ExpandableGrid<T>({
  items,
  rows,
  columns,
  className,
  gapClass,
  getKey,
  render,
  stagger = 0.06,
  moreLabel = "Show more",
  lessLabel = "Show less",
}: ExpandableGridProps<T>) {
  const cols = useColumns(columns);
  const [expanded, setExpanded] = useState(false);

  const limit = rows * cols;
  const lead = items.slice(0, limit);
  const rest = items.slice(limit);

  return (
    <>
      <RevealGroup className={className} stagger={stagger}>
        {lead.map((item) => (
          <div key={getKey(item)} className="contents">
            {render(item)}
          </div>
        ))}
      </RevealGroup>

      <AnimatePresence initial={false}>
        {expanded && rest.length > 0 && (
          <motion.div
            key="more"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className={cn(className, gapClass)}>
              {rest.map((item) => (
                <div key={getKey(item)} className="contents">
                  {render(item)}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {rest.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent-soft hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            {expanded ? lessLabel : `${moreLabel} (${rest.length})`}
            <Icon
              name="chevron-down"
              className={cn("h-4 w-4 transition-transform duration-300", expanded && "rotate-180")}
            />
          </button>
        </div>
      )}
    </>
  );
}
