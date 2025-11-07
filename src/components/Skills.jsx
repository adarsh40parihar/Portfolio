import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaNode,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiKubernetes,
  SiJavascript,
  SiCplusplus,
  SiPostman,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-gray-900 dark:text-white",
        },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Redux", icon: SiRedux, color: "text-purple-600" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNode, color: "text-green-600" },
        {
          name: "Express.js",
          icon: SiExpress,
          color: "text-gray-700 dark:text-gray-300",
        },
        { name: "FastAPI", icon: FaPython, color: "text-teal-500" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: FaDocker, color: "text-blue-500" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
        { name: "AWS", icon: FaAws, color: "text-orange-500" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "Python", icon: FaPython, color: "text-blue-500" },
        { name: "Java", icon: FaJava, color: "text-red-600" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        {
          name: "Linux",
          icon: FaLinux,
          color: "text-gray-900 dark:text-white",
        },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-navy-700/50"
              >
                <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-navy-900 transition-all duration-300 cursor-pointer group"
                    >
                      <skill.icon
                        className={`w-10 h-10 mb-2 ${skill.color} group-hover:scale-110 transition-transform`}
                      />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-navy-700/50"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              <span className="gradient-text">Core Competencies</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Data Structures & Algorithms",
                "Operating Systems",
                "OOP",
                "DBMS",
                "Computer Networks",
                "System Design",
                "Cryptography",
                "Web Exploitation",
                "LangGraph & LangChain",
                "Multi-agent Systems",
              ].map((competency, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white dark:bg-navy-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-all"
                >
                  {competency}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
