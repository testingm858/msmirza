import type { Achievement, Testimonial, TimelineItem, GalleryItem, NavLink } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "kaggle-3x-expert",
    title: "Kaggle 3x Expert",
    description:
      "Reached Expert tier across Kaggle Notebooks and Datasets through self-directed, consistent practice in applied data science.",
    year: "2024",
    icon: "trophy",
  },
  {
    id: "dual-lead-auditor",
    title: "Dual IRCA Lead Auditor Certification",
    description:
      "Certified IRCA Lead Auditor in both ISO 9001:2015 (Quality) and ISO 45001:2018 (Occupational Health & Safety) in the same year.",
    year: "2018",
    icon: "medal",
  },
  {
    id: "ims-integration",
    title: "Led Full IMS Integration & Upgrade",
    description:
      "Directed the upgrade of legacy OHSAS 18001 and QHSE systems into a unified Integrated Management System aligned to ISO 9001:2015, ISO 14001:2015, ISO 45001 and OSHAD Framework V3.1.",
    year: "2018",
    icon: "layers",
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    description:
      "Completed an 8-course professional certification spanning data cleaning, exploration and visualization.",
    year: "2022",
    icon: "graduation-cap",
  },
  {
    id: "long-tenure",
    title: "15+ Years as Management Representative",
    description:
      "Sustained tenure as the single point of accountability for QHSE compliance at Al Sultan Industrial Cement since 2010.",
    year: "2010–Present",
    icon: "award",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "muhammad-alzoubi",
    name: "Muhammad Alzoubi",
    role: "Safety Engineer",
    company: "Al Sultan Industrial Cement, Abu Dhabi, UAE",
    quote:
      "He is a highly experienced QHSE and management-systems professional with extensive experience in the industrial sector. His knowledge of ISO standards, auditing, regulatory compliance and continual improvement is complemented by strong analytical and problem-solving skills. I would confidently recommend him to any organization looking for a professional who can build, manage and continuously improve an effective integrated management system.",
    avatar: "/images/testimonials/muhammad-alzoubi.jpg",
    avatarPosition: "center 12%",
    rating: 5,
  },
  {
    id: "muhammad-asghar-khan",
    name: "Muhammad Asghar Khan",
    role: "Safety Officer",
    company: "Al Sultan Industrial Cement, Abu Dhabi, UAE",
    quote:
      "He has demonstrated exceptional commitment to building and maintaining a strong QHSE management system. His deep understanding of ISO 9001, ISO 14001 and ISO 45001, combined with his practical industrial experience, makes him a highly reliable professional. He consistently focuses on compliance, continual improvement and making management-system requirements practical for the organization.",
    avatar: "/images/testimonials/muhammad-asghar-khan.jpg",
    rating: 5,
  },
];

export const timelineItems: TimelineItem[] = [
  { id: "t1", year: "2003", title: "Assistant Software Engineer", description: "Started career at Peak Solution, Lahore — first hands-on VB programming role.", category: "work" },
  { id: "t2", year: "2006", title: "Senior Data Processor / Network Assistant", description: "Joined the District Coordination Officer's office, Govt. of Punjab — network and data operations.", category: "work" },
  { id: "t3", year: "2009", title: "Remote PHP Programmer", description: "Began building commerce and CMS websites for US & Canadian clients at Affordable Programmers.", category: "work" },
  { id: "t4", year: "2010", title: "Joined Al Sultan Industrial Cement", description: "Became Management Representative / QHSE Lead Auditor in Abu Dhabi — the role still held today.", category: "work" },
  { id: "t5", year: "2015", title: "MTA Networking, ITIL Foundation & CEH", description: "Built out a formal IT/security credential base alongside QHSE responsibilities.", category: "certification" },
  { id: "t6", year: "2018", title: "Dual IRCA Lead Auditor Certification", description: "Certified Lead Auditor in ISO 9001:2015 and ISO 45001:2018; led the IMS upgrade and integration.", category: "certification" },
  { id: "t7", year: "2022", title: "Google Data Analytics Professional Certificate", description: "Completed an 8-course program covering the modern data-analytics workflow.", category: "certification" },
  { id: "t7b", year: "2023", title: "Hands-on Cybersecurity on TryHackMe", description: "Completed four learning paths and reached the Top 2% ranking with a 64-day best streak.", category: "achievement" },
  { id: "t8", year: "2024", title: "Kaggle 3x Expert", description: "Reached Expert tier across Notebooks and Datasets on Kaggle.", category: "achievement" },
  { id: "t9", year: "2026", title: "Active Writer on AI & Technology", description: "Publishing regularly on Medium and Substack on applied AI, alongside a full-time QHSE career.", category: "achievement" },
];

export const galleryItems: GalleryItem[] = [
  { id: "g4", title: "Production Dashboard — Data View", category: "Data Visualization", image: "", description: "Screenshot placeholder for the Python production analytics dashboard." },
  { id: "g5", title: "Kaggle Notebook — Geospatial Analysis", category: "Data Visualization", image: "", description: "Screenshot placeholder for a Kaggle geospatial distance-calculation notebook." },
  { id: "g6", title: "Kaggle Notebook — EDA & Visualization", category: "Data Visualization", image: "", description: "Screenshot placeholder for an exploratory data analysis notebook." },
  { id: "g7", title: "Client Web Project — E-Commerce", category: "Web Projects", image: "", description: "Screenshot placeholder for a client e-commerce build from the PHP development years." },
  { id: "g8", title: "Client Web Project — CMS Site", category: "Web Projects", image: "", description: "Screenshot placeholder for a WordPress/Joomla client site." },
  { id: "g9", title: "Al Sultan Industrial Cement — Facility", category: "Industrial", image: "", description: "Placeholder for a photo of the industrial cement facility where QHSE systems are managed." },
];

export const recognizedBy = [
  "IRCA",
  "ISO",
  "OSHAD",
  "ZonesCorp",
  "Google",
  "Coursera",
  "EC-Council",
  "Microsoft",
  "AXELOS / ITIL",
  "Kaggle",
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Writing", href: "#publications" },
  { label: "Contact", href: "#contact" },
];
