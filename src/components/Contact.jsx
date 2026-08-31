import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { FiSend, FiCopy, FiCheck } from "react-icons/fi";
import Section from "./Section";
import { profile } from "../data/profile";

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: FaGithub },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: FaLinkedinIn },
  { label: "LeetCode", href: profile.links.leetcode, Icon: SiLeetcode },
  { label: "Codeforces", href: profile.links.codeforces, Icon: SiCodeforces },
  { label: "CodeChef", href: profile.links.codechef, Icon: SiCodechef },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [copied, setCopied] = useState(false);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status.state === "error") setStatus({ state: "idle", message: "" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — the mailto link below still works */
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateId = import.meta.env
      .VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS is not configured");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.email,
        },
        publicKey
      );

      // Courtesy auto-reply — never let its failure fail the whole submit
      if (autoReplyTemplateId) {
        try {
          await emailjs.send(
            serviceId,
            autoReplyTemplateId,
            {
              from_name: form.name,
              from_email: form.email,
              to_email: form.email,
            },
            publicKey
          );
        } catch (autoReplyError) {
          console.warn("Auto-reply failed:", autoReplyError);
        }
      }

      setStatus({ state: "sent", message: "Message sent — I'll reply soon." });
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus({ state: "idle", message: "" }), 6000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus({
        state: "error",
        message: `Couldn't send that. Email me directly at ${profile.email}.`,
      });
    }
  };

  const sending = status.state === "sending";

  return (
    <Section
      id="contact"
      index="07"
      label="Contact"
      title="New Message"
      meta="Mail"
      bare
    >
      <div className="grid lg:grid-cols-[300px_1fr]">
        {/* Sidebar — direct details */}
        <aside className="border-b border-line bg-surface-2/40 p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <p className="label">Direct</p>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="min-w-0 truncate font-mono text-[12.5px] text-ink-dim transition-colors hover:text-ink"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line text-ink-faint transition-colors hover:border-line-strong hover:text-ink"
              >
                {copied ? (
                  <FiCheck className="h-3.5 w-3.5 text-tl-green" />
                ) : (
                  <FiCopy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="block font-mono text-[12.5px] text-ink-dim transition-colors hover:text-ink"
            >
              {profile.phone}
            </a>

            <p className="font-mono text-[12.5px] text-ink-faint">
              {profile.location}
            </p>
          </div>

          <p className="label mt-8">Elsewhere</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-ink-mute transition-all duration-200 hover:-translate-y-0.5 hover:border-line-bright hover:text-ink"
              >
                <s.Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-tl-green animate-pulse-dot" />
            <span className="font-mono text-2xs text-ink-mute">
              {profile.status.label}
            </span>
          </div>
        </aside>

        {/* Compose — laid out like Mail.app's header fields */}
        <form onSubmit={submit} className="flex flex-col">
          <div className="grid grid-cols-[68px_1fr] items-center gap-3 border-b border-line px-5 py-3 sm:px-7">
            <span className="font-mono text-2xs uppercase tracking-label text-ink-faint">
              To
            </span>
            <span className="truncate font-mono text-[13px] text-ink-dim">
              {profile.email}
            </span>
          </div>

          <div className="grid grid-cols-[68px_1fr] items-center gap-3 border-b border-line px-5 py-2 sm:px-7">
            <label
              htmlFor="name"
              className="font-mono text-2xs uppercase tracking-label text-ink-faint"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={change}
              required
              autoComplete="name"
              placeholder="Your name"
              className="w-full bg-transparent py-1.5 text-[14px] outline-none placeholder:text-ink-faint"
            />
          </div>

          <div className="grid grid-cols-[68px_1fr] items-center gap-3 border-b border-line px-5 py-2 sm:px-7">
            <label
              htmlFor="email"
              className="font-mono text-2xs uppercase tracking-label text-ink-faint"
            >
              From
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={change}
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="w-full bg-transparent py-1.5 text-[14px] outline-none placeholder:text-ink-faint"
            />
          </div>

          <div className="flex-1 px-5 py-4 sm:px-7">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={change}
              required
              rows={8}
              placeholder="What are you building?"
              className="w-full resize-none bg-transparent text-[14px] leading-relaxed outline-none placeholder:text-ink-faint"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-surface-2/60 px-5 py-3 sm:px-7">
            <p
              className={`font-mono text-2xs ${
                status.state === "error"
                  ? "text-tl-red"
                  : status.state === "sent"
                  ? "text-tl-green"
                  : "text-ink-faint"
              }`}
              role="status"
            >
              {status.message ||
                (sending ? "Sending…" : "Replies usually within a day")}
            </p>

            <button type="submit" disabled={sending} className="btn-primary">
              <FiSend className="h-3.5 w-3.5" />
              {sending ? "Sending…" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
