# Component direction for the owner's visual taste

Use this with [owner-style.md](owner-style.md) when the brief is visually open and the owner's cinematic editorial taste fits the product. The general behavior contract remains in [component-craft.md](component-craft.md); this document explains **how the controls should look and feel together**, without making a marketing poster out of a working interface. Inspect existing components and tokens before changing them.

## The component principle

The selected images derive their force from a few deliberate contrasts: large type against fine structure, ember light against quiet dark or warm-white surfaces, and one foreground subject against uncluttered surroundings. Translate that into components as **a hierarchy of emphasis**:

1. **Scene level:** one memorable subject or interaction can be expressive.
2. **Task level:** the current action, object, and status must be obvious.
3. **Control level:** repeated controls should be consistent, legible, and nearly invisible when not needed.

Do not give every button a glow, every card an orange gradient, or every icon a custom sculptural treatment. A distinctive page needs a dependable set of ordinary controls beneath its main visual move.

## Foundation decisions before drawing controls

| Decision | Direction | Check in the real interface |
| --- | --- | --- |
| Type roles | Display sans with strong shapes; practical UI sans may be the same family. Define display, page title, section title, body, label, and metadata. | Vietnamese diacritics, long labels, font fallback, line breaks, 200% zoom. |
| Accent | Ember/orange-red marks a leading action or a live product moment. Neutral ink and warm surfaces do most of the work. | Meaningful contrast; warning/error/success retain separate semantics. |
| Geometry | Choose one corner family, often modest radii with an occasional special shape for a hero or feature panel. | A special corner must recur for a reason, not appear randomly on controls. |
| Borders and depth | Hairline dividers and restrained surface shifts for structure; deeper shadow or light only around the focal subject. | Boundaries remain visible in dark and light modes, high zoom, and low-quality displays. |
| Spacing | Use a small, repeatable scale; give the main composition room while repeated controls align tightly. | Label, value, hint, error, and action remain visually grouped. |
| Icons | Choose one stroke/filled logic and optical size. Use icons to reinforce a labeled action or familiar control. | Icon-only actions have accessible names and comprehensible touch affordances. |
| Focus and selection | Focus is a clear outline/halo independent of hover; selected state uses shape, indicator, or text as well as color. | Keyboard path remains visible on photo, orange, black, and warm-white surfaces. |

Illustrative values can help a first pass, but should never override the existing product system. Try a 4/8px spacing rhythm, 1px structural borders, approximately 14–16px operational text, and a focus outline thick enough to remain visible. Set final values with the actual font, density, device, and accessibility checks. Component polish comes from consistent relationships more than from exact token numbers.

## 1. Public header and navigation

The marketing header frames the scene; it should not become a second hero. A compact brand mark, a few plainly named destinations, and one relevant action are often enough. On a dark or photographic opening, establish a reliable contrast layer behind text or move the header onto its own surface. Do not place white nav text over an uncontrolled image crop.

- **Desktop:** align brand, destinations, and action to the page grid. A centered floating capsule can suit a studio site, but it should not reduce readable label space or obscure the hero. Avoid ornamental links such as “Explore” when a concrete destination is available.
- **Scroll behavior:** if sticky, use a stable surface after the first scene. Check that anchors, keyboard focus, and headings are not covered. Do not animate the header so aggressively that navigation shifts under the pointer.
- **Mobile:** show a recognizable menu trigger with a label when the icon might be ambiguous. The opened menu should expose destinations and the primary action, identify the current page, trap or manage focus as appropriate to its pattern, and close predictably. A full-screen orange menu is only useful if it still lets people navigate easily.
- **Active state:** use an underline, marker, weight, or position in addition to color. Marketing navigation can be quieter than app navigation, but never invisible.

## 2. App shell, sidebar, and page header

Carry identity through a restrained wordmark, selected nav marker, type, and small accent. The shell should stay stable as the user switches tasks. If a dark shell surrounds a warm-white work canvas, let the canvas hold tables, forms, and long reading; avoid making every work panel black simply to match the landing page.

- Separate **global destinations** (workspace, practice, history, settings), **workspace context** (team/project), and **page actions** (create, retry, save). Do not put all three in one pill-shaped row.
- The current destination must remain visible after hover ends. In a collapsed sidebar, preserve meaning through tooltips or an expansion path; on touch, use a labeled mobile navigation mode rather than a row of mysterious icons.
- A page header should name the object or task, show any consequential status, and give one leading action for that context. Keep a return path where users move between list and detail. Do not duplicate the leading action in shell, header, empty state, and floating button unless each position solves a real access problem.
- Use large editorial type sparingly inside the app: welcome or first-use can be expressive; a table page title should leave room for the table and toolbar.

## 3. Buttons and action links

Build a small action hierarchy. A **primary button** can use a saturated ember fill with high-contrast text; a **secondary** can use a solid neutral or outlined treatment; a **tertiary** can look like a quiet text action. Destructive actions need their own semantic treatment. The hot accent means "the next important step" only while that is true for the local task.

| State | Visual and content requirement |
| --- | --- |
| Default | Verb-led outcome label, sufficient target size and internal padding; icon only when it adds meaning. |
| Hover | Small change in fill, border, or elevation; avoid motion that moves the click target. |
| Focus | Clearly visible outline with separation from the button edge; works over all backgrounds. |
| Pressed/active | Distinct tactile change, without implying permanent selection for a momentary action. |
| Loading | Keep width stable; say “Đang lưu…” or name the object being created where progress cannot be inferred. Prevent accidental duplicate submission. |
| Disabled | Explain why where useful; retain readable label. Do not use disabled styling to hide a permission problem. |
| Error/success | Show result close to the affected task; a color flash on the button alone is insufficient. |

Use a link when the destination is a page, even if it is visually styled as a button. “Bắt đầu luyện tập” and “Xem lịch sử” communicate different outcomes. Avoid a generic arrow as the only cue. If the action is icon-only (playback, close, menu), verify its accessible name and visible affordance at touch size. The exact minimum target requirement depends on the adopted standard; check the implemented control against [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and the product's accessibility target.

## 4. Cards, panels, and content hierarchy

The references use varied panel sizes because content differs. Make that relationship explicit:

- **Feature panel:** one larger subject, product state, or proof item; may use strong image and light. Its title and action must remain readable if the image fails or crops.
- **Work card:** an object with a status and next action. Its content order should be identity → state → relevant evidence → action, not decorative metric → generic advice → small link.
- **Comparison card:** repeated peers need a common structure, enough information to distinguish them, and equal interaction rules. Unequal visual scale should reflect a meaningful recommendation or priority, not an arbitrary alternating layout.
- **Supporting panel:** quiet, often warm-white or dark neutral, with a thin boundary. It may explain rather than compete.

Use image crop, typographic size, span, and surface tone to control priority. A card should have a clear clickable region: either the whole card is one link or specific actions are individually interactive. Avoid nested click targets with conflicting meanings. Show a keyboard focus state on the actual interactive element. Do not put tiny faux metadata in corners to mimic a screenshot.

## 5. Fields and form sections

Forms are the quietest part of this style. Use a stable surface, strong label/value contrast, and restrained accent for focus or selection. A cinematic background may frame a sign-in page, but the field area itself should be calm.

- Keep labels visible after typing. Place help and errors near the field; an example placeholder is supplementary.
- Use appropriate input types and sensible width. A password or email field should not inherit an extreme ultra-wide editorial proportion just because the hero is wide.
- Group fields by the user's mental model. A two-column layout is useful only when it preserves reading order; collapse it logically on narrow screens.
- An invalid field needs text that says what to fix, not just an orange border. Reserve orange for brand/focus and a distinct semantic treatment for errors.
- Preserve entered values after errors. For long forms, provide a summary and move focus to a useful repair point.
- Distinguish optional, required, read-only, disabled, saving, and saved. A user should not need to infer these from opacity alone.

**Example:** A creation form should ask only for fields the product actually uses. It should not show a decorative “98% phù hợp” metric without a real calculation. The leading action should name the object being created; an error should identify the field or service that prevented creation and preserve the choices.

## 6. Tabs, filters, and segmented choices

Tabs can carry an editorial feel through confident labels and a thin selected rule. The rule must remain visible over dark and light backgrounds. Use tabs for peer content inside one object, such as “Tổng quan / Chi tiết / Lịch sử”. Use a filter or segmented control to change which items appear, and a stepper only for a real sequence.

Keep the number of visible choices manageable. If labels wrap, do not shrink them into microscopic pills; use a scrollable tab list with clear affordance or a different navigation structure. A selected filter should show its value, count when meaningful, and a way to clear it. Keyboard behavior should follow the component pattern in use.

## 7. Lists and tables

Treat data as content, not as a graphic texture. A table can still feel part of the identity: crisp sans headings, consistent row rhythm, fine separators, one ember selected marker. Keep the body calm. Do not put glowing gradients behind data cells or turn each row into a card without a reason.

- Put identifying information and decision fields first. Align numbers for comparison; label units and date ranges.
- Show status as text plus a distinct icon/shape or treatment. “Đang xử lý”, “Hoàn tất”, and “Cần làm lại” should not share the same orange chip.
- Make sorting, active filters, selected row count, and bulk-action scope visible. Do not rely on an unlabeled chevron to signal sort direction.
- Provide overflow handling for long Vietnamese names and missing values without hiding the only distinguishing detail. On mobile, choose a priority-based row layout or explicit horizontal table strategy; do not silently drop essential columns.
- Keep row navigation and inline actions separable. Avoid hover-only controls that disappear for touch and keyboard users.

## 8. Dialog, drawer, toast, and persistent feedback

A dialog or drawer may borrow the system's corner and type language, but its purpose controls its intensity. A short confirmation can use a strong title and neutral surface; a long editing task deserves a full page or structured drawer. Do not place an irreversible decision on a hot orange background that makes the consequence hard to read.

For a dialog, identify the affected object, result, leading action, cancellation route, and focus behavior. For a drawer, preserve enough context from the underlying object and make its close/save behavior predictable. A toast can confirm a low-risk success; a failed upload, lost input, or unsaved form needs persistent, actionable feedback. Tone should become direct when the user is blocked, regardless of how playful the brand is elsewhere.

## 9. Media, recording, and review controls

If the product involves audio/video, the **recording state is not decoration**. Give start, active, paused, stopped, uploading, and failed states distinct labels and controls when supported. The current status must be understandable without animation or color. Provide elapsed time if useful, microphone permission guidance, and a clear consequence for stopping or discarding. A waveform can support the scene but must not be the only proof of recording.

Playback needs familiar controls, time position, speed if relevant, and an accessible transcript path. In a review screen, connect comments to real transcript or answer spans; glowing abstract progress bars should not masquerade as evidence. If the product has no actual audio pipeline, label the screen as a prototype rather than showing a functioning-looking record button.

## 10. Responsive and state review

Check the same component family across a wide desktop, ordinary laptop, narrow phone, long content, and 200% zoom. Review keyboard focus and reduced motion. Capture at least one default and one consequential state for repeated controls. Ask:

1. Does the leading action stand out because of task priority, or merely because it is orange?
2. Can a person read the control label and result without relying on the image treatment?
3. Are selected, focused, loading, disabled, error, and success states visibly different where they occur?
4. Do corners, border weights, icon strokes, and spacing look related across pages?
5. If all glow and imagery disappear, does the information architecture still work?

For behavioral checks and pattern choice, return to [component-craft.md](component-craft.md). For the multi-screen context, read [owner-product-ui.md](owner-product-ui.md).
