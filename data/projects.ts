import type { Project, Service } from "@/types";

export const projects: Project[] = [
  {
    id: "saastoolz",
    title: "SaaSToolz — Free Online Tools",
    description:
      "A live platform of 117 free online tools for PDF conversion, image editing, developer utilities, SEO, writing and calculators — no signup required. Designed, developed and owned by me.",
    longDescription:
      "SaaSToolz is a product I conceived, built and operate end to end — a growing library of browser-based utilities used by the public.",
    tags: ["SaaS", "Web App", "Productivity"],
    techStack: ["SaaS", "Web Tools", "SEO"],
    image: "",
    demoUrl: "https://www.saastoolz.com",
    category: "Web Development",
    featured: true,
  },
  {
    id: "production-dashboard",
    title: "Production Dashboard",
    description:
      "A Python-built analytics dashboard for tracking industrial production and QHSE metrics — bridging shop-floor data with management-level reporting.",
    longDescription:
      "Built to give management a real-time read on production and quality metrics without waiting on manual reports. Consolidates operational data into visual summaries that mirror the same continual-improvement thinking used in ISO management systems.",
    tags: ["Data Analytics", "Industrial", "QHSE"],
    techStack: ["Python", "Pandas", "Data Visualization"],
    image: "",
    githubUrl: "https://github.com/methoomirza/productionDashboard",
    category: "Data & Analytics",
    featured: true,
  },
  {
    id: "book-recommender",
    title: "Book Recommender System",
    description:
      "A recommendation-system project applying collaborative filtering concepts to suggest books based on user preferences and reading history.",
    longDescription:
      "Self-directed project exploring recommendation-engine fundamentals — the same class of problem behind the recommendation-system work in my Kaggle notebooks, applied to a book dataset end to end.",
    tags: ["Machine Learning", "Recommendation Systems"],
    techStack: ["Python", "Pandas", "HTML"],
    image: "",
    githubUrl: "https://github.com/methoomirza/booksrecommender",
    category: "Machine Learning",
    featured: true,
  },
  {
    id: "streamlit-me",
    title: "Interactive Data Portfolio (Streamlit)",
    description:
      "A live, interactive Streamlit application serving as a personal data-science showcase — deployed and publicly accessible.",
    longDescription:
      "A hands-on exercise in shipping data apps rather than just notebooks: built and deployed with Streamlit to practice turning analysis into an interactive, shareable tool.",
    tags: ["Streamlit", "Data App", "Deployment"],
    techStack: ["Python", "Streamlit"],
    image: "",
    githubUrl: "https://github.com/methoomirza/me",
    demoUrl: "https://share.streamlit.io/methoomirza/me/main/app.py",
    category: "Data App",
    featured: false,
  },
  {
    id: "kaggle-portfolio",
    title: "Kaggle Notebooks & Datasets — 3x Expert",
    description:
      "A body of published Kaggle notebooks and datasets spanning data cleaning, exploratory data analysis, visualization, geospatial distance calculation, prediction and recommendation systems.",
    longDescription:
      "Earned Expert tier across both the Notebooks and Datasets categories on Kaggle through consistent, self-directed practice — covering the full data-science workflow from raw data to shareable analysis.",
    tags: ["EDA", "Visualization", "Geospatial", "Prediction"],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    image: "",
    demoUrl: "https://www.kaggle.com/methoomirza",
    category: "Data Science",
    featured: true,
  },
  {
    id: "early-web-projects",
    title: "Client Web Development Portfolio (2009–2010)",
    description:
      "A portfolio of 20+ commerce and CMS-driven websites built for clients across the US and Canada during a remote PHP development role.",
    longDescription:
      "Delivered as a remote PHP programmer for Affordable Programmers — building and maintaining WordPress, Zencart and osCommerce sites, with custom PHP/MySQL back ends for clients spanning e-commerce, legal directories, and community organizations.",
    tags: ["PHP", "WordPress", "E-Commerce"],
    techStack: ["PHP", "MySQL", "jQuery", "WordPress", "Zencart"],
    image: "",
    category: "Web Development",
    featured: false,
  },
];

export const services: Service[] = [
  {
    id: "iso-implementation",
    title: "ISO Management System Implementation",
    description:
      "End-to-end design and rollout of ISO 9001, ISO 14001 and ISO 45001 management systems, from documentation to certification readiness.",
    icon: "clipboard-check",
    features: [
      "Management system design & documentation",
      "Integration into a unified IMS",
      "Certification-readiness preparation",
    ],
  },
  {
    id: "internal-auditing",
    title: "Internal & Lead Auditing",
    description:
      "IRCA-certified lead auditing across Quality and OH&S systems, including internal audit programs and third-party audit facilitation.",
    icon: "search-check",
    features: [
      "Internal audit planning & execution",
      "Non-conformance identification & CAPA tracking",
      "Third-party / certification body liaison",
    ],
  },
  {
    id: "gap-analysis",
    title: "GAP Analysis & Continual Improvement",
    description:
      "Structured GAP analysis against ISO requirements and regulatory frameworks, translated into a practical improvement roadmap.",
    icon: "target",
    features: [
      "Compliance gap identification",
      "Regulatory alignment (OSHAD, ZonesCorp, EAD)",
      "Continual-improvement roadmapping",
    ],
  },
  {
    id: "data-consulting",
    title: "Data Analytics & Dashboarding",
    description:
      "Turning operational and quality data into clear, decision-ready dashboards and reports using Python and modern visualization tools.",
    icon: "line-chart",
    features: [
      "Data cleaning & exploratory analysis",
      "Dashboard design & build",
      "Reporting automation",
    ],
  },
];
