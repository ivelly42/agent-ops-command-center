# AI Coding Agent Run Brief Template

Use this free run brief before starting Codex, Claude Code, Cursor, or another AI coding agent on a real task.

The brief makes the objective, allowed scope, hard stops, inputs, expected artifact, and verification proof explicit before the agent edits anything.

## Copy/Paste Run Brief

```markdown
# AI Agent Run Brief

Objective:

Why This Matters:

Allowed Scope:

Do Not Touch:

Inputs To Read First:

Expected Output:

Required Verification:

Hard Stop Conditions:

Handoff Format:
```

## Field Guide

| Field | What To Write | Example |
| --- | --- | --- |
| Objective | One concrete outcome | `Fix checkout button on mobile` |
| Why This Matters | Business or user impact | `Buyer cannot open order form` |
| Allowed Scope | Files, pages, or modules the agent can touch | `index.html and README.md only` |
| Do Not Touch | Explicit boundaries | `Do not edit payment audit` |
| Inputs To Read First | Required docs, tickets, logs, screenshots | `GOAL_STATUS.md and latest release` |
| Expected Output | Deliverable shape | `Patch, release note, and proof` |
| Required Verification | Exact command, URL, screenshot, or dashboard | `curl live URL and match v1.8` |
| Hard Stop Conditions | When the agent must pause | `Login, payout, tax, or credential screen` |
| Handoff Format | Final answer structure | `Changed, verified, remaining blocker` |

## Ready-To-Run Prompt

```text
You are working from this run brief.

Objective:

Allowed scope:

Do not touch:

Read first:

Expected output:

Verification required:

Hard stop:

Before editing, restate the scope and verification gate. After editing, show exact evidence. Do not claim done without proof.
```

## Common Run Brief Mistakes

| Mistake | Risk | Fix |
| --- | --- | --- |
| Objective is broad | Agent optimizes for a nearby smaller task | Name one finishable outcome |
| Scope is absent | Unrelated files change | List allowed and forbidden paths |
| Verification is vague | Agent claims done from local inspection | Require exact command, URL, or artifact proof |
| Stop condition missing | Agent enters payment, login, or credential setup | Name hard stops before work starts |
| Handoff unspecified | Reviewer must read chat history | Require changed files, evidence, and residual risk |

## Public Companion Files

- Run log: https://ivelly42.github.io/agent-ops-command-center/codex-claude-run-log-template.md
- Review brief: https://ivelly42.github.io/agent-ops-command-center/review-brief-template.md
- Release gate: https://ivelly42.github.io/agent-ops-command-center/release-gate-template.md
- Failure RCA: https://ivelly42.github.io/agent-ops-command-center/failure-rca-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md

## Full Template Pack

The paid Agent Ops Command Center pack expands this free run brief into a full Notion-ready workspace:

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
