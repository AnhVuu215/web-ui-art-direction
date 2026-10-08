# Carry the owner's art direction into the product after sign-in

Use this with [owner-style.md](owner-style.md) and [product-ui.md](product-ui.md) for a multi-screen app when the owner's selected visual direction fits. This document describes **how to distribute expression across work**, not a fixed dashboard template. Existing brand, real user tasks, domain rules, and accessibility requirements govern the final design.

## The governing distinction

A public page may spend most of its first screen earning attention. An authenticated product must help someone continue work. The same identity can appear at different intensities:

| Surface | Appropriate expression | What must lead |
| --- | --- | --- |
| Public hero | High: cinematic scene, dramatic type, orange/red light, one subject. | Product promise and next action. |
| Sign-in and onboarding | Medium: memorable framing around a calm form or first step. | Account task, trust, and recovery. |
| Workspace home | Medium to low: strong greeting or featured task, restrained supporting panels. | What needs attention now. |
| Lists, tables, forms, settings | Low: type, grid, small accent, precise controls. | Scan, compare, enter, change, recover. |
| Meaningful milestone/result | Medium: a designed moment around real output and a next step. | Evidence, interpretation, and action. |

This is an intensity map, not a rule that work screens must be dull. Product personality can live in precise information, language, contrast, and material without slowing repeated tasks.

## 1. Find the real object and journey

Write **role → goal → object → action → visible result → recovery** before choosing screens. The object might be a practice session, candidate, recording, order, project, file, or report. Use the user's words, not generic `Overview / Activity / Insights` labels. Then choose the *one moment* from that journey that deserves the strongest visual treatment.

For each screen, write a short contract:

1. **Arrival:** Why is the user here? From what prior state?
2. **Question:** What must they decide or understand?
3. **Evidence:** What data, content, or status answers that question?
4. **Action:** What can they do next, and what changes?
5. **Feedback:** How will they know it worked or failed?
6. **Return:** How can they resume or revisit it?

If a card, chart, photo, metric, or button does not support that contract or the brand story at the right intensity, remove or move it.

## 2. Define a shared identity without cloning the landing page

Build a small translation sheet before screens:

| Landing-page device | Product translation | Guardrail |
| --- | --- | --- |
| Oversized display type | One strong first-use or milestone statement; restrained page-title scale elsewhere. | Do not consume the working viewport with a slogan on every visit. |
| Ember light/gradient | Leading action, active recording, selected focal module, or transition illustration. | Do not color every status or data card orange. |
| Near-black chapter | App shell, media-review surface, or focused activity when contrast is controlled. | Do not force a dark canvas behind long forms and tables. |
| Warm-white pause | Main reading/editing surface with crisp ink and borders. | Preserve hierarchy; “quiet” must not become low contrast. |
| One person/object/product scene | An honest product view, real session, or relevant content preview. | Avoid generic portraits and fake UI inside devices. |
| Thin editorial rules | Section separators, table dividers, active nav markers. | Structural lines need sufficient visibility and consistent alignment. |
| Asymmetric panels | Feature the next important task or result among quieter modules. | Do not make layout unpredictable between repeated work screens. |

Define semantic roles for canvas, surface, raised surface, text, muted text, border, accent, focus, selected, success, warning, and error. Keep semantic status independent of brand heat. Record type roles and component density. Reuse those decisions across screens; a new visual metaphor on each page weakens the product.

## 3. Screen patterns in a coherent system

### Workspace entry

Answer “What should I do next?” before “How does this product feel?” If an unfinished object exists, show it prominently with its status, relevant context, and continuation action. If no work exists, make the first task easy to start. A short editorial greeting can set tone, but should not push the active work below the fold.

Avoid a row of equal cards for every feature, a large decorative quote, or unsourced metrics. Visual variety can come from one lead work panel, a concise history list, and a smaller learning/help module. The lead panel can use ember or dark treatment if it contains a real action, not merely a slogan.

### List, search, and filter

Show scope: whose items, which workspace, what time range, which filters. Let users scan names, status, dates, and relevant measures. Keep filter state visible and preserve it when opening an item and returning. Use a table when comparison matters; use cards when visual previews or varied content matter. If there are no results, distinguish a genuinely empty collection from a filter that found nothing.

This screen usually needs the calmest visual treatment. A small orange selected marker or clear primary action is enough. The product's character comes from the language, typography, and exact information, not from a gradient behind every row.

### Detail and review

Lead with object identity, current status, and the decision or action the user can take. Put supporting evidence nearby: transcript excerpt, source record, timeline, attachment, or previous version. If using tabs, each tab should contain peer views of the same object; do not hide essential cross-reference information when users need to compare it.

A result can become a designed moment. Use a strong title and a carefully lit or dark panel around the key finding, then give the user traceable evidence, interpretation, and next step. An abstract score is weaker than a concrete example tied to what the user said or did. Clearly label illustrative sample data.

### Create and edit

Prioritize field grouping, defaults, validation, save state, and exit. Use stable light surfaces where long reading or typing occurs. Distinguish draft, saved, and unsaved changes. Provide a review step only when it prevents mistakes. An editing screen can retain identity in typography and borders without a large hero.

### Processing and async work

Say what is processing and whether the user can leave. If progress is unknown, avoid a fabricated percentage. Preserve the object and its state across navigation where the product supports it. Handle cancellation, timeout, and retry distinctly. A warm moving highlight can make a waiting moment feel designed, but the status must remain clear with motion reduced or off.

### Settings, permissions, and admin

Explain scope and consequences. Group settings by user goal, not backend entity names. Avoid marketing language on billing, deletion, access, or security screens. For role restrictions, show actions accurately; UI visibility is not authorization. A visually quiet settings area can still feel related through type, spacing, and one restrained accent.

## 4. One illustrative AI interview-practice flow

This is a **design exercise**, not a claim about an existing product, scoring model, recording pipeline, privacy policy, or AI capability. Replace copy and states with the actual product contract before implementation.

| Screen/state | User question | Evidence and controls | Where the owner's style appears |
| --- | --- | --- | --- |
| Home, returning user | “What should I practice now?” | One unfinished practice, next question, recent sessions, clear “Tiếp tục” or “Bắt đầu buổi mới”. | Confident sans title; one lead panel with purposeful warmth, quiet history beneath. |
| Choose question | “Which scenario fits my goal?” | Role, difficulty or topic only if meaningful; question preview, estimated time if known, start action. | Editorial headline around the actual question; strong type and clean option hierarchy. |
| Record answer | “Am I recording and what happens if I stop?” | Question stays visible; microphone permission, start/stop, elapsed time, status, discard/retry path. | A focused dark recording stage and ember live indicator; no decorative waveform as sole state cue. |
| Processing | “Was my answer saved and can I leave?” | A named session and explicit processing status; safe return path; error/retry if processing fails. | One restrained signal/light motif; no made-up progress number. |
| Review result | “What did I say well and what should I change?” | Transcript or answer excerpt, specific annotated feedback, confidence/limitations where relevant, one next practice step. | Strong result headline; contrast between focused evidence panel and calm explanatory surface. |
| History/detail | “Can I compare and resume?” | Dated sessions, clear status, filters, stable detail path, relevant comparison if supported. | Precise rows and fine dividers; orange reserved for selection or next action. |

Example microcopy should remain specific. “Bạn đã nêu kết quả nhưng chưa nói rõ vai trò của mình” is more useful than “Cải thiện kỹ năng giao tiếp”. A review annotation should point to a real excerpt or event. If the prototype lacks transcription or scoring, show representative sample content with an explicit prototype label rather than implying live evaluation.

The first HiReady trial is a useful negative case: its sage/rust/serif/circle combination and quote-like coaching panels did not connect to the chosen reference family or to the actual speaking/review task. Replacing that with more orange alone would repeat the problem. The product needs a credible recording moment, an answer object, and evidence-based feedback across screens.

## 5. Information density and responsive behavior

Use density according to the work:

- A first-use explanation may have generous spacing and display type.
- A repeat-use queue should fit enough items to scan without hiding status or actions.
- A transcript/review may need long-form reading, line references, and contextual annotations.
- A recording screen needs few controls, clear state, and strong focus.

On narrow screens, preserve the **sequence of thought**: identity → current status → key evidence → action. Reflow multi-column desktop compositions rather than shrinking them. If a side panel becomes a drawer or a table becomes stacked rows, verify that context, filters, and actions remain findable. Test long Vietnamese text, large user-generated content, mixed languages, and 200% zoom. A dramatic desktop overlap is optional; the task path is not.

## 6. State language and trust

The same visual system must explain at least:

| State | Distinct explanation and next step |
| --- | --- |
| First use | What the space is for and the first real action. |
| No records | How to create one, if allowed. |
| No filtered results | Which filter/query caused the result and how to clear it. |
| Loading | What is being loaded; preserve layout where possible. |
| Recording permission denied | What permission is needed and how to retry or choose an alternative. |
| Processing delay/failure | Whether the answer was preserved, what is delayed/failed, and retry/support path. |
| Save failure | Which changes remain unsaved; preserve user input. |
| Restricted role | Why an action is unavailable at the level the product can safely disclose. |
| Success | What changed and where to continue. |

Do not decorate an uncertain state into apparent certainty. Scores, feedback, testimonials, and outcome metrics need actual product evidence. A screenshot cannot prove a recording works, that an AI conclusion is valid, or that a state survives refresh. Verify those claims in the implemented system before reporting them.

## 7. Visual review across a flow

Render representative screens side by side, then test the flow in the running product when available. Ask:

1. Is there a recognizable identity across the landing page, sign-in, workspace, task, and result without repeating one layout everywhere?
2. Does each screen have a clearly different job and a corresponding visual intensity?
3. Can users identify the current object, its status, and the next action within a few seconds?
4. Does the strongest visual treatment occur at a meaningful product moment?
5. Are forms, lists, tables, and status messages calmer and more legible than the hero?
6. Does feedback cite actual user content or data instead of abstract decoration?
7. Can users recover from errors, denied permissions, interrupted processing, and narrow-screen layout changes?
8. What has been tested in a browser or product, and what remains a static proposal?

Use [owner-components.md](owner-components.md) for the control details and [product-ui.md](product-ui.md) for the broader behavior and information architecture. A coherent style is successful only when people can complete the task.
