import { motion } from 'framer-motion'

/** Staggered text reveal for hero lines */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const ctaVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const lines = [
    'Hi, I\'m a creative developer.',
    'I build interfaces and experiences',
    'that feel right.',
  ]

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center px-5 pt-24 pb-20 md:px-8 md:pt-32"
    >
      <motion.div
        className="mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Intro line */}
        <motion.p
          variants={lineVariants}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-accent md:text-base"
        >
          Frontend Engineer & Motion Designer
        </motion.p>

        {/* Headline lines */}
        <div className="space-y-2 md:space-y-3">
          {lines.map((line, i) => (
            <motion.h1
              key={i}
              variants={lineVariants}
              className="font-serif text-4xl leading-tight text-zinc-100 md:text-5xl lg:text-6xl"
            >
              {line}
            </motion.h1>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={ctaVariants} className="mt-10 flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20"
            whileHover={{ scale: 1.02, boxShadow: '0 10px 40px -10px rgba(167, 139, 250, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            View work
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-dark-border px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Subtle gradient glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-accent/5 to-transparent"
        aria-hidden
      />
    </section>
  )
}
