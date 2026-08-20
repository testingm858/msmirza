import { cn } from "@/lib/utils";

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px] animate-aurora" />
      <div className="absolute right-[-10%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-accent-2/20 blur-[100px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-[-15%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[110px] animate-aurora [animation-delay:-11s]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
    </div>
  );
}
