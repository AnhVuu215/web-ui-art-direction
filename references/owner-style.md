# Owner's preferred visual direction

This is the owner's **default taste**, inferred from the seven images they selected from the 33-image atlas. It is a preference for new or visually open briefs, not a template and not a replacement for an existing brand. If the user specifies another style, a product already has a coherent identity, or the audience and task call for a quieter treatment, follow that evidence and explain the choice.

The selected images are `5fbabad0` (music app), `21ae9f90` (agency), `85b954e2` (media agency), `16233b3d` (furniture), `50223f7c` (motion studio), `be8fa1a3` (branding agency), and `ed8d239b` (slide study). Their individual observations and cautions remain in [visual-atlas.md](visual-atlas.md). They are **visual evidence only**: do not copy their layouts, people, artwork, branding, copy, or unverified numbers. The original images are not part of this repository.

## Evidence from the seven selected images

The notes below describe what is visible in static images. They do **not** prove that the referenced sites are responsive, accessible, interactive, fast, or usable. Separate the transferable design mechanism from surface details that belong to their creators.

| Reference | What the owner appears to value | Transferable device | Do not inherit |
| --- | --- | --- | --- |
| `5fbabad0` · music app | The phone held in a hand gives the interface a real use moment; a red-orange field turns to a black chapter. | Stage an actual product view within a scene, then explain the experience at a different pace. | The app UI, portrait, controls, copy, and very small annotations. |
| `21ae9f90` · agency | An enormous typographic statement on white is interrupted by a luminous orange streak and a dark narrative section. | Let type lead, save one image/light event for emphasis, and make chapter changes meaningful. | Pale text that is hard to read, equal service cards, or claims about client results. |
| `85b954e2` · media agency | A bright orange-black opening gives way to restrained dark explanation, video, staggered offers, and chart-like proof. | Use a tight accent system across chapters and let evidence carry visual variety. | Invented growth numbers, placeholder video, and microcopy used as texture. |
| `16233b3d` · furniture | A sculptural chair overlaps enormous lettering; inward corners, thin rules, and warm material recur. | Let a real product object dictate shape, color, and framing details. | The exact chair, corner silhouette, statistics, or poster dimensions. |
| `50223f7c` · motion studio | A large custom mark in orange-black light owns the hero; the next chapter opens into quiet cream. | Give one subject maximum presence and follow it with breathing room. | Borrowed logo geometry, text behind an object when it becomes unreadable. |
| `be8fa1a3` · branding agency | Human portraits, warm directional light, dark sections, and asymmetrical service panels create a consistent world. | Show a relevant person or maker in the product's context; vary panel scale within a strict palette. | Faces, testimonials, follower counts, or every panel made orange. |
| `ed8d239b` · slide study | Large type, broad margins, orange gradients, light/dark panels, and repeated punctuation form a strong graphic system. | Use a simple repeated mark and clear scale contrast across a sequence. | Slide-sized microtext, fixed proportions, or decorative data labels presented as product truth. |

The shared preference is **high contrast with a reason**. The owner did not select seven copies of one layout: some are mostly white, some nearly black, some led by photography, some by a product object or typography. Do not reduce the selection to “make everything orange.”

## What repeats across the selection

1. **A scene before a stack of components.** One person, product, sculptural object, or actual interface owns the first impression. Type and light frame that subject. The scene should reveal the offer or use moment, not merely fill the hero.
2. **Confident editorial type.** Large, tightly composed sans-serif headlines do much of the visual work. Scale changes are intentional: display type, a small amount of supporting copy, then compact controls. Choose a face that handles the product language well; do not imitate the references' microtext in a working website.
3. **Heat against restraint.** Ember orange, vermilion, or red light meets near-black, dark brown, and warm white. Bright orange is an event or focal point, not a blanket applied to every card. A quiet white chapter can make the next dark or luminous chapter more powerful.
4. **Cinematic material.** Directional light, deep shadows, motion streaks, color bloom, tactile surfaces, or a real photographed subject supply depth. Use one material treatment consistently and connect it to the product's story. Do not substitute an unrelated gradient, generic blob, or fake 3D object.
5. **Changing page tempo.** The references move between an immersive hero, a precise explanation, image-led proof, and a restrained working section. They vary card spans, alignment, density, and background intensity while keeping a recognizable visual grammar.
6. **Fine but deliberate controls.** Thin dividers, compact navigation, small rounded controls, optical icon alignment, and occasional unusual corner geometry finish the system. Their function and labels must stay clear at laptop and mobile sizes.

## A practical visual grammar

### 1. Begin with the subject, not the palette

Name the product's **hero object** before drawing a hero: the thing people use, make, buy, inspect, or change. For a music product it might be a listening session; for an interview tool, a spoken answer and its review; for a furniture studio, the furniture itself. Ask what moment a person would recognize as real. If no meaningful photo or object is available, a typographic composition with an honest product view is better than unrelated stock imagery or a glowing abstract shape.

The subject should determine the visual material. Recording may justify a signal line and close microphone controls. A physical product may justify shadows, crop, and material texture. A data workspace may justify a precise grid. An orange glow is useful only when it supports that chosen subject.

### 2. Compose the first viewport as one sentence

The opening should answer **what this is, who it is for, why it matters now, and where to act**. Give the viewer one visual focal point and one leading action. Build the composition from the product subject, a strong headline, and enough explanation to remove ambiguity. Small metadata can add voice, but cannot replace useful copy.

Choose a relationship deliberately: type beside a real scene, type crossing a subject without covering essential content, a product view cropped into a larger material field, or a nearly empty typographic field with one concentrated visual interruption. Those are composition *families*, not templates to reproduce. Sketch at least two materially different structures before choosing when the brief is open.

### 3. Type scale and Vietnamese copy

- Prefer a characterful sans-serif display face with Vietnamese glyph coverage and a quieter body face, or one flexible family with distinct weights. Test actual accents such as `ắ`, `ề`, `ỡ`, `ự` at display size; faux bold and missing glyph fallback can ruin the composition.
- Let a headline occupy real space, but keep its line breaks meaningful. A broken phrase should add emphasis, not merely fill a rectangle. On mobile, rewrite or reflow the line break instead of shrinking the whole headline until it fits.
- Treat the following as **starting ranges, not tokens to paste into every project**: desktop display around 56–96 CSS px where space permits, mobile display around 36–56px, ordinary body around 16–18px, interface body around 14–16px. Real content, viewport, font metrics, and zoom decide the final values.
- Keep tracking tight but readable. Uppercase metadata may be letter-spaced, but do not use 8px labels as visual texture. Secondary text must still answer a real question and remain readable at actual size.
- Use weight, scale, and position before resorting to outlines, gradient text, or many font families. One loud typographic move per section is usually enough.

### 4. Color and light as roles

The references favor near-black or dark brown, warm white, and a hot orange/red family. Define **canvas, work surface, text, accent, focus, success, warning, and error** separately. A sample exploratory direction might start with warm white `#F7F3EE`, near-black `#11100F`, ember `#E64B25`, and a deeper rust `#8B2C1A`; these are *illustrative candidates*, not prescribed brand tokens. Check contrast with the actual font, weight, and background image before adopting any value.

Place the hot color where attention or state warrants it: a hero light source, one chapter transition, a primary action, an active recording control, or a meaningful highlight. Use gradients to describe illumination or motion, with a plausible direction and falloff. An identical radial gradient on every card makes the system look assembled. Preserve calm neutral surfaces for reading, comparing, and editing.

On dark scenes, use tinted light text rather than faint gray. On bright orange scenes, verify whether dark ink or white type is more legible at each point in the image. A static screenshot's legibility cannot be assumed to survive responsive crop or dynamic content.

### 5. Image art direction and asset choice

Write an image brief before sourcing or generating: subject, viewpoint, distance, emotion, action, lighting, crop, background, negative space, and how it connects to the headline. A relevant human moment is more persuasive than a generic smiling portrait. A product view should show enough real interface to explain the job, not a phone frame containing random decorative controls.

Use one lighting logic across a set: for example, warm side light on people, dark surroundings, and restrained highlights on product UI. Do not mix a cinematic hero, flat corporate stock images, unrelated 3D blobs, and pastel illustrations without a narrative reason. Respect image rights and avoid presenting generated or illustrative people as real customers or staff.

Plan crops at wide, laptop, tablet, and phone widths. Keep faces, products, and essential UI clear of headline overlays and controls. Use `object-position` or art-directed source variants where one crop cannot carry all sizes. Decorative visual layers must not block text selection, focus, or pointer input.

### 6. Rhythm across the page

A useful sequence is **impact → explanation → proof or product detail → action**, but the actual product may need another order. Give each chapter a job and a different intensity. After an immersive dark or orange scene, a warm-white area can slow the pace and make information easy to absorb. A later dark chapter can deepen the story rather than merely repeat the hero.

Vary card span by content priority. A large image/product panel may lead; small supporting cards can compare options or steps. Avoid a wall of equal cards with one icon, one heading, and one sentence each. Keep alignment lines, type family, and accent behavior coherent even while section scale changes.

Use overlays, cutouts, unusual corners, or staggered cards only when they reveal relationship, depth, or sequence. The furniture example's inward corners are interesting because they recur with its product world; copying that silhouette into unrelated finance or healthcare screens would be costume.

### 7. Motion with a purpose

The references suggest energy through motion blur and light, but a still image does not prescribe animation. If motion helps, give it one role: introduce a focal subject, show a transition between chapters, or explain a product state. Motion should not delay the main action. Provide a reduced-motion version and verify that meaning survives with animation off.

Reserve expressive motion for marketing and special transitions. In a daily workspace, use restrained state transitions that preserve location and cause-and-effect. A loading state should say what is happening; a recording state should clearly show whether audio is being captured; a save should confirm success or explain failure.

## Translate a brief into two different compositions

The owner's preference should guide decisions without producing the same website each time. For an open brief, sketch two **different composition logics** using the same product facts, then choose the one that makes the offer clearest.

**Example brief: AI interview practice.** The known subject is a person answering a question and reviewing the answer. Do not invent performance statistics, real customer portraits, or an AI score model.

| Decision | Direction A: the speaking moment | Direction B: the review moment |
| --- | --- | --- |
| First view | A close, human-scale recording scene with the actual question and a clearly labeled record control. | A typographic statement beside a readable annotated answer excerpt. |
| Visual material | Warm directional light and a restrained signal line that belongs to voice capture. | Near-black ink, warm-white reading surface, one ember annotation or correction. |
| Hierarchy | Question → person/recording object → benefit → action. | Claim → concrete before/after answer evidence → action. |
| Next chapter | Slow into a quiet explanation of what happens after recording. | Show the short practice sequence and a realistic sample result. |
| Risk | The scene may hide the product if it becomes generic portrait photography. | The answer excerpt may imply real AI feedback when it is only illustrative. |

The choice depends on the real product and audience. If the strongest differentiator is the recording experience, A may fit. If the value is actionable review, B may explain the product faster. In both cases, the first screen needs legible copy, an honest CTA destination, and a responsive composition; neither direction is a template to apply to unrelated products.

### A small direction sheet before implementation

Record these decisions in a few lines before working on detailed components:

1. **Subject:** What person, object, or work artifact makes this product recognizable?
2. **One-sentence visual claim:** How should the first scene make the benefit felt without hiding it?
3. **Palette roles:** Which surfaces are dark, warm-white, and hot? Which colors remain reserved for semantic states?
4. **Type voice:** What is the display/body relationship, and how will Vietnamese copy wrap?
5. **Material rule:** Which lighting, crop, texture, or line motif belongs to the subject?
6. **Page tempo:** Which section is loud, which is quiet, and where does actual proof appear?
7. **Control rule:** How do primary action, secondary action, focus, and selected states look?
8. **Stop list:** Which easy but irrelevant effects, cards, claims, or images will be omitted?

If a later section cannot be connected to that sheet or to a user task, revise it. The sheet is a design rationale that can change with evidence, not a demand to decorate every component consistently.

## Apply the preference

For a **public landing page or portfolio** with an open visual brief, propose this cinematic editorial direction first. Write a direction statement naming the product-specific subject, the scene, the type voice, where the heat appears, and where the page becomes quiet. A useful starting palette is warm white, near-black, and one ember accent; select actual color values by content and contrast. Give the hero one dominant subject and one primary action. Use high-energy treatment once, then vary the next sections instead of repeating it.

For an **authenticated product**, carry the identity through type, one accent, selected imagery, and component details while keeping daily tasks calm and fast. A marketing-scale title can appear on first use or an important transition; tables, forms, recording controls, and settings need stable alignment and readable information density. Orange can mark an active recording or primary moment, but status colors must still mean what they say. Do not place a dramatic gradient behind routine data or turn every dashboard card into a campaign panel.

For more detailed implementation, read [owner-components.md](owner-components.md) when choosing controls and [owner-product-ui.md](owner-product-ui.md) when designing an authenticated flow. Those references translate the same taste into buttons, headers, forms, tables, states, and multiple screens without sacrificing task clarity.

For **components**, consider:

| Part | Preferred character | Guardrail |
| --- | --- | --- |
| Header and navigation | Restrained chrome around a strong scene; clear active state | Keep links, labels, and mobile paths obvious |
| Buttons | Compact, high-contrast primary action; icon can reinforce direction | Label the actual outcome; provide focus, disabled, loading, and error states |
| Cards and panels | Vary span and intensity by importance; use image or content only when it helps a decision | Avoid rows of equal generic cards and nested decoration |
| Typography | Bold display voice with quiet, readable supporting text | Protect Vietnamese diacritics, wrapping, contrast, and 200% zoom |
| Imagery and motion | Subject-led photography or product view, directional light, one purposeful transition | Confirm rights and performance; support reduced motion |

## Review the result, not just the intention

After the first render, inspect desktop and mobile images and answer:

- Can someone identify the product's real subject and action from the first viewport, or could its name be swapped with an unrelated company?
- Is there one unmistakable focal point and a change of rhythm later, or are all sections equally styled?
- Did the chosen visual material come from the product's world, or was orange light added only because these references use it?
- In the working screens, are the important object, control, status, and recovery path easier to find than the decoration?
- Are captions and controls readable at actual size? The reference images contain tiny type that must **not** be inherited.

If the visual answers fail, revise the composition or content before delivery. Passing a color or typography checklist alone does not mean the interface matches this preference.

## Failure signals from the first HiReady trial

The first interview-practice mockup followed the broad flow but still felt generic. Its sage-and-rust palette, serif headlines, circles, and quote card could have belonged to many unrelated coaching sites. The dashboard gave decorative advice almost as much space as the next practice task. Repeated two-card compositions flattened the difference between choosing, recording, waiting, and reviewing. Small labels looked polished in a screenshot but were weak at use size. The result showed abstract STAR bars without anchoring feedback to the candidate's actual answer.

These are **execution failures**, not reasons to force a specific replacement style onto every product. A stronger version would show a question, voice recording, transcript or answer excerpt, and a specific annotated improvement; the visual motif would come from speaking and review. Before handing off any design, identify the product-specific evidence visible on the screen and remove cards or effects that do not help it.
