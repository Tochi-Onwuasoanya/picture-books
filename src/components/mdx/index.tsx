import { isValidElement, type ComponentProps, type ReactElement } from "react";
import { DiagramFigure } from "@/components/DiagramFigure";
import { Mermaid } from "./Mermaid";

type CodeElement = ReactElement<{ className?: string; children?: unknown }>;

// Lets authors use a plain ```mermaid code fence instead of a component tag.
function Pre({ children, ...props }: ComponentProps<"pre">) {
  if (isValidElement(children)) {
    const code = children as CodeElement;
    if (
      code.props.className === "language-mermaid" &&
      typeof code.props.children === "string"
    ) {
      return <Mermaid chart={code.props.children.trim()} />;
    }
  }
  return <pre {...props}>{children}</pre>;
}

// Components available inside articles. New animation and video components
// get registered here.
export const mdxComponents = {
  pre: Pre,
  Diagram: DiagramFigure,
};
