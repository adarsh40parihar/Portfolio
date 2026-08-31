import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { FiArrowRight, FiFileText, FiArrowDown } from "react-icons/fi";
import { profile, bootLines } from "../data/profile";

/** Types each command out, reveals its output, then moves to the next line. */
function useBootSequence(lines) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState({ i: 0, c: 0, out: 0 });

  useEffect(() => {
    if (reduced) {
      setStep({ i: lines.length, c: 0, out: 0 });
      return;
    }
    const { i, c, out } = step;
    if (i >= lines.length) return;

    const line = lines[i];
    let delay;
    let next;

    if (c < line.cmd.length) {
      delay = 34;
      next = { i, c: c + 1, out: 0 };
    } else if (out < line.out.length) {
      delay = 110;
      next = { i, c, out: out + 1 };
    } else {
      delay = 420;
      next = { i: i + 1, c: 0, out: 0 };
    }

    const t = setTimeout(() => setStep(next), delay);
    return () => clearTimeout(t);
  }, [step, lines, reduced]);

  return { ...step, done: step.i >= lines.length };
}

const Prompt = () => (
  <span className="select-none">
    <span className="text-tl-green">➜</span>{" "}
    <span className="text-ink-faint">~</span>{" "}
  </span>
);

export default function Hero() {
  const { i, c, out, done } = useBootSequence(bootLines);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center px-4 pb-20 pt-[calc(var(--menubar-h)+3rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* ---------- Identity ---------- */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 py-1 pl-2 pr-3">
            <span className="h-1.5 w-1.5 rounded-full bg-tl-green animate-pulse-dot" />
            <span className="font-mono text-[11px] text-ink-dim">
              {profile.status.label}
            </span>
          </span>

          <h1 className="mt-6 text-balance text-[clamp(2.4rem,7.2vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            {profile.name}
          </h1>

          <p className="mt-4 font-mono text-[13px] text-ink-mute sm:text-sm">
            {profile.roles.map((r, idx) => (
              <span key={r}>
                {idx > 0 && <span className="mx-2 text-ink-faint">/</span>}
                {r}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-xl text-balance leading-relaxed text-ink-dim">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/resume" className="btn-primary">
              <FiFileText className="h-4 w-4" />
              View résumé
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
              <FiArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-6 hidden items-center gap-2 font-mono text-2xs text-ink-faint sm:flex">
            <span className="kbd">⌘</span>
            <span className="kbd">K</span>
            to search this site
          </p>
        </div>

        {/* ---------- Terminal ---------- */}
        <div
          className="win animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          <div className="win-bar">
            <div className="tl-group">
              <span className="tl-btn tl-red" />
              <span className="tl-btn tl-yellow" />
              <span className="tl-btn tl-green" />
            </div>
            <span className="win-title mx-auto -translate-x-6 font-mono text-[11.5px]">
              {profile.user}@{profile.host} — zsh
            </span>
          </div>

          <div className="min-h-[300px] bg-[#060606] p-5 font-mono text-[12.5px] leading-[1.85] sm:min-h-[340px] sm:text-[13px]">
            {bootLines.map((line, idx) => {
              if (idx > i) return null;
              const typed = idx < i ? line.cmd : line.cmd.slice(0, c);
              const shown = idx < i ? line.out : line.out.slice(0, out);

              return (
                <div key={line.cmd} className={idx > 0 ? "mt-4" : ""}>
                  <div className="text-ink">
                    <Prompt />
                    {typed}
                    {idx === i && c < line.cmd.length && (
                      <span className="ml-px inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-ink animate-caret" />
                    )}
                  </div>
                  {shown.map((o) => (
                    <div key={o} className="text-ink-mute">
                      {o}
                    </div>
                  ))}
                </div>
              );
            })}

            {done && (
              <div className="mt-4 text-ink">
                <Prompt />
                <span className="ml-px inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-ink animate-caret" />
              </div>
            )}
          </div>

          {/* Status bar, like a terminal's bottom strip */}
          <div className="flex items-center justify-between border-t border-line bg-surface-2 px-4 py-2 font-mono text-2xs text-ink-faint">
            <span>{profile.location}</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tl-green" />
              connected
            </span>
          </div>
        </div>
      </div>

      {/* Scroll affordance */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-2xs text-ink-faint transition-colors hover:text-ink-dim md:flex"
      >
        <FiArrowDown className="h-3 w-3 animate-bounce" />
        scroll
      </a>
    </section>
  );
}
