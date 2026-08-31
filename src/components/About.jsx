import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import Section from "./Section";
import { profile, education } from "../data/profile";

/** Spec rows, laid out the way macOS's "About This Mac" panel does. */
const specs = [
  { k: "Institute", v: education.school },
  { k: "Programme", v: education.degree },
  { k: "CGPA", v: education.cgpa },
  { k: "Graduating", v: education.graduation },
  { k: "Based in", v: profile.location },
  { k: "Focus", v: "Agentic AI · Backend · Cloud infrastructure" },
];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <Section
      id="about"
      index="01"
      label="About"
      title="About This Developer"
      meta="~/about"
    >
      <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-12">
        {/* Portrait */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-[168px] w-[168px] overflow-hidden rounded-2xl border border-line-strong bg-surface-2">
            {!imgError ? (
              <img
                src="/profile.jpg"
                alt={profile.name}
                loading="lazy"
                onError={() => setImgError(true)}
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            ) : (
              <div className="grid h-full w-full place-items-center font-mono text-4xl text-ink-faint">
                ASP
              </div>
            )}
          </div>
          <div className="text-center">
            <p className="text-sm font-medium">{profile.name}</p>
            <p className="mt-0.5 font-mono text-2xs text-ink-faint">
              {profile.role}
            </p>
          </div>
        </div>

        {/* Prose + spec sheet */}
        <div>
          <div className="space-y-4 leading-relaxed text-ink-dim">
            <p>
              I&apos;m a final-year B.Tech student at{" "}
              <span className="text-ink">IIT (ISM) Dhanbad</span> who ended up
              writing far more software than mechanics. Most of my work sits
              where <span className="text-ink">LLM agents</span> meet real
              backend systems — orchestration graphs, event pipelines, and the
              unglamorous plumbing that makes them reproducible.
            </p>
            <p>
              At <span className="text-ink">Goldman Sachs</span> I built a
              multi-agent platform that replaced hours of daily manual work; at{" "}
              <span className="text-ink">GetSpike AI</span> I&apos;m automating
              content generation end to end on AWS. Outside work I compete —{" "}
              <span className="text-ink">1300+ problems</span> solved — and help
              run <span className="text-ink">PearlCTF</span>, a CTF with a few
              thousand global players.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-line">
            {specs.map((s, idx) => (
              <div
                key={s.k}
                className={`grid grid-cols-[110px_1fr] gap-4 px-4 py-2.5 text-[13px] sm:grid-cols-[128px_1fr] ${
                  idx % 2 ? "bg-surface-2/60" : ""
                }`}
              >
                <span className="font-mono text-2xs uppercase tracking-label text-ink-faint">
                  {s.k}
                </span>
                <span className="text-ink-dim">{s.v}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/resume" className="btn-ghost h-9 text-[13px]">
              More info…
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost h-9 text-[13px]"
            >
              GitHub
              <FiExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
