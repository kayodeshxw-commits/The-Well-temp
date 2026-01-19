import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import img1 from "@assets/stock_images/abstract_light_insta_5990ad66.jpg";
import img2 from "@assets/stock_images/cinematic_film_set_l_10d9ff28.jpg";
import img3 from "@assets/stock_images/modernist_architectu_ae2ba5ec.jpg";

const services = [
  {
    id: "01",
    title: "Creative Production",
    description: "Full-service production for events, experiential, and digital content. We handle everything from concept to execution with artistic precision.",
    image: img1
  },
  {
    id: "02",
    title: "Project Management",
    description: "Rigorous planning and execution strategies ensuring your vision is delivered on time, on budget, and beyond expectation.",
    image: img2
  },
  {
    id: "03",
    title: "Education & Consulting",
    description: "Workshops, mentorship, and strategic consulting for creative teams and organizations looking to innovate.",
    image: img3
  },
  {
    id: "04",
    title: "Development",
    description: "Technical and creative development for installations, web experiences, and interactive environments.",
    image: img1
  },
  {
    id: "05",
    title: "Special Projects",
    description: "Bespoke commissions and artistic collaborations that defy traditional categorization.",
    image: img2
  }
];

export function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 px-4 md:px-8 relative min-h-screen bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h2 className="font-mono text-sm uppercase tracking-widest mb-8 border-t border-black pt-4 inline-block">
              Our Expertise
            </h2>
            <div className="font-display text-4xl font-bold leading-tight mb-8">
              <span className="block">Power in</span>
              <span className="block italic opacity-50">Unique Perspectives</span>
            </div>
            
            <AnimatePresence mode="wait">
               {hoveredService && (
                <motion.div
                  key={hoveredService}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="hidden lg:block w-full aspect-[4/5] overflow-hidden rounded-sm"
                >
                  <img 
                    src={services.find(s => s.id === hoveredService)?.image} 
                    alt="Service preview" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col">
          {services.map((service) => (
            <div 
              key={service.id}
              className="border-b border-black/10 last:border-0 group"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <button
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className="w-full py-12 flex items-start justify-between text-left group-hover:bg-black/5 transition-colors px-4 -mx-4 rounded-sm"
              >
                <div className="flex items-baseline gap-8">
                  <span className="font-mono text-xs opacity-50 pt-2">{service.id}</span>
                  <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                    {service.title}
                  </h3>
                </div>
                <div className="pt-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  {activeService === service.id ? <Minus /> : <Plus />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-16 pr-4 pb-12 pt-2 md:grid md:grid-cols-2 gap-8">
                      <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 md:mt-0 lg:hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-48 object-cover grayscale rounded-sm" 
                        />
                      </div>
                      <div className="col-span-2 mt-6">
                        <a href="#contact" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
                          Inquire about this <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
