const commonProps = {
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "xMidYMid slice",
  className: "h-full w-full",
};

function CertificateArt() {
  return (
    <svg {...commonProps} viewBox="0 0 320 200">
      <defs>
        <linearGradient id="cert-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-2)" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="82" r="58" fill="none" stroke="url(#cert-grad)" strokeWidth="6" />
      <circle cx="160" cy="82" r="40" fill="url(#cert-grad)" opacity="0.35" />
      <path
        d="M138 82 154 98 186 62"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M132 128 118 176 158 156 160 148Z" fill="var(--accent)" opacity="0.7" />
      <path d="M188 128 202 176 162 156 160 148Z" fill="var(--accent-2)" opacity="0.7" />
      <g opacity="0.5" stroke="var(--accent-2)" strokeWidth="3" strokeLinecap="round">
        <path d="M40 40 60 40" />
        <path d="M32 56 58 56" />
        <path d="M260 150 284 150" />
        <path d="M254 166 282 166" />
      </g>
    </svg>
  );
}

function DataVizArt() {
  return (
    <svg {...commonProps} viewBox="0 0 320 200">
      <defs>
        <linearGradient id="viz-grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-2)" />
        </linearGradient>
      </defs>
      <g opacity="0.85">
        <rect x="48" y="120" width="30" height="56" rx="4" fill="url(#viz-grad)" />
        <rect x="98" y="86" width="30" height="90" rx="4" fill="url(#viz-grad)" />
        <rect x="148" y="104" width="30" height="72" rx="4" fill="url(#viz-grad)" />
        <rect x="198" y="58" width="30" height="118" rx="4" fill="url(#viz-grad)" />
        <rect x="248" y="96" width="30" height="80" rx="4" fill="url(#viz-grad)" />
      </g>
      <path
        d="M48 108 98 70 148 92 198 40 278 78"
        fill="none"
        stroke="var(--accent-2)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <g fill="var(--accent-2)">
        <circle cx="48" cy="108" r="6" />
        <circle cx="98" cy="70" r="6" />
        <circle cx="148" cy="92" r="6" />
        <circle cx="198" cy="40" r="6" />
        <circle cx="278" cy="78" r="6" />
      </g>
      <path d="M32 176 296 176" stroke="var(--accent)" strokeWidth="3" opacity="0.4" />
    </svg>
  );
}

function WebProjectArt() {
  return (
    <svg {...commonProps} viewBox="0 0 320 200">
      <rect x="36" y="34" width="248" height="150" rx="12" fill="none" stroke="var(--accent)" strokeWidth="5" opacity="0.7" />
      <path d="M36 66 284 66" stroke="var(--accent)" strokeWidth="5" opacity="0.7" />
      <g fill="var(--accent-2)" opacity="0.9">
        <circle cx="56" cy="50" r="6" />
        <circle cx="76" cy="50" r="6" />
        <circle cx="96" cy="50" r="6" />
      </g>
      <g stroke="var(--accent-2)" strokeWidth="6" strokeLinecap="round" opacity="0.7">
        <path d="M62 96 130 96" />
        <path d="M62 116 170 116" />
        <path d="M62 136 110 136" />
      </g>
      <rect x="196" y="90" width="66" height="66" rx="10" fill="var(--accent)" opacity="0.35" />
      <path
        d="M212 122 226 136 250 108"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IndustrialArt() {
  return (
    <svg {...commonProps} viewBox="0 0 320 200">
      <defs>
        <linearGradient id="ind-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-2)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <g opacity="0.5" stroke="var(--accent-2)" strokeWidth="4" strokeLinecap="round">
        <path d="M96 66C96 50 108 40 108 24" />
        <path d="M114 70C114 52 128 42 126 24" />
        <path d="M186 56C186 40 198 30 198 14" />
        <path d="M204 60C204 42 218 32 216 14" />
      </g>
      <rect x="70" y="96" width="24" height="34" fill="url(#ind-grad)" opacity="0.75" />
      <rect x="160" y="86" width="24" height="44" fill="url(#ind-grad)" opacity="0.75" />
      <path d="M40 176 40 110 100 110 100 92 150 92 150 130 200 130 200 96 232 96 232 130 280 130 280 176Z" fill="url(#ind-grad)" opacity="0.85" />
      <g fill="var(--accent)" opacity="0.9">
        <rect x="58" y="142" width="16" height="20" rx="2" />
        <rect x="88" y="142" width="16" height="20" rx="2" />
        <rect x="212" y="146" width="16" height="20" rx="2" />
        <rect x="244" y="146" width="16" height="20" rx="2" />
      </g>
      <path d="M32 176 296 176" stroke="var(--accent)" strokeWidth="3" opacity="0.4" />
    </svg>
  );
}

export function GalleryArt({ category, className }: { category: string; className?: string }) {
  return (
    <div className={className}>
      {category === "Certificates" && <CertificateArt />}
      {category === "Data Visualization" && <DataVizArt />}
      {category === "Web Projects" && <WebProjectArt />}
      {category === "Industrial" && <IndustrialArt />}
      {!["Certificates", "Data Visualization", "Web Projects", "Industrial"].includes(category) && <DataVizArt />}
    </div>
  );
}
