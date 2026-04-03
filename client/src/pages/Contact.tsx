import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Contact() {
  usePageTitle("Contact");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form) as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  }

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 px-6 text-center">
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h1>

        <motion.div
          className="w-1 bg-black mx-auto mt-4 mb-16 origin-top"
          style={{ height: "50vh" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4, duration: 1.4, ease: "easeInOut" }}
        />

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto text-center space-y-4"
          >
            <p className="font-display text-3xl font-black uppercase">Message sent.</p>
            <p className="font-sans text-base opacity-60">We'll be in touch.</p>
          </motion.div>
        ) : (
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" className="hidden" />

            {[
              { label: "Your Name", name: "name", type: "text", required: true },
              { label: "Company (optional)", name: "company", type: "text", required: false },
              { label: "Your Email", name: "email", type: "email", required: true },
            ].map((field) => (
              <div key={field.name}>
                <label className="font-mono text-xs uppercase tracking-widest opacity-50 block mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  className="w-full border-b border-black/20 focus:border-black outline-none bg-transparent font-sans text-base py-2 transition-colors"
                />
              </div>
            ))}

            <div>
              <label className="font-mono text-xs uppercase tracking-widest opacity-50 block mb-2">
                Subject
              </label>
              <select
                name="subject"
                required
                className="w-full border-b border-black/20 focus:border-black outline-none bg-transparent font-sans text-base py-2 transition-colors"
              >
                <option value="">Select a service</option>
                <option value="Creative Production">Creative Production</option>
                <option value="Project Management">Project Management</option>
                <option value="Education">Education</option>
                <option value="Development">Development</option>
                <option value="Consulting">Consulting</option>
                <option value="Special Projects">Special Projects</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-widest opacity-50 block mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full border-b border-black/20 focus:border-black outline-none bg-transparent font-sans text-base py-2 resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="font-mono text-xs uppercase tracking-widest border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </div>
      <Footer />
    </>
  );
}
