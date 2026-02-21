import type { APIRoute } from "astro";
import { featureSlugs, localePath, supportedLocales } from "../lib/site-copy";
import { absoluteUrl } from "../lib/seo";

const localeStaticRoutes = [
  "features",
  "pricing",
  "about",
  "about/tos",
  "about/pp",
  "about/contact-us",
] as const;

function uniquePaths(paths: string[]): string[] {
  return [...new Set(paths)];
}

export const GET: APIRoute = ({ site }) => {
  const localizedPaths = supportedLocales.flatMap((locale) => [
    localePath(locale),
    ...localeStaticRoutes.map((route) => localePath(locale, route)),
    ...featureSlugs.map((slug) => localePath(locale, `features/${slug}`)),
  ]);

  const paths = uniquePaths(["/", ...localizedPaths]);
  const urls = paths.map((path) => absoluteUrl(path, site));
  const lastmod = new Date().toISOString().split("T")[0];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      (url) =>
        `  <url><loc>${url}</loc><lastmod>${lastmod}</lastmod></url>`,
    ),
    "</urlset>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
