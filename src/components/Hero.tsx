import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "MERN Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg md:text-xl font-medium text-primary-500 mb-3">
              Hello, I'm
            </h3>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Prakash Bind
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-10">
              {text}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I build exceptional, responsive websites and web applications with
              modern technologies and best practices. Focused on creating
              scalable and maintainable solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#projects" className="btn btn-primary w-full sm:w-auto">
                View Projects <ArrowRight size={18} className="ml-2" />
              </a>

              <a href="#contact" className="btn btn-outline w-full sm:w-auto">
                Hire Me
              </a>

              <a
                href="../public/Prakash_Bind_Resume.pdf"
                className="btn bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 w-full sm:w-auto"
                download
              >
                Resume <Download size={18} className="ml-2" />
              </a>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <a
                href="https://github.com/PrakashBind/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent"></div>
    </section>
  );
};

export default Hero;
