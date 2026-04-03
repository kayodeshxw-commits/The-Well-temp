import { Navbar } from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { CurrentProjects } from '@/components/home/CurrentProjects';
import { Footer } from '@/components/layout/Footer';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function Home() {
  usePageTitle();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CurrentProjects />
      </main>
      <Footer />
    </div>
  );
}