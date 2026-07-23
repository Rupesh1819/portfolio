import re

content = """1: // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2: // Portfolio Data — Single Source of Truth
3: // All content derived from GitHub repos & profile
4: // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5: 
6: import type { Project, Experience, SkillGroup, Achievement } from '@/types';
7: 
8: // ── Personal Information ───────────────────────
9: export const portfolioData = {
10:   name: 'Rupesh Sanjay Shete',
11:   role: 'AI Engineer | Machine Learning Engineer',
12:   tagline: 'Building intelligent software powered by Artificial Intelligence, Machine Learning and Large Language Models.',
13:   about: `My journey into AI engineering started with a fascination for how data shapes our world. As a final-year Computer Engineering student, I've transitioned from building traditional full-stack applications to architecting autonomous systems and intelligent architectures. I believe that complexity belongs in the backend, leaving the user interface clean, intuitive, and seamless.`,
14:   mission: 'To bridge the gap between bleeding-edge artificial intelligence and seamless, human-centric product experiences.',
15:   vision: 'Empowering organizations through autonomous systems and intuitive AI interfaces.',
16:   currentFocus: 'Currently focused on orchestrating multi-agent systems with LangGraph and deploying massive RAG pipelines.',
17:   email: 'rupeshshete18@gmail.com',
18:   github: 'https://github.com/Rupesh1819',
19:   linkedin: 'https://www.linkedin.com/in/rupesh-shete-b12a83313/',
20:   location: 'Pune, India',
21: };
22: 
23: export const heroAchievements = [
24:   { value: '4+', label: 'Years Coding' },
25:   { value: '18+', label: 'Projects' },
26:   { value: '100%', label: 'Delivery' },
27:   { value: '24/7', label: 'AI Agent' }
28: ];
29: 
30: export const currentlyLearning = [
31:   'Advanced LangGraph Patterns',
32:   'Multi-modal LLM orchestration',
33:   'Production-grade MLOps',
34:   'CUDA Programming'
35: ];
36: 
37: export const whatImBuildingNow = [
38:   'An autonomous RAG pipeline for healthcare data',
39:   'A personal AI assistant for task orchestration',
40:   'Open-source contributions to LangChain'
41: ];
42: 
43: // ── Featured Projects ─────────────────────────
44: export const projects: Project[] = [
45:   {
46:     id: 'homecare-pro',
47:     title: 'HomeoCare Pro Enterprise',
48:     subtitle: 'Full-Stack Clinic Management Platform',
49:     description:
50:       'A comprehensive clinic management workspace built with Next.js and TypeScript. Features include patient registry, appointment scheduling with live status actions, treatment history, prescription generator, billing, inventory management, and real-time analytics dashboard.',
51:     problem:
52:       'Healthcare clinics struggle with fragmented management tools, leading to inefficient patient tracking, missed appointments, and poor revenue visibility.',
53:     solution:
54:       'Built an enterprise-grade, role-aware clinic management system with a unified dashboard covering patients, appointments, billing, inventory, and analytics — all with a modern, responsive UI and dark mode support.',
55:     impact:
56:       'Deployed to production at bhagwaticlinic.vercel.app, serving a real medical practice with end-to-end digital operations.',
57:     techStack: [
58:       'Next.js',
59:       'TypeScript',
60:       'Prisma',
61:       'PostgreSQL',
62:       'Supabase',
63:       'Tailwind CSS',
64:       'Docker',
65:     ],
66:     category: 'fullstack',
67:     github: 'https://github.com/Rupesh1819/Clinic-Management',
68:     liveUrl: 'https://bhagwaticlinic.vercel.app',
69:     featured: true,
70:     metrics: [
71:       { label: 'Modules', value: '10+' },
72:       { label: 'Database Entities', value: '15+' },
73:       { label: 'Status', value: 'Production' },
74:     ],
75:   },
76:   {
77:     id: 'cryptovision',
78:     title: 'CryptoVision',
79:     subtitle: 'AI-Powered Crypto Forecasting Dashboard',
80:     description:
81:       'A comprehensive cryptocurrency time series analysis dashboard leveraging advanced AI forecasting models and real-time sentiment intelligence to provide actionable market insights.',
82:     problem:
83:       'Crypto markets are extremely volatile and difficult to analyze. Traders lack accessible tools combining statistical forecasting, deep learning predictions, and sentiment analysis in one place.',
84:     solution:
85:       'Engineered a multi-model forecasting pipeline combining ARIMA/SARIMA (classical statistics), Prophet (trend/seasonality), and LSTM networks (deep learning) with real-time VADER sentiment analysis from news sources.',
86:     impact:
87:       'Created a production-ready dashboard demonstrating mastery of time series analysis, deep learning, NLP, and interactive data visualization.',
88:     techStack: [
89:       'Python',
90:       'TensorFlow',
91:       'Keras',
92:       'Prophet',
93:       'LSTM',
94:       'ARIMA',
95:       'Streamlit',
96:       'Plotly',
97:       'VADER',
98:       'Pandas',
99:     ],
100:     category: 'ai-ml',
101:     github: 'https://github.com/Rupesh1819/CryptoVision',
102:     featured: true,
103:     metrics: [
104:       { label: 'ML Models', value: '4' },
105:       { label: 'Data Sources', value: '3' },
106:       { label: 'Analytics', value: 'Real-time' },
107:     ],
108:   },
109:   {
110:     id: 'phishing-detection',
111:     title: 'Phishing Website Detection',
112:     subtitle: 'ML-Powered Cybersecurity System',
113:     description:
114:       'A machine learning system for detecting phishing websites using a Gradient Boosting Classifier trained on 43 URL-based features. Includes SHAP-based model explainability for transparent, trustworthy AI decisions.',
115:     problem:
116:       'Phishing attacks remain one of the most common cybersecurity threats. Traditional rule-based detection fails to keep up with increasingly sophisticated phishing URLs.',
117:     solution:
118:       'Developed a Gradient Boosting Classifier analyzing 43 URL features with SHAP TreeExplainer for model interpretability, deployed via a Flask web application for real-time URL classification.',
119:     impact:
120:       'Achieved 96.4% accuracy with full explainability — demonstrating production-grade ML with responsible AI practices.',
121:     techStack: [
122:       'Python',
123:       'scikit-learn',
124:       'Flask',
125:       'SHAP',
126:       'Pandas',
127:       'NumPy',
128:       'Gradient Boosting',
129:     ],
130:     category: 'ai-ml',
131:     github: 'https://github.com/Rupesh1819/phishing-website-detection',
132:     featured: true,
133:     metrics: [
134:       { label: 'Accuracy', value: '96.4%' },
135:       { label: 'Features', value: '43' },
136:       { label: 'Explainability', value: 'SHAP' },
137:     ],
138:   },
139:   {
140:     id: 'movie-recommendation',
141:     title: 'Movie Recommendation System',
142:     subtitle: 'Content-Based Recommendation Engine',
143:     description:
144:       'An intelligent movie recommendation system using machine learning algorithms to provide personalized movie suggestions based on content similarity and user preferences.',
145:     problem:
146:       'Users are overwhelmed by the sheer volume of available movies and need intelligent content discovery.',
147:     solution:
148:       'Built a recommendation engine using content-based filtering with ML algorithms to analyze movie features and suggest similar content.',
149:     impact:
150:       'Demonstrated understanding of recommendation system architectures, a core AI/ML application domain.',
151:     techStack: ['Python', 'Jupyter', 'scikit-learn', 'Pandas', 'NumPy'],
152:     category: 'ai-ml',
153:     github: 'https://github.com/Rupesh1819/Movie-Recommendation-System',
154:     featured: false,
155:     metrics: [
156:       { label: 'Type', value: 'Content-Based' },
157:       { label: 'Algorithm', value: 'ML' },
158:     ],
159:   },
160:   {
161:     id: 'gold-gallery',
162:     title: 'Gold Gallery',
163:     subtitle: 'Modern Web Application',
164:     description:
165:       'A modern TypeScript web application showcasing frontend engineering skills with clean architecture and responsive design.',
166:     problem: 'Need for a polished, performant gallery-style web experience.',
167:     solution:
168:       'Engineered a TypeScript-first web application with modern design patterns and MIT-licensed open source code.',
169:     impact: 'Demonstrates proficiency in TypeScript and modern web development practices.',
170:     techStack: ['TypeScript', 'Web Technologies'],
171:     category: 'web',
172:     github: 'https://github.com/Rupesh1819/Gold-Gallery',
173:     featured: false,
174:   },
175:   {
176:     id: 'dsbda-practicals',
177:     title: 'Data Science & Big Data Analytics',
178:     subtitle: 'Academic ML/Data Science Portfolio',
179:     description:
180:       'Comprehensive collection of data science experiments covering the full ML pipeline: data wrangling, statistical analysis, regression, classification, text analytics, and data visualization.',
181:     problem:
182:       'Structured exploration of fundamental data science and big data analytics concepts.',
183:     solution:
184:       'Implemented 10+ experiments covering Linear/Logistic Regression, Naive Bayes, data wrangling, descriptive statistics, text analytics, and Tableau visualization.',
185:     impact:
186:       'Solid foundation in data science fundamentals with hands-on implementations.',
187:     techStack: [
188:       'Python',
189:       'Jupyter',
190:       'Pandas',
191:       'NumPy',
192:       'scikit-learn',
193:       'Matplotlib',
194:       'Seaborn',
195:     ],
196:     category: 'data-science',
197:     github:
198:       'https://github.com/Rupesh1819/TE-DSBDA-72311410C-SHETE-RUPESH-SANJAY',
199:     featured: false,
200:   },
201: ];
202: 
203: // ── Experience ─────────────────────────────────
204: export const experiences: Experience[] = [
205:   {
206:     id: 'internship-codeb',
207:     role: 'Data Science Intern',
208:     company: 'CodeB Solution Pvt. Ltd.',
209:     location: 'Remote',
210:     startDate: '2026',
211:     endDate: '2026 (2 Months)',
212:     description: 'Built and deployed end-to-end machine learning solutions for real-world business problems. Worked on data preprocessing, feature engineering, model training, explainability, and interactive AI applications.',
213:     achievements: [
214:       'Developed and evaluated 5+ ML classification models using Python and Scikit-learn.',
215:       'Performed exploratory data analysis and feature engineering to improve model quality.',
216:       'Built interactive AI applications using Streamlit and Flask.',
217:       'Implemented SHAP for explainable AI and feature importance visualization.',
218:       'Collaborated using Git and industry-standard development workflows.'
219:     ],
220:     techStack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Flask', 'SHAP', 'Git'],
221:     type: 'work',
222:   },
223:   {
224:     id: 'internship-growmore',
225:     role: 'Machine Learning Intern',
226:     company: 'Growmore Pvt. Ltd.',
227:     location: 'Remote',
228:     startDate: '2026',
229:     endDate: '2026',
230:     description: 'Designed and optimized machine learning models for structured datasets while improving model performance through feature engineering and hyperparameter tuning.',
231:     achievements: [
232:       'Built machine learning models using Python and Scikit-learn.',
233:       'Compared multiple algorithms to identify the best-performing solution.',
234:       'Performed data preprocessing and feature engineering.',
235:       'Optimized models using GridSearchCV for improved prediction accuracy.'
236:     ],
237:     techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'GridSearchCV'],
238:     type: 'work',
239:   },
240:   {
241:     id: 'internship-amdox',
242:     role: 'Machine Learning Intern',
243:     company: 'Amdox Technologies',
244:     location: 'Remote',
245:     startDate: '2026',
246:     endDate: '2026 (1 Month)',
247:     description: 'Contributed to an AI-powered task optimization project by developing predictive models and supporting the end-to-end machine learning workflow.',
248:     achievements: [
249:       'Developed predictive ML models for task optimization.',
250:       'Performed feature engineering and model evaluation.',
251:       'Collaborated using Git and version control throughout development.',
252:       'Worked within project timelines while meeting defined milestones.'
253:     ],
254:     techStack: ['Python', 'Machine Learning', 'Git', 'Data Analysis', 'Predictive Modeling'],
255:     type: 'work',
256:   },
257:   {
258:     id: 'education-engineering',
259:     role: 'B.E. Computer Engineering',
260:     company: 'Genba Sopanrao Moze College of Engineering',
261:     location: 'Pune, India',
262:     startDate: '2023',
263:     endDate: '2027',
264:     description:
265:       'Pursuing Bachelor of Engineering in Computer Engineering with focus on AI/ML, Data Science, and Full-Stack Development.',
266:     achievements: [
267:       'Specializing in Artificial Intelligence and Machine Learning',
268:       'Built production-grade projects including clinic management systems and AI forecasting dashboards',
269:       'Explored advanced topics: Deep Learning, NLP, Computer Vision, Big Data Analytics',
270:       'Hands-on experience with modern tech stacks: Next.js, TypeScript, Python, TensorFlow',
271:     ],
272:     techStack: [
273:       'Python',
274:       'TypeScript',
275:       'Next.js',
276:       'TensorFlow',
277:       'PostgreSQL',
278:     ],
279:     type: 'education',
280:   },
281: ];
282: 
283: // ── Skills ─────────────────────────────────────
284: export const skillGroups: SkillGroup[] = [
285:   {
286:     category: 'ai-ml',
287:     label: 'AI & Machine Learning',
288:     description: 'Building intelligent systems with cutting-edge AI',
289:     skills: [
290:       { name: 'Python', level: 95, category: 'ai-ml' },
291:       { name: 'TensorFlow / Keras', level: 85, category: 'ai-ml' },
292:       { name: 'scikit-learn', level: 90, category: 'ai-ml' },
293:       { name: 'LLMs & Generative AI', level: 85, category: 'ai-ml' },
294:       { name: 'LangChain / LangGraph', level: 80, category: 'ai-ml' },
295:       { name: 'RAG Systems', level: 80, category: 'ai-ml' },
296:       { name: 'NLP & Sentiment Analysis', level: 85, category: 'ai-ml' },
297:       { name: 'Computer Vision', level: 75, category: 'ai-ml' },
298:       { name: 'Deep Learning (LSTM, CNN)', level: 85, category: 'ai-ml' },
299:       { name: 'SHAP / Model Explainability', level: 80, category: 'ai-ml' },
300:       { name: 'Time Series Forecasting', level: 85, category: 'ai-ml' },
301:       { name: 'AI Agents', level: 80, category: 'ai-ml' },
302:     ],
303:   },
304:   {
305:     category: 'frontend',
306:     label: 'Frontend Engineering',
307:     description: 'Crafting premium web experiences',
308:     skills: [
309:       { name: 'React', level: 90, category: 'frontend' },
310:       { name: 'Next.js', level: 90, category: 'frontend' },
311:       { name: 'TypeScript', level: 90, category: 'frontend' },
312:       { name: 'Tailwind CSS', level: 90, category: 'frontend' },
313:       { name: 'Framer Motion', level: 80, category: 'frontend' },
314:       { name: 'Three.js / R3F', level: 70, category: 'frontend' },
315:       { name: 'HTML5 / CSS3', level: 95, category: 'frontend' },
316:     ],
317:   },
318:   {
319:     category: 'backend',
320:     label: 'Backend & Infrastructure',
321:     description: 'Scalable systems and APIs',
322:     skills: [
323:       { name: 'FastAPI', level: 85, category: 'backend' },
324:       { name: 'Flask', level: 85, category: 'backend' },
325:       { name: 'Node.js', level: 80, category: 'backend' },
326:       { name: 'PostgreSQL', level: 85, category: 'backend' },
327:       { name: 'Prisma ORM', level: 85, category: 'backend' },
328:       { name: 'Supabase', level: 80, category: 'backend' },
329:       { name: 'Docker', level: 75, category: 'backend' },
330:       { name: 'REST APIs', level: 90, category: 'backend' },
331:       { name: 'MCP Servers', level: 75, category: 'backend' },
332:     ],
333:   },
334:   {
335:     category: 'tools',
336:     label: 'Tools & Platforms',
337:     description: 'Modern development workflow',
338:     skills: [
339:       { name: 'Git / GitHub', level: 90, category: 'tools' },
340:       { name: 'Vercel', level: 85, category: 'tools' },
341:       { name: 'VS Code', level: 95, category: 'tools' },
342:       { name: 'Jupyter Notebooks', level: 90, category: 'tools' },
343:       { name: 'Streamlit', level: 85, category: 'tools' },
344:       { name: 'Plotly', level: 80, category: 'tools' },
345:     ],
346:   },
347: ];
348: 
349: // ── Achievements ───────────────────────────────
350: export const achievements: Achievement[] = [
351:   {
352:     id: 'accuracy',
353:     title: '96.4% ML Accuracy',
354:     description: 'Phishing detection model with Gradient Boosting Classifier',
355:     icon: '🎯',
356:     value: '96.4%',
357:     type: 'metric',
358:   },
359:   {
360:     id: 'production-app',
361:     title: 'Production Deployment',
362:     description: 'Clinic management system live and serving real users',
363:     icon: '🚀',
364:     value: 'Live',
365:     type: 'metric',
366:   },
367:   {
368:     id: 'ai-models',
369:     title: 'AI Models Built',
370:     description: 'Including LSTM, ARIMA, Prophet, Gradient Boosting, and more',
371:     icon: '🧠',
372:     value: '10+',
373:     type: 'metric',
374:   },
375:   {
376:     id: 'projects',
377:     title: 'Projects Shipped',
378:     description: 'Spanning AI/ML, full-stack web, and data science',
379:     icon: '📦',
380:     value: '6+',
381:     type: 'metric',
382:   },
383:   {
384:     id: 'tech-stack',
385:     title: 'Technologies Mastered',
386:     description: 'From Python & TensorFlow to Next.js & Three.js',
387:     icon: '⚡',
388:     value: '25+',
389:     type: 'metric',
390:   },
391:   {
392:     id: 'explainable-ai',
393:     title: 'Explainable AI',
394:     description: 'SHAP-based model interpretability for responsible AI',
395:     icon: '🔍',
396:     value: 'SHAP',
397:     type: 'metric',
398:   },
399: ];
400: 
401: // ── GitHub Stats (static fallback) ─────────────
402: export const githubStats = {
403:   username: 'Rupesh1819',
404:   publicRepos: 6,
405:   topLanguages: [
406:     { name: 'Python', percentage: 40, color: '#3572A5' },
407:     { name: 'TypeScript', percentage: 30, color: '#3178C6' },
408:     { name: 'Jupyter Notebook', percentage: 20, color: '#DA5B0B' },
409:     { name: 'JavaScript', percentage: 10, color: '#F7DF1E' },
410:   ],
411:   profileUrl: 'https://github.com/Rupesh1819',
412: };
413: 
414: // ── Role Titles for Hero Animation ─────────────
415: export const roleTitles = [
416:   'AI Engineer',
417:   'Machine Learning Engineer',
418:   'Full Stack Developer',
419:   'Generative AI Engineer',
420:   'Data Scientist',
421:   'Python Developer',
422: ];
423: 
424: // ── Tech Stack Logos for visual display ────────
425: export const techStackItems = [
426:   { name: 'Python', category: 'language' },
427:   { name: 'TypeScript', category: 'language' },
428:   { name: 'JavaScript', category: 'language' },
429:   { name: 'React', category: 'frontend' },
430:   { name: 'Next.js', category: 'frontend' },
431:   { name: 'Tailwind CSS', category: 'frontend' },
432:   { name: 'Three.js', category: 'frontend' },
433:   { name: 'Framer Motion', category: 'frontend' },
434:   { name: 'TensorFlow', category: 'ai' },
435:   { name: 'PyTorch', category: 'ai' },
436:   { name: 'scikit-learn', category: 'ai' },
437:   { name: 'LangChain', category: 'ai' },
438:   { name: 'FastAPI', category: 'backend' },
439:   { name: 'Flask', category: 'backend' },
440:   { name: 'Node.js', category: 'backend' },
441:   { name: 'PostgreSQL', category: 'backend' },
442:   { name: 'Prisma', category: 'backend' },
443:   { name: 'Supabase', category: 'backend' },
444:   { name: 'Docker', category: 'tools' },
445:   { name: 'Git', category: 'tools' },
446:   { name: 'Vercel', category: 'tools' },
447:   { name: 'Streamlit', category: 'tools' },
448: ];
449: 
450: export const architectures = [
451:   {
452:     title: 'Autonomous RAG Agent Pipeline',
453:     type: 'Data Flow',
454:     description: 'A scalable retrieval-augmented generation pipeline using vector databases and large language models for enterprise search.',
455:     techStack: ['LangChain', 'Pinecone', 'OpenAI', 'FastAPI']
456:   },
457:   {
458:     title: 'Multi-Agent Orchestration',
459:     type: 'Agentic',
460:     description: 'Coordinated autonomous agents that collaborate to solve complex reasoning tasks, featuring state management and self-reflection.',
461:     techStack: ['CrewAI', 'Python', 'LangGraph']
462:   },
463:   {
464:     title: 'Real-Time Inference Engine',
465:     type: 'ML Pipeline',
466:     description: 'High-throughput model serving architecture for deploying deep learning models with millisecond latency.',
467:     techStack: ['TensorFlow Serving', 'Docker', 'Redis']
468:   },
469:   {
470:     title: 'Distributed Training Cluster',
471:     type: 'Deep Learning',
472:     description: 'Multi-GPU distributed training setup for training large neural networks efficiently across multiple nodes.',
473:     techStack: ['PyTorch', 'Horovod', 'Kubernetes']
474:   }
475: ];
"""

with open("src/lib/data.ts", "w", encoding="utf-8") as f:
    for line in content.split("\n"):
        match = re.match(r"^\d+: (.*)", line)
        if match:
            f.write(match.group(1) + "\n")
        else:
            if line == '"""': continue
            f.write(line + "\n")
print("Restored data.ts successfully")
