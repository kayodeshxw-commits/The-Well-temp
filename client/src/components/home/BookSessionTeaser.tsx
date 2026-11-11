import { motion } from "framer-motion";

export function BookSessionTeaser() {
  return (
    <section className="px-4 md:px-8 bg-black/5">
      <div className="max-w-7xl mx-auto border-t border-black/10">
        <motion.a
          href="/contact#sessions"
          className="flex items-center justify-between py-10 group hover:bg-black/5 transition-colors px-4 -mx-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
              1-on-1
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-300">
              Consulting Sessions
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
            Book →
          </span>
        </motion.a>
      </div>
    </section>
  );
}
