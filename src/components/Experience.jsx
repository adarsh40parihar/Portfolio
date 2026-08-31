import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiMapPin, FiCalendar } from "react-icons/fi";
import Section from "./Section";
import { experience } from "../data/profile";

/** Mail.app-style split view: source list on the left, detail on the right. */
export default function Experience() {
  const [activeId, setActiveId] = useState(experience[0].id);
  const active = experience.find((e) => e.id === activeId) ?? experience[0];

  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title="Experience"
      meta={`${experience.length} roles`}
      bare
    >
      <div className="grid md:grid-cols-[236px_1fr]">
        {/* Source list */}
        <div className="flex gap-2 overflow-x-auto border-b border-line p-2 md:flex-col md:gap-1 md:overflow-visible md:border-b-0 md:border-r md:bg-surface-2/40">
          <p className="label hidden px-3 pb-1 pt-2 md:block">Companies</p>
          {experience.map((e) => {
            const selected = e.id === activeId;
            return (
              <button
                key={e.id}
                type="button"
                onClick={() => setActiveId(e.id)}
                aria-pressed={selected}
                className={`flex min-w-[190px] items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors md:min-w-0 ${
                  selected
                    ? "bg-white/[0.07] text-ink"
                    : "text-ink-mute hover:bg-white/[0.04]"
                }`}
              >
                {/* Monogram rather than the brand PNGs — both are dark
                    wordmarks that turn to mush at this size. */}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-line bg-white/[0.04] font-mono text-[10px] font-semibold tracking-wider text-ink-dim">
                  {e.mono}
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5">
                    <span className="truncate text-[13px] font-medium">
                      {e.company}
                    </span>
                    {e.current && (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-tl-green animate-pulse-dot" />
                    )}
                  </span>
                  <span className="mt-0.5 block truncate font-mono text-2xs text-ink-faint">
                    {e.period}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail pane */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="p-5 sm:p-7 lg:p-9"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                  {active.role}
                </h3>
                <p className="mt-1 text-ink-dim">{active.company}</p>
              </div>
              {active.current && (
                <span className="chip border-tl-green/25 bg-tl-green/[0.08] text-tl-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-tl-green" />
                  Current
                </span>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-2xs text-ink-faint">
              <span className="flex items-center gap-1.5">
                <FiCalendar className="h-3 w-3" />
                {active.period}
              </span>
              <span className="flex items-center gap-1.5">
                <FiMapPin className="h-3 w-3" />
                {active.location}
              </span>
              {active.certificate && (
                <a
                  href={active.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-ink-mute underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink"
                >
                  <FiAward className="h-3 w-3" />
                  Certificate
                </a>
              )}
            </div>

            <p className="mt-5 max-w-2xl leading-relaxed text-ink-dim">
              {active.blurb}
            </p>

            {/* Metrics */}
            <div className="mt-7 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
              {active.metrics.map((m) => (
                <div key={m.label} className="bg-surface px-4 py-4">
                  <div className="text-lg font-medium tracking-tight">
                    {m.value}
                  </div>
                  <div className="mt-1 font-mono text-2xs text-ink-faint">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <ul className="mt-7 space-y-3.5">
              {active.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[14.5px] leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-ink-faint"
                  />
                  <span className="text-ink-dim">{b}</span>
                </li>
              ))}
            </ul>

            {/* Stack */}
            <div className="mt-7">
              <p className="label mb-3">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {active.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
