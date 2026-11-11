import { motion } from "framer-motion";

const BOOKING_URL = "https://linktr.ee/thewellisfull";

const sessions = [
  {
    title: "Performance Coaching",
    description: "Coaching and prep for actors, performers, and public speakers.",
    price: "Regular Session, 60 min, $50. Extended Session, 90 min, $80.",
    button: "Book Performance Coaching",
  },
  {
    title: "Strategy Consult",
    description: "A focused 1:1 call for strategizing script development, producing, funding and timeline.",
    price: "60 min, $100.",
    button: "Book a Strategy Consult",
  },
  {
    title: "Deep Dive Consult",
    description: "Bring your project and we will take a deep dive into strategy and goals.",
    price: "Deep Dive, 90 min, $150. Return Session, 30 min, $150.",
    button: "Book a Deep Dive",
  },
  {
    title: "Open Well",
    description: "A 30min open session. Pay what you can. Bring a question, a page, a problem, or nothing at all. Proceeds go to the projects in development.",
    price: "Free, $10, $20, or $30.",
    button: "Book an Open Well",
  },
];

export function BookSession() {
  return (
    <section className="py-32 px-4 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Consulting Sessions
          </h2>
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
            Pick a session, book, and pay at checkout.
          </p>
        </motion.div>

        <div className="border-t border-black/10">
          {sessions.map((session, i) => (
            <motion.div
              key={session.title}
              className="border-b border-black/10 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
            >
              <div className="py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-12 group-hover:bg-black/5 transition-colors px-4 -mx-4">
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-2">
                    {session.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed mb-1 max-w-2xl">
                    {session.description}
                  </p>
                  <p className="font-sans text-sm md:text-base text-foreground">
                    {session.price}
                  </p>
                </div>
                <div className="shrink-0">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full md:w-auto text-center font-mono text-xs uppercase tracking-widest border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    {session.button}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
