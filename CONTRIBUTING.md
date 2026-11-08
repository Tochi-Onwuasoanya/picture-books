# Contributing to Picture Books

Nothing gets merged to `main` without a pull request and a review, whether it's an article or a code change.

## Writing an article

1. Go to `/write` and draft your post: title, sections, and a diagram (draw it, or import an image or `.excalidraw` file). It autosaves to your browser.
2. Click **Download article (.mdx)**.
3. Add the file to `content/articles/` and open a pull request.
4. Check your article on the preview link Vercel adds to the pull request. Merging makes it live and adds it to the RSS feed.

You can also write the file by hand. Copy the frontmatter from an existing article: `title`, `slug`, `summary`, `author`, `authorRole`, `topics`, `date`, `diagram`, `diagramCaption`, `readingMinutes`.

### Diagrams

Use whatever is quickest for the idea:

- **Mermaid:** add a code fence with `mermaid` as its language.
- **Image or SVG:** put the file in `public/diagrams/` and use `<Diagram src="/diagrams/name.svg" caption="What it shows" />`.

### MDX gotcha

Articles are MDX, so a bare `{` or `<` in your prose breaks the build. For example, `latency < 5ms` fails. Put it in backticks, or write `\{` and `\<`. Inside code fences and backticks you can write anything.

## Working on the code

1. Clone the repo, then run `npm install` and `npm run dev`.
2. Check that `npm run lint` and `npm run build` pass. CI runs the build on every pull request.
3. Open a pull request describing what changed and why.

Components that articles can use are registered in `src/components/mdx/index.tsx`.

## Code of Conduct

Participation in this project is covered by our [Code of Conduct](CODE_OF_CONDUCT.md).
