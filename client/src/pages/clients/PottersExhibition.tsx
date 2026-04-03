import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function PottersExhibition() {
  usePageTitle("Potter's Exhibition");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775228403/The%20Well/PotterTicket_olhmv2.png"
        alt="Potter's Exhibition"
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
        Potter's Exhibition
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
          Richard Potter was the first Black American-born celebrity magician — a household name in early 19th-century America who has been almost entirely forgotten. Potter's Exhibition is our attempt to recover him.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          A full-length play excavating his erased history through past, present, and future simultaneously — live magic, ventriloquism, and myth. A form we call Syntheatre. Developed with dramaturgy by Ashley Thomas through extensive archival research.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Part One draft complete. Currently in development.
        </motion.p>
      </div>
    </ClientLayout>
  );
}
