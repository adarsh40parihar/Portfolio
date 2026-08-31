import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* macOS traffic-light glyphs — revealed on hover of the cluster */
const CloseGlyph = () => (
  <svg viewBox="0 0 7 7" fill="none" aria-hidden="true">
    <path
      d="M1.3 1.3 5.7 5.7M5.7 1.3 1.3 5.7"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const MinimizeGlyph = () => (
  <svg viewBox="0 0 7 7" fill="none" aria-hidden="true">
    <path
      d="M1.1 3.5H5.9"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const ZoomGlyph = () => (
  <svg viewBox="0 0 7 7" fill="currentColor" aria-hidden="true">
    <path d="M1.2 5.8V2.6l3.2 3.2z" />
    <path d="M5.8 1.2v3.2L2.6 1.2z" />
  </svg>
);

/**
 * A macOS window frame with working controls.
 *   yellow — minimise: collapses the body to the title bar
 *   red    — close: same collapse, flagged as closed so the strip invites a reopen
 *   green  — zoom: widens the window past the page container
 * Every state is reversible by clicking the title bar, so nothing is ever lost.
 */
export default function MacWindow({
  title,
  meta,
  children,
  className = "",
  maxWidth = "max-w-6xl",
  zoomWidth = "max-w-[1560px]",
  bare = false,
}) {
  const [collapsed, setCollapsed] = useState(null); // null | "min" | "closed"
  const [zoomed, setZoomed] = useState(false);

  const isCollapsed = collapsed !== null;
  const restore = () => setCollapsed(null);

  const lights = [
    {
      key: "close",
      cls: "tl-red",
      label: isCollapsed ? "Reopen window" : "Close window",
      Glyph: CloseGlyph,
      onClick: () => setCollapsed(isCollapsed ? null : "closed"),
    },
    {
      key: "minimize",
      cls: "tl-yellow",
      label: isCollapsed ? "Restore window" : "Minimise window",
      Glyph: MinimizeGlyph,
      onClick: () => setCollapsed(isCollapsed ? null : "min"),
    },
    {
      key: "zoom",
      cls: "tl-green",
      label: zoomed ? "Exit full width" : "Zoom to full width",
      Glyph: ZoomGlyph,
      onClick: () => {
        setCollapsed(null);
        setZoomed((z) => !z);
      },
    },
  ];

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 260, damping: 32 }}
      className={`win mx-auto w-full ${zoomed ? zoomWidth : maxWidth} ${className}`}
    >
      {/* Title bar */}
      <div
        className={`win-bar ${isCollapsed ? "cursor-pointer" : ""}`}
        onClick={isCollapsed ? restore : undefined}
        title={isCollapsed ? "Click to reopen" : undefined}
      >
        <div className="tl-group">
          {lights.map(({ key, cls, label, Glyph, onClick }) => (
            <button
              key={key}
              type="button"
              aria-label={label}
              title={label}
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className={`tl-btn ${cls}`}
            >
              <Glyph />
            </button>
          ))}
        </div>

        <div className="ml-1 flex min-w-0 flex-1 items-center gap-2">
          <span className="win-title truncate">{title}</span>
          {meta && (
            <span className="hidden truncate font-mono text-2xs text-ink-faint sm:inline">
              {meta}
            </span>
          )}
        </div>

        {isCollapsed && (
          <span className="shrink-0 font-mono text-2xs text-ink-faint">
            {collapsed === "closed" ? "closed — click to reopen" : "minimised"}
          </span>
        )}
      </div>

      {/* Body */}
      <AnimatePresence initial={false}>
        {!isCollapsed && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className={bare ? "" : "p-5 sm:p-7 lg:p-9"}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
