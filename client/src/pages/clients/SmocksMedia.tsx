import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { ClientDivider } from '@/components/ui/ClientDivider';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function SmocksMedia() {
  usePageTitle("Smocks Media Group");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750875409/098FEA5B-7578-4A96-8CEB-3171D059F426_splizq.png"
        alt="Smocks Media Group"
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
        Smocks Media Group
      </motion.h1>

      <ClientDivider />

      <div className="space-y-6">
        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          We collaborate with Smocks Media Group, a company redefining creative and community ecosystems through education, entertainment, and wellness.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          Through media initiatives and strategic consulting, our partnership with SMG reflects a shared commitment to empowering creators of color and shifting what media can do. We champion work that puts passion before profit and community at the center of creation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="https://www.smocksmediagroup.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest underline underline-offset-4 hover:opacity-50 transition-opacity"
          >
            Visit Smocks Media Group →
          </a>
        </motion.div>
      </div>
    </ClientLayout>
  );
}
