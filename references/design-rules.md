# Design rules: from visual intent to usable web UI

These are decision checks, not a mandatory aesthetic. The 33-image atlas shows several incompatible styles that work because each is coherent within its own context.

## 1. Give the page one point of view

- Name the audience and the moment: browsing, comparing, buying, signing in, reading, working, or exploring.
- State what the first viewport must answer. A strong hero has a specific promise, one primary action, and a visual that reinforces that promise.
- Choose one leading device: a photographic world, a typographic system, an illustrative metaphor, a tactile material, or a visible information grid. Supporting details should echo it rather than compete.
- Allow asymmetry and surprise where they make the page more memorable, but keep the reading order and action obvious.
- Do not equate personality with more glow, gradients, glass, floating badges, rounded cards, or animation. These are options, not evidence of craft.

## 2. Compose with rhythm, not repeated blocks

- Establish a content width and grid, then deliberately vary span, alignment, and density across sections. Repeat alignment lines so the variations still belong together.
- Make the hero's focal point unmistakable. Give it room; secondary navigation, chips, decorations, and copy should not compete at equal contrast.
- Alternate high and low intensity: image-led versus text-led, dark versus light, dense versus quiet. Transitions should advance the story, not merely add another color band.
- Use cropping, overlap, cutouts, or partial off-screen cards to suggest depth and continuation only when the content remains understandable.
- Let card size signal importance. Equal cards for unequal information produce a catalog feel. A feature card may lead while supporting items take less space.
- Keep section headings connected to their content, especially on narrow screens and at 200% text zoom.
- Avoid decorative microcopy and tiny labels whose meaning disappears on common laptop screens.

## 3. Typography is the interface's voice

- Assign distinct roles to display title, section heading, body, label, data, and caption. A font pairing should make these roles clearer, not just look fashionable.
- Decide line breaks for meaning. Protect key phrases from awkward wraps, but allow safe reflow on mobile and with translated or enlarged text.
- Use contrast in size, weight, width, case, and style selectively. Oversized display text works when the rest of the page stays restrained.
- Use editorial serif or italic accents for emphasis when they support the brand; do not scatter them randomly among CTAs and controls.
- Keep task text highly legible: readable body size, useful line height, adequate measure, and clear link styling. Navigation should not become miniature simply to look sleek.
- Avoid embedding essential text in artwork. Real text should be selectable, translatable, zoomable, and accessible.

## 4. Color, material, and imagery must mean something

- Define functional color roles first: canvas, surface, main text, muted text, accent, focus, success, warning, error. Keep decorative colors subordinate to these roles.
- Pick imagery for subject, viewpoint, light, crop, and texture. A real service often benefits from real work, people, places, and results; an imagined product may justify crafted 3D or illustration.
- Art-direct a set, not isolated images. Repeated color temperature, crop shape, lighting, or subject distance creates continuity.
- Use blur, grain, halftone, glass, and 3D as meaningful materials. Restrict them to a role so they do not become noise or reduce clarity.
- Do not use unrelated stock photos as filler. If a suitable licensed asset is unavailable, use a restrained typographic composition or a clearly marked placeholder.
- Never imply that a visual mockup's claims, people, clients, or metrics are facts about the user's product.
- Keep a small claim ledger during design: exact wording, source/owner, verified or awaiting approval, and where it appears. This matters especially for healthcare, finance, safety, and legal claims.

## 5. Small details carry authorship

- Design a consistent family for corners, strokes, shadows, icon weight, arrow shape, image radius, separators, and badges.
- Align icon optical centers and text baselines, not only bounding boxes. Check button padding on both sides of an icon.
- Use one or two recurring motifs with purpose: a coordinate line for an exploratory site, a botanical edge for a growth theme, or a schematic line for a technical product. Omit motifs that have no connection to the story.
- Make labels describe the action: “See available trips” is clearer than “Explore” when the destination is a filtered trip list.
- Give every interactive element a discernible state: default, hover where relevant, focus, active, disabled, loading, error, and success.
- Keep decorative annotations away from form labels, prices, navigation, and other information users must read quickly.

## 6. Interaction follows the task

- Make the primary path available without guessing. A decorative carousel, horizontal drag, or hover reveal must not be the only way to reach content.
- Ensure carousels have clear previous/next controls, state indication, and keyboard support; stop or avoid auto-advance when reading time matters.
- Use motion to show cause and location: a panel opening, a card changing position, a task succeeding. Do not animate every element for ambience.
- Respect reduced-motion preferences and avoid motion that blocks input. Keep focus visible throughout transitions.
- Forms need persistent labels, input guidance when needed, field-level errors, submission feedback, and a clear recovery path.
- Before shipping a live CTA or form, verify the destination or submission route and the success/failure response. A styled dead end is a product defect, even if its screenshot looks complete.
- For authentication and other task-heavy pages, the ornamental side should never make the form cramped or distract from the next step.

## 7. Keep the design robust

- Test narrow screens with actual content: long titles, translated labels, real data, empty values, validation messages, and on-screen keyboard space.
- At 200% text zoom, content and controls must remain usable without horizontal scrolling for ordinary page content.
- Aim for WCAG 2.2 AA. Normal text needs at least 4.5:1 contrast and large text at least 3:1; pointer targets are at least 24×24 CSS px or meet the stated exceptions. A 44×44 px target is a useful comfort goal for prominent touch controls, not the WCAG 2.2 AA minimum.
- Keep focus visible and unobscured by sticky headers or overlays. Use semantic elements and sensible heading order.
- Reserve space for images and dynamic sections to prevent layout jumps. Prioritize the hero image; lazy-load lower-page media when it helps. Compress and size media for the displayed use.
- Verify visuals in a browser. A reference screenshot or static code review cannot prove responsive layout, input behavior, contrast, or runtime performance.

## 8. Anti-pattern review before delivery

Ask these questions after the first implementation:

1. Could the product name be swapped for another without changing the design? If yes, the direction is too generic.
2. Are all sections equally sized, equally rounded, equally centered, and equally animated? If yes, vary the hierarchy and pace.
3. Are there more visual effects than meaningful product details? If yes, remove effects and strengthen content.
4. Does a key action depend on hover, drag, tiny text, faint contrast, or unexplained icons? If yes, repair that path.
5. Are testimonials, numbers, logos, or product promises invented? If yes, remove or obtain real content.
6. Does the mobile version preserve the same intent and actions rather than merely stack desktop blocks? If no, compose it deliberately.

## Standards used for factual thresholds

- [W3C WCAG 2.2, contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [W3C WCAG 2.2, target size minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)
- [W3C WCAG 2.2, focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum)
- [web.dev, layout shift and reserved image space](https://web.dev/articles/optimize-cls)
