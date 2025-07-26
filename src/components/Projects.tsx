import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Eye } from "lucide-react";

// Define project types
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoLink: string;
  githubLink: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectsData: Project[] = [
    {
      id: 1,
      title: "Netflix Clone",
      description:
        "A feature-rich Netflix clone with user authentication, content browsing, and video playback functionality.",
      image:
        "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      category: "Full Stack",
      demoLink: "/not-found",
      githubLink: "https://github.com/PrakashBind/",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Complete e-commerce solution with product catalog, shopping cart, checkout, and admin dashboard.",
      image:
        "https://images.pexels.com/photos/5076520/pexels-photo-5076520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["MERN Stack", "JWT", "Redux", "RESTful API"],
      category: "Full Stack",
      demoLink: "/not-found",
      githubLink: "https://github.com/PrakashBind/MERN-Ecommerce-App",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Collaborative task manager with real-time updates, task assignments, and progress tracking.",
      image:
        "https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Full Stack",
      demoLink: "/not-found",
      githubLink: "https://github.com/PrakashBind/",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "Interactive weather app with location-based forecasts, historical data, and visual charts.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Weather API", "Chart.js"],
      category: "Frontend",
      demoLink: "/not-found",
      githubLink: "https://github.com/PrakashBind/",
    },
    {
      id: 5,
      title: "Blog API",
      description:
        "RESTful API for a blogging platform with authentication, posts, comments, and user management.",
      image:
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "React"],
      category: "Backend",
      demoLink: "/not-found",
      githubLink: "https://github.com/PrakashBind/",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with dark mode, animations, and contact form.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Bootstrap 5", "Motion"],
      category: "Frontend",
      demoLink: "/not-found",
      githubLink: "https://github.com/PrakashBind/",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Full Stack"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

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
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800">
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
            My Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-10"
          >
            Here are a few of my recent projects that highlight my expertise in
            solving real-world challenges and building full-stack solutions
            using modern technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? "bg-primary-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                className="card group"
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      aria-label="View Demo"
                    >
                      <Eye size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      aria-label="View GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 flex items-center text-sm font-medium"
                    >
                      Live Demo <ExternalLink size={16} className="ml-1" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center text-sm font-medium"
                    >
                      Source Code <Github size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://github.com/PrakashBind/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View More on GitHub <Github size={18} className="ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
