import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Levi & Toonk, the Animated Series",
    slug: "levi-and-toonk",
    tagline: "Four episodes. Page to screen. A Seed & Spark campaign is live now to fund the proof-of-concept.",
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750663503/Home/Logos/IMG_0469_owdm99.png",
  },
  {
    title: "Potter's Exhibition",
    slug: "potters-exhibition",
    tagline: "Recovering America's first Black celebrity magician — through live magic, myth, and a form we call Syntheatre.",
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775228403/The%20Well/PotterTicket_olhmv2.png",
  },
  {
    title: "Nigg Bottom",
    slug: "nigg-bottom",
    tagline: "Shakespeare's Fools collaged into one Black body. A solo performance currently in development.",
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775228310/The%20Well/1775227861165-ec1d9969-4692-4c68-94b3-0f3a1827a1b2_1_dsrmdp.jpg",
  },
  {
    title: "Ewa the Musical",
    slug: "ewa-the-musical",
    tagline: "A new musical following a young Nigerian woman navigating family legacy, illness, and diasporic identity.",
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775228319/The%20Well/Screenshot_2026-04-03_at_10.46.44_AM_jfaaeo.png",
  },
  {
    title: "Sage Media",
    slug: "sage-media",
    tagline: "Expanding on an Audible Best of 2024 — centering Black and diasporic spiritual practice as self-care.",
    logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775228324/The%20Well/44FDEFB5-A619-47F5-92E9-370C6DD8D646_wigvv0.png",
  },
];

const marqueeItems = [...projects, ...projects];

export function CurrentProjects() {
  return (
    <section className="py-24 bg-black text-white">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 24s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section header */}
      <motion.div
        className="px-6 md:px-12 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs uppercase tracking-widest opacity-40 mb-2">Currently</p>
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight">
          In Development
        </h2>
      </motion.div>

      {/* Marquee ticker */}
      <div className="border-t border-b border-white/10 py-5 mb-16 overflow-hidden">
        <div className="marquee-track flex gap-16 whitespace-nowrap w-max">
          {marqueeItems.map((p, i) => (
            <span key={i} className="flex items-center gap-4">
              <a
                href={`/work/${p.slug}`}
                className="font-display text-base md:text-2xl font-black uppercase tracking-tight hover:opacity-50 transition-opacity duration-200"
              >
                {p.title}
              </a>
              <span className="text-white/20 text-xl">—</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stacked list */}
      <div className="px-6 md:px-12 max-w-4xl mx-auto divide-y divide-white/10">
        {projects.map((project, i) => (
          <motion.a
            key={project.slug}
            href={`/work/${project.slug}`}
            className="flex items-center justify-between gap-4 py-6 md:py-8 group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex items-center gap-6 min-w-0">
              <div className="w-12 h-12 flex-shrink-0 bg-white rounded-sm flex items-center justify-center p-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-sm md:text-xl font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="font-sans text-sm opacity-50 mt-1 leading-snug line-clamp-2">
                  {project.tagline}
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 flex-shrink-0 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
