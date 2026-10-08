---
name: web-ui-art-direction
description: Use when designing, implementing, or reviewing a website or web app whose visual direction, UX flow, or component hierarchy needs deliberate decisions, especially from image references or the owner's preferred style. Covers public pages and authenticated workspaces; skip backend-only work and fixes with no interface decision.
---

# Web UI art direction

Create an interface that feels authored for its product and remains usable across real tasks. The visual subject, typography, content, interaction, and small controls should support one coherent idea.

## Decide which direction governs

Follow the user's brief and an established product brand first. Respect task, audience, domain, accessibility, and existing component constraints. When visual direction is open, use the owner's preference in [owner-style.md](references/owner-style.md) as a **starting hypothesis**: product-specific subject, confident sans-serif type, editorial scale, purposeful warm light, and changing page rhythm. It is not a required orange palette or a layout to copy. If that preference conflicts with the product's evidence, adapt it and say why.

## Read only what the task needs

| Task | Read |
| --- | --- |
| Open visual brief, marketing page, or reference-led redesign | [Owner style](references/owner-style.md) when the preference fits; [seven image study](references/owner-image-study.md) when visual evidence or specific placement matters; [design rules](references/design-rules.md) for general visual decisions; [visual atlas](references/visual-atlas.md) when comparing all 33 supplied images or alternative directions. |
| Authenticated, multi-screen product | [Product UI](references/product-ui.md) for work and state models; add [owner product UI](references/owner-product-ui.md) only when using the owner's direction. |
| Header, navigation, buttons, fields, tables, overlays, or controls | [Component craft](references/component-craft.md) for behavior; add [owner components](references/owner-components.md) for taste and the [component specimen](references/component-specimen.md) for visible anatomy/states. Its tokens are one candidate, not defaults for every product. |
| Research provenance, worked reasoning, or evaluation | [Source notes](references/source-notes.md), [public-page example](references/worked-example.md), [app example](references/worked-app-example.md), or [evaluation guide](references/evaluation.md) as needed. The examples are alternate contexts, not templates or the owner's approved visual baseline. |

## Work from brief to result

1. Identify audience, primary task, product objects, actual content/data, brand constraints, devices, and existing implementation. For an app, map **role → goal → object → action → result → recovery**. Ask only about missing information that materially changes the direction; state small assumptions.
2. Choose a product-specific subject and write a short direction statement: who it serves, what feeling and material fit, why they help the task, one dominant visual move, and what to omit. When using the owner's direction, **open relevant original JPGs with an available image-viewing tool**; reading Markdown or alt text does not establish visual inspection. If images cannot be viewed, state that limitation and base the proposal on the written analysis. For an open brief, compare two materially different compositions and name at least two transferable devices **with their actual placement and task purpose**. Use the [image study](references/owner-image-study.md) and [detail maps](references/reference-details.md) as evidence. For an established brand, preserve its system unless change is requested.
3. Set a compact design grammar: type roles, grid, spacing, surface and semantic color roles, image/crop rule, component geometry, and motion purpose. Carry identity into working screens at lower intensity; let each screen's task determine emphasis. A calm work surface can be light or dark: choose from the actual brand and use conditions, then verify foreground/background pairs and density.
4. Build the real journey and only its relevant states. Public pages need an honest promise, explanation, evidence, action, and follow-through. Product screens need orientation, finding/creating an object, acting, feedback, recovery, and return. Use specific copy and believable content; label illustrative data.
5. Render and inspect representative desktop and narrow screens. Check product specificity, hierarchy, component coherence, long Vietnamese text, keyboard focus, zoom/reflow, reduced motion, and meaningful loading/empty/error/success states. Revise after seeing the output, using the [evaluation guide](references/evaluation.md). A static render proves appearance only; test behavior in the running product when implementation is requested.

## Non-negotiable boundaries

- Reuse a reference's **design mechanism**, not its composition, artwork, brand, people, copy, or statistics. Seven original images are available for inspection, with [separate image rights](assets/owner-references/README.md); their presence is not permission to put them into a new product. Static references do not prove interaction, accessibility, performance, or responsiveness.
- Never invent testimonials, outcomes, partner logos, product metrics, qualifications, or other trust claims to fill a layout. In high-stakes domains, verify substantive claims before publication.
- A live CTA or form needs a real destination and result path. If the deliverable is a mockup, make that status clear.
- The leading action, object, status, and recovery path must be easier to find than decoration. Preserve established behavior and use semantic, keyboard-accessible controls when implementing.
- If asked for analysis or design only, deliver that scope. Do not create code or external artifacts without authorization.

## Hand-off

For design work, give the chosen direction and reason, screen or section map, a compact visual grammar, distinctive details, and unresolved factual inputs. For implementation, report changes and the visual and functional checks actually performed; distinguish proposal, render, and verified behavior.
