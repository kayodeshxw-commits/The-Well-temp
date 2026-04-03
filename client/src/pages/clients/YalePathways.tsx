import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function YalePathways() {
  usePageTitle("Yale Pathways");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750698403/Home/Logos/IMG_0525_zsb1ki.jpg"
        alt="Yale Pathways to Arts & Humanities"
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
        Yale Pathways to Arts &amp; Humanities
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
          Yale Pathways welcomes local public high school students to Yale's campus for performances, talks, tours, and seminars. One cornerstone is New Voices in Theater — a playwriting program led by MFA students from the Yale School of Drama.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          We joined the teaching team, helping students develop original plays in a collaborative workshop environment. At the end, MFA actors performed staged readings of each student's script — their words lifted off the page in front of peers, families, and faculty.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Some students came curious. Some arrived with a clear voice and a sense of purpose. Several have gone on to pursue higher education with playwriting portfolios that started here.
        </motion.p>
      </div>
    </ClientLayout>
  );
}
