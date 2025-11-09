import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi'

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Web App', 'Mobile', 'API', 'Full Stack']

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and analytics.',
      image: '📋',
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      category: 'Web App',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'RESTful API Service',
      description: 'Scalable microservices architecture with authentication, rate limiting, and comprehensive documentation.',
      image: '🔌',
      tags: ['Node.js', 'Docker', 'Redis', 'JWT'],
      category: 'API',
      github: 'https://github.com',
      live: null
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.',
      image: '📊',
      tags: ['React', 'Python', 'FastAPI', 'Chart.js'],
      category: 'Web App',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and community features.',
      image: '💪',
      tags: ['React Native', 'Firebase', 'Redux'],
      category: 'Mobile',
      github: 'https://github.com',
      live: null
    },
    {
      title: 'Cloud Storage Solution',
      description: 'Secure file storage and sharing platform with encryption, versioning, and collaborative editing.',
      image: '☁️',
      tags: ['Next.js', 'AWS S3', 'Lambda', 'DynamoDB'],
      category: 'Full Stack',
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ]

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-bg w-full overflow-x-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container-custom w-full max-w-full"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A collection of projects that showcase my skills and experience in building
            modern web applications and services.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <FiFilter className="text-gray-600 dark:text-gray-400" />
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-border'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-dark-card shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-500 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <FiGithub /> Code
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      <FiExternalLink /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
          >
            <FiGithub /> View More on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
