import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-black/10 px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="font-display text-xl font-bold uppercase tracking-tight">
            The Well
          </a>
          
          {/* Desktop nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-1"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-[60] flex flex-col items-center justify-center gap-8 p-8"
            onClick={() => setIsOpen(false)}
          >
            <button className="absolute top-8 right-8 p-2">
              <X className="w-8 h-8" />
            </button>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-2xl uppercase tracking-widest hover:opacity-70"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}