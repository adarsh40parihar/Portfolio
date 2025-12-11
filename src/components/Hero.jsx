import { motion } from "framer-motion";
import { FaFileDownload, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
      <section
          id="home"
          className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="container mx-auto text-center z-10"
          >
              <motion.div variants={itemVariants} className="mb-6">
                  <span className="text-4xl md:text-6xl mb-4 block">👋</span>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                      Hey, I'm <span className="gradient-text">Adarsh</span>
                  </h1>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-8">
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Software Engineer | Full-Stack Developer | Problem Solver
                  </p>
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                      Turning ideas into secure, scalable systems.
                  </p>
              </motion.div>

              <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                  <motion.a
                      href="/resume"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                  >
                      <FaFileDownload className="w-5 h-5" />
                      View Resume
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
                  </motion.a>

                  <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-transparent border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 font-semibold rounded-2xl shadow-lg hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-navy-900 transition-all duration-300 flex items-center gap-2"
                  >
                      <FaEnvelope className="w-5 h-5" />
                      Contact Me
                  </motion.a>
              </motion.div>

              {/* Animated scroll indicator */}
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              >
                  <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="w-6 h-10 border-2 border-cyan-500 dark:border-cyan-400 rounded-full flex justify-center"
                  >
                      <motion.div
                          animate={{ y: [0, 12, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="w-1.5 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full mt-2"
                      />
                  </motion.div>
              </motion.div>
          </motion.div>

          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div
              className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
              style={{ animationDelay: "1s" }}
          ></div>
      </section>
  );
};

export default Hero;
