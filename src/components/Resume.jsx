import { useEffect } from "react";
import { FiArrowLeft, FiDownload, FiExternalLink } from "react-icons/fi";
import { profile } from "../data/profile";

const PREVIEW_URL = `https://drive.google.com/file/d/${profile.resumeDriveId}/preview`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${profile.resumeDriveId}`;

/** The résumé route, framed as a macOS Preview window. */
export default function Resume() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[300] flex flex-col bg-canvas p-0 sm:p-6">
      <div className="win flex min-h-0 flex-1 flex-col">
        <div className="win-bar shrink-0">
          <div className="tl-group">
            <a
              href="/"
              aria-label="Back to portfolio"
              title="Back to portfolio"
              className="tl-btn tl-red"
            >
              <svg viewBox="0 0 7 7" fill="none">
                <path
                  d="M1.3 1.3 5.7 5.7M5.7 1.3 1.3 5.7"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <span className="tl-btn" style={{ background: "#3a3a3a" }} />
            <span className="tl-btn" style={{ background: "#3a3a3a" }} />
          </div>

          <span className="win-title mx-auto -translate-x-6 truncate font-mono text-[11.5px]">
            Adarsh_Singh_Parihar_Resume.pdf
          </span>
        </div>

        {/* Toolbar */}
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-line bg-surface-2 px-4 py-2.5">
          <a
            href="/"
            className="flex items-center gap-2 text-[13px] text-ink-dim transition-colors hover:text-ink"
          >
            <FiArrowLeft className="h-3.5 w-3.5" />
            Back to portfolio
          </a>

          <div className="flex items-center gap-2">
            <a
              href={PREVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost h-8 px-3 text-[12.5px]"
            >
              <FiExternalLink className="h-3.5 w-3.5" />
              Open in Drive
            </a>
            <a href={DOWNLOAD_URL} className="btn-primary h-8 px-3 text-[12.5px]">
              <FiDownload className="h-3.5 w-3.5" />
              Download
            </a>
          </div>
        </div>

        <iframe
          src={PREVIEW_URL}
          title="Résumé — Adarsh Singh Parihar"
          allow="autoplay"
          className="min-h-0 w-full flex-1 border-0 bg-[#060606]"
        />
      </div>
    </div>
  );
}
