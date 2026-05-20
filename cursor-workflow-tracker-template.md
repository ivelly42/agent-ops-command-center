# Cursor Workflow Tracker Template

Use this free Cursor workflow tracker when Cursor agent edits need a durable record outside the editor chat.

The tracker is built for AI pair-programming sessions, multi-file changes, Composer or agent runs, local verification, review handoffs, and launch work that must separate demand signals from paid revenue proof.

## Copy/Paste Tracker

```markdown
# Cursor Workflow Tracker

Run ID:

Repository:

Goal:

Mode:

Allowed Files:

Do Not Touch:

Context Provided:

Files Changed:

Diff Summary:

Verification Evidence:

Manual Review Needed:

Blocked By:

Next Action:
```

## Minimal Fields

| Field | What To Record | Example |
| --- | --- | --- |
| Run ID | Date, issue, or short label | `2026-05-21-cursor-fix` |
| Repository | Repo or folder | `agent-ops-command-center` |
| Goal | One measurable result | `Add Cursor tracker lead page` |
| Mode | Cursor workflow used | `Composer`, `Agent`, or `Inline edit` |
| Allowed Files | Edit boundary | `one template and public index links` |
| Do Not Touch | Protected paths or behavior | `paid ZIP stays private` |
| Context Provided | Files, docs, screenshots, or issue text | `GOAL_STATUS, metrics, release state` |
| Files Changed | Review scope | `cursor-workflow-tracker-template.md` |
| Diff Summary | Short behavior change | `Added public tracker and links` |
| Verification Evidence | Exact proof | `curl live URL and match v2.5` |
| Manual Review Needed | What still needs human judgment | `Payment channel setup` |
| Blocked By | Hard stop | `No authenticated checkout` |
| Next Action | Concrete continuation | `Monitor order requests` |

## Cursor Run Rules

- Name the target files before accepting broad edits.
- Save the final diff summary, not just the chat answer.
- Record commands, screenshots, URLs, or release digests that prove the work.
- Mark manual review separately from automated checks.
- Do not count Stars, downloads, issues, or comments as paid revenue.
- Stop at account, payout, tax, legal, credential, or destructive setup.

## Ready-To-Use Cursor Prompt

```text
Use the Cursor Workflow Tracker format.

Goal:
Mode:
Allowed files:
Do not touch:
Context to read:
Verification required:
Manual review needed:
Stop condition:

After the run, return changed files, diff summary, verification evidence, blocker, and next action.
```

## Public Companion Files

- Cursor tracker Gist: https://gist.github.com/ivelly42/27bac1786ad60ed6e56f908c422c9138
- AI agent handoff: https://ivelly42.github.io/agent-ops-command-center/ai-agent-handoff-template.md
- Codex workflow tracker: https://ivelly42.github.io/agent-ops-command-center/codex-workflow-tracker-template.md
- Claude Code workflow tracker: https://ivelly42.github.io/agent-ops-command-center/claude-code-workflow-tracker-template.md
- Run brief: https://ivelly42.github.io/agent-ops-command-center/run-brief-template.md
- Run log: https://ivelly42.github.io/agent-ops-command-center/codex-claude-run-log-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md

## Full Template Pack

The paid Agent Ops Command Center pack expands this free Cursor tracker into a full Notion-ready workspace:

- agent registry;
- run log;
- prompt library;
- verification ledger;
- cost tracker;
- failure modes;
- weekly operator review;
- operating templates for Cursor runs, Codex runs, Claude Code runs, handoffs, run briefs, review briefs, RCA, release gates, and weekly reviews.

The full pack target price is `$29`. Early access requests are collected here:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
