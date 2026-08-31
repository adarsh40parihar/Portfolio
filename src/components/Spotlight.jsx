import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, sections, projects, experience } from "../data/profile";

/** Everything reachable from the ⌘K palette. */
function buildIndex() {
  const go = (id) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const open = (url) => () => window.open(url, "_blank", "noopener,noreferrer");

  return [
    ...sections.map((s) => ({
      group: "Navigate",
      title: s.label,
      hint: `#${s.id}`,
      run: go(s.id),
    })),
    ...experience.map((e) => ({
      group: "Experience",
      title: e.company,
      hint: e.period,
      run: go("experience"),
    })),
    ...projects.map((p) => ({
      group: "Projects",
      title: p.title,
      hint: p.kind,
      run: go("projects"),
    })),
    {
      group: "Links",
      title: "GitHub",
      hint: "adarsh40parihar",
      run: open(profile.links.github),
    },
    {
      group: "Links",
      title: "LinkedIn",
      hint: "adarsh40parihar",
      run: open(profile.links.linkedin),
    },
    {
      group: "Links",
      title: "LeetCode — Knight, 1855",
      hint: "siadar",
      run: open(profile.links.leetcode),
    },
    {
      group: "Links",
      title: "Codeforces — Specialist, 1504",
      hint: "siadar",
      run: open(profile.links.codeforces),
    },
    {
      group: "Actions",
      title: "Open résumé",
      hint: "/resume",
      run: () => {
        window.location.href = "/resume";
      },
    },
    {
      group: "Actions",
      title: "Copy email address",
      hint: profile.email,
      run: () => navigator.clipboard?.writeText(profile.email),
    },
    {
      group: "Actions",
      title: "Send an email",
      hint: profile.email,
      run: () => {
        window.location.href = `mailto:${profile.email}`;
      },
    },
  ];
}

export default function Spotlight({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index;
    return index.filter((i) =>
      `${i.title} ${i.hint} ${i.group}`.toLowerCase().includes(q)
    );
  }, [query, index]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setCursor(0);
      // Focus after the entrance animation has committed
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => setCursor(0), [query]);

  // Keep the highlighted row inside the scroll viewport
  useEffect(() => {
    listRef.current
      ?.querySelector('[data-active="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((c) => (results.length ? (c + 1) % results.length : 0));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((c) =>
          results.length ? (c - 1 + results.length) % results.length : 0
        );
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const item = results[cursor];
        if (item) {
          item.run();
          onClose();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, cursor, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[200] flex items-start justify-center bg-black/70 px-4 pt-[14vh] backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            className="w-full max-w-xl overflow-hidden rounded-win border border-line-strong bg-surface/95 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4 shrink-0 text-ink-faint"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="7" cy="7" r="4.5" />
                <path d="M10.5 10.5 14 14" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, projects, links…"
                className="h-12 w-full bg-transparent text-[15px] outline-none placeholder:text-ink-faint"
              />
              <span className="kbd shrink-0">esc</span>
            </div>

            <div ref={listRef} className="max-h-[46vh] overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-3 py-6 text-center font-mono text-xs text-ink-faint">
                  No matches for “{query}”
                </p>
              )}

              {results.map((item, i) => {
                const first =
                  i === 0 || results[i - 1].group !== item.group;
                return (
                  <div key={`${item.group}-${item.title}`}>
                    {first && (
                      <p className="label px-3 pb-1 pt-3">{item.group}</p>
                    )}
                    <button
                      type="button"
                      data-active={i === cursor}
                      onMouseEnter={() => setCursor(i)}
                      onClick={() => {
                        item.run();
                        onClose();
                      }}
                      className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2 text-left transition-colors ${
                        i === cursor ? "bg-white/[0.07]" : ""
                      }`}
                    >
                      <span className="truncate text-[13.5px] text-ink">
                        {item.title}
                      </span>
                      <span className="shrink-0 font-mono text-2xs text-ink-faint">
                        {item.hint}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 border-t border-line px-4 py-2 font-mono text-2xs text-ink-faint">
              <span className="flex items-center gap-1">
                <span className="kbd">↑</span>
                <span className="kbd">↓</span> navigate
              </span>
              <span className="flex items-center gap-1">
                <span className="kbd">↵</span> open
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
