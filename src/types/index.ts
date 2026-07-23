// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Portfolio Type Definitions
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  category: 'ai-ml' | 'fullstack' | 'data-science' | 'web';
  github: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  metrics?: ProjectMetric[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  icon?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLogo?: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  techStack: string[];
  type: 'work' | 'education';
}

export interface Skill {
  name: string;
  icon?: string;
  level: number; // 0-100
  category: SkillCategory;
}

export type SkillCategory = 'ai-ml' | 'frontend' | 'backend' | 'tools' | 'languages';

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  description: string;
  skills: Skill[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  value?: string;
  type: 'metric' | 'certification' | 'award';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  ogImage: string;
  twitterHandle?: string;
}
