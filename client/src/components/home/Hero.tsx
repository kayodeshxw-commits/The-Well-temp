import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="h-screen relative flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Brutalist Water Background Effect - Using a generated high-contrast asset */}
      <div className="absolute inset-0 z-0 opacity-40 grayscale pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-full h-full"
        >
          <img 
            src="/attached_assets/generated_images/abstract_liquid_brutalist_water_texture_black_and_white.png" 
            alt="Brutalist Water Texture" 
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <motion.div style={{ y, opacity }} className="z-10 text-center px-4 invert">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <img src="/attached_assets/logo.jpg" alt="The Well Logo" className="w-24 h-24 md:w-32 md:h-32 mx-auto mix-blend-multiply" />
        </motion.div>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6">
          <span className="block overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              WE EXIST
            </motion.span>
          </span>
          <span className="block overflow-hidden">
             <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block italic font-light"
            >
              TO REPLENISH
            </motion.span>
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-mono text-sm md:text-base uppercase tracking-widest mt-8 max-w-md mx-auto"
        >
          Multidisciplinary Production & Consultancy
        </motion.p>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-black/20"></div>
      </div>
    </section>
  );
}
