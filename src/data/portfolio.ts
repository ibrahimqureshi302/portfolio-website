import {
  Mail,
  Server,
  Layout,
  Database,
  Container,
  Code2,
  LayoutDashboard,
  ShieldCheck,
  Boxes,
  Wrench,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import type {
  NavItem,
  StatItem,
  SkillGroup,
  Project,
  ExperienceItem,
  ServiceItem,
  EducationItem,
  SocialLink,
} from "@/types";
import updeskScreenshot from "@/assets/updesk-screenshot.jpg";
import searchaiScreenshot from "@/assets/searchai-screenshot.jpg";
import woaScreenshot from "@/assets/woa-screenshot.jpg";

/**
 * PLACEHOLDER CONTENT
 * Fields marked with a leading note are placeholders — replace with your
 * real details before deploying. Search this file for "Placeholder" to
 * find every field worth reviewing.
 */

export const profile = {
  name: "Ibrahim Bilal",
  title: "Full-Stack Web Developer",
  headline: "Building scalable web applications with Django & React.",
  description:
    "I design and build modern, API-driven web applications — pairing Django and Django REST Framework on the backend with React and TypeScript on the front end. Data lives in PostgreSQL and MySQL, background work runs through Celery, Redis and cron jobs, and everything ships in Docker.",
  // Real inbox
  email: "ibrahimqurashi302@gmail.com",
  location: "Available for remote & on-site roles",
  resumeUrl: "#",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ibrahimqureshi302", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ibrahim-989b913a3/", icon: LinkedinIcon },
  { label: "Email", href: "mailto:ibrahimqurashi302@gmail.com", icon: Mail },
];

export const navItems: NavItem[] = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "services", href: "#services" },
  { label: "contact", href: "#contact" },
];

// Placeholder values — swap in your real numbers
export const stats: StatItem[] = [
  { label: "Projects completed", value: 15, suffix: "+" },
  { label: "Technologies used", value: 12, suffix: "+" },
  { label: "Years of experience", value: 1, suffix: "+" },
  { label: "GitHub repositories", value: 10, suffix: "+" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    description: "Server logic, data modeling & authentication",
    icon: Server,
    accent: "blue",
    skills: [
      { name: "Python", level: 92 },
      { name: "Django", level: 90 },
      { name: "Django REST Framework", level: 90 },
      { name: "REST APIs", level: 88 },
      { name: "JWT Authentication", level: 82 },
      { name: "Celery", level: 80 },
    ],
  },
  {
    title: "Frontend",
    description: "Interfaces that feel fast, clear & consistent",
    icon: Layout,
    accent: "cyan",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Material UI", level: 78 },
    ],
  },
  {
    title: "Database",
    description: "Schema design, queries & data integrity",
    icon: Database,
    accent: "violet",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "SQLite", level: 80 },
      { name: "Redis", level: 78 },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Containerized, versioned & ready to ship",
    icon: Container,
    accent: "mint",
    skills: [
      { name: "Docker", level: 82 },
      { name: "Docker Compose", level: 80 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Linux", level: 78 },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "wheels-of-australia",
    name: "Wheels of Australia",
    tagline: "Real-time vehicle rental platform",
    description:
      "A full-stack vehicle rental platform for four roles — admin, rental, driver and mechanic — with live GPS fleet tracking and automated driver monitoring.",
    longDescription:
      "Wheels of Australia is a full-stack vehicle rental platform built for four distinct roles: admin, rental, driver and mechanic. Real-time GPS fleet tracking runs over Django Channels WebSockets, with a server-side watchdog that automatically warns and suspends drivers after repeated location-off events. Background jobs handled by Celery and Redis manage reminders and GPS monitoring, while Google Gemini OCR auto-extracts ID document data to speed up verification. Access is secured with cookie-based JWT authentication and granular role-based permissions.",
    stack: ["React", "TypeScript", "Django REST Framework", "PostgreSQL", "Django Channels", "Celery", "Docker"],
    features: [
      "Real-time GPS fleet tracking via Django Channels WebSockets",
      "Automated driver monitoring — warns and suspends after repeated location-off events",
      "Google Gemini OCR auto-extracts ID documents to speed up verification",
      "Cookie-based JWT auth with granular role-based permissions across 4 roles",
    ],
    // Placeholder — link to the real repository
    githubUrl: "https://github.com/ibrahimqureshi302/wheels-of-australia",
    // Placeholder — link to a live deployment
    liveUrl: "https://wheelsofaustralia.ibrahimbilal.dev",
    gradient: ["#8B5CF6", "#2E6BFF"],
    glyph: "WA",
    screenshot: woaScreenshot,
  },
  {
    slug: "updesk",
    name: "UpDesk",
    tagline: "Upwork dashboard",
    description:
      "A full-stack Upwork dashboard that unifies six modules — earnings, proposals, messages and more — into one Django + React view.",
    longDescription:
      "UpDesk is a full-stack Upwork dashboard built with Django, React 18 and Vite, unifying six modules into a single view. Earnings and proposal win-rate analytics are visualized through interactive Recharts dashboards. Authentication combines local JWT login with the Upwork OAuth 2.0 flow, with access and refresh tokens encrypted using Fernet. Rate-limited Upwork API calls are decoupled from page loads via Celery and Redis background syncing, with PostgreSQL serving data instantly and per-module SyncLog auditing plus tenacity-based retries keeping syncs reliable. Real-time WhatsApp alerts via the Evolution API notify on new messages and dashboard updates.",
    stack: ["Django", "React", "PostgreSQL", "Celery", "Redis", "OAuth 2.0", "Docker"],
    features: [
      "Six Upwork modules unified into one dashboard with Recharts analytics",
      "Dual authentication — local JWT plus Upwork OAuth 2.0, tokens encrypted with Fernet",
      "Celery + Redis background syncing decouples rate-limited Upwork API calls from page loads",
      "Real-time WhatsApp alerts via Evolution API for new messages & updates",
    ],
    // Placeholder — link to the real repository
    githubUrl: "https://github.com/ibrahimqureshi302/updesk",
    // Placeholder — link to a live deployment
    liveUrl: "https://updesk.ibrahimbilal.dev",
    gradient: ["#2E6BFF", "#22D3EE"],
    glyph: "UP",
    screenshot: updeskScreenshot,
  },
  {
    slug: "ai-powered-smart-search-platform",
    name: "AI-Powered Smart Search Platform",
    tagline: "AI-driven search & recommendations",
    description:
      "A search platform that scrapes 10+ data sources and layers AI-driven recommendations on top, deployed on AWS for 500+ concurrent users.",
    longDescription:
      "This platform scrapes more than 10 data sources with an 85% accuracy rate and layers AI-driven recommendations on top, reaching 88% user satisfaction in testing. It's deployed on AWS infrastructure maintaining 99% uptime for 500+ concurrent users, with API response times optimized to under 3 seconds through efficient caching.",
    stack: ["React", "Tailwind CSS", "Supabase", "Node.js", "AWS"],
    features: [
      "Scrapes 10+ data sources with an 85% accuracy rate",
      "AI-driven recommendations achieving 88% user satisfaction",
      "99% uptime on AWS for 500+ concurrent users",
      "Sub-3-second API response times via efficient caching",
    ],
    // Placeholder — link to the real repository
    githubUrl: "https://github.com/ibrahimqureshi302/ai-smart-search-platform",
    // Placeholder — link to a live deployment
    liveUrl: "https://searchai.ibrahimbilal.dev",
    gradient: ["#22D3EE", "#34D399"],
    glyph: "AI",
    screenshot: searchaiScreenshot,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    organization: "AuraTek AI",
    period: "Mar 2026 — Jul 2026",
    location: "Lahore, Pakistan",
    summary:
      "Delivered production-grade full-stack applications end to end across React/TypeScript frontends and Django REST backends, including a real-time vehicle rental platform with live GPS tracking and role-based dashboards for four user roles.",
    highlights: [
      "Built a real-time vehicle rental platform with live GPS tracking and role-based dashboards for 4 user roles",
      "Designed and secured 20+ RESTful API endpoints over PostgreSQL with JWT authentication and role-based access control",
      "Deployed on a Dockerized stack using Git-based version control and peer code review",
    ],
  },
];

export const services: ServiceItem[] = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end builds that connect a solid backend to a polished, responsive front end.",
    icon: Code2,
    deliverables: ["Architecture planning", "Backend + frontend delivery", "QA & handover"],
  },
  {
    title: "Django Backend Development",
    description: "Well-structured Django applications with clean models, views and business logic.",
    icon: LayoutDashboard,
    deliverables: ["Data modeling", "Admin & auth setup", "Performance tuning"],
  },
  {
    title: "REST API Development",
    description: "Versioned, documented REST APIs built with Django REST Framework.",
    icon: ShieldCheck,
    deliverables: ["Endpoint design", "JWT authentication", "API documentation"],
  },
  {
    title: "React Frontend Development",
    description: "Type-safe, component-driven interfaces built with React and TypeScript.",
    icon: Layout,
    deliverables: ["Component architecture", "State & data fetching", "Responsive UI"],
  },
  {
    title: "Database Design",
    description: "Relational schemas that stay fast and consistent as data grows.",
    icon: Boxes,
    deliverables: ["Schema design", "Indexing & optimization", "Migration strategy"],
  },
  {
    title: "Dockerization",
    description: "Containerized applications that run the same on every machine.",
    icon: Container,
    deliverables: ["Dockerfile authoring", "Docker Compose setup", "Environment parity"],
  },
  {
    title: "Deployment & Maintenance",
    description: "Getting applications live and keeping them healthy after launch.",
    icon: Wrench,
    deliverables: ["Deployment pipelines", "Monitoring basics", "Ongoing support"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "COMSATS University Vehari",
    period: "Jan 2022 — Jan 2026",
    location: "Vehari, Punjab, Pakistan",
    detail:
      "Relevant coursework: Data Structures & Algorithms, OOP, Database Management Systems, Operating Systems, Web Development, Software Engineering, Computer Networks, Artificial Intelligence.",
  },
];

export const heroBadge = {
  label: "Available for freelance & full-time roles",
};
