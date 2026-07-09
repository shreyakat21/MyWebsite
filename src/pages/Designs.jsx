import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Stars from "../components/Stars";
import ThemeToggle from "../components/ThemeToggle";
import "./Designs.css";

const STARS = [
  { symbol: "✦", top: "10%", left: "8%", size: 26, duration: 4.8, delay: 0.2, color: "var(--accent-pale)" },
  { symbol: "✧", top: "16%", right: "10%", size: 18, duration: 5.2, delay: 1, opacity: 0.6 },
];

const DESIGNS = [
  {
    title: "Patient's Timeline",
    image: "/designs/design1.png",
    description:
      "This design is a user interface for a patient progress timeline, intended for healthcare professionals to track and manage patient care over time. It features a clean, organized layout with interactive filters, detailed session logs, clinician information, and progress indicators, providing a comprehensive view of assessments, therapy sessions, and team meetings to enhance interdisciplinary coordination and patient management.",
  },
  {
    title: "Patient Management Dashboard UI",
    image: "/designs/design2.png",
    description:
      "This design is a patient management dashboard UI for healthcare providers, allowing clinicians to quickly view, filter, and manage a list of patients. It features a structured table with patient details, treatment statuses, and physician history, along with filtering options and clear action buttons for streamlined clinical workflow and decision-making.",
  },
  {
    title: "Patient Intake Form UI",
    image: "/designs/design3.png",
    description:
      "This design is a patient intake form UI for creating a new patient profile within a healthcare platform. It follows a clean, step-based layout and captures essential data — such as personal details, contact info, medical history, medications, and emergency contacts — while emphasizing HIPAA compliance and user-friendly input fields to streamline onboarding in clinical settings.",
  },
  {
    title: "Healthcare Professional Dashboard",
    image: "/designs/design4.png",
    description:
      "This design is a healthcare professional's dashboard that tracks patient activity, completed assessments, and appointments. It features data visualizations and intuitive navigation to help users manage their practice efficiently.",
  },
  {
    title: "Redesigned Canvas Student Dashboard",
    image: "/designs/design7.png",
    description:
      "This is a redesigned Canvas student dashboard, showcasing course cards, upcoming assignments, and a progress tracker. The interface uses a clean, organized layout to help students easily monitor deadlines and manage their coursework.",
  },
  {
    title: "Canvas Grade Overview Dashboard",
    image: "/designs/design8.png",
    description:
      "This is a Canvas submission details page that displays a student's uploaded work for a design assignment, along with instructor comments and a preview of the submission. The layout allows for easy navigation between the assignment content and feedback, supporting clear communication and iterative improvement.",
  },
  {
    title: "Canvas Submission Details",
    image: "/designs/design9.png",
    description:
      "This is a Canvas submission details page that displays a student's uploaded work for a design assignment, along with instructor comments and a preview of the submission. The layout allows for easy navigation between the assignment content and feedback, supporting clear communication and iterative improvement.",
  },
];

export default function Designs() {
  return (
    <div className="designs-page">
      <header className="designs-header">
        <Link className="nav-logo" to="/">
          Shreya Katiyar
        </Link>
        <div className="designs-header-right">
          <Link className="designs-back" to="/">
            ← Back to portfolio
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <section className="designs-hero">
        <Stars items={STARS} />
        <div className="section-inner">
          <Reveal as="p" className="script-eyebrow" from="translateY(26px)">
            my designs —
          </Reveal>
          <Reveal as="h1" className="designs-title" delay={100} from="translateY(34px)">
            Exploring creativity through digital design, UI/UX, and visual
            storytelling.
          </Reveal>
        </div>
      </section>

      <section className="design-list">
        {DESIGNS.map((d, i) => (
          <Reveal
            as="div"
            className={`design-item${i % 2 === 1 ? " reverse" : ""}`}
            from={i % 2 === 1 ? "translateX(24px)" : "translateX(-24px)"}
            duration={800}
            key={d.title}
          >
            <div className="design-img">
              <img src={d.image} alt={d.title} loading="lazy" />
            </div>
            <div className="design-text">
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <footer className="footer designs-footer">
        made with a little too much love, by Shreya Katiyar
        <br />
        <span className="footer-fine">© {new Date().getFullYear()} · Computer Science & Informatics @ UC Irvine</span>
      </footer>
    </div>
  );
}
