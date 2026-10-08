# Đổi sách cuối tuần — prototype report

## Scope

- Standalone Vietnamese frontend in `index.html`, with inline CSS and JavaScript.
- Condition: Control. No custom art-direction skill, analysis document, other UX/UI skill, other trial, previous output or evaluator score was read or used.
- Only the assigned prompt, the allowed original JPGs and the local font filenames were inspected.
- The visible prototype banner, registration copy, FAQ and footer identify the event as fictional and all actions as simulated.
- Supplied date, time, venue, free participation, 1–3 readable books and three schedule slots were retained. No sponsors, organizers, contacts, attendance, customer claims or testimonials were added.

## Original JPGs actually opened

All seven were opened individually with the image viewing tool:

1. `16233b3d54a543caec9fdeede60292fb.jpg`
2. `21ae9f90f826cbd33a35d0a9cd531089.jpg`
3. `50223f7ca6df60f8baf407b29cb0d033.jpg`
4. `5fbabad0075a50b928c38ca16e327043.jpg`
5. `85b954e2c242a7fc82980b05d4852d5e.jpg`
6. `be8fa1a3bd8dfb307c17dc1ff4b67531.jpg`
7. `ed8d239bca32ace72f715f222ab6d89e.jpg`

Their pixels, logos, names and copy were not embedded.

## Design decisions

- Warm paper background, charcoal typography and a restrained orange accent suit the reading context. The images informed large typography, generous spacing, orange emphasis and alternating light/dark surfaces.
- The exact headline is the principal visual anchor. Its second sentence uses orange to connect the message to the registration action.
- An original inline SVG depicts an open book, a bookmark and stacked books. It is labeled as an illustration, with no photography or event evidence implied.
- A ruled facts strip makes the supplied date, time, sample venue and price easy to scan. Three numbered exchange steps lead to the compact schedule.
- The registration block places the event reminder on a charcoal panel and native form fields on a light panel. On smaller screens it becomes a single vertical flow.
- Four native `details`/`summary` FAQ entries cover book count, cost, accessibility notes and the simulated nature of registration.
- Local BeVietnamPro Regular, Medium and Bold use the exact required relative font paths.
- Responsive CSS includes intermediate and mobile breakpoints, intended for 1440 px and 390 px viewports. Visible focus styles, a skip link, native labels, radio grouping, a live feedback region and reduced-motion CSS are included.

## Interaction behavior

- Form: required name/email, native radio choices for 1–3 books and an optional resizable accessibility textarea without a character limit.
- The first valid submit deliberately fails. All fields remain unchanged, feedback explains the simulated failure and the primary button becomes “Thử lại đăng ký mẫu”.
- Retry succeeds locally, displays an explicitly simulated confirmation and disables the submit button to prevent repeated submission. Editing a field enables a local update.
- `?state=error` pre-fills `Người đọc mẫu`, `nguoidoc@example.com`, count `2` and the failure feedback. Its next submit succeeds.
- User values are inserted through text nodes. No fetch, external service, persistent storage or email delivery is used. Refreshing the page resets the ordinary form.
- Required hooks exist on the actual elements: `data-testid="work-form"`, `data-testid="primary"`, `data-testid="feedback"`.

## Checks actually run

Node.js v22.21.0 read the saved HTML and ran these checks from stdin, without generating additional files:

- JavaScript syntax compilation with `vm.Script`: passed.
- Existence of all three fonts at the required paths resolved relative to this HTML: passed.
- Exactly one occurrence of each required test ID in HTML markup: passed.
- Presence of supplied facts, four native FAQ disclosures, reduced-motion and mobile rules: passed.
- Static checks for absence of external script/link resources, image/iframe embeds, network calls and persistent storage calls: passed.
- Executed the inline script with a small DOM stub: first submit fails, preserves name/email/count and a 24,000-character accessibility note; retry succeeds and preserves values; editing allows another successful save: passed.
- Executed the error query initialization: demo name/email/count `2`, initial failure and successful retry: passed.
- Whitespace-only name produces a custom validation message; input clears that message; the next valid attempt follows the deliberate failure flow: passed.

The initial test harness counted selector strings inside JavaScript as duplicate HTML test IDs. The harness was corrected to inspect markup only and then all checks passed; no interface change was needed.

## Verification limits

No browser render, screenshot, native browser form-validation check, measured 1440/390 layout check, keyboard traversal or screen-reader test was run by this implementation agent. DOM-stub checks establish script behavior, not browser or visual proof. The saved first attempt is ready for the root's shared browser opportunity; no evaluator feedback was received or used to revise it.
