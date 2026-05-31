---
name: ts-fullstack
description: Applies TypeScript, Node, Nest, Angular, Bootstrap, CSS, and reusable component standards. Use when implementing or reviewing TypeScript full-stack features, Angular modules, Nest modules, UI components, services, DTOs, or shared module structure.
---

# TypeScript Fullstack

## Default Workflow

1. Read the nearest existing feature module before writing code.
2. Model the change as a feature module, not scattered files.
3. Keep Angular and Nest names aligned when both sides exist.
4. Add only reusable abstractions that remove real duplication.
5. Verify with the smallest relevant lint, typecheck, build, or focused test.

## Matching Module Shape

Use matching feature names across clients and APIs:

```text
client/src/app/modules/<feature>/
  components/
  pages/
  services/
  interfaces/
  config/

api_v2/src/modules/<feature>/
  <feature>.module.ts
  <feature>.controller.ts
  <feature>.service.ts
  dto/
  entities/
```

Adapt folder names to the repository if established patterns differ.

## TypeScript Standards

- Prefer explicit interfaces, DTOs, discriminated unions, and narrow types.
- Avoid `any`; use `unknown` with narrowing when input is external.
- Keep async flows explicit; do not swallow errors.
- Ban regex unless explicitly approved; use parsers, validators, typed transforms, URL/path APIs, or database features.
- Keep public contracts stable: DTOs, API responses, route params, and persisted data need migration-aware changes.

## Nest Standards

- Keep controllers thin: validate input, call services, return DTOs.
- Put business logic in injectable services; isolate persistence behind repositories/services.
- Use DTOs with `class-validator`/`class-transformer` for request boundaries.
- Use guards/interceptors/filters for cross-cutting concerns.
- Prefer feature modules with local entities, DTOs, services, and controllers.

## Angular Standards

- Keep pages orchestration-focused; move reusable UI into `components/`.
- Keep API access in feature services; components should not build raw endpoints.
- Prefer reactive forms and typed models for forms.
- Use RxJS intentionally: unsubscribe with existing project pattern, avoid nested subscriptions.
- Keep reusable UI inputs/outputs small and explicit.

## UI, Bootstrap, CSS

- Use Bootstrap utilities and layout primitives before custom CSS.
- Use component SCSS only for component-specific styling.
- Prefer modern CSS (`grid`, `flex`, `clamp`, custom properties, container queries) when it simplifies layout.
- Avoid global styles unless the change is truly design-system level.
- Make reusable components accessible: labels, keyboard behavior, focus states, and semantic HTML.
