"use client";

import { useTheme } from "next-themes";
import { Icon } from "@/components/ui/icon";
import { useMounted } from "@/hooks/use-mounted";

const modes = ["light", "dark", "system"] as const;
const icons: Record<(typeof modes)[number], string> = {
  light: "sun",
  dark: "moon",
  system: "laptop",
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full border border-border" aria-hidden="true" />;
  }

  const current = (theme as (typeof modes)[number]) ?? "system";

  function cycle() {
    const idx = modes.indexOf(current);
    setTheme(modes[(idx + 1) % modes.length]);
  }

  return (
    <button
      onClick={cycle}
      aria-label={`Switch theme, currently ${current}`}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      <Icon name={icons[current]} className="h-4 w-4" />
    </button>
  );
}
