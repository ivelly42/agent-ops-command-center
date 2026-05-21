# AI Agent Handoff Template

Use this free AI agent handoff template when a Codex, Claude Code, Cursor, or local-agent run needs to move from one person, model, or session to another without losing context.

The handoff is designed for bug fixes, release work, UI QA, product launch work, and agent runs that stop at a payment, account, credential, legal, or approval boundary.

## Copy/Paste Handoff

```markdown
# AI Agent Handoff

Run ID:

Project:

Original Goal:

Current State:

What Changed:

Files Touched:

Evidence Collected:

Commands Or URLs Verified:

Known Blockers:

Do Not Revert:

Next Best Action:

Completion Requirement:
```

## Minimal Fields

| Field | What To Record | Example |
| --- | --- | --- |
| Run ID | Date, issue, or release label | `2026-05-21-v2.4-preview` |
| Project | Repo, app, or folder | `agent-ops-command-center` |
| Original Goal | The full user objective | `Reach $200 gross revenue evidence` |
| Current State | Proven state now | `No paid checkout; metrics show $0` |
| What Changed | Work completed this run | `Added public handoff lead page` |
| Files Touched | Review scope | `README, index, llms, sitemap, new template` |
| Evidence Collected | Proof, not intent | `release digest, Pages URL, metrics JSON` |
| Commands Or URLs Verified | Exact checks | `curl live page and match v2.4` |
| Known Blockers | Current hard stop | `Seller/payment setup required` |
| Do Not Revert | User or prior work to preserve | `Paid ZIP remains private` |
| Next Best Action | One concrete continuation | `Monitor order requests and checkout availability` |
| Completion Requirement | What proves done | `Checkout or seller dashboard shows $200+ gross` |

## Handoff Rules

- Keep the original goal intact.
- Separate public proof from revenue proof.
- Treat issue requests, release downloads, stars, and comments as demand signals, not paid revenue.
- Record exact links and commands that were checked.
- Name hard blockers instead of turning them into fake progress.
- Preserve user edits and prior generated assets unless the next task explicitly changes them.

## Ready-To-Use Prompt

```text
Use the AI Agent Handoff Template.

Original goal:
Current proven state:
Files changed:
Evidence:
Known blockers:
Do not revert:
Next best action:
Completion requirement:

Continue from this state. Do not redefine the goal.
```

## Public Companion Files

- Handoff Gist: https://gist.github.com/ivelly42/35c9b9c1cd95c837c9775ca3e5db7c83
- Codex workflow tracker: https://ivelly42.github.io/agent-ops-command-center/codex-workflow-tracker-template.md
- Claude Code workflow tracker: https://ivelly42.github.io/agent-ops-command-center/claude-code-workflow-tracker-template.md
- Run brief: https://ivelly42.github.io/agent-ops-command-center/run-brief-template.md
- Run log: https://ivelly42.github.io/agent-ops-command-center/codex-claude-run-log-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md
- Failure RCA: https://ivelly42.github.io/agent-ops-command-center/failure-rca-template.md
- Release gate: https://ivelly42.github.io/agent-ops-command-center/release-gate-template.md

## Full Template Pack

The paid Agent Ops Command Center pack expands this free handoff into a full Notion-ready workspace:

- agent registry;
- run log;
- prompt library;
- verification ledger;
- cost tracker;
- failure modes;
- weekly operator review;
- operating templates for run briefs, review briefs, RCA, release gates, handoffs, and weekly reviews.

The full pack target price is `$29`. Early access requests are collected here:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
