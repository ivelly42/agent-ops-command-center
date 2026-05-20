# AI Coding Agent Failure Modes Database Template

Use this free failure modes database when AI coding agents repeat the same mistakes across runs.

The database turns agent mistakes into reusable prevention rules. It is designed for builders using Codex, Claude Code, Cursor, browser agents, review agents, or local automation.

## Minimal Database Fields

| Field | What To Record | Example |
| --- | --- | --- |
| Failure | Short stable name | `False completion` |
| Symptom | What the reviewer sees | `Agent says done without evidence` |
| Root Cause | Why it happened | `Verification was optional` |
| Detection | How to catch it next time | `No command output` |
| Fix | Immediate correction | `Run exact check` |
| Prevention Rule | Rule to add to future briefs | `No done without pass signal` |
| Severity | `Low`, `Medium`, or `High` | `High` |
| Last Seen | Date or run ID | `2026-05-21` |

## Copy/Paste Markdown Table

```markdown
| Failure | Symptom | Root Cause | Detection | Fix | Prevention Rule | Severity | Last Seen |
| --- | --- | --- | --- | --- | --- | --- | --- |
| False completion | Agent says done without evidence | Verification was optional | No command output | Run exact check | No done without pass signal | High |  |
| Scope drift | Unrelated files changed | Allowed scope absent | Diff includes unrelated paths | Revert only own unrelated edits | Write allowed files before edits | Medium |  |
```

## Copy/Paste CSV Header

```csv
Failure,Symptom,Root Cause,Detection,Fix,Prevention Rule,Severity,Last Seen
```

Public sample CSV:

https://ivelly42.github.io/agent-ops-command-center/sample/failure_modes_sample.csv

## Starter Failure Modes

| Failure | Detection | Prevention Rule |
| --- | --- | --- |
| False completion | No command output or URL evidence | No done without pass signal |
| Scope drift | Diff includes unrelated paths | Write allowed files before edits |
| Credential risk | Login, payout, tax, or secret screen appears | Credentials and payments are hard stops |
| Weak launch path | Checkout URL missing | No revenue claim without dashboard proof |
| Stale platform assumption | Live UI or docs contradict the plan | Verify volatile platform facts |
| Overbuilt abstraction | One-use helper turns into a framework | Keep the smallest complete change |

## Failure RCA Prompt

```text
Symptom:
Expected:
Actual:
Evidence:
Root cause:
Immediate fix:
Prevention rule:
Verification:
Promote to memory:
```

## When To Add A Row

Add a row when:

- a reviewer catches the same agent mistake twice;
- the agent marks work done without proof;
- a task drifts outside the requested scope;
- a release needs a payment, account, tax, legal, or credential step;
- a platform behavior changed and the old assumption caused a bad plan;
- a future prompt could prevent the same failure.

## Full Template Pack

The paid Agent Ops Command Center pack expands this free database into a full Notion-ready workspace:

- agent registry;
- run log;
- prompt library;
- verification ledger;
- cost tracker;
- failure modes;
- weekly operator review;
- operating templates for run briefs, review briefs, RCA, release gates, and weekly reviews.

The full pack target price is `$29`. Early access requests are collected here:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
