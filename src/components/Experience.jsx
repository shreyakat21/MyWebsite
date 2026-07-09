import Reveal from "./Reveal";
import Stars from "./Stars";

const STARS = [
  { symbol: "✦", top: "7%", right: "8%", size: 24, duration: 5.2, delay: 0.5, color: "var(--accent-pale)" },
  { symbol: "✧", bottom: "8%", left: "6%", size: 17, duration: 4.6, delay: 1.2, opacity: 0.6 },
];

const GROUPS = [
  {
    title: "Professional Experience",
    accent: "the day to day",
    roles: [
      {
        period: "[ Month Year ] — Present",
        org: "[ Organization ] · [ Type ] · [ Location ]",
        title: "[ Job Title ]",
        description:
          "[ One or two lines on your key responsibilities and what you accomplished in this role. ]",
      },
      {
        period: "[ Month Year ] — [ Month Year ]",
        org: "[ Organization ]",
        title: "[ Job Title ]",
        description:
          "[ One or two lines on your key responsibilities and what you accomplished in this role. ]",
      },
    ],
  },
  {
    title: "Leadership & Involvement",
    accent: "outside the job description",
    roles: [
      {
        period: "[ Month Year ] — [ Month Year ]",
        org: "[ Organization ]",
        title: "[ Leadership Role ]",
        description:
          "[ One or two lines on what you led, organized, or contributed to. ]",
      },
    ],
  },
  {
    title: "Education",
    accent: "the foundation",
    roles: [
      {
        period: "Expected [ Month Year ]",
        org: "[ University Name ]",
        title: "[ Degree & Major ]",
        description: "[ Honors, GPA, or relevant coursework. ]",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <Stars items={STARS} />
      <div className="section-inner section-inner-wide">
        <Reveal from="translateY(26px)">
          <p className="script-eyebrow">the whole journey, in order</p>
          <h2 className="section-title">Experience &amp; growth</h2>
          <p className="section-subtitle">
            [ A sentence introducing your experience — the mix of roles,
            projects, and leadership that shaped you. ]
          </p>
        </Reveal>

        {GROUPS.map((group) => (
          <div className="exp-group" key={group.title}>
            <Reveal className="exp-group-header" from="translateY(22px)">
              <h3>{group.title}</h3>
              <span className="script-accent">{group.accent}</span>
            </Reveal>
            <Reveal
              className="exp-group-line"
              from="scaleX(0.4)"
              to="scaleX(1)"
            />
            {group.roles.map((role, i) => (
              <Reveal
                as="div"
                className="exp-row"
                from="translateX(-16px)"
                duration={700}
                key={i}
              >
                <div className="exp-row-meta">
                  <p className="script-accent">{role.period}</p>
                  <p className="exp-org">{role.org}</p>
                </div>
                <div className="exp-row-body">
                  <h4>{role.title}</h4>
                  <p>{role.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
