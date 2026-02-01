import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24 md:px-8 md:py-32">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.h2 variants={itemVariants} className="font-serif text-3xl text-zinc-100 md:text-4xl">
          Let's work together
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 text-zinc-500">
          Have a project in mind? Drop a line — I'm open to new opportunities.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center gap-4">
          <motion.a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            hello@example.com
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-dark-border px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-16 text-xs text-zinc-600"
        >
          © {new Date().getFullYear()} — Built with React & Framer Motion
        </motion.p>
      </motion.div>
    </section>
  )
}
