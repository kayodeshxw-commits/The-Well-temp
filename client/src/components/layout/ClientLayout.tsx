import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CurrentProjects } from '@/components/home/CurrentProjects';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        {children}
      </main>
      <CurrentProjects />
      <Footer />
    </>
  );
}
