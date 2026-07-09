import Reveal from "./Reveal";
import Stars from "./Stars";

const STARS = [
  { symbol: "✦", top: "9%", left: "10%", size: 24, duration: 4.8, delay: 0.4, color: "var(--accent-pale)" },
  { symbol: "✧", bottom: "9%", right: "9%", size: 18, duration: 5.1, delay: 1, opacity: 0.6 },
];

const FEATURED = {
  title: "My Learning Coach (MLC)",
  tag: "Capstone · Python · FastAPI · React · Next.js · PostgreSQL · GPT-4o",
  description:
    "An AI-powered RAG chatbot SaaS copilot built for UC Irvine's Donald Bren School of ICS senior capstone with Prenostik — delivering real-time, personalized academic guidance from survey and LMS data across 90+ UCI courses, with an NL-to-SQL agent and student-distress detection. Presented at UCI's ICS Expo and the 2026 ISLS Annual Meeting.",
  image: "/capstone-poster.jpg",
  link: "/capstone-poster.jpg",
  linkLabel: "View the expo poster →",
};

const PROJECTS = [
  {
    title: "RunwayIQ",
    tag: "Kotlin · Compose Desktop · Claude API",
    description:
      "AI-powered startup CFO dashboard that computes burn rate and runway live, with a chat panel powered by Claude for querying your numbers in plain English.",
    link: "https://github.com/shreyakat21/RunwayIQ",
    linkLabel: "View on GitHub →",
  },
  {
    title: "FeedbackLLM",
    tag: "Flask · FastAPI · OpenAI API",
    description:
      "AI-powered grading system using LLMs to automate homework and lab report evaluation, improving efficiency by 62%.",
    link: "https://github.com/shreyakat21/FeedbackLLM",
    linkLabel: "View on GitHub →",
  },
  {
    title: "Real Class",
    tag: "OpenCV · Python · Machine Learning",
    description:
      "AI-powered learning platform using computer vision to analyze facial expressions, behavior, and eye movement, achieving 90%+ accuracy.",
    link: "https://github.com/shreyakat21/Real-Class",
    linkLabel: "View on GitHub →",
  },
  {
    title: "Pages",
    tag: "Next.js · React · Supabase",
    description:
      "A cozy book-tracking web app to search, shelve, and track your reading, with Supabase auth and a per-user database.",
    link: "https://github.com/shreyakat21/Pages",
    linkLabel: "View on GitHub →",
  },
  {
    title: "NurtureSync",
    tag: "Android Studio · Java · Kotlin",
    description:
      "Android app supporting postpartum women by tracking recovery progress after childbirth. Led a team of 4 to build it.",
    link: "https://github.com/shreyakat21/NurtureSync",
    linkLabel: "View on GitHub →",
  },
  {
    title: "UI/UX Design Portfolio",
    tag: "Design Case Studies",
    description:
      "Healthcare provider dashboards, patient intake and timeline interfaces, and a redesigned Canvas student dashboard.",
    link: "/designs",
    linkLabel: "View designs →",
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

        <Reveal
          as="a"
          className="work-featured"
          from="translateY(28px)"
          href={FEATURED.link}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="work-featured-thumb"
            src={FEATURED.image}
            alt={FEATURED.title}
            loading="lazy"
          />
          <div className="work-featured-body">
            <p className="work-tag">{FEATURED.tag}</p>
            <h3>{FEATURED.title}</h3>
            <p className="work-desc">{FEATURED.description}</p>
            <span className="work-link">{FEATURED.linkLabel}</span>
          </div>
        </Reveal>

        <div className="work-list">
          {PROJECTS.map((project, i) => (
            <Reveal
              as="a"
              className="work-card"
              from="translateY(24px)"
              delay={(i % 3) * 100}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <p className="work-tag">{project.tag}</p>
              <h3>{project.title}</h3>
              <p className="work-desc">{project.description}</p>
              <span className="work-link">{project.linkLabel}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="work-more" from="translateY(20px)">
          <p>Want to see even more of my work?</p>
          <a
            className="btn btn-outline"
            href="https://github.com/shreyakat21"
            target="_blank"
            rel="noreferrer"
          >
            Visit my GitHub →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
