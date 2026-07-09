import Reveal from "./Reveal";
import Stars from "./Stars";

const STARS = [
  { symbol: "✦", top: "11%", right: "10%", size: 26, duration: 5, delay: 0.3, color: "var(--accent-pale)" },
  { symbol: "✧", bottom: "12%", left: "7%", size: 18, duration: 4.8, delay: 1.1, color: "var(--accent-light)" },
];

const FACTS = [
  { label: "Location", value: "[ City, Country ]" },
  { label: "Education", value: "[ Your School ]" },
  { label: "Focus", value: "[ Your Area of Focus ]" },
  { label: "Status", value: "[ Your Current Status ]" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <Stars items={STARS} />
      <div className="section-inner">
        <Reveal as="p" className="script-eyebrow" from="translateY(30px)">
          a little about me —
        </Reveal>

        <Reveal as="h2" className="about-headline" delay={100} from="translateY(34px)">
          [ A one-line, italic-headline statement about your curiosity or
          drive. ]
        </Reveal>

        <Reveal as="p" className="about-bio" delay={200} from="translateY(28px)">
          [ Write two or three sentences introducing yourself — who you are,
          what you're studying or working on, and what draws you to your
          field. You can{" "}
          <span className="highlight">highlight a key fact</span> or two,
          like a graduation date or achievement, the way this sentence does. ]
        </Reveal>

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
              [ A sentence about the roles, internships, or opportunities
              you're seeking, and what you hope to bring to them. ]
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
