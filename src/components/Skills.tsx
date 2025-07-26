import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  level: number;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5 & CSS3", level: 90 },
        { name: "JavaScript", level: 70 },
        { name: "TypeScript", level: 45 },
        { name: "React.js", level: 88 },
        { name: "Redux", level: 70 },
        { name: "Next.js", level: 45 },
        { name: "Bootstrap 5", level: 50 },
        { name: "SASS/SCSS", level: 25 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 35 },
        { name: "Authentication & Security", level: 85 },
        { name: "Websockets", level: 50 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Mongoose", level: 88 },
        { name: "MySQL", level: 70 },
        // { name: 'PostgreSQL', level: 70 },
        // { name: 'Redis', level: 65 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub", level: 88 },
        // { name: 'Docker', level: 75 },
        { name: "AWS", level: 65 },
        // { name: 'CI/CD', level: 75 },
        { name: "Jest & Testing", level: 75 },
        { name: "Webpack", level: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="section-title text-center mx-auto"
          >
            My Skills
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12"
          >
            Throughout my journey as a MERN Stack Developer, I’ve built a
            diverse set of technical skills, enabling me to deliver efficient,
            scalable, and maintainable web applications.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{
                            duration: 1,
                            delay: 0.3 + skillIndex * 0.1,
                          }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-10">
              Development Workflow
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900"></div>

              <div className="space-y-12">
                {[
                  {
                    title: "Planning & Requirements",
                    description:
                      "Defining project scope, gathering requirements, and creating wireframes for a clear roadmap.",
                  },
                  {
                    title: "Design & Architecture",
                    description:
                      "Designing intuitive UI/UX, planning robust architecture, and organizing scalable code structure.",
                  },
                  {
                    title: "Development",
                    description:
                      "Writing clean, maintainable, and efficient code using best practices and design patterns.",
                  },
                  {
                    title: "Testing & QA",
                    description:
                      "Conducting rigorous cross-browser/device testing and handling edge cases to ensure stability.",
                  },
                  {
                    title: "Deployment & Maintenance",
                    description:
                      "Automating CI/CD pipelines, deploying applications, and providing continuous support.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-center`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-1/2 pr-8 md:px-8 text-right md:text-right">
                      {index % 2 === 0 ? (
                        <>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        </>
                      ) : null}
                    </div>

                    <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 shadow-md">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>

                    <div className="w-1/2 pl-8 md:px-8 text-left md:text-left">
                      {index % 2 !== 0 ? (
                        <>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        </>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
