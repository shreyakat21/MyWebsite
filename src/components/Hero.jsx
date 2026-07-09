import Reveal from "./Reveal";
import Stars from "./Stars";

const STARS = [
  { symbol: "✦", top: "17%", left: "13%", size: 40, duration: 4.2, delay: 0 },
  { symbol: "✶", top: "25%", right: "15%", size: 26, duration: 5.1, delay: 0.6, color: "var(--accent-light)" },
  { symbol: "✺", bottom: "23%", left: "18%", size: 30, duration: 4.7, delay: 1.1, color: "var(--accent-pale)" },
  { symbol: "✧", top: "61%", left: "8%", size: 20, duration: 5, delay: 0.4, color: "var(--accent-pale)" },
  { symbol: "✦", bottom: "13%", right: "11%", size: 17, duration: 4.9, delay: 1.3 },
  { symbol: "✶", bottom: "30%", right: "26%", size: 22, duration: 4.4, delay: 0.9, color: "var(--accent-light)" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Stars items={STARS} />

      <div className="hero-inner">
        <Reveal as="p" className="script-eyebrow" from="translateY(30px)">
          hi — let me show you around
        </Reveal>

        <Reveal as="h1" className="hero-name" delay={120} duration={1050} from="translateY(44px)">
          Shreya Katiyar
        </Reveal>

        <Reveal as="p" className="hero-tagline" delay={260} from="translateY(26px)">
          [ Your Field ] · [ Your Focus Area ] · [ Your Interest ]
        </Reveal>

        <Reveal as="p" className="hero-subline" delay={360} from="translateY(22px)">
          [ Interest One ] × [ Interest Two ] × [ Interest Three ]
        </Reveal>

        <Reveal className="hero-actions" delay={460} from="translateY(22px)">
          <a className="btn btn-primary" href="#work">
            View my work
          </a>
          <a className="btn btn-outline" href="/resume.pdf" download>
            Resume
          </a>
          <a className="btn btn-outline" href="#contact">
            Get in touch
          </a>
        </Reveal>

        <Reveal className="hero-meta" delay={560} from="translateY(20px)">
          <span>[ Your School ]</span>
          <span className="hero-meta-dot">✦</span>
          <span>[ Your Achievement ]</span>
          <span className="hero-meta-dot">✦</span>
          <span>[ Expected Date ]</span>
        </Reveal>
      </div>

      <div className="scroll-indicator">
        scroll
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}
