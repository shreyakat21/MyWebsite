// Prefixes a public/ asset path with Vite's configured base, so it still
// resolves correctly when the site is served from a subpath (e.g. GitHub
// Pages project sites at /<repo-name>/) instead of domain root.
export function withBase(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
