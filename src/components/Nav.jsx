const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav-logo" href="#top">
        Shreya Katiyar
      </a>
      <nav>
        <ul className="nav-links">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
              {i < LINKS.length - 1 && <span className="nav-sep">✦</span>}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
