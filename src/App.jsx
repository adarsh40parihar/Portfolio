import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import CodingProfiles from "./components/CodingProfiles";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import Resume from "./components/Resume";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Routes>
            {/* Resume Route */}
            <Route path="/resume" element={<Resume />} />

            {/* Main Portfolio Route */}
            <Route
              path="/"
              element={
                <>
                  <ParticlesBackground />
                  {!isLightboxOpen && (
                    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                  )}
                  <Hero />
                  <About />
                  <Experience />
                  <Skills />
                  <CodingProfiles />
                  <Projects onLightboxChange={setIsLightboxOpen} />
                  <Achievements />
                  <Contact />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;