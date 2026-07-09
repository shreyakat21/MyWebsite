import Reveal from "./Reveal";
import Stars from "./Stars";
import useReveal from "../hooks/useReveal";

const STARS = [
  { symbol: "✦", top: "10%", left: "9%", size: 24, duration: 4.9, delay: 0.3, color: "var(--accent-pale)" },
  { symbol: "✧", bottom: "10%", right: "8%", size: 18, duration: 5.3, delay: 1, opacity: 0.6 },
];

const CATEGORIES = [
  { title: "[ Category One ]", items: ["[ Skill ]", "[ Skill ]", "[ Skill ]", "[ Skill ]"] },
  { title: "[ Category Two ]", items: ["[ Skill ]", "[ Skill ]", "[ Skill ]"] },
  { title: "Tools", items: ["[ Tool ]", "[ Tool ]", "[ Tool ]", "[ Tool ]"] },
  { title: "Languages", items: ["[ Language — level ]", "[ Language — level ]"] },
];

function SkillGroup({ category, groupIndex }) {
  const [ref, visible] = useReveal();
  return (
    <div className="skill-card" ref={ref}>
      <h3>{category.title}</h3>
      <ul className="skill-pills">
        {category.items.map((item, i) => (
          <li
            key={item + i}
            className="skill-pill"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.92)",
              transitionDelay: `${(groupIndex * category.items.length + i) * 34}ms`,
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <Stars items={STARS} />
      <div className="section-inner">
        <Reveal from="translateY(26px)">
          <p className="script-eyebrow">what I bring to the table</p>
          <h2 className="section-title">Skills &amp; toolkit</h2>
        </Reveal>
        <div className="skills-grid">
          {CATEGORIES.map((cat, i) => (
            <SkillGroup category={cat} groupIndex={i} key={cat.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
