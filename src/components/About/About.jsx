import { motion } from 'framer-motion'
import { skills, aboutCopy } from '../../data/skills'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24 md:px-8 md:py-32">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.h2 variants={itemVariants} className="font-serif text-3xl text-zinc-100 md:text-4xl">
          About & skills
        </motion.h2>

        <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          {aboutCopy.headline}
        </motion.p>
        <motion.p variants={itemVariants} className="mt-4 max-w-2xl text-zinc-500 leading-relaxed">
          {aboutCopy.body}
        </motion.p>

        {/* Skills grid */}
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {skills.map((skill) => (
            <motion.li
              key={skill.id}
              variants={itemVariants}
              className="rounded-xl border border-dark-border bg-dark-surface px-4 py-3 text-center"
            >
              <span className="block text-xs uppercase tracking-wider text-zinc-500">
                {skill.category}
              </span>
              <span className="mt-1 block font-medium text-zinc-200">
                {skill.name}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
