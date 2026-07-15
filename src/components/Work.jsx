import Reveal from "./Reveal";
import Stars from "./Stars";
import Clipart from "./Clipart";
import { withBase } from "../lib/asset";

const STARS = [
  { symbol: "✦", top: "9%", left: "10%", size: 24, duration: 4.8, delay: 0.4, color: "var(--accent-pale)" },
  { symbol: "✧", bottom: "9%", right: "9%", size: 18, duration: 5.1, delay: 1, opacity: 0.6 },
];

const CLIPART = [
  { icon: "sparkle", top: "6%", right: "6%", size: 22, speed: 0.08, duration: 4.4, color: "var(--accent-light)" },
  { icon: "rocket", bottom: "6%", left: "6%", size: 30, speed: -0.08, duration: 5.4, delay: 0.5, color: "var(--accent-dark)" },
];

const FEATURED = {
  title: "My Learning Coach (MLC)",
  tag: "Capstone · Python · FastAPI · React · Next.js · PostgreSQL · GPT-4o",
  description:
    "Most higher-ed tools tell students what already happened — MLC tells them what to do next. An AI-powered RAG chatbot SaaS copilot built for UC Irvine's Donald Bren School of ICS senior capstone with Prenostik, turning survey and LMS data from 90+ courses into real-time, personalized academic guidance, with an NL-to-SQL agent and student-distress detection for early intervention. Presented at UCI's ICS Expo and the 2026 ISLS Annual Meeting.",
  image: "/capstone-poster.jpg",
  link: "/capstone-poster.jpg",
  linkLabel: "View the expo poster →",
};

const PROJECTS = [
  {
    title: "RunwayIQ",
    tag: "Kotlin · Compose Desktop · Claude API",
    description:
      "Built for founders who dread spreadsheets — an AI-powered CFO dashboard that turns raw revenue and expenses into live burn rate and runway numbers, with a Claude-powered chat panel so you can just ask your numbers a question instead of hunting through formulas.",
    link: "https://github.com/shreyakat21/RunwayIQ",
    linkLabel: "View on GitHub →",
  },
  {
    title: "FeedbackLLM",
    tag: "Flask · FastAPI · OpenAI API",
    description:
      "Grading was the bottleneck between students turning in work and actually learning from it. Built an LLM-powered platform that closes that gap, automating homework and lab report evaluation and improving grading efficiency by 62%.",
    link: "https://github.com/shreyakat21/FeedbackLLM",
    linkLabel: "View on GitHub →",
  },
  {
    title: "Real Class",
    tag: "OpenCV · Python · Machine Learning",
    description:
      "Instructors can't tell who's actually engaged in a room of 200 students. Real Class reads facial expressions, behavior, and eye movement in real time to flag disengagement with 90%+ accuracy, so instructors can step in while it still matters.",
    link: "https://github.com/shreyakat21/Real-Class",
    linkLabel: "View on GitHub →",
  },
  {
    title: "Pages",
    tag: "Next.js · React · Supabase",
    description:
      "Built for readers who lose track of what they meant to read next — a cozy book-tracking app to search, shelve, and follow your reading, with Supabase auth and a per-user database.",
    link: "https://github.com/shreyakat21/Pages",
    linkLabel: "View on GitHub →",
  },
  {
    title: "NurtureSync",
    tag: "Android Studio · Java · Kotlin",
    description:
      "Postpartum recovery has no clear roadmap for new moms. Led a team of 4 to build an Android app that turns recovery into something trackable, so users always know where they stand after childbirth.",
    link: "https://github.com/shreyakat21/NurtureSync",
    linkLabel: "View on GitHub →",
  },
  {
    title: "UI/UX Design Portfolio",
    tag: "Design Case Studies",
    description:
      "Case studies in turning ambiguous problems into interfaces people can actually use — healthcare provider dashboards, patient intake and timeline tools, and a redesigned Canvas student dashboard.",
    link: "/designs",
    linkLabel: "View designs →",
  },
];

export default function Work() {
  return (
    <section id="work" className="section work">
      <Stars items={STARS} />
      <Clipart items={CLIPART} />
      <div className="section-inner">
        <Reveal from="translateY(26px)">
          <p className="script-eyebrow">things I've shipped</p>
          <h2 className="section-title">Projects I love</h2>
        </Reveal>

        <Reveal
          as="a"
          className="work-featured"
          from="translateY(28px)"
          href={withBase(FEATURED.link)}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="work-featured-thumb"
            src={withBase(FEATURED.image)}
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
              href={project.link.startsWith("/") ? withBase(project.link) : project.link}
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
          <p>there's more where that came from</p>
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
