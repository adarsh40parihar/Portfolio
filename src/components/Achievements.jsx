import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaTrophy, FaCode, FaShieldAlt, FaMedal } from "react-icons/fa";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    {
      icon: FaTrophy,
      title: "2nd Rank - Spike AI Hackathon 2025",
      description:
        "Secured 2nd rank in Spike AI Hackathon 2025 by building and shipping an LLM-powered Multi-Agent system.",
      date: "2025",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: FaShieldAlt,
      title: "Organized PearlCTF 2024 & 2025",
      description:
        "Hosted a world-level cybersecurity competition with 2500+ global participants, featuring diverse challenges across Web, Forensics, Crypto, Rev, and OSINT.",
      date: "2024-2025",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: FaTrophy,
      title: "Goldman Sachs Summer Analyst",
      description:
        "Developed Agentic AI system using LangGraph and LangChain, achieving 90-95% accuracy and saving 4-5 hours of daily manual effort.",
      date: "May 2025 - Jul 2025",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FaCode,
      title: "1300+ Problems Solved",
      description:
        "Codeforces Specialist (1504), Leetcode Knight (1855), Codechef 4 Star (1839). Consistently solving complex DSA problems across multiple platforms.",
      date: "Ongoing",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaMedal,
      title: "2nd Runner-up - SIH 2023",
      description:
        "Secured position in college internal hackathon for Smart India Hackathon 2023, competing against 150+ teams with Fake Profile Detector project.",
      date: "2023",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: FaTrophy,
      title: "Winner - Winter of Code 5.0",
      description:
        "Won the Winter of Code 5.0 hackathon hosted by Cyberlabs, competing among 700+ participants.",
      date: "2023",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: FaShieldAlt,
      title: "2nd Rank - PragyanCTF",
      description:
        "Achieved 2nd position in PragyanCTF, a Capture the Flag event conducted by NIT Trichy, among 500+ teams.",
      date: "2023",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: FaMedal,
      title: "Finance Head - Concetto 2024",
      description:
        "Led financial operations for Concetto 2024, the annual techno-management fest of IIT(ISM) Dhanbad.",
      date: "2024",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: FaCode,
      title: "Organized Trailblaze 2023",
      description:
        "Organized intra-college CTF event during Concetto 2023 with 600+ participants by Infosec division.",
      date: "2023",
      color: "from-teal-500 to-cyan-500",
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
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
            Achievements & <span className="gradient-text">Milestones</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 opacity-20"></div>

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div className="flex-1 w-full">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-navy-700/50"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} flex-shrink-0`}
                        >
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {achievement.title}
                            </h3>
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-navy-700 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                              {achievement.date}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block flex-shrink-0">
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${achievement.color} shadow-lg`}
                    ></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
