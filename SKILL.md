---
name: web-ui-art-direction
description: Design or review distinctive, usable website and web-app interfaces, including authenticated dashboards, workflows, forms, tables, settings, and marketing pages. Use when visual or UX decisions are needed; skip backend-only tasks and narrow functional fixes with no interface decision.
---

# Web UI art direction

Create an interface that feels authored for its audience and purpose. A distinctive interface does not need maximal decoration: its structure, typography, content, interaction, and small details should express the same idea. Preserve the user's stated taste, real workflows, and existing product truth.

## When to read the references

- Read [design-rules.md](references/design-rules.md) when deciding or reviewing layout, type, color, imagery, components, states, and motion.
- Read [visual-atlas.md](references/visual-atlas.md) when the brief includes visual references or needs alternative directions. It records observations from 33 static images and the limits of those observations. Use the images as evidence of techniques, never as templates to copy.
- Read [worked-example.md](references/worked-example.md) when an open-ended brief needs a concrete example of a design direction and its translation into page sections.
- Read [product-ui.md](references/product-ui.md) for an authenticated app, dashboard, admin area, editor, settings, data-heavy screen, or multi-screen task. It covers information architecture, task continuity, tables, forms, permissions, and state behavior.
- Read [worked-app-example.md](references/worked-app-example.md) when a post-login brief needs a concrete example spanning several screens and states.
- Read [source-notes.md](references/source-notes.md) to trace the public design-system guidance and product examples behind the post-login rules. Public galleries are examples to inspect, not proof that a pattern works for every user.

## Work from the brief to the interface

1. Establish the audience, primary task, content and data, brand constraints, target devices, and existing product/design system. For an app, identify user roles, the objects they work on, and what success looks like. Inspect the current product before changing an established design. If critical information is missing, make a small explicit assumption or ask one focused question.
2. Identify the surface's job: persuade, help someone operate, support reading, or present work to experience. A marketing page and an authenticated workspace may need different density and pacing while sharing brand foundations. For an open brief, compare two meaningfully different directions and choose one with a reason; follow a constrained brief directly.
3. Write a short **direction statement**: audience + intended feeling + visual metaphor or material + reason it serves the task. Specify one dominant visual move, two or three supporting moves, and deliberate things to omit. Make the direction testable against every section, not a pile of style adjectives.
4. Build a compact system before polishing components: type roles and scale, content width/grid, spacing rhythm, color roles, image treatment, surfaces, corners, borders, icons, and motion behavior. Choose values from content and context; do not impose a signature palette or layout on every project.
5. Map the real journey. For a public page, cover first impression, explanation, evidence, action, and follow-through. For an app, map entry point, finding an object, acting on it, feedback, recovery, and return. Design the relevant normal, first-use, empty-result, loading, error, and permission states. See [product-ui.md](references/product-ui.md).
6. Write specific copy and use believable imagery/data. Mark unknown facts as placeholders for user-supplied truth and track claims that affect trust or decisions. Implement with the existing stack and components when requested. Translate the direction into responsive layouts and actual behavior, not a screenshot clone. Keep semantic HTML, keyboard operation, performance, and product behavior intact.
7. Review representative tasks at desktop and narrow widths, normal and zoomed text, keyboard focus, and reduced motion. Check long names, sparse and dense data, loading, empty, error, success, and role differences where applicable. Compare with [design-rules.md](references/design-rules.md) and [product-ui.md](references/product-ui.md); revise generic or contradictory details.

## Decision rules

- Favor specificity over generic “premium”, “modern”, or “AI” styling. Explain what a design choice communicates and how it helps the user.
- Reuse a reference's underlying device (for example, an editorial scale jump or a repeated image crop) only when it fits the product. Do not reproduce another site's composition, copy, branding, or artwork.
- Give important controls clear labels and visible feedback. Expressive design must not hide navigation, meaning, or the primary action.
- Treat statistics, testimonials, partner logos, scarcity, and social proof as factual content that needs a source. Do not invent them to complete a visual.
- In regulated or high-stakes domains, source and verify benefits, safety statements, qualifications, outcomes, and prices before publishing them. Make uncertainty explicit.
- Do not ship a CTA or form that appears functional if its destination or submission path does not exist. Resolve the real contact/action route for a live page, or label the deliverable as a prototype.
- Separate observed evidence from proposed behavior. A static reference cannot prove interactions, accessibility, responsiveness, or performance.
- For operational UI, let task priority determine emphasis. Put product personality into language, hierarchy, materials, and precise details without making repeated work harder.
- Treat a design-system example as contextual guidance, not a mandatory component choice or a license to copy another product's brand.
- If the user asked only for a design analysis or direction, stop at that deliverable. Do not create code, assets, or external projects without task authorization.

## Hand-off

For design-only work, give the chosen direction, why it fits, a section map, key design tokens, distinctive details, and unresolved factual inputs. For implementation work, report the same decisions briefly, plus what changed and the visual/functional validation actually performed. State what was not verified.
