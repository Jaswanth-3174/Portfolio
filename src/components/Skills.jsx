import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython,
  SiMongodb, SiPostgresql, SiAmazonaws, SiDocker, SiKubernetes,
  SiGit, SiGraphql, SiRedis, SiJest, SiTailwindcss, SiExpress,
  SiNextdotjs, SiVuedotjs, SiDjango, SiFastapi, SiMysql,
  SiFirebase, SiJenkins, SiTerraform, SiLinux, SiNginx,
  SiRabbitmq, SiElasticsearch
} from 'react-icons/si'
import { FiBox, FiServer } from 'react-icons/fi'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-500',
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
      iconColor: 'text-green-500',
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
      iconColor: 'text-purple-500',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 90 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
      ]
    },
    {
      title: 'DevOps & Tools',
      color: 'from-orange-500 to-red-500',
      iconColor: 'text-orange-500',
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
    <section id="skills" className="section-padding bg-white dark:bg-dark-card w-full overflow-x-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="p-5 sm:p-6 rounded-2xl bg-gray-50 dark:bg-dark-bg"
            >
              <h3 className={`text-xl sm:text-2xl font-bold mb-5 sm:mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="p-3 sm:p-4 rounded-xl bg-white dark:bg-dark-card shadow-lg hover:shadow-2xl transition-all cursor-default"
                  >
                    <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
                      <motion.div
                        whileHover={{ y: -4, scale: 1.15 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <skill.icon className={`text-4xl sm:text-5xl ${category.iconColor} hover:drop-shadow-lg transition-all`} />
                      </motion.div>
                      <span className="font-medium text-xs sm:text-sm">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <h4 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">Other Technologies</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
            {[
              { name: 'Express.js', icon: SiExpress },
              { name: 'Next.js', icon: SiNextdotjs },
              { name: 'Vue.js', icon: SiVuedotjs },
              { name: 'Django', icon: SiDjango },
              { name: 'FastAPI', icon: SiFastapi },
              { name: 'MySQL', icon: SiMysql },
              { name: 'Firebase', icon: SiFirebase },
              { name: 'Jenkins', icon: SiJenkins },
              { name: 'Terraform', icon: SiTerraform },
              { name: 'Linux', icon: SiLinux },
              { name: 'Nginx', icon: SiNginx },
              { name: 'RabbitMQ', icon: SiRabbitmq },
              { name: 'Elasticsearch', icon: SiElasticsearch },
              { name: 'Microservices', icon: FiBox },
              { name: 'REST APIs', icon: FiServer },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-3 sm:p-4 rounded-xl bg-white dark:bg-dark-card shadow-md hover:shadow-xl transition-all cursor-default"
              >
                <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                  <tech.icon className="text-2xl sm:text-3xl text-primary-500" />
                  <span className="text-[9px] sm:text-xs font-medium text-center leading-tight">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
