import Divider from "./Divider";

const ROLES = [
  {
    period: "[ Month Year ] — Present",
    title: "[ Job Title ]",
    org: "[ Organization ]",
    description:
      "[ One or two lines on your key responsibilities and what you accomplished in this role. ]",
  },
  {
    period: "[ Month Year ] — [ Month Year ]",
    title: "[ Job Title ]",
    org: "[ Organization ]",
    description:
      "[ One or two lines on your key responsibilities and what you accomplished in this role. ]",
  },
  {
    period: "[ Month Year ] — [ Month Year ]",
    title: "[ Job Title / Leadership Position ]",
    org: "[ Organization ]",
    description:
      "[ One or two lines on your key responsibilities and what you accomplished in this role. ]",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Divider symbol="✶" />
      <h2 className="section-title">Experience</h2>
      <ol className="timeline">
        {ROLES.map((role, i) => (
          <li className="timeline-item" key={i}>
            <p className="timeline-period">{role.period}</p>
            <div className="timeline-body">
              <h3>{role.title}</h3>
              <p className="timeline-org">{role.org}</p>
              <p className="timeline-desc">{role.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
