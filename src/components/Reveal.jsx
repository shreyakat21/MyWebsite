import useReveal from "../hooks/useReveal";

export default function Reveal({
  children,
  delay = 0,
  duration = 900,
  from = "translateY(30px)",
  to = "none",
  as: Tag = "div",
  className = "",
  style = {},
  ...rest
}) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        // Once revealed, drop the inline transform for the default (no persistent
        // pose) case so CSS :hover transforms on the same element aren't blocked
        // by inline-style specificity. Custom `to` poses (e.g. a permanent tilt)
        // still need to stay inline to persist.
        transform: visible ? (to === "none" ? undefined : to) : from,
        transition: `opacity ${duration}ms var(--ease), transform ${duration}ms var(--ease)`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
