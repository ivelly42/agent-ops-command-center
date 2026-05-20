# AI Agent Ops Run Log + ROI Preview

Free public preview for builders running Codex, Claude Code, Cursor, or local AI coding agents.

This preview is a compact version of the Agent Ops Command Center workflow. It helps you track what an agent was asked to do, what changed, and what evidence proves the work is safe enough to keep.

## Copy/Paste Run Log

| Field | Value |
| --- | --- |
| Run ID |  |
| Agent |  |
| Objective |  |
| Allowed scope |  |
| Stop condition |  |
| Inputs read |  |
| Changed files |  |
| Verification evidence |  |
| Result |  |
| Follow-up |  |

## Copy/Paste Run Brief

```text
Objective:
Allowed scope:
Do not touch:
Inputs to read first:
Expected artifact:
Verification command:
Stop condition:
```

## Fast ROI Check

The full Agent Ops Command Center pack target price is `$29`.

| Cleanup time avoided | Hourly value | Value recovered |
| --- | ---: | ---: |
| 30 minutes | $30/hour | $15 |
| 1 hour | $30/hour | $30 |
| 2 hours | $50/hour | $100 |
| 4 hours | $50/hour | $200 |

The pack breaks even if it prevents roughly one hour of cleanup time for a builder valuing their time around `$30/hour`.

## Failure Modes To Track

| Failure | Detection question | Prevention rule |
| --- | --- | --- |
| Missing verification | Did the agent provide an exact command, screenshot, URL, or artifact digest? | Do not mark done without evidence |
| Scope drift | Did the agent edit files outside the allowed path? | Name allowed and forbidden paths before the run |
| Repeated prompt mistake | Did the same prompt weakness recur? | Version prompts and record known failure modes |
| Weak handoff | Can another person review the result without chat history? | Keep run log rows and verification ledger entries |

## Full Preview Links

- Landing page: https://ivelly42.github.io/agent-ops-command-center/
- Product tour: https://ivelly42.github.io/agent-ops-command-center/product-tour.md
- ROI calculator: https://ivelly42.github.io/agent-ops-command-center/agent-ops-roi-calculator.md
- Codex workflow tracker: https://ivelly42.github.io/agent-ops-command-center/codex-workflow-tracker-template.md
- Codex workflow tracker Gist: https://gist.github.com/ivelly42/cbadc556d2d75b01d5dde8d8df0e18c6
- Claude Code workflow tracker: https://ivelly42.github.io/agent-ops-command-center/claude-code-workflow-tracker-template.md
- Claude Code workflow tracker Gist: https://gist.github.com/ivelly42/00f014ce4b4161cd42a4008775e1abb5
- Verification ledger Gist: https://gist.github.com/ivelly42/d609682c723f69651bf963fe15889839
- AI agent handoff template: https://ivelly42.github.io/agent-ops-command-center/ai-agent-handoff-template.md
- AI agent handoff Gist: https://gist.github.com/ivelly42/35c9b9c1cd95c837c9775ca3e5db7c83
- Cursor workflow tracker: https://ivelly42.github.io/agent-ops-command-center/cursor-workflow-tracker-template.md
- Cursor workflow tracker Gist: https://gist.github.com/ivelly42/27bac1786ad60ed6e56f908c422c9138
- AI agent scope freeze template: https://ivelly42.github.io/agent-ops-command-center/ai-agent-scope-freeze-template.md
- AI agent scope freeze Gist: https://gist.github.com/ivelly42/2f1b5faa95039799688dc5ed8d3244a8
- AI agent revenue proof template: https://ivelly42.github.io/agent-ops-command-center/ai-agent-revenue-proof-template.md
- AI agent revenue proof Gist: https://gist.github.com/ivelly42/bc14bd257cbcc139a93aba5e3606c156
- AI agent Notion import guide: https://ivelly42.github.io/agent-ops-command-center/ai-agent-notion-import-guide.md
- AI agent Notion import guide Gist: https://gist.github.com/ivelly42/0bdf3615d09080c67f8263ef057bd04b
- AI agent PR review scorecard: https://ivelly42.github.io/agent-ops-command-center/ai-agent-pr-review-scorecard.md
- AI agent PR review scorecard Gist: https://gist.github.com/ivelly42/054eee695f3b8dbf9c880456b086459f
- AI agent verification command library: https://ivelly42.github.io/agent-ops-command-center/ai-agent-verification-command-library.md
- AI agent verification command library Gist: https://gist.github.com/ivelly42/0f35039dbb5e455cfe36c316632f96fb
- Paid delivery manifest: https://ivelly42.github.io/agent-ops-command-center/paid-delivery-manifest.md
- Paid delivery manifest Gist: https://gist.github.com/ivelly42/417991e7e2694d5e243f4319ce680f0f
- Run brief template: https://ivelly42.github.io/agent-ops-command-center/run-brief-template.md
- Run log template: https://ivelly42.github.io/agent-ops-command-center/codex-claude-run-log-template.md
- Failure RCA template: https://ivelly42.github.io/agent-ops-command-center/failure-rca-template.md
- Preflight checklist: https://ivelly42.github.io/agent-ops-command-center/checklist.md
- Preview release: https://github.com/ivelly42/agent-ops-command-center/releases/tag/v3.1-preview
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

## Request Early Access

The full paid pack is not published publicly. Checkout is not live yet.

Early-access request:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
