import Reveal from "./Reveal";
import Stars from "./Stars";

const STARS = [
  { symbol: "✦", top: "7%", right: "8%", size: 24, duration: 5.2, delay: 0.5, color: "var(--accent-pale)" },
  { symbol: "✧", bottom: "8%", left: "6%", size: 17, duration: 4.6, delay: 1.2, opacity: 0.6 },
];

const GROUPS = [
  {
    title: "Professional Experience",
    accent: "the 9-to-5 (ish)",
    roles: [
      {
        period: "Jan 2026 — Present",
        org: "Prenostik · Full-time · On-site",
        title: "AI Lead (Senior Capstone)",
        description:
          "Led development of an AI-powered RAG chatbot from the ground up for UC Irvine's Donald Bren School of ICS senior capstone, giving students, faculty, and admins conversational insights from survey and LMS data across 90+ UCI courses. Built an NL-to-SQL agent and student-distress detection for proactive intervention, and led a cross-functional team of 4. Presented at UCI's ICS Expo and the 2026 ISLS Annual Meeting.",
      },
      {
        period: "Dec 2025 — Present",
        org: "Indio Fabrics & Publishing LLC · Part-time · On-site",
        title: "Lead UI/UX Designer",
        description:
          "Leading design and development of a comprehensive e-commerce platform using React, Figma, and Shopify. Built responsive UI components that improved mobile load times by 30% and desktop performance by 25%, and ran user research and A/B testing to optimize checkout flow.",
      },
      {
        period: "Sep 2025 — Present",
        org: "UCI Clean Energy Institute · Part-time · Hybrid",
        title: "Frontend Web Developer",
        description:
          "Developing and maintaining responsive web interfaces for clean energy research platforms with React, JavaScript, HTML, and CSS. Integrated RESTful APIs for real-time dashboards and ensured WCAG 2.1 accessibility compliance for public-facing platforms.",
      },
      {
        period: "Sep 2024 — Mar 2026",
        org: "UC Irvine · Full-time · On-site",
        title: "Undergraduate Student Researcher",
        description:
          "Primary researcher and developer on a collaborative AI education project with faculty at UCI and UCSD, building FeedbackLLM — an LLM-powered platform that automates grading and generates personalized feedback for homework and lab reports, improving grading efficiency by 62%.",
      },
      {
        period: "May 2025 — Nov 2025",
        org: "Beats by Dre · Internship · Remote",
        title: "Data Analytics Extern",
        description:
          "Analyzed 1,000+ product reviews with Python and NLP to benchmark Beats against Sony and Bose, identifying key drivers of positive sentiment and building interactive dashboards to communicate market insights to product teams.",
      },
      {
        period: "Jan 2024 — Mar 2024",
        org: "Google Developer Student Clubs · Winter Project Team",
        title: "Google Developer Club Intern",
        description:
          "Led a team of 4 developers to design and build NurtureSync, an Android app that tracks postpartum recovery and provides personalized support, using Java and Kotlin in Android Studio.",
      },
    ],
  },
  {
    title: "Leadership & Involvement",
    accent: "beyond the job title",
    roles: [
      {
        period: "Jan 2023 — Mar 2024",
        org: "Associated Students of UC Irvine (ASUCI)",
        title: "Student Advocate General Intern",
        description:
          "Worked with the Student Advocate General to oversee conduct and compliance among ASUCI employees and senators, conducting investigations and drafting reports and policy recommendations.",
      },
      {
        period: "Jun 2023 — Dec 2023",
        org: "UC Irvine Athletics",
        title: "Marketing Intern",
        description:
          "Coordinated NCAA game-day promotions and community outreach for UCI Athletics, planning fan engagement and youth group experiences alongside internal teams.",
      },
    ],
  },
  {
    title: "Education",
    accent: "where it started",
    roles: [
      {
        period: "Sep 2022 — Jun 2026",
        org: "University of California, Irvine",
        title: "B.S. Computer Science + Informatics",
        description: "Minor in Innovation & Entrepreneurship.",
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
          <p className="script-eyebrow">how it all adds up</p>
          <h2 className="section-title">My journey so far</h2>
          <p className="section-subtitle">
            A mix of AI/ML engineering, full-stack development, research, and
            leadership roles across UC Irvine and industry.
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
