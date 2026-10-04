# Worked example: a team project workspace

This is a design reasoning example, not a copy of Linear, GitLab, or another product. Assumed brief: “Build a Vietnamese web app where a small team can find overdue work, assign an owner, and mark an item complete.” Real field names, permissions, and statuses must be confirmed with the product owner before implementation.

## Task and roles

- A team member needs to find an overdue item, understand its context, update the owner, and see that the change saved.
- A manager needs a quick view of what is blocked and who owns it; they may have extra assignment rights.
- The primary object is a work item. Its minimum useful attributes might be title, status, owner, due date, and project; the actual data model decides.

## Direction

“A calm operations desk”: clear typography and stable alignment for fast scanning, one warm accent for active work, restrained separators, and plain Vietnamese status language. The distinctive detail is a small timeline cue linking due date and status on the detail view. Avoid a hero-sized chart and decorative cards on the daily work queue.

## Journey and surfaces

| Moment | User need | Proposed behavior |
| --- | --- | --- |
| Return to app | See urgent, assigned work | Open on “Việc của tôi” with overdue and blocked filters visible; show the selected workspace. |
| Find item | Narrow without losing context | Search within work items; show active filters and result count; sort by due date. |
| Inspect | Understand before editing | Detail shows title, project, owner, due date, status, notes, and recent changes. Back returns to prior filtered list. |
| Reassign | Make a short contextual change | Owner control uses a searchable list; show who can be selected and saving status. |
| Finish | Know the result | Update status, announce success, refresh the list row, and show an undo path only if the product truly supports it. |

## State and permission decisions

- First-use empty list: explain what work items are and offer “Tạo việc” only for a role that may create them.
- Filtered empty list: show the active filters and “Xóa bộ lọc”, without suggesting the team has no work.
- Save failure: preserve the selected owner locally, explain that the change did not save, and provide retry.
- No assignment permission: show the current owner read-only with an explanation or contact path appropriate to the product.
- Long Vietnamese names, missing due dates, and many rows: keep the same column meaning, allow wrapping or a detail view, and avoid truncating the only distinguishing text.

## Evaluation

Ask a new user and a returning user to complete the same task with a realistic dataset. Observe whether they identify the correct item, understand the effect of the owner change, recover from a simulated save failure, and return to the same list. Review keyboard navigation and focus during owner selection and feedback. A polished static mockup would validate only the visual proposal, not these outcomes.
