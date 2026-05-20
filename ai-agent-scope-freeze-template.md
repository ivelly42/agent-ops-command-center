# AI Agent Scope Freeze Template

Use this free scope freeze template before a Codex, Claude Code, Cursor, or local-agent run touches a real repo.

The template prevents broad edits, accidental refactors, payment-account actions, credential mistakes, and false completion claims by forcing the task to name allowed files, forbidden files, stop conditions, and proof before work starts.

## Copy/Paste Scope Freeze

```markdown
# AI Agent Scope Freeze

Run ID:

Project:

Objective:

Done When:

Allowed Files Or Surfaces:

Do Not Touch:

Required Inputs To Read First:

Allowed Commands:

Forbidden Commands:

Stop Conditions:

Verification Required:

Public Proof Required:

Revenue Claim Rule:

Owner:
```

## Minimal Fields

| Field | What To Record | Example |
| --- | --- | --- |
| Run ID | Date, issue, release, or short label | `2026-05-21-v2.6-preview` |
| Project | Repo, app, or folder | `agent-ops-command-center` |
| Objective | One measurable task | `Add scope freeze lead page` |
| Done When | Evidence-based finish line | `Live page and release contain v2.6` |
| Allowed Files Or Surfaces | Hard edit boundary | `README, index, llms, sitemap, new template` |
| Do Not Touch | Protected work | `paid ZIP stays private` |
| Required Inputs To Read First | Context gate | `GOAL_STATUS, metrics, release state` |
| Allowed Commands | Safe verification path | `rg, curl, gh release view` |
| Forbidden Commands | Destructive or risky path | `git reset --hard`, payout setup, wallet creation |
| Stop Conditions | When the agent must pause | `Account, payment, tax, legal, credential, destructive step` |
| Verification Required | Exact proof | `curl live URLs and match v2.6` |
| Public Proof Required | Release, URL, issue, discussion | `v2.6-preview release` |
| Revenue Claim Rule | Paid proof boundary | `Only checkout, receipt, or seller dashboard counts` |
| Owner | Who decides unresolved risk | `Operator` |

## Scope Freeze Rules

- Treat `ONLY`, `Do Not Touch`, and stop conditions as hard boundaries.
- Do not refactor adjacent code unless the objective requires it.
- Do not count a release, Gist, Star, issue, or download as paid revenue.
- If the agent sees credentials, payment setup, payout setup, tax setup, legal setup, or destructive commands, it must stop and record the blocker.
- Completion requires exact evidence, not a confident summary.

## Ready-To-Use Prompt

```text
Use the AI Agent Scope Freeze Template.

Objective:
Done when:
Allowed files or surfaces:
Do not touch:
Inputs to read first:
Allowed commands:
Forbidden commands:
Stop conditions:
Verification required:
Public proof required:
Revenue claim rule:

Before editing, restate the freeze. After editing, return changed files, proof, blockers, and next action.
```

## Public Companion Files

- Scope Freeze Gist: https://gist.github.com/ivelly42/2f1b5faa95039799688dc5ed8d3244a8
- Cursor workflow tracker: https://ivelly42.github.io/agent-ops-command-center/cursor-workflow-tracker-template.md
- AI agent handoff: https://ivelly42.github.io/agent-ops-command-center/ai-agent-handoff-template.md
- Codex workflow tracker: https://ivelly42.github.io/agent-ops-command-center/codex-workflow-tracker-template.md
- Claude Code workflow tracker: https://ivelly42.github.io/agent-ops-command-center/claude-code-workflow-tracker-template.md
- Run brief: https://ivelly42.github.io/agent-ops-command-center/run-brief-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md

## Full Template Pack

The paid Agent Ops Command Center pack expands this free scope freeze into a full Notion-ready workspace:

- agent registry;
- run log;
- prompt library;
- verification ledger;
- cost tracker;
- failure modes;
- weekly operator review;
- operating templates for scope freezes, Cursor runs, Codex runs, Claude Code runs, handoffs, run briefs, review briefs, RCA, release gates, and weekly reviews.

The full pack target price is `$29`. Early access requests are collected here:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
