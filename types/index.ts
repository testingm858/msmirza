export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  fullName: string;
  firstName: string;
  title: string;
  taglineWords: string[];
  industry: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  bioLong: string[];
  resumeUrl: string;
  avatarUrl: string;
  yearsExperience: number;
  social: SocialLink[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  icon: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  icon: "university" | "graduation" | "books" | "diploma";
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate: string | null;
  credentialId: string | null;
  credentialUrl: string | null;
  status: "active" | "expired";
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  techStack: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  category: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Publication {
  id: string;
  title: string;
  excerpt: string;
  platform: "medium" | "substack" | "kaggle" | "journal";
  url: string;
  date: string;
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  avatarPosition?: string;
  rating: number;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  category: "work" | "education" | "certification" | "achievement";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
