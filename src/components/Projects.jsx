import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

const Projects = ({ onLightboxChange }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxProjectIndex, setLightboxProjectIndex] = useState(null);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      onLightboxChange?.(true); // Notify parent
    } else {
      document.body.style.overflow = "unset";
      onLightboxChange?.(false); // Notify parent
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen, onLightboxChange]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && lightboxOpen) {
        setLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [lightboxOpen]);

  const openLightbox = (image, projectIndex) => {
    setLightboxImage(image);
    setLightboxProjectIndex(projectIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
    setLightboxProjectIndex(null);
  };

  const navigateLightbox = (direction) => {
    if (lightboxProjectIndex === null) return;
    const project = projects[lightboxProjectIndex];
    if (!project.images) return;

    const currentIdx = currentImageIndex[lightboxProjectIndex] || 0;
    let newIdx;

    if (direction === "next") {
      newIdx = (currentIdx + 1) % project.images.length;
    } else {
      newIdx = (currentIdx - 1 + project.images.length) % project.images.length;
    }

    setCurrentImageIndex((prev) => ({
      ...prev,
      [lightboxProjectIndex]: newIdx,
    }));
    setLightboxImage(project.images[newIdx]);
  };

  const projects = [
    {
      title: "CineHub",
      description:
        "A scalable OTT video streaming platform with secure authentication, Razorpay payment integration, premium subscriptions, wishlist tracking, and OTP-based password recovery.",
      tech: [
        "Next.js",
        "Node.js",
        "JWT",
        "Express.js",
        "MongoDB",
        "Razorpay",
        "Redux",
        "Tailwind CSS",
      ],
      github: "https://github.com/adarsh40parihar",
      demo: null,
      gradient: "from-pink-500 to-rose-500",
      images: ["/projects/cinehub-1.png", "/projects/cinehub-2.png"],
    },
    {
      title: "TempShell",
      description:
        "Developed a secure, scalable platform for spawning temporary shells with isolated environments. Optimized pod creation to achieve startup times under 30 seconds with JWT-based authentication.",
      tech: ["Docker", "Kubernetes", "Python", "FastAPI", "MySQL", "React.js"],
      github: "https://github.com/adarsh40parihar",
      demo: null,
      gradient: "from-cyan-500 to-blue-500",
      images: [
        "/projects/Tempshell-1.png",
        "/projects/Tempshell-2.png",
        "/projects/Tempshell-3.png",
      ],
    },
    {
      title: "PearlCTF 2025",
      description:
        "Organized and hosted a global cybersecurity competition with 2500+ participants from around the world. Developed infrastructure using Docker & Nginx with multiple challenge categories.",
      tech: ["Docker", "Nginx", "Linux", "CTF Challenges", "Web Security"],
      github: "https://github.com/Cyberlabs-Infosec",
      demo: null,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "InternHelper",
      description:
        "Engineered an automation tool using Puppeteer to auto-fill user profiles and intelligently apply to 50+ internships per run on Internshala, reducing manual effort by over 90%.",
      tech: ["Node.js", "Express.js", "Puppeteer", "JavaScript", "HTML/CSS"],
      github: "https://github.com/adarsh40parihar",
      demo: null,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Fake Profile Detector",
      description:
        "Developed an ML-based system for Smart India Hackathon 2023 to detect fake Instagram accounts with 90%+ accuracy using Random Forest algorithm and Python-based web scraping.",
      tech: [
        "Python",
        "Instaloader",
        "Streamlit",
        "Jupyter",
        "ML-Random Forest",
        "JavaScript",
      ],
      github: "https://github.com/adarsh40parihar",
      demo: null,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "Trailblaze CTF",
      description:
        "Organized an intra-college CTF event during Concetto 2023 with 600+ participants, featuring challenges across multiple cybersecurity domains.",
      tech: ["CTF Infrastructure", "Web Security", "Cryptography", "Forensics"],
      github: null,
      demo: null,
      gradient: "from-red-500 to-pink-500",
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="container mx-auto max-w-7xl">
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-navy-700/50"
              >
                {/* Gradient header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                ></div>

                {/* Project Images Carousel */}
                {project.images && project.images.length > 0 && (
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-navy-900 dark:to-navy-800 overflow-hidden group/image flex items-center justify-center">
                    <motion.img
                      key={currentImageIndex[index] || 0}
                      src={project.images[currentImageIndex[index] || 0]}
                      alt={`${project.title} screenshot ${
                        (currentImageIndex[index] || 0) + 1
                      }`}
                      className="max-w-full max-h-full object-contain cursor-zoom-in"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      onClick={() =>
                        openLightbox(
                          project.images[currentImageIndex[index] || 0],
                          index
                        )
                      }
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />

                    {/* Image Navigation - More visible on hover */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [index]:
                                ((prev[index] || 0) -
                                  1 +
                                  project.images.length) %
                                project.images.length,
                            }));
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all opacity-0 group-hover/image:opacity-100 hover:scale-110 z-10"
                          aria-label="Previous image"
                        >
                          <FaChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [index]:
                                ((prev[index] || 0) + 1) %
                                project.images.length,
                            }));
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all opacity-0 group-hover/image:opacity-100 hover:scale-110 z-10"
                          aria-label="Next image"
                        >
                          <FaChevronRight className="w-5 h-5" />
                        </button>

                        {/* Image indicators - More prominent */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                          {project.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex((prev) => ({
                                  ...prev,
                                  [index]: imgIndex,
                                }));
                              }}
                              className={`h-2 rounded-full transition-all ${
                                (currentImageIndex[index] || 0) === imgIndex
                                  ? "bg-white w-8 shadow-lg"
                                  : "bg-white/60 w-2 hover:bg-white/90 hover:w-4"
                              }`}
                              aria-label={`Go to image ${imgIndex + 1}`}
                            />
                          ))}
                        </div>

                        {/* Image counter overlay */}
                        <div className="absolute top-3 right-3 px-3 py-1 bg-black/70 text-white text-xs font-semibold rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity">
                          {(currentImageIndex[index] || 0) + 1} /{" "}
                          {project.images.length}
                        </div>
                      </>
                    )}

                    {/* Zoom hint overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="px-4 py-2 bg-black/70 text-white text-sm font-medium rounded-lg opacity-0 group-hover/image:opacity-100 transition-opacity transform scale-90 group-hover/image:scale-100">
                        🔍 Click to view full screen
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full transition-all hover:scale-110 hover:rotate-90 z-[10000] shadow-lg border border-white/30"
              aria-label="Close"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Full screen view"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Navigation Buttons for Multiple Images */}
              {lightboxProjectIndex !== null &&
                projects[lightboxProjectIndex].images &&
                projects[lightboxProjectIndex].images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateLightbox("prev");
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all hover:scale-110"
                      aria-label="Previous image"
                    >
                      <FaChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateLightbox("next");
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all hover:scale-110"
                      aria-label="Next image"
                    >
                      <FaChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 text-white text-sm font-semibold rounded-full">
                      {(currentImageIndex[lightboxProjectIndex] || 0) + 1} /{" "}
                      {projects[lightboxProjectIndex].images.length}
                    </div>
                  </>
                )}
            </motion.div>

            {/* Instructions */}
            <div className="absolute bottom-4 right-4 text-white/60 text-sm">
              Press <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd> to
              close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
