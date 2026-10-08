# Evaluate the skill by outputs, not by document length

Use this when revising the skill or deciding whether a design genuinely follows it. This is an **evaluation procedure**, not an instruction to build every listed screen for every user request. Keep test artifacts separate from published examples until the owner accepts them. Do not call a text-only response visual validation.

## 1. Separate four questions

1. **Activation:** Does Codex load this skill for relevant design requests, including implicit requests? Does it stay out of backend-only or tightly constrained non-visual work?
2. **Direction:** Does it find a product-specific subject and choose a composition for a reason, while honoring an existing brand or explicit alternative taste?
3. **Execution:** Do actual renders exhibit a coherent visual language, a clear focal point, changing page rhythm, readable small controls, and sensible desktop/mobile composition?
4. **Use:** Can a person locate the object and action, operate controls, understand states, and recover? Static images can only partially answer this; running UI needs separate interaction checks.

Record each separately. A beautiful hero cannot compensate for an inaccessible form; a working form does not prove art direction. Skill activation, document validity, rendered appearance, and task behavior are different evidence types.

## 2. Small prompt set

Run the same brief with and without this skill in isolated workspaces where practical. For an explicit `$web-ui-art-direction` case, remove only that invocation from the control prompt; keep the product facts, assets, model, and output request the same. Do not tell a reviewer which result used the skill. Use supplied assets and facts only; unknown claims must be marked as illustrative.

| ID | Prompt condition | Should load? | What this tests |
| --- | --- | --- | --- |
| A1 | Explicit `$web-ui-art-direction` request for a public website with an open visual brief. | Yes | Direct invocation, subject-led composition, purposeful section rhythm. |
| A2 | Implicit request to redesign a bland product page with supplied photographs and content. | Yes | Discovery through metadata; keeps real material and copy. |
| A3 | Authenticated workspace spanning home, list, detail, editing, and one failure state. | Yes | One object remains traceable; visual intensity changes with task. |
| A4 | Component-only review of nav, primary button, form, and table in an established UI. | Yes | Precise controls without imposing a new campaign look. |
| B1 | Existing brand specifies a cool palette, serif display face, and conservative audience. | Yes | Explicit brand overrides the owner's warm editorial preference. |
| B2 | No usable photography or product imagery is available. | Yes | Honest typography or illustrative structure instead of fake product proof. |
| B3 | Dense operational table with many records and statuses. | Yes | Quiet working surface; scan and comparison outrank spectacle. |
| N1 | Backend-only schema or API change with no interface decision. | No | Avoids false activation. |
| N2 | Narrow bug fix that preserves the current interface exactly. | No | Does not expand scope into redesign. |
| N3 | Request for design analysis only, with no implementation authorization. | Yes | Stops at analysis; does not write code or publish. |

The product brief inside each condition should vary across rounds. Do not train the skill on one domain or one accepted image. Include Vietnamese long text, real content gaps, and at least one existing-brand conflict. For render comparisons, capture a wide desktop and narrow phone; include a state beyond the default. Keep model, brief, asset set, and time budget the same between control and skill runs.

## 3. Visual and UX rubric

Judge the work with the actual brief beside it. Score each dimension **0 = absent/contradictory, 1 = present but weak, 2 = clear and coherent**. Cite a visible region or behavior for every score. This rubric is a diagnostic, not a claim of statistical precision.

| Dimension | Evidence for a strong score |
| --- | --- |
| Product specificity | The subject, copy, data, and imagery could not be swapped into an unrelated product without revision. |
| Visual authorship | One discernible idea governs type, material, crop, shape, and accent; it is not a stack of unrelated trends. |
| Hierarchy and rhythm | The first focal point and next action are unmistakable; subsequent sections or screens change pace according to their job. |
| Taste fit | When the brief is open, at least two mechanisms from the owner's selected references are visible in specific places, such as subject-led staging, editorial type, purposeful light, or chapter contrast. A palette name alone is insufficient. When brand is fixed, it honors the brand. |
| Component continuity | Header, navigation, buttons, inputs, tables, states, and icon treatment feel related while serving different priorities. |
| Task clarity | The user can find the current object, status, action, result, and recovery route without relying on decoration. |
| Responsive and readable | Text, crop, navigation, controls, and state messages work at desktop, narrow width, and zoom; Vietnamese accents render correctly. |
| Truth and scope | No invented metrics, testimonials, capabilities, or functional-looking dead ends. Mockups and illustrative data are labeled. |

### Hard failures

Regardless of score, require revision for an unreadable primary action, materially false claim, fabricated real-person/customer proof, broken task path, missing essential state, or wholesale copying of a reference's artwork/layout. A mockup may show a proposed path, but must say it is not implemented. For a live implementation, test its real behavior before saying it works.

## 4. Evidence capture

For each run, record:

```text
Brief ID and exact prompt:
Skill version / Git commit:
Run mode: explicit / implicit / control:
Assets and known facts supplied:
Artifacts: direction note, screenshots, running URL or local path:
Viewport sizes and states inspected:
Activation observed? Which references were read?
Rubric scores with one observed reason each:
Hard failures:
What was verified in a browser, and what is only a static proposal:
Owner decision: accepted / revise / rejected / not yet reviewed:
```

A first pass can be small: one public page, one authenticated flow, one existing-brand conflict, and one negative activation control. Expand only when a real failure reveals a missing case. Compare outputs side by side and prefer a narrow skill correction to adding more universal rules.

Treat a revision as an improvement only when it has no new hard failures, does not weaken task clarity or truthfulness, and improves product specificity or taste fit on more than one unrelated brief. A text-only probe can assess reasoning and scope, but **must leave visual execution, responsive composition, and interactive behavior unscored**. Record that limitation instead of turning a good written proposal into a claim that the UI looks good.

## 5. What an accepted example means

An example becomes a **visual baseline** only after the owner has reviewed the renders and approved the direction. Record what was approved: subject, typography, composition, materials, component treatment, and limits. Do not generalize a chosen layout or palette into a mandatory template. An unapproved prototype can be used as a test artifact, not as proof that the skill matches the owner's taste.
