import MacWindow from "./MacWindow";

/**
 * Standard page section: a monospace index rule, then a mac window.
 * The <section> owns the anchor id so menu-bar navigation lands correctly.
 */
export default function Section({
  id,
  index,
  label,
  title,
  meta,
  children,
  bare = false,
  maxWidth,
}) {
  return (
    <section id={id} className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto mb-5 flex w-full max-w-6xl items-center gap-4">
        <span className="label shrink-0">
          {index} <span className="text-ink-faint/60">/</span> {label}
        </span>
        <div className="rule flex-1" />
      </div>
      <MacWindow title={title} meta={meta} bare={bare} maxWidth={maxWidth}>
        {children}
      </MacWindow>
    </section>
  );
}
