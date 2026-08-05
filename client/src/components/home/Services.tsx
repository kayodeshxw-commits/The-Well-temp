import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Development",
    description: "We help ideas grow up. Development is The Well's producing program for new work: we take on projects that established pipelines aren't built to support and build what each one needs to reach the public. Research, dramaturgy, workshops, readings, and producing support, structured project by project.",
    bullets: [
      { text: "Currently in Development", href: "#current-projects", subItems: [
        { text: "Potter's Exhibition", href: "/work/potters-exhibition" },
        { text: "Nigg Bottom", href: "/work/nigg-bottom" },
        { text: "Ewa the Musical", href: "/work/ewa-the-musical" },
      ]},
      "Dramaturgy and story development",
      "Workshop facilitation and rehearsal support",
    ],
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750697730/Home/Logos/Cab55-Logo-MAIN_kjmrfr.png",
    logoAlt: "Yale Cabaret",
  },
  {
    id: "02",
    title: "Creative Production",
    description: "We make things. Theater, film, events, digital. When a project is ready for an audience, we produce it: assembling the team, running the room, and carrying it from first idea to final delivery.",
    bullets: [
      "Creative producing and visioning",
      "Cross-medium creative direction",
      "Live performance curation and direction",
    ],
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750658946/Home/Logos/E7359556-6916-4133-B304-BC84EF1D95A3_gbu8vf.png",
    logoAlt: "The Billie Holiday Theatre",
  },
  {
    id: "03",
    title: "Education",
    description: "We show up for artists. Through teaching, coaching, and community programs, we build learning spaces rooted in care, rigor, and brilliance, from youth programs to professional intensives, including original frameworks developed at The Well.",
    bullets: [
      "Workshops and professional intensives",
      "Youth and community programs",
      "Coaching and mentorship",
    ],
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750699744/Home/Logos/IMG_0532_cwxlky.png",
    logoAlt: "August Wilson New Voices",
  },
  {
    id: "04",
    title: "Project Management",
    description: "We keep it moving. We handle the details, timelines, budgets, logistics, and coordination, so you can focus on the work. We adapt to what each project needs and we don't drop the ball.",
    bullets: [
      "Timeline building and task delegation",
      "Budgeting, scheduling, and logistics",
      "On-site rehearsal and shoot coordination",
    ],
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750697730/Home/Logos/Cab55-Logo-MAIN_kjmrfr.png",
    logoAlt: "Yale Cabaret",
  },
  {
    id: "05",
    title: "Consulting",
    description: "We help you see clearly. Whether you're an individual artist or an institution, we work with you to sharpen your goals, build your systems, and make the thing sustainable.",
    bullets: [
      "Strategic planning for creatives and orgs",
      "One-on-one creative consultations",
      "Brand clarity and communication tools",
      "Creative systems setup and refinement",
    ],
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750698403/Home/Logos/IMG_0525_zsb1ki.jpg",
    logoAlt: "Yale Pathways",
  },
  {
    id: "06",
    title: "Special Projects",
    description: "We produce experiences that mean something. Events, activations, and cultural programming, built from concept to execution: culturally grounded, community-centered, and impossible to forget.",
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
    <section id="services" className="pt-2 pb-24 px-4 md:px-8 relative min-h-screen bg-background">
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
                          {service.bullets.map((bullet) => {
                            if (typeof bullet === "object") {
                              return (
                                <li key={bullet.text}>
                                  <span className="font-mono text-xs uppercase tracking-widest opacity-60 before:content-['—'] before:mr-2">
                                    <a href={bullet.href} className="underline underline-offset-2 hover:opacity-100 transition-opacity">
                                      {bullet.text}
                                    </a>
                                  </span>
                                  {bullet.subItems && bullet.subItems.length > 0 && (
                                    <ul className="mt-1 ml-6 space-y-1">
                                      {bullet.subItems.map((sub) => (
                                        <li key={sub.text} className="font-mono text-xs uppercase tracking-widest opacity-60 italic before:content-['↳'] before:mr-2">
                                          <a href={sub.href} className="hover:opacity-100 transition-opacity">
                                            {sub.text}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              );
                            }
                            return (
                              <li key={bullet} className="font-mono text-xs uppercase tracking-widest opacity-60 before:content-['—'] before:mr-2">
                                {bullet}
                              </li>
                            );
                          })}
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
