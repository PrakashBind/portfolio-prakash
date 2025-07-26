import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Github size={18} />,
      name: "GitHub",
      link: "https://github.com/PrakashBind/",
    },
    {
      icon: <Linkedin size={18} />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/prakash-bind/",
    },
    {
      icon: <Twitter size={18} />,
      name: "Twitter",
      link: "https://x.com/Prakashbind1431",
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary-500 mb-4">
              Prakash Bind
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A passionate MERN Stack Developer focused on building exceptional,
              responsive web applications with modern technologies and best
              practices.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Contact
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Noida, India
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              pkbind1431@gmail.com
            </p>
            <p className="text-gray-600 dark:text-gray-400">+91 9559870015</p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-center text-sm text-gray-500">
            © 2025 <span className="font-semibold">Prakash Bind</span>. All
            rights reserved. Made with ❤️ using{" "}
            <span className="font-medium text-blue-500">React</span> &{" "}
            <span className="font-medium text-teal-500">Bootstrap5 CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
