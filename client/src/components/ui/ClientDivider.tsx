import { motion } from 'framer-motion';
import { Teardrop } from './Teardrop';

export function ClientDivider() {
  return (
    <div className="flex flex-col items-center mx-auto mb-12">
      <motion.div
        className="w-0.5 h-12 bg-black"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ originY: 0 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
      >
        <Teardrop size={8} />
      </motion.div>
    </div>
  );
}
