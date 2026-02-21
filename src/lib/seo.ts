const FALLBACK_SITE = new URL("https://food-ninja.com");

export function absoluteUrl(path: string, site?: URL): string {
  return new URL(path, site ?? FALLBACK_SITE).toString();
}
