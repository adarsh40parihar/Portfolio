import Section from "./Section";
import { achievements, positions } from "../data/profile";

/* The only colour in the section, borrowed from the window controls. */
const toneDot = {
  red: "bg-tl-red",
  yellow: "bg-tl-yellow",
  green: "bg-tl-green",
};

export default function Achievements() {
  return (
    <Section
      id="achievements"
      index="06"
      label="Achievements"
      title="Notification Centre"
      meta={`${achievements.length} highlights`}
    >
      {/* Stacked like macOS notifications */}
      <div className="grid gap-3 lg:grid-cols-2">
        {achievements.map((a) => (
          <article
            key={a.title}
            className="group flex gap-3.5 rounded-xl border border-line bg-surface-2/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-bright hover:bg-surface-3/60"
          >
            <span
              aria-hidden="true"
              className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                toneDot[a.tone] ?? "bg-ink-faint"
              }`}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[14px] font-medium leading-snug">
                  {a.title}
                </h3>
                <span className="shrink-0 font-mono text-2xs text-ink-faint">
                  {a.year}
                </span>
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-mute">
                {a.detail}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Positions of responsibility */}
      <div className="mt-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="label">Positions of Responsibility</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="overflow-hidden rounded-lg border border-line">
          {positions.map((p, idx) => (
            <div
              key={p.role}
              className={`px-5 py-4 ${idx ? "border-t border-line" : ""}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="text-[14px] font-medium">{p.role}</h4>
                <span className="font-mono text-2xs text-ink-faint">
                  {p.org}
                </span>
              </div>
              <p className="mt-1.5 max-w-3xl text-[13px] leading-relaxed text-ink-mute">
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
