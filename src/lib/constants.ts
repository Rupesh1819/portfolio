import { Variants } from 'framer-motion';

// ── Animation Tokens (Premium, Subtle, Smooth) ──────

export const ANIMATION = {
  // Linear-style butter smooth easing
  ease: [0.16, 1, 0.3, 1] as const, 
  duration: 0.8,
};

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: ANIMATION.duration,
      ease: ANIMATION.ease
    }
  }
};

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: ANIMATION.duration,
      ease: ANIMATION.ease
    }
  }
};

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
