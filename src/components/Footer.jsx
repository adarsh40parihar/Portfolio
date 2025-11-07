import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-navy-700">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>© 2025 Adarsh Singh Parihar</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>Built with</span>
            <FaHeart className="text-red-500 w-4 h-4 animate-pulse" />
            <span>using</span>
            <span className="font-semibold gradient-text">
              React
            </span>
          </div>

          <div className="text-gray-600 dark:text-gray-400">
            <a
              href="#home"
              className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
