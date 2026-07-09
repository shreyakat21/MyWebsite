import ThemeToggle from "./ThemeToggle";
import useMagnetic from "../hooks/useMagnetic";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const magLogo = useMagnetic(0.2);

  return (
    <header className="nav">
      <a ref={magLogo} className="nav-logo" href="#top">
        Shreya Katiyar
      </a>
      <nav>
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a className="nav-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
