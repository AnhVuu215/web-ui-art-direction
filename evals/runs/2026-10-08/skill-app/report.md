# Bản thảo — authenticated workspace pilot

## Direction and alternatives

The subject is the article being assigned, rather than an abstract dashboard. An editor finds BT-042 in a queue, opens its identity and status, chooses an assignee, recovers from a simulated save failure, and returns to the same filter with the saved name visible.

I compared two compositions: (1) a spacious editorial queue followed by a separate article detail, and (2) a dense queue with a permanently open inspector beside it. I chose the first. The three supplied rows do not need a permanent inspector, and the full detail gives the long Vietnamese title and its assignment decision a clear reading order at both desktop and mobile widths.

The chosen direction is a paper workbench: warm neutral canvas, near-black compact masthead, strong sans-serif article typography, thin editorial rules, and rust reserved for the useful assignment action. The queue is calm and aligned; detail gives the exact article title more presence. Green, amber, and blue distinguish statuses independently of the rust accent. No photography or reference pixels are embedded.

## Skill and visual evidence

Used the explicitly requested current custom skill `D:\UI\web-ui-art-direction\SKILL.md`. Read its product UI, owner product UI, component craft, owner components, owner style, owner image study, and reference details guidance. No other art-direction skill or evaluation control was inspected.

Actually opened the following original JPGs through `view_image`:

- `21ae9f90f826cbd33a35d0a9cd531089.jpg`: the large typographic statement occupies the opening while supporting text sits on separate axes. Transfer: a confident page title above a restrained queue, followed by an actual object title in detail. The interface does not borrow its layout, imagery, logos, or pale low-contrast text.
- `50223f7ca6df60f8baf407b29cb0d033.jpg`: the compact dark header frames a forceful scene, then the pale chapter changes intensity. Transfer: a compact dark masthead over a calm paper work surface, with the article title taking the focal role instead of a borrowed sculptural mark.

Only these two originals were visually inspected. Written descriptions of other references were read but are not counted as image inspection.

## Implemented journey

- Queue uses the three exact supplied article IDs, titles, statuses, and initial assignees. BT-042 shows the supplied update date; the other two show an explicitly explained missing-value dash.
- Native labeled selects expose queue filter values `all`, `pending`, `editing`, `approved` and exactly the three assignee names.
- BT-042 opens a full detail with current assignment separate from the editable selection. Unchanged selection disables saving; changed selection has visible unsaved feedback.
- The first save deliberately fails after a short visible saving state. Demo wording names the failure, preserves the selection, and offers retry. Retry changes both detail and queue assignment and announces success.
- A selected queue filter is preserved during navigation and return, including a URL filter parameter. Browser history is handled. Focus moves to the detail heading on entry and returns to the article link where available; queue scroll position is restored during the normal journey.
- `?view=detail` opens the default detail. `?view=detail&state=error` deterministically opens the error with Minh Khang selected and retry enabled. An optional `filter` query parameter allows a repeatable filtered starting state.
- Visible prototype/sample labeling, local inline CSS/JavaScript, no backend, no network calls, no external services. No analytics, statistics, testimonials, article body, or additional product facts were invented.
- Mobile recomposes table rows into readable two-column groups, keeps essential metadata and actions, and places the assignment panel after the article. Visible focus outlines, skip link, live save status, and reduced-motion CSS are included.

## Verification actually run

Source checks using local Node passed: inline JavaScript parses; DOM IDs are unique; all six required test IDs are present; no HTTP(S) URL appears in the file; the three requested local Be Vietnam Pro font assets exist. Font URLs use the exact requested final-folder relative paths.

Computed foreground/background contrast from the implemented solid colors: body 13.65:1; muted text 5.16:1; primary action 6.17:1; error 6.81:1; success 7.14:1; pending status 6.04:1. These are numeric source checks, not a complete accessibility audit.

Browser interaction, keyboard traversal, rendered font loading, 1440/390 screenshots, and visual QA have not been performed by this agent. The parent owns shared runtime checks and rendering. Source inspection alone does not establish runtime success or responsive appearance.

Only `index.html` and this `report.md` were written. The original JPGs and repository documentation were not changed.
