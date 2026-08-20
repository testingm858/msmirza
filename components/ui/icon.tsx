import { createElement } from "react";
import { getIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

interface IconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, className, strokeWidth }: IconProps) {
  return createElement(getIcon(name), {
    className: cn("shrink-0", className),
    strokeWidth,
    "aria-hidden": "true",
  });
}
