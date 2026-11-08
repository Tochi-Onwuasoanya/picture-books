import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { ArticleHeader } from "@/components/ArticleHeader";
import { DiagramFigure } from "@/components/DiagramFigure";
import { mdxComponents } from "@/components/mdx";
import { withBasePath } from "@/lib/basePath";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-[680px] px-5 py-12 sm:py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition"
      >
        &larr; All articles
      </Link>

      <ArticleHeader post={post} />

      <div className="mt-8">
        <DiagramFigure src={post.diagram} caption={post.diagramCaption} />
      </div>

      <div className="prose-article mt-10">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          // Allows props like steps={3}. Articles only arrive through
          // reviewed pull requests, so they're trusted input.
          options={{ blockJS: false, blockDangerousJS: true }}
        />
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-card p-6 sm:p-8">
        <p className="font-display text-lg font-semibold">
          Liked this write-up?
        </p>
        <p className="mt-1 text-sm text-muted">
          Follow along with the{" "}
          <a
            href={withBasePath("/rss.xml")}
            className="font-medium text-accent hover:underline"
          >
            RSS feed
          </a>
          .
        </p>
      </div>
    </article>
  );
}
