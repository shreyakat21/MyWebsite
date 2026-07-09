import Reveal from "./Reveal";
import Stars from "./Stars";

const STARS = [
  { symbol: "✦", top: "14%", left: "16%", size: 26, duration: 4.6, delay: 0 },
  { symbol: "✶", bottom: "18%", right: "18%", size: 22, duration: 5.2, delay: 0.7, color: "var(--accent-light)" },
  { symbol: "✧", top: "24%", right: "20%", size: 16, duration: 4.7, delay: 1.2, color: "var(--accent-pale)" },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Stars items={STARS} />
      <div className="contact-inner">
        <Reveal as="p" className="script-eyebrow script-eyebrow-light" from="translateY(26px)">
          let's keep in touch
        </Reveal>

        <Reveal as="h2" className="contact-headline" delay={100} duration={1000} from="translateY(38px)">
          let's talk.
        </Reveal>

        <Reveal as="p" className="contact-intro" delay={160} from="translateY(22px)">
          [ A line inviting people to reach out — for opportunities,
          collaboration, or just to say hi. ]
        </Reveal>

        <Reveal
          className="contact-links"
          delay={340}
          from="translateY(24px)"
        >
          <a href="mailto:shreyakatiyar21@gmail.com">shreyakatiyar21@gmail.com</a>
          <a href="tel:+10000000000">[ Phone Number ]</a>
          <a href="https://linkedin.com/in/[your-handle]" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="/resume.pdf" download>
            Resume ↓
          </a>
        </Reveal>

        <footer className="footer">
          made with a little too much love, by Shreya Katiyar
          <br />
          <span className="footer-fine">© {new Date().getFullYear()} · [ Your School / Program ]</span>
        </footer>
      </div>
    </section>
  );
}
