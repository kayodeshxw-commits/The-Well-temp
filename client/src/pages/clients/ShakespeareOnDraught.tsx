import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { ClientDivider } from '@/components/ui/ClientDivider';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function ShakespeareOnDraught() {
  usePageTitle("Shakespeare on Draught");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750698661/Home/Logos/IMG_0526_qlcjad.png"
        alt="Shakespeare on Draught"
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
        Shakespeare on Draught
      </motion.h1>

      <ClientDivider />

      <div className="space-y-6">
        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          We were part of the founding team. Shakespeare on Draught brings Shakespeare into bars across Atlanta — irreverent, high-energy, audience-in-your-face performances that have turned into a local institution.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          Inspired by Drunk Shakespeare in Dallas, the company blends classic text with chaotic spontaneity and the occasional beer-fueled plot twist. We produced and performed in the early shows that shaped what the company became.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Now a staple of Atlanta's artistic nightlife, with regional acclaim and press to match.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
        >
          <a
            href="https://shakespeareondraught.org/awards-and-press"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest underline underline-offset-4 hover:opacity-50 transition-opacity"
          >
            View Awards &amp; Press →
          </a>
        </motion.div>
      </div>
    </ClientLayout>
  );
}
