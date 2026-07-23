// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Portfolio Data — Single Source of Truth
// All content derived from GitHub repos & profile
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import type { Project, Experience, SkillGroup, Achievement } from '@/types';

// ── Personal Information ───────────────────────
export const portfolioData = {
  name: 'Rupesh Sanjay Shete',
  role: 'AI Engineer | Machine Learning Engineer',
  tagline: 'Building intelligent software powered by Artificial Intelligence, Machine Learning and Large Language Models.',
  about: `My journey into AI engineering started with a fascination for how data shapes our world. As a final-year Computer Engineering student, I've transitioned from building traditional full-stack applications to architecting autonomous systems and intelligent architectures. I believe that complexity belongs in the backend, leaving the user interface clean, intuitive, and seamless.`,
  mission: 'To bridge the gap between bleeding-edge artificial intelligence and seamless, human-centric product experiences.',
  vision: 'Empowering organizations through autonomous systems and intuitive AI interfaces.',
  currentFocus: 'Currently focused on orchestrating multi-agent systems with LangGraph and deploying massive RAG pipelines.',
  email: 'rupeshshete18@gmail.com',
  github: 'https://github.com/Rupesh1819',
  linkedin: 'https://www.linkedin.com/in/rupesh-shete-b12a83313/',
  location: 'Pune, India',
};

export const heroAchievements = [
  { value: '4+', label: 'Years Coding' },
  { value: '18+', label: 'Projects Built' },
  { value: 'LLM & RAG', label: 'Specialization' },
  { value: '20+', label: 'Technologies' }
];

export const currentlyLearning = [
  'Advanced LangGraph Patterns',
  'Multi-modal LLM orchestration',
  'Production-grade MLOps',
  'CUDA Programming'
];

export const whatImBuildingNow = [
  'An autonomous RAG pipeline for healthcare data',
  'A personal AI assistant for task orchestration',
  'Open-source contributions to LangChain'
];

// ── Featured Projects ─────────────────────────
export const projects: Project[] = [
  {
    id: 'homecare-pro',
    title: 'HomeoCare Pro Enterprise',
    subtitle: 'Full-Stack Clinic Management Platform',
    description:
      'A comprehensive clinic management workspace built with Next.js and TypeScript. Features include patient registry, appointment scheduling with live status actions, treatment history, prescription generator, billing, inventory management, and real-time analytics dashboard.',
    problem:
      'Healthcare clinics struggle with fragmented management tools, leading to inefficient patient tracking, missed appointments, and poor revenue visibility.',
    solution:
      'Built an enterprise-grade, role-aware clinic management system with a unified dashboard covering patients, appointments, billing, inventory, and analytics — all with a modern, responsive UI and dark mode support.',
    impact:
      'Deployed to production at bhagwaticlinic.vercel.app, serving a real medical practice with end-to-end digital operations.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Supabase',
      'Tailwind CSS',
      'Docker',
    ],
    category: 'fullstack',
    github: 'https://github.com/Rupesh1819/Clinic-Management',
    liveUrl: 'https://bhagwaticlinic.vercel.app',
    featured: true,
    metrics: [
      { label: 'Modules', value: '10+' },
      { label: 'Database Entities', value: '15+' },
      { label: 'Status', value: 'Production' },
    ],
  },
  {
    id: 'cryptovision',
    title: 'CryptoVision',
    subtitle: 'AI-Powered Crypto Forecasting Dashboard',
    description:
      'A comprehensive cryptocurrency time series analysis dashboard leveraging advanced AI forecasting models and real-time sentiment intelligence to provide actionable market insights.',
    problem:
      'Crypto markets are extremely volatile and difficult to analyze. Traders lack accessible tools combining statistical forecasting, deep learning predictions, and sentiment analysis in one place.',
    solution:
      'Engineered a multi-model forecasting pipeline combining ARIMA/SARIMA (classical statistics), Prophet (trend/seasonality), and LSTM networks (deep learning) with real-time VADER sentiment analysis from news sources.',
    impact:
      'Created a production-ready dashboard demonstrating mastery of time series analysis, deep learning, NLP, and interactive data visualization.',
    techStack: [
      'Python',
      'TensorFlow',
      'Keras',
      'Prophet',
      'LSTM',
      'ARIMA',
      'Streamlit',
      'Plotly',
      'VADER',
      'Pandas',
    ],
    category: 'ai-ml',
    github: 'https://github.com/Rupesh1819/CryptoVision',
    featured: false,
    metrics: [
      { label: 'ML Models', value: '4' },
      { label: 'Data Sources', value: '3' },
      { label: 'Analytics', value: 'Real-time' },
    ],
  },
  {
    id: 'phishing-detection',
    title: 'Phishing Website Detection',
    subtitle: 'ML-Powered Cybersecurity System',
    description:
      'A machine learning system for detecting phishing websites using a Gradient Boosting Classifier trained on 43 URL-based features. Includes SHAP-based model explainability for transparent, trustworthy AI decisions.',
    problem:
      'Phishing attacks remain one of the most common cybersecurity threats. Traditional rule-based detection fails to keep up with increasingly sophisticated phishing URLs.',
    solution:
      'Developed a Gradient Boosting Classifier analyzing 43 URL features with SHAP TreeExplainer for model interpretability, deployed via a Flask web application for real-time URL classification.',
    impact:
      'Achieved 96.4% accuracy with full explainability — demonstrating production-grade ML with responsible AI practices.',
    techStack: [
      'Python',
      'scikit-learn',
      'Flask',
      'SHAP',
      'Pandas',
      'NumPy',
      'Gradient Boosting',
    ],
    category: 'ai-ml',
    github: 'https://github.com/Rupesh1819/phishing-website-detection',
    featured: false,
    metrics: [
      { label: 'Accuracy', value: '96.4%' },
      { label: 'Features', value: '43' },
      { label: 'Explainability', value: 'SHAP' },
    ],
  },
  {
    id: 'movie-recommendation',
    title: 'Movie Recommendation System',
    subtitle: 'Content-Based Recommendation Engine',
    description:
      'An intelligent movie recommendation system using machine learning algorithms to provide personalized movie suggestions based on content similarity and user preferences.',
    problem:
      'Users are overwhelmed by the sheer volume of available movies and need intelligent content discovery.',
    solution:
      'Built a recommendation engine using content-based filtering with ML algorithms to analyze movie features and suggest similar content.',
    impact:
      'Demonstrated understanding of recommendation system architectures, a core AI/ML application domain.',
    techStack: ['Python', 'Jupyter', 'scikit-learn', 'Pandas', 'NumPy'],
    category: 'ai-ml',
    github: 'https://github.com/Rupesh1819/Movie-Recommendation-System',
    featured: true,
    metrics: [
      { label: 'Type', value: 'Content-Based' },
      { label: 'Algorithm', value: 'ML' },
    ],
  },
  {
    id: 'gold-gallery',
    title: 'Gold Gallery',
    subtitle: 'Modern Web Application',
    description:
      'A modern TypeScript web application showcasing frontend engineering skills with clean architecture and responsive design.',
    problem: 'Need for a polished, performant gallery-style web experience.',
    solution:
      'Engineered a TypeScript-first web application with modern design patterns and MIT-licensed open source code.',
    impact: 'Demonstrates proficiency in TypeScript and modern web development practices.',
    techStack: ['TypeScript', 'Web Technologies'],
    category: 'web',
    github: 'https://github.com/Rupesh1819/Gold-Gallery',
    featured: false,
  },
  {
    id: 'dsbda-practicals',
    title: 'Data Science & Big Data Analytics',
    subtitle: 'Academic ML/Data Science Portfolio',
    description:
      'Comprehensive collection of data science experiments covering the full ML pipeline: data wrangling, statistical analysis, regression, classification, text analytics, and data visualization.',
    problem:
      'Structured exploration of fundamental data science and big data analytics concepts.',
    solution:
      'Implemented 10+ experiments covering Linear/Logistic Regression, Naive Bayes, data wrangling, descriptive statistics, text analytics, and Tableau visualization.',
    impact:
      'Solid foundation in data science fundamentals with hands-on implementations.',
    techStack: [
      'Python',
      'Jupyter',
      'Pandas',
      'NumPy',
      'scikit-learn',
      'Matplotlib',
      'Seaborn',
    ],
    category: 'data-science',
    github:
      'https://github.com/Rupesh1819/TE-DSBDA-72311410C-SHETE-RUPESH-SANJAY',
    featured: true,
  },
];

// ── Experience ─────────────────────────────────
export const experiences: Experience[] = [
  {
    id: 'internship-codeb',
    role: 'Data Science Intern',
    company: 'CodeB Solution Pvt. Ltd.',
    location: 'Remote',
    startDate: '2026',
    endDate: '2026 (2 Months)',
    description: 'Built and deployed end-to-end machine learning solutions for real-world business problems. Worked on data preprocessing, feature engineering, model training, explainability, and interactive AI applications.',
    achievements: [
      'Developed and evaluated 5+ ML classification models using Python and Scikit-learn.',
      'Performed exploratory data analysis and feature engineering to improve model quality.',
      'Built interactive AI applications using Streamlit and Flask.',
      'Implemented SHAP for explainable AI and feature importance visualization.',
      'Collaborated using Git and industry-standard development workflows.'
    ],
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Flask', 'SHAP', 'Git'],
    type: 'work',
  },
  {
    id: 'internship-growmore',
    role: 'Machine Learning Intern',
    company: 'Growmore Pvt. Ltd.',
    location: 'Remote',
    startDate: '2026',
    endDate: '2026',
    description: 'Designed and optimized machine learning models for structured datasets while improving model performance through feature engineering and hyperparameter tuning.',
    achievements: [
      'Built machine learning models using Python and Scikit-learn.',
      'Compared multiple algorithms to identify the best-performing solution.',
      'Performed data preprocessing and feature engineering.',
      'Optimized models using GridSearchCV for improved prediction accuracy.'
    ],
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'GridSearchCV'],
    type: 'work',
  },
  {
    id: 'internship-amdox',
    role: 'Machine Learning Intern',
    company: 'Amdox Technologies',
    location: 'Remote',
    startDate: '2026',
    endDate: '2026 (1 Month)',
    description: 'Contributed to an AI-powered task optimization project by developing predictive models and supporting the end-to-end machine learning workflow.',
    achievements: [
      'Developed predictive ML models for task optimization.',
      'Performed feature engineering and model evaluation.',
      'Collaborated using Git and version control throughout development.',
      'Worked within project timelines while meeting defined milestones.'
    ],
    techStack: ['Python', 'Machine Learning', 'Git', 'Data Analysis', 'Predictive Modeling'],
    type: 'work',
  },
  {
    id: 'education-engineering',
    role: 'B.E. Computer Engineering',
    company: 'Genba Sopanrao Moze College of Engineering',
    location: 'Pune, India',
    startDate: '2023',
    endDate: '2027',
    description:
      'Pursuing Bachelor of Engineering in Computer Engineering with focus on AI/ML, Data Science, and Full-Stack Development.',
    achievements: [
      'Specializing in Artificial Intelligence and Machine Learning',
      'Built production-grade projects including clinic management systems and AI forecasting dashboards',
      'Explored advanced topics: Deep Learning, NLP, Computer Vision, Big Data Analytics',
      'Hands-on experience with modern tech stacks: Next.js, TypeScript, Python, TensorFlow',
    ],
    techStack: [
      'Python',
      'TypeScript',
      'Next.js',
      'TensorFlow',
      'PostgreSQL',
    ],
    type: 'education',
  },
];

// ── Skills ─────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    category: 'ai-ml',
    label: 'AI & Machine Learning',
    description: 'Building intelligent systems with cutting-edge AI',
    skills: [
      { name: 'Python', level: 95, category: 'ai-ml' },
      { name: 'TensorFlow / Keras', level: 85, category: 'ai-ml' },
      { name: 'scikit-learn', level: 90, category: 'ai-ml' },
      { name: 'LLMs & Generative AI', level: 85, category: 'ai-ml' },
      { name: 'LangChain / LangGraph', level: 80, category: 'ai-ml' },
      { name: 'RAG Systems', level: 80, category: 'ai-ml' },
      { name: 'NLP & Sentiment Analysis', level: 85, category: 'ai-ml' },
      { name: 'Computer Vision', level: 75, category: 'ai-ml' },
      { name: 'Deep Learning (LSTM, CNN)', level: 85, category: 'ai-ml' },
      { name: 'SHAP / Model Explainability', level: 80, category: 'ai-ml' },
      { name: 'Time Series Forecasting', level: 85, category: 'ai-ml' },
      { name: 'AI Agents', level: 80, category: 'ai-ml' },
    ],
  },
  {
    category: 'frontend',
    label: 'Frontend Engineering',
    description: 'Crafting premium web experiences',
    skills: [
      { name: 'React', level: 90, category: 'frontend' },
      { name: 'Next.js', level: 90, category: 'frontend' },
      { name: 'TypeScript', level: 90, category: 'frontend' },
      { name: 'Tailwind CSS', level: 90, category: 'frontend' },
      { name: 'Framer Motion', level: 80, category: 'frontend' },
      { name: 'Three.js / R3F', level: 70, category: 'frontend' },
      { name: 'HTML5 / CSS3', level: 95, category: 'frontend' },
    ],
  },
  {
    category: 'backend',
    label: 'Backend & Infrastructure',
    description: 'Scalable systems and APIs',
    skills: [
      { name: 'FastAPI', level: 85, category: 'backend' },
      { name: 'Flask', level: 85, category: 'backend' },
      { name: 'Node.js', level: 80, category: 'backend' },
      { name: 'PostgreSQL', level: 85, category: 'backend' },
      { name: 'Prisma ORM', level: 85, category: 'backend' },
      { name: 'Supabase', level: 80, category: 'backend' },
      { name: 'Docker', level: 75, category: 'backend' },
      { name: 'REST APIs', level: 90, category: 'backend' },
      { name: 'MCP Servers', level: 75, category: 'backend' },
    ],
  },
  {
    category: 'tools',
    label: 'Tools & Platforms',
    description: 'Modern development workflow',
    skills: [
      { name: 'Git / GitHub', level: 90, category: 'tools' },
      { name: 'Vercel', level: 85, category: 'tools' },
      { name: 'VS Code', level: 95, category: 'tools' },
      { name: 'Jupyter Notebooks', level: 90, category: 'tools' },
      { name: 'Streamlit', level: 85, category: 'tools' },
      { name: 'Plotly', level: 80, category: 'tools' },
    ],
  },
];

// ── Achievements ───────────────────────────────
export const achievements: Achievement[] = [
  {
    id: 'accuracy',
    title: '96.4% ML Accuracy',
    description: 'Phishing detection model with Gradient Boosting Classifier',
    icon: '🎯',
    value: '96.4%',
    type: 'metric',
  },
  {
    id: 'production-app',
    title: 'Production Deployment',
    description: 'Clinic management system live and serving real users',
    icon: '🚀',
    value: 'Live',
    type: 'metric',
  },
  {
    id: 'ai-models',
    title: 'AI Models Built',
    description: 'Including LSTM, ARIMA, Prophet, Gradient Boosting, and more',
    icon: '🧠',
    value: '10+',
    type: 'metric',
  },
  {
    id: 'projects',
    title: 'Projects Shipped',
    description: 'Spanning AI/ML, full-stack web, and data science',
    icon: '📦',
    value: '6+',
    type: 'metric',
  },
  {
    id: 'tech-stack',
    title: 'Technologies Mastered',
    description: 'From Python & TensorFlow to Next.js & Three.js',
    icon: '⚡',
    value: '25+',
    type: 'metric',
  },
  {
    id: 'explainable-ai',
    title: 'Explainable AI',
    description: 'SHAP-based model interpretability for responsible AI',
    icon: '🔍',
    value: 'SHAP',
    type: 'metric',
  },
];

// ── GitHub Stats (static fallback) ─────────────
export const githubStats = {
  username: 'Rupesh1819',
  publicRepos: 6,
  topLanguages: [
    { name: 'Python', percentage: 40, color: '#3572A5' },
    { name: 'TypeScript', percentage: 30, color: '#3178C6' },
    { name: 'Jupyter Notebook', percentage: 20, color: '#DA5B0B' },
    { name: 'JavaScript', percentage: 10, color: '#F7DF1E' },
  ],
  profileUrl: 'https://github.com/Rupesh1819',
};

// ── Role Titles for Hero Animation ─────────────
export const roleTitles = [
  'AI Engineer',
  'Machine Learning Engineer',
  'Full Stack Developer',
  'Generative AI Engineer',
  'Data Scientist',
  'Python Developer',
];

// ── Tech Stack Logos for visual display ────────
export const techStackItems = [
  { name: 'Python', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Three.js', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },
  { name: 'TensorFlow', category: 'ai' },
  { name: 'PyTorch', category: 'ai' },
  { name: 'scikit-learn', category: 'ai' },
  { name: 'LangChain', category: 'ai' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'Flask', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Prisma', category: 'backend' },
  { name: 'Supabase', category: 'backend' },
  { name: 'Docker', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'Streamlit', category: 'tools' },
];

export const architectures = [
  {
    title: 'Autonomous RAG Agent Pipeline',
    type: 'Data Flow',
    description: 'A scalable retrieval-augmented generation pipeline using vector databases and large language models for enterprise search.',
    techStack: ['LangChain', 'Pinecone', 'OpenAI', 'FastAPI']
  },
  {
    title: 'Multi-Agent Orchestration',
    type: 'Agentic',
    description: 'Coordinated autonomous agents that collaborate to solve complex reasoning tasks, featuring state management and self-reflection.',
    techStack: ['CrewAI', 'Python', 'LangGraph']
  },
  {
    title: 'Real-Time Inference Engine',
    type: 'ML Pipeline',
    description: 'High-throughput model serving architecture for deploying deep learning models with millisecond latency.',
    techStack: ['TensorFlow Serving', 'Docker', 'Redis']
  },
  {
    title: 'Distributed Training Cluster',
    type: 'Deep Learning',
    description: 'Multi-GPU distributed training setup for training large neural networks efficiently across multiple nodes.',
    techStack: ['PyTorch', 'Horovod', 'Kubernetes']
  }
];

