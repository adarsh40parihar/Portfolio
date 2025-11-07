import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage(""); // Clear error on input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Get EmailJS credentials from .env file
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const autoReplyTemplateId = import.meta.env
        .VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if credentials are configured
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS not configured. Please check EMAILJS_SETUP.md"
        );
      }

      // Prepare template parameters for main email (to you)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "adarshparihar40@gmail.com",
      };

      // Send main email to you
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Send auto-reply to the person who contacted you (if auto-reply template is configured)
      if (autoReplyTemplateId) {
        const autoReplyParams = {
          from_name: formData.name,
          from_email: formData.email,
          to_email: formData.email, // Send to the person who contacted you
        };

        try {
          await emailjs.send(
            serviceId,
            autoReplyTemplateId,
            autoReplyParams,
            publicKey
          );
        } catch (autoReplyError) {
          // Log error but don't fail the main submission
          console.warn("Auto-reply failed:", autoReplyError);
        }
      }

      // Show success message
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setErrorMessage(
        "Failed to send message. Please check EMAILJS_SETUP.md to configure EmailJS, or email me directly at adarshparihar40@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "adarshparihar40@gmail.com",
      link: "mailto:adarshparihar40@gmail.com",
      color: "text-red-500",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91-7275003315",
      link: "tel:+917275003315",
      color: "text-green-500",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Dhanbad, Jharkhand",
      link: null,
      color: "text-blue-500",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      url: "https://github.com/adarsh40parihar",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/adarsh40parihar",
      color: "hover:text-blue-600",
    },
    {
      icon: FaCode,
      label: "Codolio",
      url: "https://codolio.com/profile/BugHunter",
      color: "hover:text-purple-600",
    },
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Let's Connect!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions. Feel free to reach
                  out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-xl"
                  >
                    <div
                      className={`p-3 rounded-lg bg-gray-100 dark:bg-navy-700 ${info.color}`}
                    >
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {info.label}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-900 dark:text-white font-medium hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-900 dark:text-white font-medium">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`p-4 bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-xl text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-md hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm border border-gray-300 dark:border-navy-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm border border-gray-300 dark:border-navy-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm border border-gray-300 dark:border-navy-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
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
                    "Send Message"
                  )}
                </motion.button>

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl text-sm"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl"
                  >
                    ✅ Thanks for reaching out! I'll get back to you soon 👋
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
