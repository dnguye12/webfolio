import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { myProjects } from "../constants/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://www.duc-huy.com";
const today = new Date().toISOString().split("T")[0];

const staticRoutes = [
    { path: "/", priority: "1.0" },
    { path: "/about-me", priority: "0.8" },
    { path: "/projects", priority: "0.8" },
];

const projectRoutes = myProjects.map((p) => ({
    path: `/projects/${p.slug}`,
    priority: "0.6",
}));

const allRoutes = [...staticRoutes, ...projectRoutes];

const urlEntries = allRoutes
    .map(
        ({ path, priority }) => `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

const outPath = resolve(__dirname, "../public/sitemap.xml");
const distPath = resolve(__dirname, "../dist/sitemap.xml")
writeFileSync(outPath, sitemap, "utf-8");
console.log(`Sitemap written to ${outPath} with ${allRoutes.length} URLs.`);