// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Site Constants & Configuration
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import type { NavItem, SocialLink, SiteMetadata } from '@/types';

export const siteMetadata: SiteMetadata = {
  title: 'Rupesh Sanjay Shete — AI Engineer & Full Stack Developer',
  description:
    'AI Engineer building production-grade AI systems, LLMs, ML pipelines, and full-stack applications. Specializing in Generative AI, RAG, LangChain, and modern web technologies.',
  author: 'Rupesh Sanjay Shete',
  siteUrl: 'https://rupeshsanjayshete.com',
  ogImage: '/og-image.png',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Rupesh1819',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/rupesh-shete',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:rupesh@example.com',
    icon: 'mail',
  },
];

export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  experience: 'experience',
  projects: 'projects',
  skills: 'skills',
  github: 'github',
  achievements: 'achievements',
  contact: 'contact',
} as const;

export const ANIMATION = {
  ease: [0.16, 1, 0.3, 1] as const,
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
    slower: 1.2,
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;
