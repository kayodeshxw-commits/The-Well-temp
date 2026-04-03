import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Top nav (like old site) */}
        <nav className="flex justify-center gap-8 text-sm">
          <a href="/" className="font-mono uppercase tracking-widest hover:opacity-80 transition-opacity">
            HOME
          </a>
          <a href="/#services" className="font-mono uppercase tracking-widest hover:opacity-80 transition-opacity">
            SERVICES
          </a>
          <a href="/work" className="font-mono uppercase tracking-widest hover:opacity-80 transition-opacity">
            WORK
          </a>
          <a href="/contact" className="font-mono uppercase tracking-widest hover:opacity-80 transition-opacity">
            CONTACT
          </a>
        </nav>

        {/* Chant (exact old site style) */}
        <div className="font-black text-4xl md:text-6xl uppercase tracking-tight leading-tight">
          <div>THEWELLISFULL</div>
          <div className="font-normal text-xl md:text-2xl tracking-normal">EVERYBODYDRINK</div>
        </div>

        {/* Credits */}
        <p className="text-sm opacity-75 font-mono tracking-wider">
          &copy; 2026 The Well Productions & Consulting, LLC
          <br />
          Site design by The Well
        </p>
      </div>
    </footer>
  );
}