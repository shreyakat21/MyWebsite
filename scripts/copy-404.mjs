// GitHub Pages has no server-side routing, so a direct link to a client-side
// route (e.g. /designs) 404s. Serving a copy of index.html as 404.html makes
// GitHub Pages fall back to the SPA shell instead of a real error page; the
// browser's URL is unchanged, so React Router still matches the right route.
import { copyFileSync } from "node:fs";

copyFileSync("dist/index.html", "dist/404.html");
