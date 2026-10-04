# Component craft: decisions behind the small details

Read this when a task turns on reusable UI controls. It is a decision guide, not a component library or a set of fixed pixels. First inspect the product's existing components and tokens; preserve established behavior unless there is a reason to change it. For an authenticated application, combine this guide with [product-ui.md](product-ui.md). The original public guidance behind these decisions is linked below and summarized in [source-notes.md](source-notes.md).

## A small component contract

For a new or substantially changed component, be able to answer:

1. **Purpose and scope:** What user action or information does it support? Is it global, page-level, or local to an object?
2. **Choice:** Why this control instead of a link, tab, menu, dialog, drawer, or plain text? What happens before and after use?
3. **Anatomy and content:** Which label, icon, helper text, count, status, or action is essential? What can be omitted?
4. **States:** What do default, hover, focus, pressed/selected, loading, disabled/read-only, error, and success mean where applicable?
5. **Inputs and layout:** Can a person use it by keyboard, touch, and assistive technology? What happens with long Vietnamese text, zoom, and narrow width?
6. **Visual family:** Does its type, spacing, border, corner, icon weight, and motion match the system without erasing its functional priority?

Do not generate a full state matrix for decorative or static elements. For a working control, implement and review the states its actual task can enter. A screenshot of the default state is insufficient evidence.

## Header, navigation, and page location

Distinguish three scopes before drawing a header:

| Scope | Belongs here | Check |
| --- | --- | --- |
| Marketing/site header | Brand, primary site destinations, one clear conversion route where appropriate | Navigation labels, mobile disclosure, sticky behavior, CTA contrast with page content. |
| App-wide shell | Current product or workspace, global search or creation when truly global, notifications, account and cross-product utilities | Stable position across tasks, active context, keyboard order, narrow-width overflow. |
| Page or object header | Page title, object identity and status, local navigation or actions | Clear relation to content; avoid duplicating the shell's controls or competing primary actions. |

Build navigation from the user's tasks and domain objects. Make the selected location visible in more than color alone. Keep global utilities separate from local destinations; do not let user-created items grow without bound inside primary navigation. A collapsed sidebar must still expose meaningful labels and actions when needed, especially on touch and with a screen reader. Keep menu focus and dismissal predictable. If a sticky header covers a focused field or anchor target, the design is broken. These are contextual takeaways from [Carbon's global header](https://www.carbondesignsystem.com/building-blocks/core/patterns/global-header), [PatternFly's masthead](https://www.patternfly.org/components/masthead/design-guidelines/), and [Fluent 2 navigation](https://fluent2.microsoft.design/components/web/react/core/nav/usage).

## Button, link, and action priority

- Use a **button** for an action on the current context and a **link** for navigation to a destination. A link may look like a button without losing link semantics.
- Give the current task a clear leading action, then style secondary, tertiary, and destructive actions by their role. The task context can have its own leading action inside a dialog or form; do not impose one visual primary across an entire complex app.
- Label the result, preferably with a verb and object when space allows: “Lưu thay đổi”, “Mời thành viên”. Avoid vague “Tiếp tục” when the next step is consequential.
- An icon-only control needs a reliable accessible name; add a visible label when meaning is ambiguous. Use a tooltip for supplementary clarification, not as the sole carrier of an essential action name for sighted touch users.
- Loading feedback should keep the control's purpose recognizable and make the result unambiguous. Prevent duplicate submission when relevant; distinguish disabled because of missing input from read-only information or missing permission.
- Inspect the small details: label baseline, icon optical center, left/right padding, focus ring, minimum usable target, adjacent action spacing, text wrapping, and stable width during loading.

These choices draw on [Carbon buttons](https://www.carbondesignsystem.com/building-blocks/core/components/button/guidelines) and [GitLab Pajamas buttons](https://design.gitlab.com/components/button/). Their specific sizes, colors, and variant names belong to those systems, not every product.

## Fields and selection controls

For a text input, decide on the label, optional/required indicator, expected format, helper text, value, error, and recovery before styling its border. Use a persistent label; placeholder text may show an example but disappears during typing. Size a field for its expected content where the layout allows it. Treat disabled and read-only differently: one blocks interaction; the other may still need to communicate a value. Review empty, filled, focused, invalid, saving, and long-value states. See [Carbon text input](https://www.carbondesignsystem.com/building-blocks/core/components/text-input/guidelines) and [GOV.UK validation recovery](https://design-system.service.gov.uk/patterns/validation/).

Choose select, combobox, radio buttons, or autocomplete according to option count, whether free text is allowed, and how much comparison the user needs. Do not replace a native control with a custom one merely to change its appearance. For custom widgets, consult the relevant [W3C ARIA patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) for keyboard and focus behavior.

## Tabs, overlays, and feedback

- Use **tabs** for related peer content in one context. Use a filter/content switcher for alternate views of the same items, and a step indicator for a required sequence. If users need to compare two panels at once, hiding one behind a tab creates needless back-and-forth. [Carbon tabs](https://www.carbondesignsystem.com/building-blocks/core/components/tabs/guidelines) explains these distinctions.
- Use a **dialog** for a short, focused decision that interrupts the current task. Use a **drawer** for contextual inspection or editing while the underlying object matters. Use a full page for long, independent work. A dialog needs a clear title, action consequences, focus entry and return, and a tested dismiss path; consult [W3C's dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) and [GitLab's drawer guidance](https://design.gitlab.com/components/drawer/).
- Use a **tooltip** for brief supplementary explanation. Required instructions and interactive choices belong in visible content or a suitable popover. A tooltip should be available on keyboard focus as well as hover; see [GitLab tooltip guidance](https://design.gitlab.com/components/tooltip/). The [W3C tooltip pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) is marked work in progress, so use established component implementations and verify behavior.
- Place **feedback** near the affected work when possible. Inline errors help repair a field; a transient notification confirms a completed low-risk action; a dialog is reserved for an interruption that needs a response. State what changed, failed, or remains pending. Do not replace a persistent failure with a disappearing toast. See [Carbon modal guidance](https://www.carbondesignsystem.com/building-blocks/core/components/modal/guidelines).

## Tables and repeated row controls

The table decision and data states are covered in [product-ui.md](product-ui.md). At component level, check sortable header labels and direction, row focus/selection, cell overflow, bulk-action scope, status text, and the relationship between row click and inline actions. Do not make an entire row clickable if that obscures links, checkboxes, or menus inside it. Use a clear table caption or surrounding heading. [GitLab Pajamas table](https://design.gitlab.com/components/table/) and [Carbon data table specifications](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/specifications) give examples of these states.

## Review the component in context

Inspect a small set of representative situations: a default task, a dense or long-content task, an error or blocked state, and a narrow/zoomed view. Check the control in its real page hierarchy, not on a blank component canvas. Compare the chosen pattern with the product's existing library and one authoritative reference; adapt the principle to the user's domain and brand. Verify actual keyboard and responsive behavior in a running interface before claiming it works.

### Example: one action through its states

In an order-detail drawer, “Lưu trạng thái” is a submit button tied to the status field. With no change, it is inactive and the current value remains readable. During a save, keep the button's width stable and show “Đang lưu…” so its purpose remains clear. On failure, preserve the selected status, show a persistent inline explanation beside the field or action, and provide a retry path. On confirmed success, update the visible order status and announce the result. Place “Hủy” beside it at lower emphasis. Exact status transitions, retry safety, and user permissions come from the actual product rules; this example defines only the interface contract.
