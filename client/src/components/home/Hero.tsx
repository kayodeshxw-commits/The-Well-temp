import { motion } from 'framer-motion';

const missionLines = [
  { text: "We ", bold: "exist", rest: " to replenish." },
  { text: "We ", bold: "enrich", rest: " unique perspectives." },
  { text: "We ", bold: "collaborate", rest: " to bring art to life." },
  { text: "We ", bold: "celebrate", rest: " working across disciplines and cultures." },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-0 px-6 text-center">
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1772581581/4A067DE1-6C4D-44FD-B12D-A071DCDECBEB_2_hklwny.png"
        alt="The Well Logo"
        className="w-48 h-48 md:w-64 md:h-64 object-contain mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-mono text-sm md:text-base uppercase tracking-widest font-bold mb-16"
      >
        A Multidisciplinary Production Company and Consultancy
      </motion.p>

      <div className="flex flex-col gap-2 w-full max-w-3xl">
        {missionLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + i * 0.15, duration: 0.6 }}
            className="font-display text-xl md:text-2xl leading-snug"
          >
            {line.text}
            <strong className="font-black">{line.bold}</strong>
            {line.rest}
          </motion.p>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="w-1 bg-black origin-top mt-16 mb-0"
        style={{ height: "50vh" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2, duration: 1.4, ease: "easeInOut" }}
      />
    </section>
  );
}
