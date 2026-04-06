import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Creative Production",
    description: "We make things. Across theater, film, digital, and beyond — we bring original work to life with intention and care, from the first idea to the final delivery.",
    bullets: [
      "Cross-medium creative direction",
      "Creative producing and visioning",
      "Live performance curation and direction",
    ],
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750658946/Home/Logos/E7359556-6916-4133-B304-BC84EF1D95A3_gbu8vf.png",
    logoAlt: "The Billie Holiday Theatre",
  },
  {
    id: "02",
    title: "Project Management",
    description: "We keep it moving. We handle the details — timelines, budgets, logistics, coordination — so you can focus on the work. We adapt to what each project needs and we don't drop the ball.",
    bullets: [
      "Timeline building and task delegation",
      "Budgeting, scheduling, and logistics",
      "On-site rehearsal and shoot coordination",
    ],
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750697730/Home/Logos/Cab55-Logo-MAIN_kjmrfr.png",
    logoAlt: "Yale Cabaret",
  },
  {
    id: "03",
    title: "Education",
    description: "We show up for artists. Through coaching, mentorship, and community engagement, we co-create learning spaces rooted in care, rigor, and brilliance — from youth programs to professional intensives.",
    bullets: [],
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750699744/Home/Logos/IMG_0532_cwxlky.png",
    logoAlt: "August Wilson New Voices",
  },
  {
    id: "04",
    title: "Development",
    description: "We help ideas grow up. We work closely with artists and organizations to shape early-stage work into something real — through dramaturgy, workshops, and honest creative feedback.",
    bullets: [
      "Dramaturgy and story development",
      "One-on-one creative consultations",
      "Workshop facilitation and rehearsal support",
    ],
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750697730/Home/Logos/Cab55-Logo-MAIN_kjmrfr.png",
    logoAlt: "Yale Cabaret",
  },
  {
    id: "05",
    title: "Consulting",
    description: "We help you see clearly. Whether you're an individual or an institution, we work with you to cut through the noise, sharpen your goals, and build something that actually lasts.",
    bullets: [
      "Strategic planning for creatives and orgs",
      "Brand clarity and communication tools",
      "Creative systems setup and refinement",
    ],
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750699552/Home/Logos/IMG_0531_aoab5x.png",
    logoAlt: "Manhattan Theatre Club",
  },
  {
    id: "06",
    title: "Special Projects",
    description: "We produce experiences that mean something. From concept to execution, we build events and activations that are culturally grounded, community-centered, and impossible to forget.",
    bullets: [
      "Event concepting and creative direction",
      "Full-scale production and logistics",
      "Cultural programming and curation",
    ],
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750663503/Home/Logos/IMG_0469_owdm99.png",
    logoAlt: "Levi & Toonk",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 px-4 md:px-8 relative min-h-screen bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <motion.div
              className="hidden lg:flex flex-col mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.18 } },
              }}
            >
              {["Exist", "Enrich", "Collaborate", "Celebrate"].map((word) => (
                <motion.span
                  key={word}
                  className="font-display text-lg lg:text-2xl font-black uppercase leading-tight"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <div className="border-t border-black/15 mt-6" />
            </motion.div>

            <AnimatePresence mode="wait">
              {hoveredService && (
                <motion.div
                  key={hoveredService}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                  className="hidden lg:flex items-center justify-center w-full aspect-square border border-black/10 p-10"
                >
                  <img
                    src={services.find(s => s.id === hoveredService)?.logo}
                    alt={services.find(s => s.id === hoveredService)?.logoAlt}
                    className="max-w-full max-h-full object-contain grayscale"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="border-b border-black/10 last:border-0 group"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <button
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className="w-full py-10 flex items-start justify-between text-left group-hover:bg-black/5 transition-colors px-4 -mx-4 rounded-sm"
              >
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-300">
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
                    <div className="pl-16 pr-4 pb-12 pt-2">
                      <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {service.bullets.length > 0 && (
                        <ul className="mb-6 space-y-1">
                          {service.bullets.map((bullet) => (
                            <li key={bullet} className="font-mono text-xs uppercase tracking-widest opacity-60 before:content-['—'] before:mr-2">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
