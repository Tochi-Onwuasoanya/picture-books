// Everything a differently branded copy of this site (for example, a company
// version) needs to change lives here.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const SITE_NAME = "Picture Books";
export const SITE_TAGLINE = "technical topics, one diagram at a time";
export const SITE_DESCRIPTION =
  "Diagram-centered articles for understanding technical topics.";

export const REPO_URL = "https://github.com/Tochi-Onwuasoanya/picture-books";
export const ARTICLES_URL = `${REPO_URL}/tree/main/content/articles`;
