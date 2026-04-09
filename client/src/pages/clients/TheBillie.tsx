import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { ClientDivider } from '@/components/ui/ClientDivider';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function TheBillie() {
  usePageTitle("The Billie Holiday Theatre");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750658946/Home/Logos/E7359556-6916-4133-B304-BC84EF1D95A3_gbu8vf.png"
        alt="The Billie Holiday Theatre"
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
        The Billie Holiday Theatre
      </motion.h1>

      <ClientDivider />

      <div className="space-y-6">
        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          We partnered with The Billie Holiday Theatre during their 2024–2025 season to help bring fully produced, in-house programming back to Bed-Stuy. The production was Fabulation, or the Re-Education of Undine by Lynn Nottage — the first produced show since the pandemic, and a real statement of return for one of Brooklyn's most vital stages.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          We came in for the full run: marketing, budget oversight, rehearsal scheduling, staffing, and production management from first day to closing night. The production earned multiple Audelco nominations and took home Best Featured Actress in a Play for Sharon Hope.
        </motion.p>
      </div>
    </ClientLayout>
  );
}
