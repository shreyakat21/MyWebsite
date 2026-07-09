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
        transform: visible ? to : from,
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
