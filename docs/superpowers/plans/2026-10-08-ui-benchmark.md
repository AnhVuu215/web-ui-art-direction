# UI benchmark implementation plan

> Execute the scoped evaluation tools directly. Existing user authorization covers improving and publishing this skill repository; no new product service or paid dependency is introduced.

**Goal:** Replace unsupported quality claims with reproducible, labeled evidence and a blind owner-review workflow.

**Architecture:** Frozen JSON brief plan → raw dispatch ledger → independent generation artifacts → shared browser render/check → anonymous screenshot review → validated votes → descriptive report. Keep the skill pin unchanged during the round and preserve the exploratory pilot separately.

**Tech stack:** Existing Node standard library, Playwright/Chrome already available, static HTML/CSS/JS. No new dependencies.

**Spec:** [protocol](../../../evals/benchmark/protocol.md).

## Tasks

- [x] Freeze six different briefs and three repetitions per brief before outputs.
- [ ] Add tests for false-positive claims: missing runs, tie votes, duplicate reviewers, invalid votes, ineligible pairs and changed source hashes.
- [ ] Implement plan/ledger builder and descriptive analyzer; preserve every failed attempt.
- [x] Try fresh independent generations; two pairs returned complete artifacts. Further dispatches stopped at the user's pause request.
- [x] Build anonymous review of available exploratory artifacts, with all views and exportable local votes; no preselected winner.
- [ ] Verify review layout at wide/narrow sizes and its save/export/reset behavior. Synthetic test votes never become real evidence.
- [ ] Publish protocol, actual generation status and review tools to GitHub; sync installed skill. Report what remains blocked or unjudged.

## Review focus

Side labels must not leak conditions; ties must survive analysis; missing generations must not disappear; duplicate reviews must not inflate sample size; “eligible” must not turn an unavailable or root-authored run into an independent trial.

## User-requested pause

Work paused for a checkpoint commit on 2026-10-08. See [checkpoint](../../../evals/benchmark/CHECKPOINT.md) for actual coverage, known gaps and the resume order. Unchecked tasks remain incomplete; no superiority claim is supported.
