import Section from "./Section";
import { skills } from "../data/profile";

/**
 * Reads like a system report: grouped rows of monospace capability chips,
 * no coloured logo soup.
 */
export default function Skills() {
  const total = skills.reduce((n, g) => n + g.items.length, 0);

  return (
    <Section
      id="skills"
      index="04"
      label="Skills"
      title="Technical Skills"
      meta={`${total} entries`}
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.group} className="bg-surface p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="label">{group.group}</span>
              <span className="h-px flex-1 bg-line" />
              <span className="font-mono text-2xs text-ink-faint">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
