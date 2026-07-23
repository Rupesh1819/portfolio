import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { projects, portfolioData } from '@/lib/data';

// Note: In a real app we might want generateStaticParams here if exporting as static.
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find(p => p.id === params.slug);
  
  if (!project) {
    return { title: 'Project Not Found' };
  }
  
  return {
    title: `${project.title} | ${portfolioData.name}`,
    description: project.problem,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.problem,
      type: 'article',
      images: [
        {
          url: project.image || '',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.problem,
      images: [project.image || ''],
    },
  };
}

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const currentIndex = projects.findIndex(p => p.id === params.slug);
  const project = projects[currentIndex];

  if (!project) {
    notFound();
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="relative min-h-screen bg-[var(--background)] overflow-x-hidden pt-32 pb-24">
      {/* Background FX */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent-cyan)]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--accent-violet)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-[var(--foreground-muted)] hover:text-white font-mono text-sm mb-12 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] rounded-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Header - Cinematic Banner Style */}
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">{project.title}</h1>
          <p className="text-xl md:text-2xl text-[var(--accent-cyan)] font-mono mb-8">{project.subtitle}</p>
        </header>

        {/* Project Image Mockup */}
        {project.image && (
          <div className="w-full relative aspect-[16/10] rounded-3xl mb-24 border border-white/10 overflow-hidden shadow-2xl shadow-black/50 bg-zinc-900">
            {/* Fake Browser Bar for Case Study */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-950/90 backdrop-blur-md border-b border-white/10 z-20 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="pt-10 w-full h-full relative">
              <Image 
                src={project.image}
                alt={`${project.title} application interface`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        )}

        {/* Deep Dive Content */}
        <article className="space-y-16 text-lg text-[var(--foreground-muted)] leading-relaxed font-sans">
          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-white font-mono font-bold mb-4">The Problem</h3>
            </div>
            <div className="md:col-span-2">
              <p>{project.problem}</p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-16">
            <div className="md:col-span-1">
              <h3 className="text-white font-mono font-bold mb-4">The Solution</h3>
            </div>
            <div className="md:col-span-2">
              <p>{project.solution}</p>
            </div>
          </section>

          {project.architecture && (
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-16">
              <div className="md:col-span-1">
                <h3 className="text-white font-mono font-bold mb-4">Architecture</h3>
              </div>
              <div className="md:col-span-2">
                <p>{project.architecture}</p>
              </div>
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-16">
              <div className="md:col-span-1">
                <h3 className="text-white font-mono font-bold mb-4">Features</h3>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[var(--accent-cyan)] mt-1">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {(project.challenges || project.results || project.lessonsLearned) && (
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-16">
              <div className="md:col-span-1">
                <h3 className="text-white font-mono font-bold mb-4">Challenges & Lessons</h3>
              </div>
              <div className="md:col-span-2 space-y-6">
                {project.challenges && <p><strong className="text-white">Challenges:</strong> {project.challenges}</p>}
                {project.results && <p><strong className="text-white">Results:</strong> {project.results}</p>}
                {project.lessonsLearned && <p><strong className="text-white">Lessons Learned:</strong> {project.lessonsLearned}</p>}
              </div>
            </section>
          )}

          {/* Footer Links & Tech */}
          <section className="border-t border-white/5 pt-16">
            <h3 className="text-white font-mono font-bold mb-6 text-center">Technologies Used</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {project.techStack.map(tech => (
                <span key={tech} className="px-4 py-2 rounded-full glass-panel text-sm text-[var(--foreground-muted)] font-mono border border-white/5">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 px-8 py-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                View Source Code
              </a>
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3">
                  Live Demo
                </a>
              ) : (
                <button disabled className="btn-secondary opacity-50 cursor-not-allowed px-8 py-3">
                  Demo Coming Soon
                </button>
              )}
            </div>
          </section>

          {/* Prev/Next Navigation */}
          <nav className="border-t border-white/5 pt-12 mt-24 flex flex-col sm:flex-row justify-between items-center gap-8">
            {prevProject ? (
              <Link href={`/projects/${prevProject.id}`} className="group flex flex-col items-start w-full sm:w-1/2 p-6 glass-panel rounded-2xl hover:border-[var(--accent-cyan)]/30 transition-colors">
                <span className="text-xs font-mono text-[var(--foreground-muted)] uppercase tracking-wider mb-2 group-hover:text-white transition-colors">Previous Project</span>
                <span className="text-lg font-bold text-white group-hover:text-[var(--accent-cyan)] transition-colors line-clamp-1">{prevProject.title}</span>
              </Link>
            ) : <div className="w-full sm:w-1/2" />}
            
            {nextProject ? (
              <Link href={`/projects/${nextProject.id}`} className="group flex flex-col items-end w-full sm:w-1/2 p-6 glass-panel rounded-2xl hover:border-[var(--accent-violet)]/30 transition-colors text-right">
                <span className="text-xs font-mono text-[var(--foreground-muted)] uppercase tracking-wider mb-2 group-hover:text-white transition-colors">Next Project</span>
                <span className="text-lg font-bold text-white group-hover:text-[var(--accent-violet)] transition-colors line-clamp-1">{nextProject.title}</span>
              </Link>
            ) : <div className="w-full sm:w-1/2" />}
          </nav>

        </article>
      </div>
    </main>
  );
}
