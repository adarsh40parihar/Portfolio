import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/profile";

/** A thin status bar to close the desktop metaphor. */
export default function Footer() {
  return (
    <footer className="relative border-t border-line px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-2xs text-ink-faint">
        <span>© {new Date().getFullYear()} {profile.name}</span>

        <span className="hidden items-center gap-2 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-tl-green" />
          React · Vite · Tailwind — deployed on Vercel
        </span>

        <a
          href="#home"
          className="flex items-center gap-1.5 transition-colors hover:text-ink-dim"
        >
          <FiArrowUp className="h-3 w-3" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
