# AI Agent Notion Import Guide

Use this free import guide when turning AI-agent workflow templates into a Notion workspace.

The guide is built for Codex, Claude Code, Cursor, and local-agent operators who want run logs, prompt libraries, verification ledgers, cost trackers, failure modes, and revenue proof in one workspace instead of scattered chat transcripts.

Browser import builder: https://ivelly42.github.io/agent-ops-command-center/notion-import-builder.html

## Quick Import Plan

```markdown
# AI Agent Notion Import Plan

Workspace Name:

Primary Goal:

Databases To Import:

CSV Files Ready:

Template Pages Ready:

Relations Needed:

Views Needed:

First Run To Log:

Verification Rule:

Revenue Proof Rule:

Weekly Review Day:

Import Blockers:
```

## Recommended Notion Structure

| Area | Database Or Page | Purpose |
| --- | --- | --- |
| Dashboard | Page | Active runs, blockers, next revenue action |
| Agent Registry | Database | Agent, model, tools, best use, avoid list |
| Run Log | Database | Objective, files changed, evidence, result, follow-up |
| Prompt Library | Database | Prompt version, change reason, known failure |
| Verification Ledger | Database | Exact proof before a done claim |
| Cost Tracker | Database | Agent cost, time saved, ROI note |
| Failure Modes | Database | Repeated mistakes, detection, prevention |
| Revenue Proof | Page or database | Checkout, receipt, payout, seller dashboard evidence |
| Weekly Review | Page | Best run, worst run, lesson, next action |

## Import Steps

1. Create a Notion page named `Agent Ops Command Center`.
2. Create one database for each CSV file.
3. Keep the shipped column names unchanged for the first week.
4. Add views only after the first import works.
5. Paste operating templates below the dashboard.
6. Link each run log row to the agent, prompt, verification check, and failure mode when useful.
7. Keep revenue proof separate from demand signals.

## First Views To Create

| Database | View | Filter Or Sort |
| --- | --- | --- |
| Run Log | Active Runs | Result is not `Pass` |
| Run Log | Blocked Runs | Result is `Blocked` |
| Verification Ledger | Required Checks | Project or release filter |
| Failure Modes | High Severity | Severity is `High` |
| Cost Tracker | Recent ROI | Sort by date descending |
| Prompt Library | Production Prompts | Eval score >= 4 |

## Import Rules

- Do not customize schema before logging three real runs.
- Do not merge run logs and verification proof into one messy table.
- Keep payment evidence separate from GitHub issues, release downloads, stars, comments, and Gist views.
- Stop if the import requires private account, payment, payout, tax, legal, or credential setup.
- Treat a blank relation as acceptable for the first week; clean data beats overbuilt setup.

## Public Companion Files

- Notion Import Guide Gist: https://gist.github.com/ivelly42/0bdf3615d09080c67f8263ef057bd04b
- Browser import builder: https://ivelly42.github.io/agent-ops-command-center/notion-import-builder.html
- Product tour: https://ivelly42.github.io/agent-ops-command-center/product-tour.md
- Revenue proof: https://ivelly42.github.io/agent-ops-command-center/ai-agent-revenue-proof-template.md
- Scope freeze: https://ivelly42.github.io/agent-ops-command-center/ai-agent-scope-freeze-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md
- Cost tracker: https://ivelly42.github.io/agent-ops-command-center/cost-tracker-template.md
- Agent registry: https://ivelly42.github.io/agent-ops-command-center/agent-registry-template.md

## Full Template Pack

The paid Agent Ops Command Center pack includes the full Notion-ready workspace, CSV starter databases, import guide, quickstart, and operating templates.

The full pack target price is `$29`. Early access requests are collected here:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
