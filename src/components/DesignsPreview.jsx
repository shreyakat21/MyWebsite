import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Stars from "./Stars";
import Clipart from "./Clipart";
import { withBase } from "../lib/asset";

const STARS = [
  { symbol: "✦", top: "12%", right: "9%", size: 22, duration: 4.9, delay: 0.3, color: "var(--accent-pale)" },
  { symbol: "✧", bottom: "14%", left: "7%", size: 16, duration: 5.1, delay: 1, opacity: 0.6 },
];

const CLIPART = [
  { icon: "sparkle", top: "8%", left: "6%", size: 24, speed: 0.08, duration: 4.6, color: "var(--accent-light)" },
];

const PREVIEW_IMAGES = [
  "/designs/design1.webp",
  "/designs/design7.webp",
  "/designs/design2.webp",
];

export default function DesignsPreview() {
  return (
    <section id="designs-preview" className="section designs-preview">
      <Stars items={STARS} />
      <Clipart items={CLIPART} />
      <div className="section-inner">
        <Reveal as="div" from="translateY(28px)">
          <Link to="/designs" className="designs-preview-card">
            <div className="designs-preview-stack">
              {PREVIEW_IMAGES.map((src, i) => (
                <img
                  key={src}
                  src={withBase(src)}
                  alt=""
                  aria-hidden="true"
                  className={`designs-preview-thumb designs-preview-thumb-${i}`}
                  loading="lazy"
                />
              ))}
            </div>
            <div className="designs-preview-body">
              <p className="script-eyebrow">a peek at more —</p>
              <h2 className="section-title">Also, I design things.</h2>
              <p className="section-subtitle">
                Healthcare dashboards, patient intake flows, and a redesigned Canvas
                experience — a handful of UI/UX case studies, sketches included.
              </p>
              <span className="work-link designs-preview-cta">View all case studies →</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
