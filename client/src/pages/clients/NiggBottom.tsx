import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function NiggBottom() {
  usePageTitle("Nigg Bottom");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775228310/The%20Well/1775227861165-ec1d9969-4692-4c68-94b3-0f3a1827a1b2_1_dsrmdp.jpg"
        alt="Nigg Bottom"
        className="w-64 h-auto object-contain mx-auto mb-12"
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
        Nigg Bottom
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
          Shakespeare's Fools — Touchstone, Feste, the Fool in King Lear — hold the contradictions of their worlds. They're the ones who tell the truth because nobody listens to them seriously. Nigg Bottom collages these Fools into one Black body.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          A solo performance directed by Amandla Jahava with dramaturgy by Eric Glover. Development funded by YoungArts and the Connecticut Artist Fellowship. Active applications to The Shed Open Call and the Red Bull Theater Short New Play Festival.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Currently in development.
        </motion.p>
      </div>
    </ClientLayout>
  );
}
