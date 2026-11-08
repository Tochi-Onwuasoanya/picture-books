"use client";

import { useEffect, useId, useState } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const id = `mermaid-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      // Loaded here so pages without a diagram don't download Mermaid.
      const { default: mermaid } = await import("mermaid");
      const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      mermaid.initialize({
        startOnLoad: false,
        theme: dark ? "dark" : "neutral",
      });
      const result = await mermaid.render(id, chart);
      if (!cancelled) setSvg(result.svg);
    }

    render().catch((error) => {
      // The source stays on the page, so a bad diagram is still readable.
      console.error("Could not render Mermaid diagram", error);
    });

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (svg === null) {
    return (
      <pre>
        <code>{chart}</code>
      </pre>
    );
  }

  return (
    <figure
      className="overflow-x-auto rounded-3xl border border-border bg-card p-4 sm:p-6 [&_svg]:mx-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
