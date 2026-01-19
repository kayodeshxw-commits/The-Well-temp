import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Manifest Section */}
        <section className="py-32 px-6 bg-foreground text-background relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] mb-12 opacity-50">The Philosophy</h2>
              <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
                Historically, a well is a source of life, of replenishment, of connection. 
                <span className="opacity-40 italic"> You can look in that dark hole and not see anything but know that there is water in there; </span>
                that it’s full.
              </p>
              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <p className="font-sans text-lg opacity-70 leading-relaxed">
                  It doesn’t matter where you’re from or what you look like, the well serves everyone. I want the work I create, and the spaces I help build, to feel the same way.
                </p>
                <p className="font-sans text-lg opacity-70 leading-relaxed">
                  Open. Replenishing. A place where people can gather, draw from the source, and leave a little fuller than they came.
                </p>
              </div>
            </motion.div>
          </div>
          {/* Subtle brutalist texture overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </section>

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
