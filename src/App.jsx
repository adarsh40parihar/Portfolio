import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import Dock from "./components/Dock";
import Spotlight from "./components/Spotlight";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Arena from "./components/Arena";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

/** Soft light that trails the cursor — desktop pointers only. */
function useCursorGlow() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const root = document.documentElement;
        root.style.setProperty("--mx", `${e.clientX}px`);
        root.style.setProperty("--my", `${e.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}

function Desktop() {
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  useCursorGlow();

  // ⌘K / Ctrl+K opens the palette; "/" works too when nothing is focused.
  useEffect(() => {
    const onKey = (e) => {
      const typing = ["INPUT", "TEXTAREA"].includes(
        document.activeElement?.tagName
      );
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSpotlightOpen((o) => !o);
      } else if (e.key === "/" && !typing && !spotlightOpen) {
        e.preventDefault();
        setSpotlightOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [spotlightOpen]);

  return (
    <>
      {/* --- Backdrop layers --- */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none fixed inset-0 z-0 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-70"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 0px), rgba(255,255,255,0.045), transparent 65%)",
        }}
      />

      <div className="relative z-10">
        <MenuBar onOpenSpotlight={() => setSpotlightOpen(true)} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Arena />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        <Dock />
      </div>

      <Spotlight
        open={spotlightOpen}
        onClose={() => setSpotlightOpen(false)}
      />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Desktop />} />
      </Routes>
    </BrowserRouter>
  );
}
