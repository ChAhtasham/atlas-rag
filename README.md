# Atlas RAG

A clean, public-safe Next.js demo of a multi-tenant engineering knowledge platform. Atlas shows how teams can manage mixed-format source documents, ask grounded questions, inspect citations, revisit conversations, evaluate RAG quality, and configure retrieval behavior.

**Live demo:** https://atlas-rag-demo.podcom-1387.chatgpt.site

## Included

- Cited question-answering workspace
- Knowledge base with document status, formats, chunks, and versions
- Conversation history
- RAG evaluation dashboard
- Workspace and retrieval settings
- Responsive layouts for desktop and mobile
- Fictional engineering data only

The demo is intentionally deterministic. It needs no API keys or database and can be explored immediately.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Plain CSS with reusable design tokens
- Static export for simple hosting

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

The static export is written to `out/`.

## Project structure

```text
app/          Routes, layout, and styles
components/   Shared shell, icons, and UI primitives
public/       Static assets
```

## Extending the demo

The natural backend path is Supabase/PostgreSQL with pgvector, object storage for documents, background ingestion workers, OCR, hybrid retrieval, and an OpenAI-compatible model interface.

## Privacy

All organizations, people, documents, answers, and metrics are fictional. No client code, prompts, screenshots, or proprietary data are included.

## License

MIT
