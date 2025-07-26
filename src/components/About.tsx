import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Server,
  Globe,
  Database,
  BrainCircuit,
  Users,
} from "lucide-react";
import prakashImage from "./prakash.jpeg";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const strengths = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description:
        "Creating responsive, dynamic UIs using modern frameworks like React.js.  ",
    },
    {
      icon: <Server size={24} />,
      title: "Backend Development",
      description:
        "Developing robust and scalable APIs using Node.js and Express.js.",
    },
    {
      icon: <Database size={24} />,
      title: "Database Design",
      description:
        "Designing efficient schemas and writing optimized queries using MongoDB and SQL.",
    },
    {
      icon: <Globe size={24} />,
      title: "Full Stack Solutions",
      description:
        "Developing complete web apps with smooth integration of frontend, backend, and database using MERN & SQL.",
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "Problem Solving",
      description:
        "Applying analytical thinking to tackle complex technical challenges efficiently.",
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description:
        "Thriving in cross-functional teams to deliver high-impact projects efficiently.",
    },
  ];

  return (
    <section id="about" className="section bg-white dark:bg-gray-900 py-20">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="section-title text-center mx-auto"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-primary-500">
                  <img
                    src={prakashImage}
                    alt="Prakash Bind"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-900 p-2 rounded-full border-2 border-primary-500">
                  <span className="block w-4 h-4 rounded-full bg-green-500"></span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <motion.p
                variants={itemVariants}
                className="text-gray-700 dark:text-gray-300 mb-4 text-lg"
              >
                I'm{" "}
                <span className="text-primary-500 font-semibold">
                  Prakash Bind
                </span>
                , a MERN Stack Developer specializing in building fast,
                scalable, and user-focused web applications.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-400 mb-6"
              >
                With a solid foundation in JavaScript and the MERN stack
                (MongoDB, Express.js, React, Node.js), I specialize in building
                responsive, user-centric web applications. Over the past 1.5
                years, I've consistently enhanced my skills, staying up to date
                with modern development practices and delivering scalable
                solutions.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-400"
              >
                I'm a passionate MERN Stack Developer with a strong command of
                JavaScript and modern web technologies. I specialize in building
                responsive, user-focused applications using MongoDB, Express.js,
                React, and Node.js. I take pride in writing clean, maintainable
                code and following best practices to deliver scalable,
                high-quality solutions. Outside of coding, I enjoy exploring new
                technologies, contributing to open source, and mentoring others
                in the developer community.
              </motion.p>
            </div>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center"
          >
            My Core Strengths
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 flex flex-col items-start hover:border-l-4 hover:border-primary-500 transition-all duration-300"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-500 mb-4">
                  {strength.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {strength.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
