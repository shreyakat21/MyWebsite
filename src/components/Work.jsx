import Reveal from "./Reveal";
import Stars from "./Stars";

const STARS = [
  { symbol: "✦", top: "9%", left: "10%", size: 24, duration: 4.8, delay: 0.4, color: "var(--accent-pale)" },
  { symbol: "✧", bottom: "9%", right: "9%", size: 18, duration: 5.1, delay: 1, opacity: 0.6 },
];

const PROJECTS = [
  {
    title: "[ Project Title ]",
    tag: "[ Project Type — e.g. Research, Case Study, App ]",
    description:
      "[ A short paragraph on what the project was, your role, and the outcome or key takeaway. ]",
    link: "#",
  },
  {
    title: "[ Project Title ]",
    tag: "[ Project Type ]",
    description:
      "[ A short paragraph on what the project was, your role, and the outcome or key takeaway. ]",
    link: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="section work">
      <Stars items={STARS} />
      <div className="section-inner">
        <Reveal from="translateY(26px)">
          <p className="script-eyebrow">a few things I've built</p>
          <h2 className="section-title">Featured work</h2>
        </Reveal>
        <div className="work-list">
          {PROJECTS.map((project, i) => (
            <Reveal
              as="a"
              className="work-card"
              from="translateY(24px)"
              delay={i * 100}
              href={project.link}
              key={project.title + i}
            >
              <p className="work-tag">{project.tag}</p>
              <h3>{project.title}</h3>
              <p className="work-desc">{project.description}</p>
              <span className="work-link">View case study →</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
