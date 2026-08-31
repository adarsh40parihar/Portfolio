import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";
import Section from "./Section";
import { projects } from "../data/profile";

/* ------------------------------------------------------------------ */
/* Quick Look — a macOS-style preview window for project screenshots    */
/* ------------------------------------------------------------------ */
function QuickLook({ project, index, onIndex, onClose }) {
  const images = project?.images ?? [];

  const step = useCallback(
    (dir) => {
      if (!images.length) return;
      onIndex((index + dir + images.length) % images.length);
    },
    [images.length, index, onIndex]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, step]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
    >
      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="win flex max-h-full w-full max-w-5xl flex-col"
      >
        <div className="win-bar shrink-0">
          <div className="tl-group">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="tl-btn tl-red"
            >
              <svg viewBox="0 0 7 7" fill="none">
                <path
                  d="M1.3 1.3 5.7 5.7M5.7 1.3 1.3 5.7"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <span className="tl-btn" style={{ background: "#3a3a3a" }} />
            <span className="tl-btn" style={{ background: "#3a3a3a" }} />
          </div>
          <span className="win-title mx-auto -translate-x-6 truncate font-mono text-[11.5px]">
            {project.title} — {index + 1} of {images.length}
          </span>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[#060606] p-3 sm:p-6">
          <img
            src={images[index]}
            alt={`${project.title} screenshot ${index + 1}`}
            className="max-h-[72vh] w-auto max-w-full rounded-md object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous screenshot"
                className="absolute left-3 grid h-9 w-9 place-items-center rounded-full border border-line-strong bg-black/70 text-ink-dim backdrop-blur transition-colors hover:text-ink"
              >
                <FiChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next screenshot"
                className="absolute right-3 grid h-9 w-9 place-items-center rounded-full border border-line-strong bg-black/70 text-ink-dim backdrop-blur transition-colors hover:text-ink"
              >
                <FiChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        <div className="flex shrink-0 items-center justify-between border-t border-line bg-surface-2 px-4 py-2 font-mono text-2xs text-ink-faint">
          <span>{project.kind}</span>
          <span className="flex items-center gap-2">
            <span className="kbd">←</span>
            <span className="kbd">→</span>
            <span className="kbd">esc</span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */
function ProjectCard({ project, onOpen }) {
  const [frame, setFrame] = useState(0);
  const images = project.images ?? [];
  const hasShots = images.length > 0;

  const shift = (dir, e) => {
    e.stopPropagation();
    setFrame((f) => (f + dir + images.length) % images.length);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface-2/40 transition-colors duration-300 hover:border-line-bright">
      {/* Preview */}
      <div
        className={`relative overflow-hidden border-b border-line bg-[#060606] ${
          hasShots ? "aspect-[16/10]" : "h-24"
        }`}
      >
        {hasShots ? (
          <>
            <img
              key={frame}
              src={images[frame]}
              alt={`${project.title} preview`}
              loading="lazy"
              decoding="async"
              onClick={() => onOpen(project, frame)}
              className="h-full w-full cursor-zoom-in object-cover object-top opacity-90 transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
            />

            <button
              type="button"
              onClick={() => onOpen(project, frame)}
              aria-label="Open preview"
              className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-md border border-line-strong bg-black/70 text-ink-dim opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:text-ink"
            >
              <FiMaximize2 className="h-3.5 w-3.5" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => shift(-1, e)}
                  aria-label="Previous screenshot"
                  className="absolute left-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-black/70 text-ink-dim opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:text-ink"
                >
                  <FiChevronLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => shift(1, e)}
                  aria-label="Next screenshot"
                  className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-black/70 text-ink-dim opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:text-ink"
                >
                  <FiChevronRight className="h-3.5 w-3.5" />
                </button>
                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Screenshot ${i + 1}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setFrame(i);
                      }}
                      className={`h-1 rounded-full transition-all ${
                        i === frame ? "w-5 bg-ink" : "w-1.5 bg-ink-faint"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          /* No screenshots — a schematic placeholder rather than a broken frame */
          <div className="bg-grid grid h-full w-full place-items-center">
            <span className="font-mono text-2xs uppercase tracking-label text-ink-faint">
              {project.kind}
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-[17px] font-medium tracking-tight">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-2xs text-ink-faint">
            {project.year}
          </span>
        </div>
        <p className="mt-0.5 font-mono text-2xs uppercase tracking-label text-ink-faint">
          {project.kind}
        </p>

        <p className="mt-3 text-[13.5px] leading-relaxed text-ink-dim">
          {project.description}
        </p>

        {project.highlights?.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-2 font-mono text-2xs text-ink-mute"
              >
                <span className="h-px w-3 bg-line-bright" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] text-ink-mute transition-colors hover:text-ink"
            >
              <FiGithub className="h-3.5 w-3.5" />
              Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] text-ink-mute transition-colors hover:text-ink"
            >
              <FiExternalLink className="h-3.5 w-3.5" />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
export default function Projects() {
  const [preview, setPreview] = useState(null); // { project, index }

  return (
    <>
      <Section
        id="projects"
        index="03"
        label="Projects"
        title="Projects"
        meta={`${projects.length} items`}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onOpen={(project, index) => setPreview({ project, index })}
            />
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {preview && (
          <QuickLook
            project={preview.project}
            index={preview.index}
            onIndex={(i) => setPreview((p) => ({ ...p, index: i }))}
            onClose={() => setPreview(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
