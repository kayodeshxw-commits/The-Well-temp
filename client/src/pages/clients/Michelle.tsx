import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { ClientDivider } from '@/components/ui/ClientDivider';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function Michelle() {
  usePageTitle("Michelle with Wet Eyeballs");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775244594/The%20Well/48E565C7-720B-43AA-80D2-205CCEAF6BAF_nwmvox.png"
        alt="Michelle with Wet Eyeballs"
        className="w-48 h-auto object-contain mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="font-mono text-xs uppercase tracking-widest opacity-50 mb-2">The Michelle Cycle</p>
        <h2 className="font-display text-5xl md:text-6xl font-black italic">Michelle with Wet Eyeballs</h2>
      </motion.div>

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
          In Development — Autumn 2026
        </span>
      </motion.div>

      <div className="space-y-6">
        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          A young Black woman battles the haunting fragments of past love and the voices that crowd her apartment — and her mind — as she tries to finish a piece of writing that could save her.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          Adapted from the stage play by Claire Carson, produced and screen-treated by Kayodè Soyemi. The first chapter of The Michelle Cycle — an Afro-surrealist anthology centered on Black women's inner lives exploring identity, grief, transformation, and spiritual reclamation.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
        </motion.p>

        <motion.div
          className="mt-12 space-y-2 border-t border-black/10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest opacity-50">Credits</p>
          <p className="font-sans text-sm">Written by Claire Carson</p>
          <p className="font-sans text-sm">Produced &amp; Screen Treatment by Kayodè Soyemi</p>
        </motion.div>
      </div>
    </ClientLayout>
  );
}
