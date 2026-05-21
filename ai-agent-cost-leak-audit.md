# AI Agent Cost Leak Audit

Public cost-audit preview for Agent Ops Command Center.

Use this when Codex, Claude Code, Cursor, or local-agent work feels productive but rework, verification time, or model cost is drifting upward.

## Audit Window

| Field | Notes |
| --- | --- |
| Project | Repository or product area |
| Date range | The runs being reviewed |
| Agent tools | Codex, Claude Code, Cursor, local agents, browser QA, review agents |
| Total runs | Count meaningful runs only |
| High-cost runs | Runs that used premium models, long context, repeated retries, or manual cleanup |

## Cost Leak Checklist

| Leak | Proof to look for | Fix |
| --- | --- | --- |
| Prompt ambiguity | Same task retried with different wording | Add a run brief before execution |
| Wrong model or agent | Expensive model used for low-risk work | Record model fit in the agent registry |
| Weak verification | "Looks good" without a command or rendered proof | Add a verification ledger row |
| Missing context | Agent asks for facts already known elsewhere | Use handoff and run log links |
| Scope drift | Unrelated files changed | Use scope freeze before edits |
| Repeated failure | Same symptom appears twice | Promote a failure mode rule |
| Lost handoff | New session restarts analysis from scratch | Fill the handoff template |

## Scoring

| Criterion | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Run objective | Missing | Vague | Specific |
| Changed files | Unknown | Partial | Complete |
| Verification | Missing | Indirect | Direct proof |
| Cost notes | Missing | Estimated | Compared with saved time |
| Failure prevention | Missing | Mentioned | Reusable rule |
| Handoff | Missing | Narrative | Current state plus next action |

If a run scores under `8 / 12`, it is a cost-leak candidate.

## Buy / Do Not Buy Check

Buy the full pack if one avoided cleanup loop is worth more than `$29`.

Do not buy if your current workflow already proves objective, files changed, verification, cost, handoff, and failure prevention for every meaningful agent run.

## Public Companion Files

- Landing page: https://ivelly42.github.io/agent-ops-command-center/
- Interactive cost leak audit: https://ivelly42.github.io/agent-ops-command-center/cost-leak-audit.html
- Cost tracker: https://ivelly42.github.io/agent-ops-command-center/cost-tracker-template.md
- Model routing matrix: https://ivelly42.github.io/agent-ops-command-center/ai-agent-model-routing-matrix.md
- ROI calculator: https://ivelly42.github.io/agent-ops-command-center/agent-ops-roi-calculator.md
- Workflow stack comparison: https://ivelly42.github.io/agent-ops-command-center/ai-agent-workflow-stack-comparison.md
- Buyer decision matrix: https://ivelly42.github.io/agent-ops-command-center/buyer-decision-matrix.md
- Cost Leak Audit Gist: https://gist.github.com/ivelly42/9c16be3782356faef951d1a3d8509991
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

## Revenue Rule

Cost savings are not revenue.

Count revenue only when checkout, receipt, payout, or seller-dashboard evidence proves payment.

## Early Access

Target price: `$29`.

Seven paid orders reach `$203` gross.

Checkout is not live yet. Use the issue form to record purchase intent:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
