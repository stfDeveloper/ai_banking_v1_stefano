---
name: design-pro-max
description: Creates high-polish web UI using UI UX Pro Max design intelligence and Framer Motion-style interaction design. Use for landing pages, SaaS dashboards, redesigns, animated interfaces, design systems, product pages, and conversion-focused web design.
---

# Design Pro Max

## Install UI UX Pro Max

Claude Code marketplace:

```text
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

CLI install:

```bash
npm install -g uipro-cli
uipro init --ai cursor
uipro init --ai claude
uipro init --ai codex
```

Global install:

```bash
uipro init --ai cursor --global
uipro init --ai claude --global
```

Python 3 is required for the UI UX Pro Max search script.

## Design Workflow

1. Classify the request: product type, audience, page type, conversion goal, brand mood.
2. Use UI UX Pro Max format: pattern, style, colors, typography, effects, anti-patterns, checklist.
3. Choose a layout pattern before writing components.
4. Define motion rules before animation code.
5. Implement responsive, accessible UI.
6. Verify contrast, keyboard focus, reduced motion, and breakpoints.

## Output Format

Before implementation, produce this compact design system:

```text
PATTERN:
STYLE:
COLORS:
TYPOGRAPHY:
MOTION:
SECTIONS:
ANTI-PATTERNS:
CHECKLIST:
```

## Framer Motion Standard

Use Framer Motion for React/Next projects:

```bash
npm install framer-motion
```

- Animate intent, not decoration: reveal, feedback, state change, navigation.
- Keep durations between 150-300ms for common UI feedback.
- Use spring motion for tactile interactions; use tween for predictable transitions.
- Respect `prefers-reduced-motion`.
- Avoid motion that blocks task completion.

For Angular or non-React stacks, keep the same motion spec but implement with Angular animations, CSS transitions, or the project-native animation layer.

## UI Quality Checklist

- SVG icons, not emoji, for product UI.
- Clear hover, active, disabled, loading, empty, and error states.
- Visible focus states for keyboard navigation.
- Light-mode text contrast at least WCAG AA.
- Responsive checks: 375px, 768px, 1024px, 1440px.
- Typography has a clear scale and line-height.
- CTA placement matches the conversion goal.
- UI text follows `.cursor/skills/i18n-labels/SKILL.md`.

## Avoid

- Generic AI purple gradients unless they fit the product.
- Animation without UX purpose.
- Hardcoded labels in templates or TypeScript.
- Overusing glassmorphism, blur, shadows, or parallax when performance suffers.
- Replacing existing design-system primitives without a clear reason.
