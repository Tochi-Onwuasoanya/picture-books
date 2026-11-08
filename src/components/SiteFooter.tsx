import Link from "next/link";
import { GithubIcon } from "./icons";
import { withBasePath } from "@/lib/basePath";
import { ARTICLES_URL, REPO_URL, SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/write" className="hover:text-foreground transition">
              Write an article
            </Link>
            <a
              href={withBasePath("/rss.xml")}
              className="hover:text-foreground transition"
            >
              RSS feed
            </a>
            <a
              href={ARTICLES_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition"
            >
              Article repo
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition"
            >
              <GithubIcon className="h-4 w-4" />
              Site code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
