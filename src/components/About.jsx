import Divider from "./Divider";

const FACTS = [
  { label: "Location", value: "[ City, Country ]" },
  { label: "Currently", value: "[ Your school / role ]" },
  { label: "Focus", value: "[ Your area of focus ]" },
  { label: "Status", value: "Seeking [ roles / internships ] in [ field ]" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <Divider symbol="✦" />
      <h2 className="section-title">About</h2>
      <p className="about-bio">
        [ Write two or three sentences about who you are, what you're
        curious about, and what draws you to your field. Keep it
        conversational — this is the reader's first real introduction to
        you. ]
      </p>
      <dl className="facts-grid">
        {FACTS.map((fact) => (
          <div className="fact" key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
