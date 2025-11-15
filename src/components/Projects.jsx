import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for optimal performance.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'MongoDB', color: 'pink-text-gradient' },
    ],
    image: '🛒',
    source_code_link: 'https://github.com/Jaswanth-3174',
    live_link: 'https://example.com'
  },
  {
    name: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and analytics dashboard for tracking project progress.',
    tags: [
      { name: 'Vue.js', color: 'blue-text-gradient' },
      { name: 'Express', color: 'green-text-gradient' },
      { name: 'PostgreSQL', color: 'pink-text-gradient' },
    ],
    image: '📋',
    source_code_link: 'https://github.com/Jaswanth-3174',
    live_link: 'https://example.com'
  },
  {
    name: 'RESTful API Service',
    description: 'Scalable microservices architecture with authentication, rate limiting, and comprehensive API documentation. Deployed with Docker containers.',
    tags: [
      { name: 'Node.js', color: 'blue-text-gradient' },
      { name: 'Docker', color: 'green-text-gradient' },
      { name: 'Redis', color: 'pink-text-gradient' },
    ],
    image: '🔌',
    source_code_link: 'https://github.com/Jaswanth-3174',
  },
  {
    name: 'Social Media Dashboard',
    description: 'Analytics dashboard for tracking social media metrics across multiple platforms with beautiful data visualization and real-time updates.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Python', color: 'green-text-gradient' },
      { name: 'FastAPI', color: 'pink-text-gradient' },
    ],
    image: '📊',
    source_code_link: 'https://github.com/Jaswanth-3174',
    live_link: 'https://example.com'
  },
  {
    name: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and community features. Built with React Native for iOS and Android.',
    tags: [
      { name: 'React Native', color: 'blue-text-gradient' },
      { name: 'Firebase', color: 'green-text-gradient' },
      { name: 'Redux', color: 'pink-text-gradient' },
    ],
    image: '💪',
    source_code_link: 'https://github.com/Jaswanth-3174',
  },
  {
    name: 'Cloud Storage Solution',
    description: 'Secure file storage and sharing platform with encryption, versioning, and collaborative editing features. Integrated with AWS services.',
    tags: [
      { name: 'Next.js', color: 'blue-text-gradient' },
      { name: 'AWS', color: 'green-text-gradient' },
      { name: 'Lambda', color: 'pink-text-gradient' },
    ],
    image: '☁️',
    source_code_link: 'https://github.com/Jaswanth-3174',
    live_link: 'https://example.com'
  }
]

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: index * 0.5, type: 'spring' }}
    >
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl'>
            <span className='text-8xl'>{image}</span>
          </div>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <FiGithub className='w-1/2 h-1/2 text-white' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {live_link && (
          <div className='mt-4'>
            <motion.button
              onClick={() => window.open(live_link, "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/20 text-white hover:bg-primary-500/30 transition-colors'
            >
              <FiExternalLink /> Live Demo
            </motion.button>
          </div>
        )}
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-primary-500 mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Real-world projects showcasing problem-solving and technical expertise
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className='mt-8 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-4xl mx-auto text-center leading-relaxed'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-7 justify-center'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
