# Control public artifact

## Decisions

- Vietnamese typography consultation studio, with a large orange opening composition and an original CSS letterform object. The type itself is the visual material.
- Clear sequence: opening → three offerings → editable type sample → process → consultation request.
- Be Vietnam Pro Regular, Medium and Bold are the supplied local fonts. Portable URLs target `../../../../assets/fonts/` after the root agent copies this artifact into the requested evaluation run directory.
- Responsive layouts include a single column mobile opening, stacked services and form fields, and an expandable mobile navigation with Escape support.
- Size, weight and tracking controls update the specimen; visitors can edit its text directly. Reduced motion preference disables smooth scrolling and button transitions.
- Native form validation checks required name, email and project fields. Trial submission reports that no request was sent, preserves all entered input, and announces feedback through a polite status region.

## Facts and assumptions

- The studio is fictional. The visible prototype label and form explanation state this clearly.
- No customers, testimonials, prices, measured outcomes, contact details or service guarantees are invented.
- All seven supplied original JPG references were inspected using `view_image`. They informed broad visual taste only and are not embedded or copied into the page.
- No art direction skill, its analysis, or another art direction guide was read or applied.
- Everything is local, with inline CSS/JavaScript and no backend, network submission, external assets or persistence beyond the current page state.
- The page assumes the final evaluation run directory layout supplied by the root agent. The font URLs do not resolve from the temporary `.analysis` directory.

## Checks actually run

- Node parsed the inline JavaScript using `vm.Script`: passed.
- Static checks for unique IDs, valid input-label targets, valid same-page navigation anchors and all three required `data-testid` hooks: passed.
- Static check for external HTTP(S) URLs in the HTML: none found.
- Original supplied font files were confirmed present.
- Browser rendering at 1440 px and 390 px, visual quality, actual native validation, interactions, overflow and font loading remain for the root agent's shared harness. No browser success is claimed here.
