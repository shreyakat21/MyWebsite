import Reveal from "./Reveal";
import Stars from "./Stars";
import Clipart from "./Clipart";

const STARS = [
  { symbol: "✦", top: "14%", left: "16%", size: 26, duration: 4.6, delay: 0 },
  { symbol: "✶", bottom: "18%", right: "18%", size: 22, duration: 5.2, delay: 0.7, color: "var(--accent-light)" },
  { symbol: "✧", top: "24%", right: "20%", size: 16, duration: 4.7, delay: 1.2, color: "var(--accent-pale)" },
];

const CLIPART = [
  { icon: "heart", top: "8%", right: "8%", size: 26, speed: 0.07, duration: 4.6, color: "var(--accent-light)" },
  { icon: "sparkle", bottom: "10%", left: "9%", size: 20, speed: -0.06, duration: 4, delay: 0.5, color: "var(--accent-light)" },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Stars items={STARS} />
      <Clipart items={CLIPART} />
      <div className="contact-inner">
        <Reveal as="p" className="script-eyebrow script-eyebrow-light" from="translateY(26px)">
          don't be a stranger
        </Reveal>

        <Reveal as="h2" className="contact-headline" delay={100} duration={1000} from="translateY(38px)">
          let's build something.
        </Reveal>

        <Reveal as="p" className="contact-intro" delay={160} from="translateY(22px)">
          I'm always happy to connect — whether about data science, software,
          design, or just to say hi.
        </Reveal>

        <Reveal
          className="contact-links"
          delay={340}
          from="translateY(24px)"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shreyakatiyar21@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            shreyakatiyar21@gmail.com
          </a>
          <a href="https://linkedin.com/in/shreyakat" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/shreyakat21" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="/resume.pdf" download>
            Resume ↓
          </a>
        </Reveal>

        <footer className="footer">
          made with so much love, by Shreya Katiyar
          <br />
          <span className="footer-fine">© {new Date().getFullYear()} · Computer Science + Informatics @ UC Irvine</span>
        </footer>
      </div>
    </section>
  );
}
