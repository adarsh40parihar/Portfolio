import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { FiMail, FiFileText, FiArrowUp } from "react-icons/fi";
import { profile } from "../data/profile";

const items = [
  { label: "GitHub", href: profile.links.github, Icon: FaGithub, external: true },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: FaLinkedinIn, external: true },
  { label: "LeetCode", href: profile.links.leetcode, Icon: SiLeetcode, external: true },
  { label: "Codeforces", href: profile.links.codeforces, Icon: SiCodeforces, external: true },
  { label: "CodeChef", href: profile.links.codechef, Icon: SiCodechef, external: true },
  { divider: true },
  { label: "Résumé", href: "/resume", Icon: FiFileText },
  { label: "Email", href: `mailto:${profile.email}`, Icon: FiMail },
  { label: "Top", href: "#home", Icon: FiArrowUp },
];

/**
 * Bottom dock, desktop only. Appears once the hero has scrolled away so it
 * never competes with the opening terminal.
 */
export default function Dock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-5 z-40 hidden justify-center transition-all duration-300 lg:flex ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <nav
        aria-label="Quick links"
        className="pointer-events-auto flex items-end gap-1.5 rounded-2xl border border-white/[0.08] bg-black/70 p-2 shadow-dock backdrop-blur-2xl backdrop-saturate-150"
      >
        {items.map((item, i) =>
          item.divider ? (
            <span key={`d-${i}`} className="mx-1 h-8 w-px self-center bg-line-strong" />
          ) : (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group relative grid h-11 w-11 place-items-center rounded-xl border border-transparent bg-surface-2 text-ink-dim transition-all duration-200 hover:-translate-y-1.5 hover:border-line-strong hover:bg-surface-4 hover:text-ink"
            >
              <item.Icon className="h-[18px] w-[18px]" />
              {/* Dock tooltip */}
              <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md border border-line-strong bg-surface-2 px-2 py-1 font-mono text-2xs text-ink opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
                {item.label}
              </span>
            </a>
          )
        )}
      </nav>
    </div>
  );
}
