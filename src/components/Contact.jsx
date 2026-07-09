import Divider from "./Divider";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Divider symbol="✶" />
      <h2 className="section-title">Get in touch</h2>
      <p className="contact-intro">
        [ A line inviting people to reach out — for opportunities,
        collaboration, or just to say hi. ]
      </p>
      <div className="contact-links">
        <a href="mailto:shreyakatiyar21@gmail.com">shreyakatiyar21@gmail.com</a>
        <a href="tel:+10000000000">[ Phone Number ]</a>
        <a href="https://linkedin.com/in/[your-handle]" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="/resume.pdf" download>
          Resume
        </a>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Shreya Katiyar</p>
      </footer>
    </section>
  );
}
