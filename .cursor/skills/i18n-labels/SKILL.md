---
name: i18n-labels
description: Enforces localized UI text through it.json translation keys. Use when adding or changing labels, buttons, messages, placeholders, validation text, table headers, menu entries, or any user-facing copy in Angular HTML or TypeScript.
---

# I18n Labels

## Rule

All user-facing text must live in `it.json`. Do not hardcode labels in `.html` or `.ts`.

## Workflow

1. Find the existing i18n file and key style before adding keys.
2. Add or update the Italian value in `it.json`.
3. Use the existing translation pipe/service/directive in templates and TypeScript.
4. Keep keys stable, grouped by feature/module, and readable.
5. If the same text appears in multiple places, reuse the key only when the meaning is identical.

## What Counts As User-Facing Text

- Labels, buttons, links, placeholders, hints, tooltips.
- Validation messages, empty states, toast/snackbar text.
- Dialog titles, table headers, menu items, page titles.
- Error messages shown to users.

## Avoid

```html
<button>Salva</button>
```

```typescript
title = 'Clienti';
```

## Prefer

```html
<button>{{ 'clients.actions.save' | translate }}</button>
```

```typescript
titleKey = 'clients.title';
```

Use the exact project translation API if it differs from these examples.
