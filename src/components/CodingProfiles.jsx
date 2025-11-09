import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaExternalLinkAlt, FaTrophy } from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const profiles = [
    {
      platform: "Codeforces",
      icon: SiCodeforces,
      username: "BugHunter_X",
      rating: 1504,
      maxRating: 1504,
      title: "Specialist",
      solved: "300+",
      url: "https://codeforces.com/profile/BugHunter_X",
      gradient: "from-blue-500 to-cyan-500",
      color: "text-blue-500",
    },
    {
      platform: "LeetCode",
      icon: SiLeetcode,
      username: "litian25adarsh",
      rating: 1855,
      maxRating: 1855,
      title: "Knight",
      solved: "600+",
      url: "https://leetcode.com/u/iitian25adarsh/",
      gradient: "from-yellow-500 to-orange-500",
      color: "text-yellow-500",
    },
    {
      platform: "CodeChef",
      icon: SiCodechef,
      username: "litian25adarsh",
      rating: 1839,
      maxRating: 1839,
      title: "4 Star",
      solved: "200+",
      url: "https://www.codechef.com/users/iitian25adarsh",
      gradient: "from-blue-500 to-cyan-500",
      color: "text-blue-500",
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
    <section
      id="coding-profiles"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Competitive <span className="gradient-text">Programming</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Solved{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                1200+ problems
              </span>{" "}
              across multiple platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {profiles.map((profile, index) => (
              <motion.a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-navy-700/50 overflow-hidden"
              >
                {/* Gradient header */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.gradient}`}
                ></div>

                {/* Platform Icon */}
                <div className="flex items-center justify-between mb-6">
                  <profile.icon className={`w-12 h-12 ${profile.color}`} />
                  <FaExternalLinkAlt className="w-4 h-4 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                </div>

                {/* Platform Name */}
                <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {profile.platform}
                </h3>

                {/* Username */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  @{profile.username}
                </p>

                {/* Stats Grid */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-navy-900 dark:to-navy-800 rounded-xl">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Current Rating
                    </span>
                    <span className="text-lg font-bold gradient-text">
                      {profile.rating}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-navy-900 dark:to-navy-800 rounded-xl">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Max Rating
                    </span>
                    <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400 flex items-center gap-1">
                      <FaTrophy className="w-4 h-4" />
                      {profile.maxRating}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-navy-900 dark:to-navy-800 rounded-xl">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Title
                    </span>
                    <span
                      className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${profile.gradient} text-white`}
                    >
                      {profile.title}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-navy-900 dark:to-navy-800 rounded-xl">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Problems Solved
                    </span>
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                      {profile.solved}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${profile.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </motion.a>
            ))}
          </div>

          {/* Additional Platforms */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-navy-700/50"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <FaCode className="inline-block w-6 h-6 mr-2 mb-1" />
              Other Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl">
                <div className="text-2xl font-bold gradient-text">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  CSES
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl">
                <div className="text-2xl font-bold gradient-text">150+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  GeeksforGeeks
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl">
                <div className="text-2xl font-bold gradient-text">1300+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Total Solved
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl">
                <div className="text-2xl font-bold gradient-text">300+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Total Active Days
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
