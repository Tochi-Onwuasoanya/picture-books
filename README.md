# picture-books

Diagram-centered articles for enhanced understanding of technical topics.

Articles are written to think through what we're studying, then shared with friends and our system design study group. Each one starts with a picture and explains it.

## How it works

- **Read:** the site is fully static.
- **Write:** `/write` is an in-browser editor with an embedded [Excalidraw](https://excalidraw.com) canvas. It exports a ready-to-submit article. You can also write the file by hand.
- **Publish:** articles live in [`content/articles/`](content/articles) and go live when a pull request adding one is reviewed and merged. See [CONTRIBUTING.md](CONTRIBUTING.md).
- **Follow:** there's an RSS feed at `/rss.xml`.

## Tech stack

- [Next.js](https://nextjs.org) (App Router, static export) and [Tailwind CSS](https://tailwindcss.com)
- MDX through `next-mdx-remote`, with no CMS or database
- [Mermaid](https://mermaid.js.org) and [Excalidraw](https://excalidraw.com) for diagrams
- Hosted on [Vercel](https://vercel.com), with a preview link on every pull request

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Import the repo into Vercel and set `NEXT_PUBLIC_SITE_URL` to the production URL, for example `https://picture-books.vercel.app`. RSS links use this value.

Site name, description, and repo links all live in `src/lib/site.ts`.

## Features (to-do)

- Embedding animations and videos into articles

## Credits

Based on [Scaling Up](https://github.com/Youdahe123/scaling-up) by Youdahe Asfaw and contributors, used under the [MIT License](LICENSE).
