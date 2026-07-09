const SYMBOLS = ["✦", "✶", "✺"];

export default function Divider({ symbol = "✦" }) {
  return (
    <div className="divider" aria-hidden="true">
      <span className="divider-line" />
      <span className="divider-symbol">{symbol}</span>
      <span className="divider-line" />
    </div>
  );
}

export { SYMBOLS };
