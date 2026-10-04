# Product UI: designing the system after sign-in

Use this reference for an authenticated workspace, dashboard, admin interface, editor, or multi-screen flow. Its aim is a coherent *working environment*, not a decorated dashboard screenshot. Apply only the sections relevant to the product. Source links and evidence limits are in [source-notes.md](source-notes.md).

## 1. Model work before screens

Write a compact task model: **role → goal → object → next action → visible result → recovery**. Identify the objects users recognize in their own language (project, order, patient, file), their relationships, and the actions each role may perform. Build navigation from these tasks and objects rather than from a generic `Overview / Analytics / Settings` template. For an existing product, preserve familiar paths unless there is evidence to change them.

Map one representative journey end to end: entry point, find or create an object, edit or decide, confirm the outcome, recover from failure, and resume later. Include first-time and returning use; the returning user may need status and recent work more than a tutorial. In a complex domain, learn the real work and vocabulary before copying another product's layout.

## 2. Give each surface a job

| Surface | User question | Design emphasis |
| --- | --- | --- |
| Workspace home | “What needs my attention?” | Relevant status, unfinished work, clear next step; avoid a wall of equally weighted charts. |
| List or table | “Which item is the right one?” | Scan, search, sort, filter, compare, and move to detail. |
| Detail | “What happened and what can I do?” | Identity, current status, context, actions, history, and ownership. |
| Create or edit | “What information is required?” | Appropriate grouping, labels, validation, save behavior, and exit path. |
| Settings | “What will this change affect?” | Scope, defaults, permissions, consequences, and confirmation. |

Decide whether a dashboard is needed at all. A user who enters to process records may benefit more from a filtered work queue than from metrics. Keep the same object names and status meanings across overview, list, detail, search, notifications, and settings.

## 3. Make location and continuity clear

- Make current workspace, team, project, page, and active view apparent where they can change the meaning of data. Keep a selected navigation state and a predictable order. Use plain labels; search and favorites complement rather than replace a comprehensible structure.
- Use tabs for peer views of the same context; use a separate page for a longer, independent task. Use a drawer for a short, contextual task while the main object remains visible. A persistent side panel is appropriate when secondary content is part of the ongoing workspace.
- Preserve meaningful context when moving between list and detail: filters, sort, scroll position, selected view, and a way back where technically feasible. Make an unsaved change visible and provide a safe exit path.
- Distinguish global search, search within the current collection, and filters. Show scope and active filters; provide a clear reset when zero results follow filtering.

## 4. Design information at real density

- Choose a table when repeated items share comparable attributes and users need to sort, filter, or act on them. Choose cards when item content varies and visual inspection matters. Choose a tree for hierarchy; use charts when a trend or relationship supports a decision.
- Put the most decision-relevant columns first. Use explicit units, date format, status language, and alignment that supports comparison. Do not rely on color alone for status. Disclose secondary columns or details without hiding essential distinctions.
- Support the scale of the task: short and long names, missing values, many rows, selected rows, bulk actions, pagination or progressive loading, and narrow viewports. A compact table can help dense text-only data; default to readable spacing for mixed content and actions.
- Make sorting direction, filter scope, selection count, and effects of bulk actions visible. Destructive bulk actions need clear targets and a proportionate confirmation or recovery path.
- A dashboard metric needs a label, time range, unit, source/definition when ambiguous, and an actionable path to underlying records where useful. Decorative charts that do not answer a user question should not occupy prime space.

## 5. Give every state a distinct meaning

| State | The interface should explain |
| --- | --- |
| First use / no data | What belongs here and how to add the first item, if the user can. |
| No search or filter results | Which query or filters led here and how to broaden or clear them. |
| Loading or processing | What is happening, which area is affected, and whether the user may continue elsewhere. |
| Recoverable error | What failed, what was preserved, and the next safe action such as retry. |
| Permission or configuration block | Why the action is unavailable at a useful level of detail and whom to contact or what to change. |
| Success | What changed, where the result is, and whether undo or further action is available. |

Keep an empty state in the area whose content is missing. If a table has no rows, do not leave a misleading shell of headers and controls around a generic illustration. Treat network failure, no data, and no permission as different conditions. Do not promise an action the user's role cannot perform.

## 6. Forms, permissions, and consequential actions

- Ask only for information needed at this step. Use persistent labels and meaningful help text. Group related fields; use steps for a genuinely sequential, large task, with progress and review when appropriate.
- On validation failure, keep entered values. Tell the user what to fix at the field and, for long forms, near the top; move focus to useful error feedback. Validate at a point that helps rather than interrupting unfinished typing. Server rules still decide validity in a real application.
- For save and submit, distinguish idle, saving, saved, failed, and unsaved. Show where changes take effect. Prevent ambiguous double submission without hiding whether the first attempt succeeded.
- For roles and permissions, show available actions accurately and explain blocked actions when useful. Make workspace-wide effects, invitations, role changes, billing, and deletion scopes explicit. UI visibility is not authorization; backend enforcement is required in a real system.
- For irreversible or costly actions, name the affected object, show consequences, and use confirmation proportional to the risk. Offer undo or restoration when the product supports it; never invent a recovery route.

## 7. Put personality in useful details

Choose a visual direction that belongs to the product's subject and audience. In a work surface, personality can live in precise microcopy, meaningful status language, considered typography, a restrained accent, custom but legible iconography, and a memorable first-use moment. Reserve the strongest visual contrast for the current task and important feedback. Repeated operational surfaces need stable alignment and density so returning users build speed.

Design the app shell and its repeated details as one family:

- **Hierarchy:** Distinguish workspace name, page title, object title, section title, field label, helper text, and metadata. A page title and a table heading should not compete at the same weight. Keep numbers and units together.
- **Spacing and alignment:** Set a repeatable grid for navigation, toolbar, content, and side panel. Align form labels, table columns, status chips, and action edges optically. Use density according to the task, not to squeeze every pixel; a record-heavy list may be tighter than a confirmation step.
- **Color:** Separate brand accent from semantic success, warning, error, selection, and focus. Status needs a readable text label and sufficient contrast; color alone cannot carry the meaning. Make inactive and disabled states distinguishable.
- **Controls:** Define one primary action for the current task, then secondary and destructive treatments. Keep hit areas, icon stroke, corner family, borders, and hover/focus states consistent. An icon-only action needs an accessible name and, when meaning is unclear, a visible label or helpful tooltip.
- **Surfaces:** Use borders, background changes, and elevation to explain layering and focus. A popover, modal, drawer, and persistent panel should each have a distinct purpose and predictable dismissal behavior.
- **Copy and feedback:** Name the object and result (“Đã chuyển 3 đơn cho Lan”) when real data allows it. Match the tone to the moment: a playful empty state may fit first use, while a payment failure needs direct, calm language.

Use motion to explain state changes or maintain spatial context; respect reduced motion. Avoid ornamental motion in data-dense work. Apply design tokens to common components, then allow deliberate exceptions for a unique workflow. Copy a *principle* from a reference only after explaining why it suits this domain; never transplant branded visuals or an entire layout.

## 8. Review a representative task, not just a screen

Walk through a realistic task with the intended role and sample data. Check entry, finding the right item, acting, feedback, failure, and return. Repeat with sparse and dense data, long labels, no results, invalid input, slow loading, and a restricted role where relevant. Check keyboard and focus behavior of menus, comboboxes, dialogs, tables, and drawers against the chosen component library and W3C patterns. Test narrow width and zoom without silently discarding essential actions.

Report separately what was verified in a real product, what was seen only in a public screenshot or design-system example, and what remains a proposal. A gallery screenshot alone cannot establish task success, accessibility, or actual product behavior.
