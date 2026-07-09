import useTheme from "../hooks/useTheme";
import useMagnetic from "../hooks/useMagnetic";

export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === "dark";
  const magnetic = useMagnetic(0.4);

  return (
    <button
      ref={magnetic}
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}
