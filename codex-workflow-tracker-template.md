# Codex Workflow Tracker Template

Use this free Codex workflow tracker when coding-agent runs need to survive beyond chat history.

The tracker is designed for builders using Codex on local repos, GitHub launch work, bug fixes, UI QA, and release checks. It keeps the prompt, files, proof, blocker, and follow-up in one reviewable record.

## Copy/Paste Tracker

```markdown
# Codex Workflow Tracker

Run ID:

Repository:

Goal:

Allowed Files:

Inputs Read:

Agent Actions:

Files Changed:

Verification Evidence:

Public Proof:

Blocked By:

Revenue Or Launch Impact:

Follow-Up:
```

## Minimal Fields

| Field | What To Record | Example |
| --- | --- | --- |
| Run ID | Date, issue, or short label | `2026-05-21-v2.0-preview` |
| Repository | Repo or folder | `agent-ops-command-center` |
| Goal | One measurable result | `Add Codex workflow tracker lead page` |
| Allowed Files | Edit boundary | `README, index, llms, sitemap, new template` |
| Inputs Read | Evidence before edits | `GOAL_STATUS, metrics, release state` |
| Agent Actions | What changed | `Added page, linked from public index` |
| Files Changed | Review scope | `codex-workflow-tracker-template.md` |
| Verification Evidence | Exact proof | `curl public page and rg expected text` |
| Public Proof | URL, release, issue, discussion | `v2.0-preview release` |
| Blocked By | Hard stop | `No paid checkout` |
| Revenue Or Launch Impact | Demand path | `More search landing surface` |
| Follow-Up | Next action | `Monitor order requests` |

## Tracker Rules

- Track the live URL, not only the local file.
- Treat release downloads as interest, not revenue.
- Treat GitHub order issues as demand signals, not paid orders.
- Require checkout, receipt, or seller dashboard evidence before recording revenue.
- Stop when a task reaches account, payout, tax, credential, or legal setup.

## Search-Friendly Use Cases

| Use Case | Tracker Value |
| --- | --- |
| Codex bug fix | Preserve inputs, changed files, test evidence, and follow-up |
| Codex UI pass | Pair screenshots or public URLs with exact changes |
| Codex release | Attach asset digest, release URL, and Pages deploy state |
| Codex revenue task | Separate product launch work from real payment proof |
| Codex handoff | Let another reviewer inspect without reading the chat |

## Ready-To-Use Codex Prompt

```text
Use the Codex Workflow Tracker format.

Goal:
Allowed files:
Do not touch:
Inputs to read:
Verification required:
Public proof required:
Hard stop:

After the run, return changed files, verification evidence, public proof, blockers, and follow-up.
```

## Public Companion Files

- Run brief: https://ivelly42.github.io/agent-ops-command-center/run-brief-template.md
- Run log: https://ivelly42.github.io/agent-ops-command-center/codex-claude-run-log-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md
- Release gate: https://ivelly42.github.io/agent-ops-command-center/release-gate-template.md
- Failure RCA: https://ivelly42.github.io/agent-ops-command-center/failure-rca-template.md

## Full Template Pack

The paid Agent Ops Command Center pack expands this free Codex tracker into a full Notion-ready workspace:

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
