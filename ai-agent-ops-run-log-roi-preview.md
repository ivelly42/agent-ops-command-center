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
- Run log template: https://ivelly42.github.io/agent-ops-command-center/codex-claude-run-log-template.md
- Failure RCA template: https://ivelly42.github.io/agent-ops-command-center/failure-rca-template.md
- Preflight checklist: https://ivelly42.github.io/agent-ops-command-center/checklist.md
- Preview release: https://github.com/ivelly42/agent-ops-command-center/releases/tag/v1.7-preview
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

## Request Early Access

The full paid pack is not published publicly. Checkout is not live yet.

Early-access request:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
