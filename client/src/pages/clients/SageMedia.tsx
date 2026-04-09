import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { ClientDivider } from '@/components/ui/ClientDivider';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function SageMedia() {
  usePageTitle("Sage Media");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775228324/The%20Well/44FDEFB5-A619-47F5-92E9-370C6DD8D646_wigvv0.png"
        alt="Sage Media"
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
        Sage Media
      </motion.h1>

      <motion.div
        className="w-0.5 h-12 bg-black mx-auto mb-8"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ originY: 0 }}
      />

      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-widest opacity-50 border border-black/20 px-3 py-1">
          In Development
        </span>
      </motion.div>

      <div className="space-y-6">
        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Sage Media builds on the foundation of Sage the House Down: A Healing Pod — an Audible Original named Best of 2024, hosted by William Sinclair Moore and Paige Gilbert.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          The next iteration centers Black and diasporic spiritual practice as self-care and healing — through accessible, joyful conversation that demystifies wellness, ancestor veneration, astrology, and the rituals that hold us together.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Plans include expanded episodes and direct promotion of Black-owned businesses. Currently in development.
        </motion.p>
      </div>
    </ClientLayout>
  );
}
