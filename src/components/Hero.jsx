export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-eyebrow">[ Your Field ] · [ Your Focus Area ] · [ Your Interest ]</p>
      <h1 className="hero-name">Shreya Katiyar</h1>
      <p className="hero-tagline">
        [ One sentence describing what you do and what you're curious about. ]
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#work">
          View my work
        </a>
        <a className="btn btn-outline" href="/resume.pdf" download>
          Download resume
        </a>
      </div>
    </section>
  );
}
