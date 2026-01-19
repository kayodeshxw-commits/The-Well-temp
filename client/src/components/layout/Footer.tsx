import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-mono text-sm uppercase tracking-widest mb-6 opacity-50">Contact</h3>
            <a href="mailto:hello@thewellisfull.com" className="block text-2xl md:text-3xl font-display hover:opacity-70 transition-opacity">
              hello@thewellisfull.com
            </a>
            <div className="mt-8 flex gap-4">
              {["Instagram", "LinkedIn", "Twitter"].map((social) => (
                <a key={social} href="#" className="font-mono text-sm uppercase hover:underline underline-offset-4">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <p className="font-display text-lg md:text-xl max-w-md ml-auto text-right">
              We collaborate to bring your artistic vision to life. Celebrating work across disciplines and cultures.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-background/20">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] leading-[0.8] font-display font-black text-center md:text-left tracking-tighter"
          >
            THE WELL IS FULL
          </motion.h1>
          <div className="flex justify-between items-end mt-4 font-mono text-xs uppercase opacity-40">
            <span>© 2026 The Well Productions</span>
            <span>Site Design by The Well</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
