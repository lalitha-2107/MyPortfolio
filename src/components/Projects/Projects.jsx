import { motion } from 'framer-motion'
import { projects } from '../../data/projects'

/** Section enters from below with stagger for cards */
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-5 py-24 md:px-8 md:py-32">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.h2
          variants={titleVariants}
          className="font-serif text-3xl text-zinc-100 md:text-4xl"
        >
          Selected projects
        </motion.h2>
        <motion.p
          variants={titleVariants}
          className="mt-2 max-w-xl text-zinc-500"
        >
          A few things I've shipped recently.
        </motion.p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.li key={project.id} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.href}
      className="group block overflow-hidden rounded-2xl border border-dark-border bg-dark-surface p-6 transition-colors hover:border-dark-muted/50"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Placeholder “image” area */}
      <motion.div
        className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-dark-bg text-4xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {project.imagePlaceholder}
      </motion.div>

      <h3 className="font-serif text-xl text-zinc-100 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-500 line-clamp-2">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-dark-bg px-3 py-1 text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  )
}
