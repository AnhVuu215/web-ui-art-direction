# Public-source research for post-login UI

Reviewed on 2026-10-04. This is a selective reading of the linked public pages, not a claim to have read every page of each site or used every authenticated product. The source pages can change. Galleries show what a product *looks like* and sometimes a captured flow; official design systems explain their own decisions; usability research supplies broader evidence. None alone proves a particular pattern fits a new product.

## Real-interface libraries: examples to inspect

| Source and public page | What was visible | How to use it |
| --- | --- | --- |
| [Mobbin](https://mobbin.com/) | Public catalog describes screens, UI elements, and flows, including settings, account setup, sidebars, dialogs, and creation journeys. Full inspection can require an account. | Compare several solutions for the *same task*; note transitions and copy, not just color. |
| [Nicelydone flows](https://nicelydone.club/examples/flows) and [screens](https://nicelydone.club/examples/screens) | Public examples include finance review, gallery filtering, billing with loading/error, onboarding, team management, and permissions. | Record entry, sequence, feedback, and recovery. A catalog label is a lead for further inspection, not a usability verdict. |
| [Refero web apps](https://refero.design/apps) | Public catalog indexes dashboard, table, skeleton, navigation, modal, search, billing, and create/edit flows; much full-screen content requires sign-in. | Search by screen role and state, then validate the pattern in a real product if behavior matters. |
| [SaaSFrame](https://www.saasframe.io/) | Public catalog groups SaaS interface screenshots and some flows. | Compare product categories; do not infer accessibility or success rates from screenshots. |

## Design systems: explicit component and pattern guidance

| Source and public page | Specific takeaway for this skill |
| --- | --- |
| [Atlassian components](https://atlassian.design/components) | Component catalog includes app navigation and dynamic tables; selected states, sorting, and pagination need intentional design. Some detailed pages were only available through indexed excerpts in this review. |
| [Carbon empty states](https://www.carbondesignsystem.com/building-blocks/core/patterns/empty-states) | Distinguishes first-use, no search result, and error/permission situations; empty content belongs in the affected region with a context-specific next step. |
| [Carbon data table specifications](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/specifications) | Table states include selected, hover, focus, expanded, toolbar, and batch-action treatment; a table is more than a styled header and rows. |
| [GitLab Pajamas table](https://design.gitlab.com/components/table/) | Tables suit comparable structured items and growing datasets; condensed variants suit dense text; cards, lists, and trees solve different jobs. |
| [GitLab Pajamas drawer](https://design.gitlab.com/components/drawer/) | A drawer supports short contextual work while the primary task stays visible; a persistent panel or full page suits longer work. |
| [Fluent 2 navigation](https://fluent2.microsoft.design/components/web/react/core/nav/usage) | Navigation should reflect user goals, show current location, use clear labels, and remain usable across viewport sizes and input methods. |
| [Ant Design form page](https://ant.design/docs/spec/research-form/) | Group long forms by relevance and use steps for genuinely sequential tasks; simple tasks can stay on one page. Its numeric examples are product-specific suggestions, not universal thresholds. |
| [GOV.UK validation recovery](https://design-system.service.gov.uk/patterns/validation/) | Preserve entered values on error; give field-specific feedback and an error summary when useful; distinguish invalid data from lack of eligibility or permission. Its implementation details belong to that design system. |
| [W3C ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/) | Consult the specific dialog, combobox, menu, grid, or other pattern for keyboard and assistive-technology behavior when implementing one. |

## Research and actual product documentation: task context

| Source and public page | Specific takeaway for this skill |
| --- | --- |
| [NN/g complex applications](https://www.nngroup.com/articles/complex-application-design/) | Support learning by doing, preserve capability while reducing clutter, and help users move between primary and secondary information. Complex domain work requires studying the work itself. |
| [Baymard ecommerce search](https://baymard.com/research/eCommerce-search) | For commerce tasks, query behavior, autocomplete, results, filtering, and no-results guidance deserve separate study. The linked page is a research overview; detailed guidelines may require paid access. Do not generalize every commerce finding to enterprise software. |
| [Linear projects documentation](https://linear.app/docs/projects) | An object can have list, board, timeline, overview, saved views, and detail sidebar depending on the work; public docs show structure, not a hands-on UX evaluation here. |
| [Airtable views documentation](https://support.airtable.com/articles/5189551686-getting-started-with-airtable-views) | Multiple views can expose the same underlying data; view ownership and editability vary by role. |
| [Vercel projects documentation](https://vercel.com/docs/projects) | Project context connects deployment status, settings, observability, and access; “dashboard” is a collection of task surfaces, not one screen. |
| [Stripe dashboard search documentation](https://docs.stripe.com/dashboard/search) | Search supports structured field filters and operators when users need to locate precise records; complexity should follow domain needs. |

## Translation into the skill

The reusable decisions live in [product-ui.md](product-ui.md): model real tasks and roles; choose each surface for its job; preserve context; design real data density; distinguish empty, loading, error, permission, and success; then test a complete journey. The [worked app example](worked-app-example.md) demonstrates this method without copying a referenced product.

This repo links to third-party materials but does not reproduce their screenshots, logos, prose, or code. Its MIT license covers only original content in this repo.
