import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

/** Stagger children with delay */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 + i * 0.05 },
  }),
}

const itemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-dark-border/50 bg-dark-bg/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo / name */}
        <motion.a
          href="#hero"
          className="font-serif text-xl text-zinc-100 md:text-2xl"
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          Portfolio
        </motion.a>

        {/* Desktop nav */}
        <motion.ul
          className="hidden items-center gap-8 md:flex"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.li key={link.href} variants={itemVariants}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-border text-zinc-400 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          whileTap={{ scale: 0.96 }}
        >
          {mobileOpen ? (
            <span className="text-lg leading-none">×</span>
          ) : (
            <span className="text-lg leading-none">≡</span>
          )}
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-dark-border md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4" variants={containerVariants} initial="hidden" animate="visible">
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-zinc-400 hover:bg-dark-surface hover:text-zinc-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
