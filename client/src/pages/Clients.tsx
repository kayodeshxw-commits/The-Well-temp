import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CurrentProjects } from '@/components/home/CurrentProjects';

import { usePageTitle } from '@/hooks/usePageTitle';

const clients = [
  { name: "The Billie Holiday Theatre", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750658946/Home/Logos/E7359556-6916-4133-B304-BC84EF1D95A3_gbu8vf.png", href: "/work/the-billie", size: "w-44" },
  { name: "Levi & Toonk", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750663503/Home/Logos/IMG_0469_owdm99.png", href: "/work/levi-and-toonk", size: "w-36" },
  { name: "Yale Cabaret", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750697730/Home/Logos/Cab55-Logo-MAIN_kjmrfr.png", href: "/work/yale-cabaret", size: "w-56" },
  { name: "Smocks Media Group", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750875409/098FEA5B-7578-4A96-8CEB-3171D059F426_splizq.png", href: "/work/smocks-media", size: "w-48" },
  { name: "Manhattan Theatre Club", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750699552/Home/Logos/IMG_0531_aoab5x.png", href: null, size: "w-40" },
  { name: "Emory University", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750697791/Home/Logos/IMG_0524_uxp9nc.jpg", href: null, size: "w-36" },
  { name: "Last Ship to Proxima Centauri", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750697487/Home/Logos/IMG_0522_ia3106.png", href: null, size: "w-32" },
  { name: "Yale Pathways", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750698403/Home/Logos/IMG_0525_zsb1ki.jpg", href: "/work/yale-pathways", size: "w-40" },
  { name: "August Wilson New Voices", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750699744/Home/Logos/IMG_0532_cwxlky.png", href: "/work/august-wilson", size: "w-44" },
  { name: "Actors Theatre of Louisville", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750698999/Home/Logos/IMG_0528_cp7ylq.png", href: "/work/actors-theatre", size: "w-36" },
  { name: "CCCEPA", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750698801/Home/Logos/IMG_0527_fzzbrp.jpg", href: null, size: "w-40" },
  { name: "Shakespeare on Draught", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750698661/Home/Logos/IMG_0526_qlcjad.png", href: "/work/shakespeare-on-draught", size: "w-44" },
  { name: "Potter's Exhibition", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775228403/The%20Well/PotterTicket_olhmv2.png", href: "/work/potters-exhibition", size: "w-40" },
  { name: "Nigg Bottom", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775228310/The%20Well/1775227861165-ec1d9969-4692-4c68-94b3-0f3a1827a1b2_1_dsrmdp.jpg", href: "/work/nigg-bottom", size: "w-36" },
  { name: "Ewa the Musical", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775228319/The%20Well/Screenshot_2026-04-03_at_10.46.44_AM_jfaaeo.png", href: "/work/ewa-the-musical", size: "w-32" },
  { name: "Sage Media", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775228324/The%20Well/44FDEFB5-A619-47F5-92E9-370C6DD8D646_wigvv0.png", href: "/work/sage-media", size: "w-44" },
  { name: "Michelle with Wet Eyeballs", logo: "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775244594/The%20Well/48E565C7-720B-43AA-80D2-205CCEAF6BAF_nwmvox.png", href: "/work/michelle", size: "w-36" },
];

export default function Clients() {
  usePageTitle("Work");
  const { scrollY } = useScroll();
  const scaleY = useTransform(scrollY, [0, 500], [0, 1], { clamp: true });
  const contentOpacity = useTransform(scrollY, [480, 560], [0, 1], { clamp: true });
  const contentY = useTransform(scrollY, [480, 560], [24, 0], { clamp: true });

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 px-6 text-center">

        {/* Header */}
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Work
        </motion.h1>

        <motion.div
          className="w-1 bg-black mx-auto mt-4 mb-16 origin-top"
          style={{ height: "100vh", scaleY }}
        />

        {/* Flex-wrap collage */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          {clients.map((client) => {
            const img = client.logo ? (
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.size} h-auto object-contain transition-all duration-500 hover:grayscale`}
              />
            ) : (
              <div className={`${client.size} font-display text-sm font-bold uppercase tracking-tight text-center leading-tight`}>
                Michelle<br />with Wet<br />Eyeballs
              </div>
            );

            return (
              <div
                key={client.name}
                className={client.href ? "" : "cursor-default"}
              >
                {client.href ? (
                  <a href={client.href} title={client.name}>
                    {img}
                  </a>
                ) : (
                  <div title={client.name}>{img}</div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
      <CurrentProjects />
      <Footer />
    </>
  );
}
