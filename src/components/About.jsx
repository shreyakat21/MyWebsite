import Reveal from "./Reveal";
import Stars from "./Stars";

const STARS = [
  { symbol: "✦", top: "11%", right: "10%", size: 26, duration: 5, delay: 0.3, color: "var(--accent-pale)" },
  { symbol: "✧", bottom: "12%", left: "7%", size: 18, duration: 4.8, delay: 1.1, color: "var(--accent-light)" },
];

const FACTS = [
  { label: "Location", value: "Irvine, CA (open to relocation)" },
  { label: "Education", value: "UC Irvine" },
  { label: "Focus", value: "Computer Science + Informatics" },
  { label: "Minor", value: "Innovation & Entrepreneurship" },
  { label: "Status", value: "New Grad" },
  { label: "Honors", value: "President's Volunteer Service Award (Gold)" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <Stars items={STARS} />
      <div className="section-inner">
        <div className="about-top">
          <div className="about-text">
            <Reveal as="p" className="script-eyebrow" from="translateY(30px)">
              a little about me —
            </Reveal>

            <Reveal as="h2" className="about-headline" delay={100} from="translateY(34px)">
              building meaningful, data-driven experiences that blend creativity
              with logic.
            </Reveal>

            <Reveal as="p" className="about-bio" delay={200} from="translateY(28px)">
              I'm a{" "}
              <span className="highlight">Computer Science + Informatics</span>{" "}
              graduate of the University of California, Irvine, with a minor in
              Innovation & Entrepreneurship and hands-on experience across
              AI/ML, full-stack development, and data analytics. I've built{" "}
              <span className="highlight">LLM-powered apps with RAG pipelines</span>
              , developed NLP-based market intelligence tools, and shipped
              responsive web apps with React, Python, and SQL — and I love
              nothing more than{" "}
              <span className="highlight">solving a good problem</span>.
            </Reveal>
          </div>

          <Reveal
            className="about-photo-wrap"
            from="translateY(24px) rotate(6deg)"
            to="rotate(-3deg)"
            duration={800}
          >
            <img
              className="about-photo"
              src="/profile.png"
              alt="Shreya Katiyar"
            />
            <span className="about-photo-badge">✦</span>
          </Reveal>
        </div>

        <div className="about-cards">
          <Reveal className="card card-facts" from="translateY(30px)">
            <p className="script-label">quick facts —</p>
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
            <p className="script-label script-label-dark">what I'm looking for —</p>
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
