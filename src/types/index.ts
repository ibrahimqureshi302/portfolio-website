import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

export type IconComponent = LucideIcon | ComponentType<{ size?: number; className?: string }>;

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100, used for the proficiency indicator
}

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "blue" | "cyan" | "violet" | "mint";
  skills: Skill[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  stack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  gradient: [string, string];
  glyph: string;
  screenshot?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  current?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  deliverables: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  detail: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}
