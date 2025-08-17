import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    }
  };

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

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "pkbind1431@gmail.com",
      link: "mailto:pkbind1431@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 9559870015",
      link: "tel:+919559870015",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Noida, India",
      link: "https://maps.google.com/?q=Noida,India",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={22} />,
      name: "GitHub",
      link: "https://github.com/PrakashBind/",
    },
    {
      icon: <Linkedin size={22} />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/prakash-bind/",
    },
    {
      icon: <Twitter size={22} />,
      name: "Twitter",
      link: "https://x.com/Prakashbind1431",
    },
  ];

  return (
    <section
      id="contact"
      className="section bg-gray-50 dark:bg-gray-800 relative"
    >
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="section-title text-center mx-auto"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12"
          >
            I'm currently open to freelance opportunities and full-time MERN
            Stack Developer roles. If you have a project that needs clean code,
            modern design, and reliable delivery — feel free to get in touch!
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="card p-6 h-full">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-500 mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-gray-800 dark:text-white font-medium mb-1">
                          {item.title}
                        </h4>
                        <a
                          href={item.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Follow Me
                </h4>

                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Full Name <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input ${
                          errors.name
                            ? "border-error-500 focus:ring-error-500"
                            : ""
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-error-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email Address <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input ${
                          errors.email
                            ? "border-error-500 focus:ring-error-500"
                            : ""
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-error-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message <span className="text-error-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`input ${
                        errors.message
                          ? "border-error-500 focus:ring-error-500"
                          : ""
                      }`}
                      placeholder="Hello, I'd like to talk about..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-error-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>

                    {submitStatus === "success" && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 text-success-600 dark:text-success-400"
                      >
                        Your message has been sent successfully. I'll get back
                        to you soon!
                      </motion.p>
                    )}

                    {submitStatus === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 text-error-600 dark:text-error-400"
                      >
                        There was an error sending your message. Please try
                        again later.
                      </motion.p>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default Contact;
