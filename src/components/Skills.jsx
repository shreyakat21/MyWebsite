import Reveal from "./Reveal";
import Stars from "./Stars";
import useReveal from "../hooks/useReveal";

const STARS = [
  { symbol: "✦", top: "10%", left: "9%", size: 24, duration: 4.9, delay: 0.3, color: "var(--accent-pale)" },
  { symbol: "✧", bottom: "10%", right: "8%", size: 18, duration: 5.3, delay: 1, opacity: 0.6 },
];

const CATEGORIES = [
  { title: "Languages", items: ["Python", "Java", "Kotlin", "TypeScript", "SQL"] },
  { title: "AI/ML & Data", items: ["LLMs", "RAG Pipelines", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "NLP", "Pandas", "NumPy", "NLTK"] },
  { title: "Web & Mobile", items: ["React", "Next.js", "React Native", "Flask", "FastAPI", "Firebase", "Supabase"] },
  { title: "Tools & Cloud", items: ["AWS", "Google Cloud", "Vercel", "Git", "Android Studio", "Shopify"] },
  { title: "Design", items: ["Figma", "UI/UX Design", "Visual Storytelling", "Prototyping"] },
  { title: "Certifications", items: ["AWS Cloud Practitioner", "Salesforce Certified AI Associate", "Databricks Data Engineering", "Generative AI Fundamentals", "Claude Code 101"] },
  { title: "Languages Spoken", items: ["English", "Hindi — Native", "French — Limited Working"] },
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
              transform: visible ? undefined : "translateY(10px) scale(0.92)",
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
