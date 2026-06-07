import type { APIRoute } from "astro";
import { absoluteUrl } from "../lib/seo";

export const GET: APIRoute = ({ site }) => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Diwallow: /misc-unknown",
    "",
    `Sitemap: ${absoluteUrl("/sitemap.xml", site)}`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
