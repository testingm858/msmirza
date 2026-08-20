import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function KaggleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3v18" />
      <path d="M19 7 10.5 13.5 19 20" />
      <path d="M5 13.5 12 7" />
    </svg>
  );
}

export function MediumIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6.5" cy="12" r="4" />
      <ellipse cx="15" cy="12" rx="2.5" ry="4" />
      <ellipse cx="20.5" cy="12" rx="1" ry="4" />
    </svg>
  );
}

export function SubstackIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4h16v2.5H4z" />
      <path d="M4 9h16v2.5H4z" />
      <path d="M4 14h16L12 21z" />
    </svg>
  );
}

export function CredlyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14.5 7 21l5-2.5L17 21l-2-6.5" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v7M7.5 7v.01M12 17v-4.5c0-1.4 1-2.5 2.25-2.5S16.5 11.1 16.5 12.5V17M12 12.2V17" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 8.5h-2c-.8 0-1.5.7-1.5 1.5v2h3.5l-.5 3H11.5v7h-3v-7H6.5v-3h2V9.5C8.5 7 10 5 12.7 5H15v3.5Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7v.01" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4l16 16M20 4 4 20" />
    </svg>
  );
}

export function TiktokIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 4v10.5a3 3 0 1 1-2.5-2.96" />
      <path d="M14 4c.4 2.2 2 3.8 4 4.2V11c-1.5 0-3-.5-4-1.4" />
    </svg>
  );
}
