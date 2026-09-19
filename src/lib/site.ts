const GITHUB_ORIGIN = "https://muhammedjasir908.github.io";
const GITHUB_BASE = "/AbinwedsRinta/";

function siteBase() {
  const base = import.meta.env.BASE_URL || "/";
  if (base !== "/") return base.endsWith("/") ? base : `${base}/`;
  return GITHUB_BASE;
}

export function publicUrl(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\//, "")}`;
}

export function absoluteUrl(path: string) {
  return `${GITHUB_ORIGIN}${siteBase()}${path.replace(/^\//, "")}`;
}

export const SITE_TITLE = "Abin & Rinta — Wedding Invitation";
export const SITE_DESCRIPTION =
  "5 November 2026 · St Basil Church, Manimala — You are lovingly invited.";
export const SITE_PAGE_TITLE = "Abin & Rinta — Wedding Invitation | 5 November 2026";

/** WhatsApp and other apps fetch this public JPEG when the link is shared. */
export const OG_IMAGE_URL = `${absoluteUrl("og-cover.jpg")}?v=3`;
