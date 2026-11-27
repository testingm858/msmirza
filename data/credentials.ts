export type CredentialCategory = "audit" | "safety" | "data" | "badges" | "it" | "academic";

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  category: CredentialCategory;
  date: string;
  icon: string;
  /** Path under /public. Omit when no scan is available. */
  file?: string;
  kind?: "image" | "pdf" | "badge";
  /** Width / height of the file. PDFs fall back to getPdfAspect(). */
  aspect?: number;
  credentialId?: string;
  verifyUrl?: string;
  status?: "active" | "expired";
  /** One-line context shown in the modal. */
  summary?: string;
  /** Wide badge description card shown in the modal details. */
  banner?: string;
  /** Badge artwork shown as the card thumbnail. */
  thumb?: string;
}

export const credentialCategories: { id: CredentialCategory; label: string; icon: string }[] = [
  { id: "audit", label: "Lead Auditor", icon: "badge-check" },
  { id: "safety", label: "Health & Safety", icon: "hard-hat" },
  { id: "data", label: "Data & AI", icon: "bar-chart" },
  { id: "badges", label: "Digital Badges", icon: "medal" },
  { id: "it", label: "IT & Security", icon: "network" },
  { id: "academic", label: "Academic", icon: "graduation" },
];

const base = "/certificates";
const credly = "https://www.credly.com/users/muhammad-shahid-mirza/badges/credly";

export const credentials: Credential[] = [
  // ── Lead auditor ───────────────────────────────────────────
  {
    id: "irca-9001",
    title: "ISO 9001:2015 Lead Auditor",
    issuer: "Edullence · CQI & IRCA Certified Course",
    category: "audit",
    date: "Issued 09 Oct 2018",
    icon: "badge-check",
    file: `${base}/audit/iso-9001-lead-auditor.jpg`,
    kind: "image",
    aspect: 1000 / 1427,
    credentialId: "EDU/QMS/LA/18/03213",
    verifyUrl: credly,
    status: "active",
    summary:
      "CQI & IRCA certified Lead Auditor course for Quality Management Systems (30 Aug – 03 Sep 2018), passed with exam.",
    thumb: `${base}/badges/lead-auditor-9001-45001.png`,
  },
  {
    id: "irca-45001",
    title: "ISO 45001:2018 Lead Auditor",
    issuer: "Edullence · CQI & IRCA Certified Course",
    category: "audit",
    date: "Issued 06 Jul 2018",
    icon: "shield-check",
    file: `${base}/audit/iso-45001-lead-auditor.jpg`,
    kind: "image",
    aspect: 1000 / 1427,
    credentialId: "EDU/OHSMS/LA/18/02346",
    verifyUrl: credly,
    status: "active",
    summary:
      "CQI & IRCA certified Lead Auditor course for Occupational Health & Safety Management Systems (19–23 Jun 2018), passed with exam.",
    thumb: `${base}/badges/lead-auditor-9001-45001.png`,
  },

  // ── Health & safety ────────────────────────────────────────
  {
    id: "oshad",
    title: "Abu Dhabi OSH Practitioners Course",
    issuer: "ADVETI · OSHAD — Al Jazirah Institute of Science & Technology",
    category: "safety",
    date: "29–30 May 2017",
    icon: "hard-hat",
    file: `${base}/safety/oshad-practitioner.jpg`,
    kind: "image",
    aspect: 1654 / 2338,
    status: "active",
    summary:
      "Certificate of Achievement for the mandatory OSHAD practitioner course, enabling registration at Qudorat.",
  },
  {
    id: "iosh",
    title: "IOSH Managing Safely",
    issuer: "IOSH · Tatweer Consulting & Training",
    category: "safety",
    date: "29 Aug 2017",
    icon: "shield",
    file: `${base}/safety/iosh-managing-safely.jpg`,
    kind: "image",
    aspect: 2481 / 3507,
    credentialId: "540370",
    status: "active",
    summary: "Course approved and validated by the Institution of Occupational Safety and Health.",
  },

  // ── Data & AI ──────────────────────────────────────────────
  {
    id: "google-da",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google via Coursera",
    category: "data",
    date: "Nov 2022",
    icon: "bar-chart",
    file: `${base}/data/google-data-analytics.pdf`,
    kind: "pdf",
    verifyUrl: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES",
    status: "active",
    summary: "Eight-course professional certificate covering the full data-analytics workflow.",
    thumb: `${base}/badges/google-data-analytics.png`,
  },
  {
    id: "coursera-capstone",
    title: "Data Analytics Capstone: Complete a Case Study",
    issuer: "Google via Coursera",
    category: "data",
    date: "10 Nov 2022",
    icon: "line-chart",
    file: `${base}/data/coursera-capstone.pdf`,
    kind: "pdf",
    credentialId: "EKPH4SAWEA9T",
    verifyUrl: "https://coursera.org/verify/EKPH4SAWEA9T",
  },
  {
    id: "coursera-r",
    title: "Data Analysis with R Programming",
    issuer: "Google via Coursera",
    category: "data",
    date: "07 Oct 2022",
    icon: "code-2",
    file: `${base}/data/coursera-r-programming.pdf`,
    kind: "pdf",
    credentialId: "2LUV9W7EVRQJ",
    verifyUrl: "https://coursera.org/verify/2LUV9W7EVRQJ",
  },
  {
    id: "ibm-viz",
    title: "Data Visualization Using Python",
    issuer: "IBM · Digital Credential",
    category: "data",
    date: "07 May 2022",
    icon: "line-chart",
    file: `${base}/data/ibm-data-visualization-python.pdf`,
    kind: "pdf",
    verifyUrl: "https://www.credly.com/go/gFZSM4of",
    thumb: `${base}/badges/ibm-data-visualization.png`,
  },
  {
    id: "ibm-analysis",
    title: "Data Analysis Using Python",
    issuer: "IBM · Digital Credential",
    category: "data",
    date: "03 Feb 2022",
    icon: "database",
    file: `${base}/data/ibm-data-analysis-python.pdf`,
    kind: "pdf",
    verifyUrl: "https://www.credly.com/go/mJLsTCrU",
    thumb: `${base}/badges/ibm-data-analysis.png`,
  },
  {
    id: "ibm-ds",
    title: "Python for Data Science",
    issuer: "IBM · Cognitive Class",
    category: "data",
    date: "27 Jan 2022",
    icon: "code",
    file: `${base}/data/ibm-data-science-python.pdf`,
    kind: "pdf",
    verifyUrl: "https://www.credly.com/go/4z0EdVcy",
    banner: `${base}/badges/ibm-python-data-science-card.png`,
    thumb: `${base}/badges/ibm-python-data-science.png`,
  },
  {
    id: "tableau",
    title: "Data Visualization using Tableau",
    issuer: "Great Learning Academy",
    category: "data",
    date: "Jan 2022",
    icon: "bar-chart",
    file: `${base}/data/tableau-data-visualization.pdf`,
    kind: "pdf",
    summary: "Certificate of completion for a free online course.",
  },
  {
    id: "kaggle-ml",
    title: "Intro to Machine Learning",
    issuer: "Kaggle Learn",
    category: "data",
    date: "21 Jan 2022",
    icon: "brain-circuit",
    file: `${base}/data/kaggle-intro-ml.png`,
    kind: "image",
    aspect: 1200 / 740,
  },
  {
    id: "dq-loops",
    title: "For Loops & Conditional Statements in Python",
    issuer: "Dataquest",
    category: "data",
    date: "21 Jan 2022",
    icon: "code",
    file: `${base}/data/dataquest-loops-conditionals.pdf`,
    kind: "pdf",
    verifyUrl: "https://app.dataquest.io/verify_cert/969LG7BXW0AH2RD9LV1E/",
  },
  {
    id: "dq-variables",
    title: "Variables, Data Types & Lists in Python",
    issuer: "Dataquest",
    category: "data",
    date: "20 Jan 2022",
    icon: "terminal",
    file: `${base}/data/dataquest-variables-lists.pdf`,
    kind: "pdf",
    verifyUrl: "https://app.dataquest.io/verify_cert/GQN5V8LIM18MR46WFMBX/",
  },
  {
    id: "datacamp",
    title: "Introduction to Python",
    issuer: "DataCamp · Statement of Accomplishment",
    category: "data",
    date: "19 Jan 2022",
    icon: "terminal",
    file: `${base}/data/datacamp-intro-python.pdf`,
    kind: "pdf",
    credentialId: "#22,628,923",
  },
  {
    id: "kaggle-clean",
    title: "Data Cleaning",
    issuer: "Kaggle Learn",
    category: "data",
    date: "18 Jan 2022",
    icon: "kaggle",
    file: `${base}/data/kaggle-data-cleaning.png`,
    kind: "image",
    aspect: 1200 / 740,
  },
  {
    id: "kaggle-py",
    title: "Python",
    issuer: "Kaggle Learn",
    category: "data",
    date: "18 Jan 2022",
    icon: "kaggle",
    file: `${base}/data/kaggle-python.png`,
    kind: "image",
    aspect: 1200 / 740,
  },

  // ── Digital badges ─────────────────────────────────────────
  {
    id: "badge-ims",
    title: "Lead Auditor — Integrated Management Systems",
    issuer: "Auditor Training Online · Credly",
    category: "badges",
    date: "2018",
    icon: "medal",
    file: `${base}/badges/lead-auditor-ims-credly.png`,
    kind: "badge",
    verifyUrl: credly,
    summary: "ISO 19011:2018, ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018.",
  },
  {
    id: "badge-ims-round",
    title: "Certified Lead Auditor — IMS",
    issuer: "Auditor Training Online · Credly",
    category: "badges",
    date: "2018",
    icon: "medal",
    file: `${base}/badges/lead-auditor-ims-round.png`,
    kind: "badge",
    verifyUrl: credly,
    summary: "Integrated Management Systems: ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018.",
  },
  {
    id: "badge-9001-45001",
    title: "Certified Lead Auditor — 9001 & 45001",
    issuer: "Auditor Training Online · Credly",
    category: "badges",
    date: "2018",
    icon: "medal",
    file: `${base}/badges/lead-auditor-9001-45001.png`,
    kind: "badge",
    verifyUrl: credly,
    summary: "Dual certification in ISO 9001:2015 and ISO 45001:2018, shown with the IMS scope.",
  },
  {
    id: "badge-google",
    title: "Google Data Analytics Certificate",
    issuer: "Google · Coursera",
    category: "badges",
    date: "Nov 2022",
    icon: "award",
    file: `${base}/badges/google-data-analytics.png`,
    kind: "badge",
    summary: "Certificate of Completion badge for the eight-course Google program.",
  },
  {
    id: "badge-ibm-ds",
    title: "Python for Data Science",
    issuer: "IBM · Cognitive Class",
    category: "badges",
    date: "27 Jan 2022",
    icon: "award",
    file: `${base}/badges/ibm-python-data-science.png`,
    kind: "badge",
    verifyUrl: "https://www.credly.com/go/4z0EdVcy",
    banner: `${base}/badges/ibm-python-data-science-card.png`,
  },
  {
    id: "badge-ibm-analysis",
    title: "Data Analysis Using Python",
    issuer: "IBM Developer Skills Network",
    category: "badges",
    date: "03 Feb 2022",
    icon: "award",
    file: `${base}/badges/ibm-data-analysis.png`,
    kind: "badge",
    verifyUrl: "https://www.credly.com/go/mJLsTCrU",
  },
  {
    id: "badge-ibm-viz",
    title: "Data Visualization Using Python",
    issuer: "IBM Developer Skills Network",
    category: "badges",
    date: "07 May 2022",
    icon: "award",
    file: `${base}/badges/ibm-data-visualization.png`,
    kind: "badge",
    verifyUrl: "https://www.credly.com/go/gFZSM4of",
  },

  // ── IT & security (no scans supplied yet) ──────────────────
  {
    id: "tryhackme",
    title: "TryHackMe — 4 Learning Paths",
    issuer: "TryHackMe · Top 2% ranking",
    category: "it",
    date: "Since Aug 2023",
    icon: "terminal",
    verifyUrl: "https://tryhackme.com/p/methoomirza",
    status: "active",
    summary:
      "Completed Jr Penetration Tester, Cyber Security 101, Web Fundamentals and Pre Security paths. 64-day best streak; hands-on with Nmap, Hydra, John the Ripper, Splunk and Linux.",
  },
  {
    id: "itil",
    title: "ITIL Foundation",
    issuer: "AXELOS",
    category: "it",
    date: "16 Jul 2015",
    icon: "layers",
    credentialId: "03604736-01-24TT",
    status: "active",
  },
  {
    id: "mta",
    title: "MTA — Networking Fundamentals",
    issuer: "Microsoft",
    category: "it",
    date: "28 Apr 2015",
    icon: "network",
    credentialId: "F282-2026",
    status: "active",
  },
  {
    id: "ceh",
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    category: "it",
    date: "29 Apr 2015 – 28 Apr 2018",
    icon: "shield-alert",
    credentialId: "ECC92035607006",
    status: "expired",
  },

  // ── Academic ───────────────────────────────────────────────
  {
    id: "mcs",
    title: "Master of Computer Science",
    issuer: "Virtual University of Pakistan",
    category: "academic",
    date: "05 Jul 2021",
    icon: "graduation",
    file: `${base}/academic/mcs-vu.jpg`,
    kind: "image",
    aspect: 2316 / 1772,
    credentialId: "019-VU-005403",
    summary: "Two-year programme, Faculty of Computer Science and Information Technology.",
  },
];

/** Page aspect ratio (width / height) of each PDF, so the modal preview fits exactly. */
const pdfAspect: Record<string, number> = {
  "datacamp-intro-python.pdf": 900 / 519.12,
  "dataquest-loops-conditionals.pdf": 1308 / 924,
  "dataquest-variables-lists.pdf": 1308 / 924,
  "python-answering-data-questions.pdf": 841.89 / 595.28,
  "tableau-data-visualization.pdf": 842 / 595,
  "ibm-data-analysis-python.pdf": 790.87 / 612.28,
  "ibm-data-science-python.pdf": 790.87 / 612.28,
  "ibm-data-visualization-python.pdf": 790.87 / 612.28,
};

export function getAspect(c: Credential): number {
  if (c.kind === "badge") return 1;
  if (c.aspect) return c.aspect;
  return pdfAspect[(c.file ?? "").split("/").pop() ?? ""] ?? 792 / 612;
}
