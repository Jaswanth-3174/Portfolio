import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900"
    >
      {/* Simple Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static gradient orbs - no animation */}
        <div
          className="absolute top-20 -left-20 w-96 h-96 bg-primary-500/20 dark:bg-primary-500/30 rounded-full blur-3xl"
        />
        <div
          className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-500/20 dark:bg-pink-500/30 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container-custom text-center w-full max-w-full relative z-10"
      >
        {/* Welcome Badge - simplified */}
        <motion.div 
          variants={itemVariants} 
          className="mb-8 inline-block"
        >
          <div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm border border-primary-500/30 text-primary-600 dark:text-primary-400 font-medium text-sm"
          >
            <span>⚡</span>
            <span>Welcome to my Portfolio</span>
            <span>✨</span>
          </div>
        </motion.div>

        {/* Name - clean and simple */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 px-2"
        >
          <span className="text-gray-900 dark:text-white">
            Hi, I'm{' '}
          </span>
          <span className="whitespace-nowrap bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Jaswanth S
          </span>
        </motion.h1>

        {/* Job Title */}
        <motion.div variants={itemVariants} className="mb-10 px-2">
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent">
            SOFTWARE DEVELOPMENT ENGINEER
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Passionate about creating elegant solutions to complex problems
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          <a
            href="#contact"
            className="group px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 dark:from-primary-500 dark:to-purple-500 dark:hover:from-primary-600 dark:hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              <FiMail />
              Get In Touch
            </span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 mb-20"
        >
          {[
            { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 border border-gray-200 dark:border-gray-700 hover:border-primary-500/50 transition-all duration-200 hover:-translate-y-1"
              aria-label={social.label}
            >
              <social.icon className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="p-2 rounded-full border-2 border-primary-500/30 group-hover:border-primary-500 transition-colors">
              <FiArrowDown className="text-xl text-primary-600 dark:text-primary-400" />
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Scroll Down</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
