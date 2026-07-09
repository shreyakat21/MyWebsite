import Divider from "./Divider";

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
    <section id="work" className="section">
      <Divider symbol="✦" />
      <h2 className="section-title">Featured Work</h2>
      <div className="work-list">
        {PROJECTS.map((project) => (
          <a className="work-card" href={project.link} key={project.title}>
            <p className="work-tag">{project.tag}</p>
            <h3>{project.title}</h3>
            <p className="work-desc">{project.description}</p>
            <span className="work-link">View case study →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
