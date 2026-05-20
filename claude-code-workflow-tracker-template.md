# Claude Code Workflow Tracker Template

Use this free Claude Code workflow tracker when coding-agent work needs a durable record outside the transcript.

The tracker is built for local repo edits, strict file scopes, verification commands, screenshots, release checks, and handoffs between Claude Code, Codex, Cursor, and human reviewers.

## Copy/Paste Tracker

```markdown
# Claude Code Workflow Tracker

Run ID:

Project:

Goal:

Mode Or Constraints:

Allowed Files:

Do Not Touch:

Inputs Read First:

Changes Made:

Verification Evidence:

Review Notes:

Blocked By:

Next Action:
```

## Minimal Fields

| Field | What To Record | Example |
| --- | --- | --- |
| Run ID | Date, issue, or short label | `2026-05-21-claude-review` |
| Project | Repo, app, or folder | `agent-ops-command-center` |
| Goal | One measurable result | `Add Claude Code tracker Gist` |
| Mode Or Constraints | Hard instruction style | `Task only, no adjacent refactor` |
| Allowed Files | Edit boundary | `one template and index links` |
| Do Not Touch | Forbidden paths or behavior | `paid ZIP and payment audit` |
| Inputs Read First | Required context | `GOAL_STATUS, metrics, release state` |
| Changes Made | Actual patch | `Added public tracker and links` |
| Verification Evidence | Exact proof | `curl live URL and match v2.2` |
| Review Notes | Findings or residual risk | `No paid checkout yet` |
| Blocked By | Hard stop | `Seller/payment setup` |
| Next Action | Concrete follow-up | `Monitor order requests` |

## Claude Code Run Rules

- Name the allowed files before editing.
- Keep user constraints literal: `ONLY`, `verbatim`, and stop conditions are hard boundaries.
- Do not count a claim as complete without exact verification evidence.
- Record public proof separately from local proof.
- Stop at account, payout, tax, legal, credential, or destructive setup.

## Ready-To-Use Prompt

```text
Use the Claude Code Workflow Tracker format.

Goal:
Allowed files:
Do not touch:
Inputs to read first:
Verification required:
Public proof required:
Stop condition:

Before editing, restate the scope. After editing, return changes, verification, public proof, blocker, and next action.
```

## Public Companion Files

- Codex workflow tracker: https://ivelly42.github.io/agent-ops-command-center/codex-workflow-tracker-template.md
- Run brief: https://ivelly42.github.io/agent-ops-command-center/run-brief-template.md
- Run log: https://ivelly42.github.io/agent-ops-command-center/codex-claude-run-log-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md
- Failure RCA: https://ivelly42.github.io/agent-ops-command-center/failure-rca-template.md

## Full Template Pack

The paid Agent Ops Command Center pack expands this free Claude Code tracker into a full Notion-ready workspace:

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
