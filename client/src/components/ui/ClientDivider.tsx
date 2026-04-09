import { motion } from 'framer-motion';

export function ClientDivider() {
  return (
    <motion.div
      className="w-0.5 h-12 bg-black mx-auto mb-12"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      style={{ originY: 0 }}
    />
  );
}
