import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    title: 'Technical Trainee',
    company_name: 'Zoho Corp',
    iconBg: '#383E56',
    date: 'November 2025 - Present',
    points: [
      'Backend Developer Trainee working on ManageEngine Division products.',
      'Developing and maintaining enterprise applications using Java and REST APIs.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing secure authentication mechanisms using JWT and ensuring application security.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Intern',
    company_name: 'Zoho Corp',
    iconBg: '#E6DEDD',
    date: 'May 2025 - June 2025',
    points: [
      'Contributed to client projects and learned modern web development practices.',
      'Developed web applications using JavaScript and Java technologies.',
      'Worked with SQL databases and implemented data analysis solutions using Zoho Analytics.',
      'Implemented CI/CD pipelines using Jenkins for automated deployments.',
      'Delivered 15+ client projects with 100% on-time delivery rate.',
    ],
  },
]

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <FiBriefcase className="w-[60%] h-[60%] text-white" />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-card w-full overflow-x-hidden">
      <div className="container-custom w-full max-w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider text-center mb-2">
            What I have done so far
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-10">
            Work Experience.
          </h2>
        </motion.div>

        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Experience
