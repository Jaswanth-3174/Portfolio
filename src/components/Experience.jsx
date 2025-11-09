import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const experiences = [
    {
      company: 'Tech Company Inc.',
      position: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of microservices architecture and mentoring junior developers.',
      achievements: [
        'Architected and implemented a scalable microservices platform serving 1M+ users',
        'Reduced API response time by 60% through optimization and caching strategies',
        'Led a team of 5 developers in migrating legacy systems to modern tech stack',
        'Implemented CI/CD pipelines reducing deployment time by 75%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      company: 'Startup Solutions',
      position: 'Full Stack Developer',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Built and maintained web applications using modern JavaScript frameworks.',
      achievements: [
        'Developed 10+ features for the main product increasing user engagement by 40%',
        'Integrated third-party APIs and payment gateways for seamless user experience',
        'Collaborated with UX team to implement responsive designs across all platforms',
        'Established coding standards and best practices for the development team'
      ],
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Redis']
    },
    {
      company: 'Digital Agency Co.',
      position: 'Junior Developer',
      location: 'Boston, MA',
      period: '2019 - 2020',
      description: 'Contributed to client projects and learned modern web development practices.',
      achievements: [
        'Delivered 15+ client projects with 100% on-time delivery rate',
        'Improved website performance scores by implementing optimization techniques',
        'Participated in code reviews and adopted industry best practices',
        'Assisted in training new interns and creating documentation'
      ],
      technologies: ['JavaScript', 'PHP', 'MySQL', 'WordPress']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-card">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container-custom"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-primary-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 border-l-2 border-primary-500/30 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary-500 ring-4 ring-white dark:ring-dark-card" />

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-dark-bg shadow-lg"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-primary-500 font-semibold">
                        <FiBriefcase className="text-lg" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <FiCalendar />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-primary-500 mt-1">▸</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + i * 0.05 }}
                      className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-500 font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
