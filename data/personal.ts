import type { PersonalInfo, Stat, Value } from "@/types";

export const personalInfo: PersonalInfo = {
  fullName: "Muhammad Shahid Mirza",
  firstName: "Shahid",
  title: "QHSE Lead Auditor & Management Representative",
  taglineWords: [
    "QHSE Lead Auditor",
    "ISO Management Systems Expert",
    "Data & AI Enthusiast",
    "Kaggle 3x Expert",
  ],
  industry: "Quality, Health, Safety & Environment — Industrial Manufacturing",
  location: "Abu Dhabi, United Arab Emirates",
  email: "methoomirza@gmail.com",
  phone: "+971-50-7299726",
  bio: "QHSE Lead Auditor and Management Representative with 15+ years building and certifying ISO-compliant Quality, Health, Safety & Environment systems for heavy industry — now channeling that same rigor into data analytics and applied AI.",
  bioLong: [
    "I've spent the last 15+ years as the Management Representative and QHSE Lead Auditor for a heavy industrial cement manufacturer in Abu Dhabi, building Integrated Management Systems from the ground up — taking organizations from fragmented compliance to unified ISO 9001, ISO 14001 and ISO 45001 certification, and keeping them there through continuous audit, gap analysis and improvement cycles.",
    "Before QHSE became my career, I was a working PHP/MySQL developer and network technician — I built and maintained e-commerce and CMS sites for clients across the US and Canada, and configured LAN/WAN infrastructure for a government coordination office in Pakistan. That early technical foundation never really left me.",
    "In recent years I've rebuilt it deliberately: completing the Google Data Analytics Professional Certificate, becoming a 3x Expert on Kaggle across notebooks and datasets, and writing regularly about applied AI. I'm now most energized at the intersection of the two worlds — using data, automation and AI to make management systems, audits and industrial operations measurably safer and more efficient.",
    "I hold IRCA-certified Lead Auditor status in both ISO 9001:2015 (Quality) and ISO 45001:2018 (Occupational Health & Safety), alongside certifications spanning networking, ethical hacking and ITIL — a breadth that lets me speak fluently to auditors, engineers, and data teams alike.",
  ],
  resumeUrl: "/resume/Muhammad-Shahid-Mirza-CV.pdf",
  avatarUrl: "/images/avatar-0.jpg",
  yearsExperience: 20,
  social: [
    { label: "GitHub", url: "https://github.com/methoomirza", icon: "github" },
    { label: "Kaggle", url: "https://www.kaggle.com/methoomirza", icon: "kaggle" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/shahid-mirza-71ba56166", icon: "linkedin" },
    { label: "Medium", url: "https://medium.com/@methoomirza_89937", icon: "medium" },
    { label: "Substack", url: "https://substack.com/@shahidmirza2", icon: "substack" },
    { label: "Credly", url: "https://www.credly.com/users/muhammad-shahid-mirza/badges/credly", icon: "credly" },
    { label: "Facebook", url: "https://www.facebook.com/methoo.mirza/", icon: "facebook" },
    { label: "Instagram", url: "https://www.instagram.com/methoomirza/", icon: "instagram" },
    { label: "Twitter/X", url: "https://x.com/ShahidM53328092", icon: "x" },
    { label: "TikTok", url: "https://www.tiktok.com/@methoo.mirza", icon: "tiktok" },
  ],
};

export const stats: Stat[] = [
  { label: "Years of Professional Experience", value: 20, suffix: "+" },
  { label: "Years as QHSE Lead Auditor", value: 15, suffix: "+" },
  { label: "ISO Standards Implemented", value: 3 },
  { label: "Kaggle Expert Titles", value: 3, suffix: "x" },
];

export const values: Value[] = [
  {
    title: "Systems Over Shortcuts",
    description:
      "Compliance that lasts is built, not patched. I design management systems that survive audits because they were built to survive real operations first.",
    icon: "shield-check",
  },
  {
    title: "Evidence-Driven",
    description:
      "Whether it's a GAP analysis or a Kaggle notebook, I trust data over assumption — findings should be reproducible and defensible.",
    icon: "bar-chart",
  },
  {
    title: "Continuous Improvement",
    description:
      "ISO's PDCA cycle isn't paperwork to me, it's a habit. The same mindset drives how I pick up new tools — from Python to AI agents.",
    icon: "refresh-cw",
  },
  {
    title: "Bridge, Don't Silo",
    description:
      "I sit between operations, engineering, and leadership. My job is translating between them — and increasingly, between people and data.",
    icon: "git-merge",
  },
];

export const funFacts: string[] = [
  "Started as a PHP developer building e-commerce sites for US & Canadian clients before pivoting into QHSE.",
  "Self-taught 3x Kaggle Expert across Notebooks and Datasets — data cleaning, EDA, geospatial analysis, and recommendation systems.",
  "Holds dual IRCA Lead Auditor certifications: ISO 9001:2015 and ISO 45001:2018.",
  "Writes regularly about applied AI on Medium and Substack alongside a full-time QHSE career.",
  "Speaks Urdu, Hindi, Punjabi natively, with working English and basic Arabic.",
];
