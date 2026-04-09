import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { ClientDivider } from '@/components/ui/ClientDivider';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function EwaTheMusical() {
  usePageTitle("Ewa the Musical");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1775228319/The%20Well/Screenshot_2026-04-03_at_10.46.44_AM_jfaaeo.png"
        alt="Ewa the Musical"
        className="w-48 h-auto object-contain mx-auto mb-12"
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
        Ewa the Musical
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
          Ewa the Musical is adapted from the novel Ewaoluwa: The Beauty of God by Eseosa Nicole, following a young Nigerian woman navigating family legacy, illness, and diasporic identity through music and fashion.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          We're developing the piece across five phases — table workshop, second workshop, staged reading, editing period, proof-of-concept run. Currently seeking a composer and dramaturg for initial song development, with Nigerian collaborators in process.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Ewa is a story the musical theater stage hasn't seen. We intend to change that.
        </motion.p>
      </div>
    </ClientLayout>
  );
}
