import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* Placeholder for Clients/Marquee section */}
        <section className="py-24 overflow-hidden border-y border-black">
          <div className="flex whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <h2 key={i} className="text-[10vw] font-display font-black uppercase leading-none tracking-tighter opacity-10 animate-marquee px-4">
                Creative • Production • Vision • 
              </h2>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
