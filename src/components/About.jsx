import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a final-year{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    B.Tech student
                  </span>{" "}
                  from <span className="font-semibold">IIT (ISM) Dhanbad</span>{" "}
                  and a passionate{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    Software Engineer
                  </span>{" "}
                  who loves building secure, scalable applications that solve
                  real-world problems.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I specialize in{" "}
                  <span className="font-semibold">Full-Stack Development</span>,{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    AI/ML Systems
                  </span>
                  , and{" "}
                  <span className="font-semibold">Cloud Technologies</span>. My
                  passion lies in creating innovative solutions that bridge
                  technology and real-world impact.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me organizing{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    CTF competitions
                  </span>
                  , solving{" "}
                  <span className="font-semibold">competitive programming</span>{" "}
                  challenges, or contributing to the cybersecurity community.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold gradient-text">1200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Problems Solved
                  </div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold gradient-text">8.12</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    CGPA
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50 animate-glow"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-navy-800 flex items-center justify-center">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
