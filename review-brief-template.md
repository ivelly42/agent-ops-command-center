# AI Coding Agent Review Brief Template

Use this free review brief when asking an AI agent or reviewer to inspect code, UI, release artifacts, launch copy, or a workflow change.

The brief narrows the review to risk, evidence, files, and required finding format so the review produces actionable blockers instead of broad commentary.

## Copy/Paste Review Brief

```markdown
# Review Brief

Review Target:

Risk Area:

Expected Behavior:

Evidence To Inspect:

Files Or Screens:

Do Not Touch:

Finding Format:

Verification Needed:
```

## Finding Format

```markdown
## Findings

- Severity:
- Location:
- Issue:
- Evidence:
- Fix:

## Open Questions

- 

## Residual Risk

- 
```

## Review Scopes

| Scope | Evidence To Inspect | Good Finding |
| --- | --- | --- |
| Code change | Diff, tests, logs, touched files | File and line reference with failed behavior |
| UI change | Screenshots, rendered URL, mobile state | Overlap, clipping, contrast, broken flow, or missing state |
| Release | Release gate, asset digest, public URL | Missing evidence or wrong artifact |
| Revenue claim | Checkout, receipt, seller dashboard, payment processor | Claim not backed by payment evidence |
| Prompt workflow | Prompt library, failure modes, run log | Prompt causes scope drift or false completion |

## Review Rules

- Findings first, summary second.
- Bugs and behavioral risks outrank style comments.
- Do not approve a release when proof is local-only.
- Do not accept a revenue claim without checkout or seller dashboard evidence.
- If evidence is missing, mark the review blocked.

## Public Companion Files

- Release gate: https://ivelly42.github.io/agent-ops-command-center/release-gate-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md
- Failure modes database: https://ivelly42.github.io/agent-ops-command-center/failure-modes-database-template.md
- Prompt library: https://ivelly42.github.io/agent-ops-command-center/prompt-library-template.md

## Full Template Pack

The paid Agent Ops Command Center pack expands this free review brief into a full Notion-ready workspace:

- agent registry;
- run log;
- prompt library;
- verification ledger;
- cost tracker;
- failure modes;
- weekly operator review;
- operating templates for run briefs, review briefs, RCA, release gates, and weekly reviews.

The full pack target price is `$29`. Early access requests are collected here:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
