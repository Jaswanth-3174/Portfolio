import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython,
  SiMongodb, SiPostgresql, SiAmazonaws, SiDocker, SiKubernetes,
  SiGit, SiGraphql, SiRedis, SiJest, SiTailwindcss
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, level: 95 },
        { name: 'TypeScript', icon: SiTypescript, level: 90 },
        { name: 'React', icon: SiReact, level: 95 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 90 },
        { name: 'Python', icon: SiPython, level: 85 },
        { name: 'GraphQL', icon: SiGraphql, level: 80 },
        { name: 'Redis', icon: SiRedis, level: 75 },
      ]
    },
    {
      title: 'Database',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 90 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
      ]
    },
    {
      title: 'DevOps & Tools',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', icon: SiAmazonaws, level: 85 },
        { name: 'Docker', icon: SiDocker, level: 90 },
        { name: 'Kubernetes', icon: SiKubernetes, level: 75 },
        { name: 'Git', icon: SiGit, level: 95 },
        { name: 'Jest', icon: SiJest, level: 85 },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-card">
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
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-primary-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-dark-bg"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="text-2xl" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <h4 className="text-xl font-semibold mb-6">Other Technologies</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Express.js', 'Next.js', 'Vue.js', 'Django', 'FastAPI',
              'MySQL', 'Firebase', 'Jenkins', 'Terraform', 'Linux',
              'Nginx', 'RabbitMQ', 'Elasticsearch', 'Microservices', 'REST APIs'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-dark-border dark:to-dark-card text-sm font-medium cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
