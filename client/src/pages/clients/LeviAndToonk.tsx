import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function LeviAndToonk() {
  usePageTitle("Levi & Toonk");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750663503/Home/Logos/IMG_0469_owdm99.png"
        alt="Levi & Toonk"
        className="w-48 h-48 object-contain mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Levi &amp; Toonk
      </motion.h1>

      <motion.div
        className="w-0.5 h-12 bg-black mx-auto mb-12"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ originY: 0 }}
      />

      <div className="space-y-6">
        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          We connected with Levi &amp; Toonk through Briantria Smocks of Smocks Media Group — fellow SMU alums — and produced a digital reading of two original children's books as part of Yale Cabaret Season 53's Black Theater Festival. The response was immediate.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          Levi &amp; Toonk follows Levi — a curious, expressive kid — and Toonk, the voice inside him that questions, challenges, and helps him understand the world. Each collection follows Levi at a different age, so children grow with him. Two collections are complete. A third is on the way.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          We're now in active development on the animated series. A Seed &amp; Spark campaign is live to fund the proof-of-concept — four episodes that bring Levi &amp; Toonk from page to screen.
        </motion.p>

        <motion.div
          className="relative pb-[56.25%] h-0 overflow-hidden my-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
        >
          <iframe
            src="https://www.youtube.com/embed/KW4TTphjhDY"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://www.seedandspark.com/fund/levi-toonk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest underline underline-offset-4 hover:opacity-50 transition-opacity"
          >
            Support the Campaign on Seed &amp; Spark →
          </a>
        </motion.div>
      </div>
    </ClientLayout>
  );
}
