---
name: web-ui-art-direction
description: Turn a loose website idea or visual references into a distinctive, usable web UI direction and implement it consistently. Use for new web pages, visual redesigns, or reference-led frontend work; skip backend-only tasks and narrow functional fixes with no visual decision.
---

# Web UI art direction

Create a website that feels authored for its audience and purpose. A distinctive page does not need maximal decoration: its typography, imagery, composition, copy, interaction, and small details should express the same idea. Preserve the user's stated taste and existing product truth.

## When to read the references

- Read [design-rules.md](references/design-rules.md) when deciding or reviewing layout, type, color, imagery, components, states, and motion.
- Read [visual-atlas.md](references/visual-atlas.md) when the brief includes visual references or needs alternative directions. It records observations from 33 static images and the limits of those observations. Use the images as evidence of techniques, never as templates to copy.
- Read [worked-example.md](references/worked-example.md) when an open-ended brief needs a concrete example of a design direction and its translation into page sections.

## Work from the brief to the page

1. Establish the user's audience, primary task, content, brand constraints, target devices, and any existing product/design system. Inspect the current site and available real content before changing an established design. If critical information is missing, make a small explicit assumption or ask one focused question.
2. Identify the page's job: persuade, help someone operate, support reading, or present work to experience. Pick a visual direction that suits that job. For an open brief, propose two meaningfully different directions and choose one with a reason. For a constrained brief, follow it directly.
3. Write a short **direction statement**: audience + intended feeling + visual metaphor or material + reason it serves the task. Specify one dominant visual move, two or three supporting moves, and deliberate things to omit. Make the direction testable against every section, not a pile of style adjectives.
4. Build a compact system before polishing components: type roles and scale, content width/grid, spacing rhythm, color roles, image treatment, surfaces, corners, borders, icons, and motion behavior. Choose values from content and context; do not impose a signature palette or layout on every project.
5. Map the page's story and task flow: first impression, explanation, evidence, action, and follow-through. Give adjacent sections different pacing while preserving recognizable rules. Write specific copy and use believable imagery/data; mark unknown facts as placeholders for user-supplied truth. Track the source or approval state of any claim that affects trust or a decision.
6. Implement with the existing stack and components when implementation is requested. Translate the direction into actual responsive layouts and states, not a screenshot clone. Keep semantic HTML, keyboard operation, performance, and product behavior intact.
7. Review at desktop and narrow viewport sizes, at normal and zoomed text, with keyboard focus and reduced motion. Check loading, empty, error, success, and long-content states where applicable. Compare the result with the direction statement and the checks in [design-rules.md](references/design-rules.md). Revise generic or contradictory details.

## Decision rules

- Favor specificity over generic “premium”, “modern”, or “AI” styling. Explain what a design choice communicates and how it helps the user.
- Reuse a reference's underlying device (for example, an editorial scale jump or a repeated image crop) only when it fits the product. Do not reproduce another site's composition, copy, branding, or artwork.
- Give important controls clear labels and visible feedback. Expressive design must not hide navigation, meaning, or the primary action.
- Treat statistics, testimonials, partner logos, scarcity, and social proof as factual content that needs a source. Do not invent them to complete a visual.
- In regulated or high-stakes domains, source and verify benefits, safety statements, qualifications, outcomes, and prices before publishing them. Make uncertainty explicit.
- Do not ship a CTA or form that appears functional if its destination or submission path does not exist. Resolve the real contact/action route for a live page, or label the deliverable as a prototype.
- Separate observed evidence from proposed behavior. A static reference cannot prove interactions, accessibility, responsiveness, or performance.
- If the user asked only for a design analysis or direction, stop at that deliverable. Do not create code, assets, or external projects without task authorization.

## Hand-off

For design-only work, give the chosen direction, why it fits, a section map, key design tokens, distinctive details, and unresolved factual inputs. For implementation work, report the same decisions briefly, plus what changed and the visual/functional validation actually performed. State what was not verified.
