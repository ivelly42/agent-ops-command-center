# AI Agent PR Review Scorecard

Use this free PR review scorecard before merging code produced by Codex, Claude Code, Cursor, or another AI coding agent.

The scorecard is designed for builders who need a fast merge gate that separates proven behavior from plausible agent output.

## Copy/Paste PR Review Scorecard

```markdown
# AI Agent PR Review Scorecard

PR / branch:
Repository:
Original request:
Agent used:
Reviewer:
Review date:

Decision:
- Approve
- Request changes
- Block merge

Reason:

| Area | Score 0-2 | Evidence | Notes |
| --- | ---: | --- | --- |
| Scope match |  |  |  |
| Behavioral correctness |  |  |  |
| Test coverage |  |  |  |
| Verification evidence |  |  |  |
| Regression risk |  |  |  |
| Security / privacy risk |  |  |  |
| User-facing quality |  |  |  |
| Maintainability |  |  |  |

Changed files:
Commands run:
Screenshots / recordings:
Runtime URLs:
Artifact digests:
Open risks:

Fixes required:
Owner:
Retest command:
Final evidence:
```

## Scoring Rule

| Score | Meaning | Merge Meaning |
| --- | --- | --- |
| 0 | Missing, contradicted, or too risky | Do not merge |
| 1 | Partially proven | Needs reviewer judgment or follow-up |
| 2 | Directly proven by current evidence | Safe enough for that area |

## AI-Agent Failure Checks

| Failure | What To Inspect |
| --- | --- |
| Edited outside requested scope | Diff, allowed files, issue text, plan |
| Invented or skipped verification | Test logs, screenshots, command output, artifacts |
| Left unused code or stale docs | Diff review, lint, typecheck, dead references |
| Broke mobile or small viewport UI | Browser screenshots or responsive checks |
| Changed unrelated behavior | Existing tests, route checks, focused code review |
| Counted demand signals as revenue | Checkout, receipt, payout, or seller-dashboard proof only |
| Hid blocker behind vague status | Current files, live URLs, logs, and exact error text |

## Merge Gate

Do not merge if any of these are true:

- The change cannot be tied to the original request.
- A high-risk path changed without direct verification.
- Tests or screenshots are named but not actually inspected.
- Revenue, payment, credential, legal, or destructive-operation claims are not backed by authoritative evidence.
- The reviewer cannot explain the behavior from current files and artifacts.

## Ready-To-Use Prompt

```text
Use the AI Agent PR Review Scorecard.

Original request:
Changed files:
Agent summary:
Verification evidence:
Known risks:
Do-not-touch scope:

Review the change as a merge gate. Score each area 0-2, list blocking issues first, and return one decision: approve, request changes, or block merge. Count only current evidence, not agent claims.
```

## Public Companion Files

- PR Review Scorecard Gist: https://gist.github.com/ivelly42/054eee695f3b8dbf9c880456b086459f
- Review brief template: https://ivelly42.github.io/agent-ops-command-center/review-brief-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md
- Scope freeze: https://ivelly42.github.io/agent-ops-command-center/ai-agent-scope-freeze-template.md
- Release gate: https://ivelly42.github.io/agent-ops-command-center/release-gate-template.md
- Revenue proof: https://ivelly42.github.io/agent-ops-command-center/ai-agent-revenue-proof-template.md
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

## Full Template Pack

The paid Agent Ops Command Center pack expands this free PR review scorecard into a full Notion-ready workspace:

- agent registry;
- run log;
- prompt library;
- verification ledger;
- cost tracker;
- failure modes;
- weekly operator review;
- operating templates for PR review scorecards, revenue proof, scope freezes, Cursor runs, Codex runs, Claude Code runs, handoffs, run briefs, review briefs, RCA, release gates, Notion import plans, and weekly reviews.

The full pack target price is `$29`. Early access requests are collected here:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
