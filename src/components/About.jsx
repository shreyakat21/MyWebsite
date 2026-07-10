import Reveal from "./Reveal";
import Stars from "./Stars";
import Clipart from "./Clipart";

const STARS = [
  { symbol: "✦", top: "11%", right: "10%", size: 26, duration: 5, delay: 0.3, color: "var(--accent-pale)" },
  { symbol: "✧", bottom: "12%", left: "7%", size: 18, duration: 4.8, delay: 1.1, color: "var(--accent-light)" },
];

const CLIPART = [
  { icon: "cloud", top: "6%", left: "5%", size: 36, speed: 0.07, duration: 6 },
  { icon: "sparkle", bottom: "6%", right: "5%", size: 20, speed: -0.05, duration: 4.2, delay: 0.4, color: "var(--accent-light)" },
];

const FACTS = [
  { label: "Location", value: "Irvine, CA (open to relocation)" },
  { label: "Education", value: "UC Irvine" },
  { label: "Focus", value: "Computer Science + Informatics" },
  { label: "Minor", value: "Innovation & Entrepreneurship" },
  { label: "Status", value: "New Grad" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <Stars items={STARS} />
      <Clipart items={CLIPART} />
      <div className="section-inner">
        <div className="about-top">
          <div className="about-text">
            <Reveal as="p" className="script-eyebrow" from="translateY(30px)">
              the short version —
            </Reveal>

            <Reveal as="h2" className="about-headline" delay={100} from="translateY(34px)">
              turning curiosity into things people can actually use.
            </Reveal>

            <Reveal as="p" className="about-bio" delay={200} from="translateY(28px)">
              I'm a{" "}
              <span className="highlight">Computer Science + Informatics</span>{" "}
              graduate of UC Irvine, with a minor in Innovation &
              Entrepreneurship — I care as much about{" "}
              <span className="highlight">why we're building something</span>{" "}
              as how. I've shipped AI products that turn messy data into
              decisions people actually act on, translated research into
              features that moved real metrics, and built full-stack apps
              end-to-end — from problem framing to production. I love nothing
              more than finding the right problem to solve.
            </Reveal>
          </div>

          <Reveal
            className="about-photo-wrap"
            from="translateY(24px) rotate(6deg)"
            to="rotate(-3deg)"
            duration={800}
          >
            <svg className="about-photo-scribble" viewBox="0 0 240 240" aria-hidden="true">
              <path d="M118 6C170 2 214 40 220 96C226 152 196 208 138 218C80 228 24 196 12 138C0 80 40 26 96 12C104 10 110 8 118 6Z" />
            </svg>
            <img className="about-photo" src="/profile.webp" alt="Shreya Katiyar" />
            <span className="about-photo-badge">✦</span>
            <span className="about-photo-caption">that's me!</span>
          </Reveal>
        </div>

        <div className="about-cards">
          <Reveal className="card card-facts" from="translateY(30px)">
            <p className="script-label">at a glance —</p>
            <dl className="facts-list">
              {FACTS.map((fact) => (
                <div className="fact-row" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="card card-looking" delay={100} from="translateY(30px)">
            <p className="script-label script-label-dark">what I'm after —</p>
            <p className="card-looking-text">
              I'm a new grad looking for a role that combines my business
              mindset with technical skills — think{" "}
              <strong>Product Management or Solutions Engineering</strong>
              . I love solving problems, and I'm open to relocating beyond
              Irvine, CA for the right opportunity.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
