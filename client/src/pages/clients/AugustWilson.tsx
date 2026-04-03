import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function AugustWilson() {
  usePageTitle("August Wilson New Voices");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750699744/Home/Logos/IMG_0532_cwxlky.png"
        alt="August Wilson New Voices"
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
        August Wilson New Voices
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
          August Wilson New Voices invites high school students across the country to perform monologues from August Wilson's American Century Cycle. Founded by Kenny Leon and Todd Kreidler, it's grown from one Atlanta school to nearly twenty cities — centering expression, empowerment, and cultural education through theatre.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          We showed up as coaches and judges — some of us returning as alumni of the program — to support and uplift the next generation of storytellers.
        </motion.p>

        <motion.blockquote
          className="border-l-2 border-black pl-6 my-8 font-sans italic text-lg leading-relaxed opacity-70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          "Theatre can do that... it connects man to something larger than himself and his imagination." — August Wilson, The Ground on Which I Stand
        </motion.blockquote>

        <motion.div
          className="relative pb-[56.25%] h-0 overflow-hidden my-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
        >
          <iframe
            src="https://www.youtube.com/embed/82N4-Qa-hWs"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>
    </ClientLayout>
  );
}
