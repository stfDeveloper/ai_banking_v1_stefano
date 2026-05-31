# Normative AI Rules And Skills

Minimal Cursor rule and skill database for TypeScript-first full-stack work.

## Why This Exists

Rules are always in context, so they stay short. Skills are loaded only when needed and hold the heavier workflow guidance.

## Rules

| Rule | Applies | Purpose |
| --- | --- | --- |
| `.cursor/rules/main.mdc` | Always | Core engineering behavior: read before write, concise output, module-first structure, no regex, no secrets, verify changes. |
| `.cursor/rules/skill-router.mdc` | Always | Decides which project skill to read before implementation. |
| `.cursor/rules/design-pro-max.mdc` | Always | Routes high-polish UI, landing pages, dashboards, redesigns, and Framer Motion work to the design skill. |
| `.cursor/rules/i18n-labels.mdc` | Always | Requires labels and user-facing text to use `it.json`, never hardcoded HTML/TS strings. |

## Skills

| Skill | Read When | Purpose |
| --- | --- | --- |
| `.cursor/skills/ts-fullstack/SKILL.md` | TypeScript, Node, Nest, Angular, Bootstrap, CSS, reusable UI, module structure | Keeps client/API features modular and aligned. |
| `.cursor/skills/design-pro-max/SKILL.md` | Landing pages, dashboards, SaaS UI, redesigns, Framer Motion, high-polish web design | Uses UI UX Pro Max format: pattern, style, colors, typography, motion, anti-patterns, checklist. |
| `.cursor/skills/i18n-labels/SKILL.md` | Labels, buttons, messages, placeholders, validation text, user-facing copy | Enforces localized `it.json` translation keys and prevents hardcoded UI text. |
| `.cursor/skills/postgres-migrations/SKILL.md` | API work touches DB schema/data, SQL, TypeORM, migrations | Requires full create SQL, update SQL, data-aware migrations, and verification. |
| `.cursor/skills/ai-langchain-rag/SKILL.md` | AI, agents, LangChain, embeddings, vector search, RAG, Qdrant, chunking | Standardizes LangChain workflows, local Qdrant, metadata, retrieval, and chunk quality. |

## Operating Model

1. Start with `.cursor/rules/main.mdc`.
2. Use `.cursor/rules/skill-router.mdc` to choose the smallest matching skill set.
3. Implement features as modules.
4. For web design, use UI UX Pro Max format before implementation.
5. Keep Angular and Nest structures aligned when both sides exist.
6. Put every label and user-facing string in `it.json`.
7. For API/database work, produce migrations and SQL that can update existing data safely.
8. For AI work, use LangChain and local Qdrant by default.

## Global Guardrails

- Regex is banned unless explicitly approved for a narrow case.
- High-polish UI starts from pattern, style, colors, typography, motion, anti-patterns, and checklist.
- UI labels and messages are localized through `it.json`, never hardcoded.
- Chunk quality wins over prompt tricks.
- Prefer structured parsers, validators, typed contracts, and database constraints.
- Keep always-applied rules minimal to reduce context cost.
