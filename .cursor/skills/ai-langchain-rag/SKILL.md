---
name: ai-langchain-rag
description: Applies LangChain, local Qdrant, embeddings, RAG, agent, and chunking standards. Use when implementing AI workflows, LLM orchestration, vector search, document ingestion, retrieval, chunk quality, or local Qdrant Docker integration.
---

# AI LangChain RAG

## Defaults

- Use LangChain for AI pipelines, chains, agents, retrievers, loaders, and vector integrations.
- Use local Qdrant on Docker for vector storage unless the user specifies another target.
- Treat chunk quality as more important than prompt cleverness.
- Keep AI code modular: loaders, splitters, embedders, vector stores, retrievers, prompts, and evaluators should be separable.
- Ban regex unless explicitly approved; use parsers/loaders for structured documents.

## Local Qdrant Baseline

Use Docker for local vector storage:

```bash
docker run -p 6333:6333 -p 6334:6334 qdrant/qdrant
```

Keep collection names, vector dimensions, distance metrics, and payload schema explicit in config.

## RAG Workflow

1. Identify source type and use the best loader/parser available.
2. Normalize documents and preserve metadata: source, page/section, tenant/client, timestamps, permissions.
3. Chunk by semantic boundaries first; use token limits second.
4. Embed with a consistent model and record embedding metadata.
5. Store vectors in Qdrant with payload filters needed by the app.
6. Retrieve with metadata filters before broad similarity search.
7. Evaluate retrieval with sample questions and expected source chunks.

## Chunking Standards

- Prefer headings, sections, paragraphs, tables, and domain objects as boundaries.
- Avoid tiny orphan chunks and giant mixed-topic chunks.
- Keep overlap purposeful; too much overlap pollutes retrieval.
- Store enough metadata to explain why a chunk was retrieved.
- Re-chunk when answers fail because evidence is missing, fragmented, or mixed.

## LangChain Structure

Use small modules:

```text
ai/
  loaders/
  splitters/
  embeddings/
  vectorstores/
  retrievers/
  chains/
  evaluators/
```

## Verification

For AI changes, verify:

- Ingestion produces expected document and chunk counts.
- Qdrant collection exists with expected vector size and payload fields.
- Retrieval returns relevant chunks for representative questions.
- Answers cite or expose source metadata when the UX needs trust.
