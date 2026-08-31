import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { profile, sections } from "../data/profile";

/** Live clock in the macOS menu-bar format: "Wed 26 Aug  14:32". */
function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 20_000);
    return () => clearInterval(t);
  }, []);
  const day = now.toLocaleDateString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const time = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${day}  ${time}`;
}

/** Tracks which section is currently under the menu bar. */
function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 140) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
}

export default function MenuBar({ onOpenSpotlight }) {
  const clock = useClock();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[var(--menubar-h)] border-b border-line/90 bg-black/65 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-full max-w-[1560px] items-center gap-1 px-3 sm:px-4">
          {/* Identity — stands in for the Apple menu */}
          <a
            href="#home"
            className="flex shrink-0 items-center gap-2 rounded px-2 py-1 transition-colors hover:bg-white/[0.06]"
          >
            <span className="grid h-[15px] w-[15px] place-items-center rounded-[4px] bg-ink font-mono text-[10px] font-bold leading-none text-black">
              A
            </span>
            <span className="text-[13px] font-semibold tracking-tight">
              {profile.name}
            </span>
          </a>

          {/* Menu items */}
          <nav className="ml-1 hidden items-center md:flex">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`rounded px-2.5 py-1 text-[13px] transition-colors hover:bg-white/[0.07] ${
                  active === s.id ? "text-ink" : "text-ink-mute"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex-1" />

          {/* Status items — the right side of a mac menu bar */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <span className="hidden items-center gap-1.5 lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-tl-green animate-pulse-dot" />
              <span className="font-mono text-[11px] text-ink-mute">
                {profile.status.label}
              </span>
            </span>

            <button
              type="button"
              onClick={onOpenSpotlight}
              aria-label="Open search"
              className="flex items-center gap-1.5 rounded px-2 py-1 text-ink-mute transition-colors hover:bg-white/[0.07] hover:text-ink"
            >
              <svg
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="7" cy="7" r="4.5" />
                <path d="M10.5 10.5 14 14" strokeLinecap="round" />
              </svg>
              <span className="kbd hidden sm:inline-flex">⌘K</span>
            </button>

            <span className="hidden font-mono text-[11.5px] text-ink-dim sm:inline">
              {clock}
            </span>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="rounded p-1 text-ink-dim transition-colors hover:bg-white/[0.07] md:hidden"
            >
              {open ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drop-down, styled like a mac menu */}
      {open && (
        <div className="fixed inset-x-0 top-[var(--menubar-h)] z-40 border-b border-line bg-black/95 px-3 py-2 backdrop-blur-xl md:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className={`block rounded px-3 py-2 text-sm transition-colors hover:bg-white/[0.07] ${
                active === s.id ? "text-ink" : "text-ink-dim"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
