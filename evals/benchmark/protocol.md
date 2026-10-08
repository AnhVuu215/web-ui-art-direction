# Paired evaluation protocol v1

Frozen before new output generation. Skill under test: Git commit `a578204ff16983b18c2cd0dc41e6829357cfee2c`. This protocol measures preference in a declared sample; it cannot establish “always better.” The earlier 2026-10-08 pilot remains exploratory and is not pooled into a fresh confirmatory score.

## Question and sample

Does the fixed skill improve the owner's visual preference across the six briefs below, without reducing task clarity or introducing hard failures? Keep aesthetic preference separate from task behavior, brand fidelity and accessibility.

Target: six briefs × three independent pairs × two conditions = **36 generations**. Each generation uses a fresh context and exactly the same base prompt/assets for its pair. Only the explicit skill condition differs. All runs use inherited session settings with no model override; record exact model/effort if available. If not available, mark unknown and do not call the experiment fully controlled. The tooling here does not enforce a token budget, so resource parity must not be claimed.

| Brief | Surface | Main pressure |
| --- | --- | --- |
| CERAMIC | Public craft catalog | Own subject and rhythm without photography or fake proof |
| INVENTORY | Operational workspace | Dense data, filtering, narrow viewport, consequential edit |
| LIBRARY | Existing-brand reservation flow | Cool palette and serif override owner preference |
| COMPONENT | Small established shell/form/dialog | Improve details without a campaign redesign |
| DARK | Existing dark video-editing queue | Preserve dark working surfaces and useful state hierarchy |
| EVENT | Public community event | Long Vietnamese copy, actual supplied facts, clear form |

Each brief and raw dispatch string are generated from [plan.json](plan.json) by [benchmark.cjs](../../scripts/benchmark.cjs). Render at 1440 × 900 and 390 × 900, plus the requested state. Do not regenerate until the favored condition wins. Save first attempts, failures and exclusions. A follow-up fix is a separate version and may not replace its original score.

## Trial eligibility

A pair can enter a confirmatory preference summary only when both first-attempt artifacts exist, source hashes and raw prompts are recorded, independent contexts are confirmed, skill pin is verified, and both have the same inspection/test opportunity. Operator-authored, cross-contaminated or source-repaired pairs remain exploratory. Missing/blocked generations stay visible in the ledger and coverage denominator. Browser failures are a quality result, not a reason to drop the losing artifact.

The finite set is a convenience sample, not a random sample of all websites. Repetitions of one brief are correlated. Desktop, mobile and error images are **views of one artifact**, not separate trials. Multiple votes from one person do not create independent people. Do not treat all screenshots/raters as independent binomial observations.

## Blind review

The review page presents anonymous A/B image groups in randomized side order. It does not show condition, file names, source links, author, or rubric scores. Mapping is kept outside the review bundle. It hides labels, not recognizable style; anyone who opens the mapping/source is no longer blind.

Owner evaluates each pair once after seeing its brief and all required views:

1. **Visual preference:** A / B / tie / neither acceptable.
2. **Task clarity:** A / B / tie / cannot judge from images.
3. **Brand fidelity:** A / B / tie / not applicable.
4. **Reason:** point to a visible decision, not a palette name alone.
5. Optional hard-failure note: unreadable action, false fact, broken path, missing essential state, copied artwork. Browser checks are recorded separately; screenshot voters do not certify behavior.

AI ratings and root ratings may diagnose problems, but never stand in for the owner's vote or independent target-user research. No invented human reviewers. The owner may invite actual users; the agent does not message anyone or publish their votes without authorization.

## Analysis and decision rules

Report attempted/completed/eligible pairs, missing states, owner response coverage, skill wins/losses/ties/neither, per-brief results, task/brand votes and browser failures. Ties and “neither” remain separate; never silently discard them or count ties as wins. A win rate among decisive votes is descriptive and must show its denominator alongside total scheduled pairs.

Do not produce an inferential confidence interval from this convenience sample with repeated briefs and one owner. The analyzer therefore returns **no statistical superiority claim**. [NIST's proportion-interval guidance](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm) is useful for a future design with defensible sampling/independence; an interval itself cannot fix biased sampling. A [Microsoft Research study](https://www.microsoft.com/en-us/research/publication/understanding-users-preferences-surface-gestures/) provides an example of preference evaluation with participants unaware of authorship; its result does not validate this skill.

Operational progression, fixed now:

- **Incomplete:** any of the 18 pairs missing, or owner has not rated every eligible pair. Publish coverage and issues; no advantage claim.
- **Ready for a larger trial:** complete eligible set, owner favors skill in at least 12 of 18 pairs, at least one skill win in every brief, no skill-only hard failure, and task/brand votes do not favor control more often than skill. These thresholds are pragmatic release criteria, **not** a statistical proof or “always” guarantee.
- **Revise:** unmet progression criteria or a concrete regression. Use failed cases to make a bounded fix, then evaluate a new skill version on new held-out briefs. Do not change the frozen scoring rules after seeing results.

Passing this round supports only a statement such as “the owner preferred the skill outputs in X/Y eligible pairs on these six briefs.” Reliable UX needs real user tasks and production constraints as a later study; visual preference alone does not establish usefulness.

## Stop and recovery

If the generation service returns an account quota failure, record the failed dispatch and stop launching further generations for that unavailable service. Do not relabel root output as independent, change accounts/models to hide the failure, or fabricate missing artifacts. Complete the review tools and evidence that do not depend on generation. Resume uncompleted trials only when generation is available, with the same frozen plan; record any configuration drift.
