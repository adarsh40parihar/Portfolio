import { FiExternalLink } from "react-icons/fi";
import Section from "./Section";
import { arena } from "../data/profile";

/** Position of the current rating inside its rank band, as a percentage. */
const bandProgress = ({ rating, band }) =>
  Math.min(100, Math.max(0, ((rating - band[0]) / (band[1] - band[0])) * 100));

export default function Arena() {
  return (
    <Section
      id="arena"
      index="05"
      label="Arena"
      title="Competitive Programming"
      meta={`${arena.totalSolved} solved`}
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {arena.platforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-lg border border-line bg-surface-2/40 p-5 transition-colors duration-300 hover:border-line-bright"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[15px] font-medium">{p.name}</h3>
                <p className="mt-0.5 font-mono text-2xs text-ink-faint">
                  @{p.handle}
                </p>
              </div>
              <FiExternalLink className="h-3.5 w-3.5 text-ink-faint transition-colors group-hover:text-ink" />
            </div>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-[34px] font-medium leading-none tracking-tight tabular-nums">
                {p.rating}
              </span>
              <span className="font-mono text-2xs uppercase tracking-label text-ink-mute">
                {p.title}
              </span>
            </div>

            {/* Progress through the current rank band */}
            <div className="mt-5">
              <div className="h-1 overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-ink transition-all duration-700"
                  style={{ width: `${bandProgress(p)}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between font-mono text-2xs text-ink-faint">
                <span>{p.band[0]}</span>
                <span className="text-ink-mute">{p.next}</span>
                <span>{p.band[1]}</span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-line pt-4 font-mono text-2xs">
              <span className="text-ink-faint">Solved</span>
              <span className="text-ink-dim">{p.solved}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Aggregate counters */}
      <div className="mt-5 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {arena.others.map((o) => (
          <div key={o.label} className="bg-surface px-5 py-5">
            <div className="text-2xl font-medium tracking-tight tabular-nums">
              {o.value}
            </div>
            <div className="mt-1 font-mono text-2xs uppercase tracking-label text-ink-faint">
              {o.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
