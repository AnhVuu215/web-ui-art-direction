# Bản thảo — control artifact

## Decisions

- Standalone HTML/CSS/JavaScript editorial workspace, with no backend, remote asset, or dependency.
- Viewed all seven original owner reference JPGs. Used an independent cream, charcoal, and orange treatment, large Vietnamese headings, compact metadata, a simple left navigation, and native form controls. No original JPG is included or reproduced.
- Did not read or apply the custom `web-ui-art-direction` skill, its analysis documents, or another art direction skill.
- Used supplied sample article IDs, titles, statuses, and assignees. BT-042 shows its supplied update date. Other article update dates display an em dash because the brief did not supply them. Counts are computed from the three sample articles.
- Queue filter values: `all`, `pending`, `editing`, `approved`. Option labels are Vietnamese. Assignee option values are the exact displayed names.
- First save attempt in a detail visit fails after a short simulated wait. The notice explicitly says this is a demo simulation, keeps the selected assignee, and changes the primary action to “Thử lại”. Retry succeeds and updates the queue's assignee.
- Session storage preserves filter, draft assignee, and saved BT-042 assignee. Storage failures fall back to in-memory behavior.
- Detail and error routes are `?view=detail` and `?view=detail&state=error`. A direct error route can retry successfully.
- Focus rings, a skip link, semantic buttons/selects/labels, a live save status, disabled form controls while saving, and focus restoration when returning to queue are included.
- Layout adapts the table into article rows at mobile widths; the long Vietnamese title wraps. The assignment form moves below article information.
- Font URLs are `../../../../assets/fonts/BeVietnamPro-*.ttf` for the root agent's destination under `web-ui-art-direction/evals/runs/2026-10-08/control-app/`, as requested. Local font copies also exist in this working directory but are not referenced by the final HTML.

## Checks actually run

Command: `node D:\UI\.analysis\eval-2026-10-08\control-app\verify.cjs`

Result: exit 0. JavaScript parses; required test ID source tokens are present; `lang="vi"` is present; no remote URLs/imports occur; Vietnamese UTF-8 title is intact; mobile breakpoint exists; explicit demo failure notice exists.

These are source checks. The parent agent will perform desktop 1440 and mobile 390 browser rendering and interaction checks using the common evaluation harness. Visual quality, overflow, runtime interactions, and real keyboard behavior have not been validated by this subagent.

## Limitations

- Local demo only; no real server, user authentication, or persisted cross-device state.
- Parent must copy the artifact to the stated evaluation location for font URLs to resolve.
- Sample article content is represented by title and workflow metadata; the supplied brief did not provide body text.
