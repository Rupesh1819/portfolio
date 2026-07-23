import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Architectures from '@/components/sections/Architectures';
import CurrentlyBuilding from '@/components/sections/CurrentlyBuilding';
import Contact from '@/components/sections/Contact';
import AIPlayground from '@/components/sections/AIPlayground';
import GitHubActivity from '@/components/sections/GitHubActivity';
import BackgroundFX from '@/components/ui/BackgroundFX';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="relative min-h-screen bg-grid-pattern overflow-hidden">
        <BackgroundFX />
        
        {/* Animated Aurora Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent-cyan)]/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--accent-violet)]/20 blur-[120px] rounded-full pointer-events-none" />

        {/* Wrap sections in a container with massive vertical spacing for premium feel */}
        <div className="flex flex-col gap-12 md:gap-32 pb-32">
          <Hero />
          <About />
          <CurrentlyBuilding />
          <Architectures />
          <Experience />
          <AIPlayground />
          <Projects />
          <Skills />
          <GitHubActivity />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
