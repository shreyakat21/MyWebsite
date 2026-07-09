import Divider from "./Divider";

const CATEGORIES = [
  {
    title: "[ Category One ]",
    items: ["[ Skill ]", "[ Skill ]", "[ Skill ]", "[ Skill ]"],
  },
  {
    title: "[ Category Two ]",
    items: ["[ Skill ]", "[ Skill ]", "[ Skill ]"],
  },
  {
    title: "Tools",
    items: ["[ Tool ]", "[ Tool ]", "[ Tool ]", "[ Tool ]"],
  },
  {
    title: "Languages",
    items: ["[ Language — level ]", "[ Language — level ]"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Divider symbol="✺" />
      <h2 className="section-title">Skills & Toolkit</h2>
      <div className="skills-grid">
        {CATEGORIES.map((cat) => (
          <div className="skill-card" key={cat.title}>
            <h3>{cat.title}</h3>
            <ul>
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
