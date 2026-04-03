import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function ActorsTheatre() {
  usePageTitle("Actors Theatre of Louisville");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750698999/Home/Logos/IMG_0528_cp7ylq.png"
        alt="Actors Theatre of Louisville"
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
        Actors Theatre of Louisville
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
          We worked with the Professional Training Company at Actors Theatre of Louisville to develop and publish the 2018 Solo Mio Collection — a curated book of original solo performances written and performed by the ensemble.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          Solo Mio is a hallmark of the PTC season. Each piece is built from scratch by an actor, with input from the company, staff, and guest artists. Not just monologues — full short plays. The 2018 edition is widely considered one of the strongest in the program's history. The first print run sold out.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          The collection remains available through Amazon Publishing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
        >
          <a
            href="https://a.co/d/cLCdE7T"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest underline underline-offset-4 hover:opacity-50 transition-opacity"
          >
            View the Book on Amazon →
          </a>
        </motion.div>
      </div>
    </ClientLayout>
  );
}
