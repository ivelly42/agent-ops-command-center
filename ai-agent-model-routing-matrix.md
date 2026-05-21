# AI Agent Model Routing Matrix

Public model-routing preview for Agent Ops Command Center.

Use this before starting a meaningful Codex, Claude Code, Cursor, or local-agent run when the model, tool, or review path is not obvious.

## Routing Matrix

| Work Type | Default Route | Escalate When | Avoid When | Verification Needed |
| --- | --- | --- | --- | --- |
| Small code edit | Fast coding agent | Shared module or hidden regression risk | Requirements are unclear | Focused test or diff check |
| Cross-file refactor | Strong coding model | Public API, schema, or state flow changes | No test coverage exists | Full relevant test slice |
| UI change | Frontend agent plus browser QA | Responsive layout or visual state is risky | No running app is available | Screenshot or browser check |
| Code review | Review agent | Security, data, payment, auth, or migration risk | The diff is not stable | File and line findings |
| Research / docs | Browser-capable agent | Current API, pricing, legal, or policy facts matter | Offline recall is enough | Source links and date |
| Release / revenue claim | Verification-first agent | Money, delivery, or public release is involved | Payment evidence is missing | Receipt, dashboard, digest, or release evidence |

## Model Choice Rule

Use the cheapest reliable route that can produce direct proof.

Escalate only when at least one is true:

- The run touches shared behavior.
- The run changes release, payment, auth, or buyer-facing surfaces.
- A previous run failed for weak reasoning or missing context.
- Verification requires multiple tools or rendered output.
- The cost of a wrong answer is higher than the model-cost difference.

## Review Path

| Risk | Required Review |
| --- | --- |
| Low | Self-check plus exact command |
| Medium | Diff review plus focused test |
| High | Second model review or human review before merge |
| Revenue / delivery | Payment proof, archive digest, and delivery manifest |

## Public Companion Files

- Landing page: https://ivelly42.github.io/agent-ops-command-center/
- Cost leak audit: https://ivelly42.github.io/agent-ops-command-center/ai-agent-cost-leak-audit.md
- Prompt regression test: https://ivelly42.github.io/agent-ops-command-center/ai-agent-prompt-regression-test.md
- Acceptance test suite: https://ivelly42.github.io/agent-ops-command-center/ai-agent-acceptance-test-suite.md
- Security review checklist: https://ivelly42.github.io/agent-ops-command-center/ai-agent-security-review-checklist.md
- Incident report template: https://ivelly42.github.io/agent-ops-command-center/ai-agent-incident-report-template.md
- Workflow stack comparison: https://ivelly42.github.io/agent-ops-command-center/ai-agent-workflow-stack-comparison.md
- Cost tracker: https://ivelly42.github.io/agent-ops-command-center/cost-tracker-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md
- Model Routing Matrix Gist: https://gist.github.com/ivelly42/6e88c810c57fca1d5c2d7ff35907cb5c
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

## Buy / Do Not Buy Check

Buy the full pack if model choice, repeated retries, or weak review paths cost more than one hour of cleanup.

Do not buy if every meaningful run already records the selected model, reason, fallback route, verification, and review gate.

## Revenue Rule

Routing interest is not revenue.

Count revenue only when checkout, receipt, payout, or seller-dashboard evidence proves payment.

## Early Access

Target price: `$29`.

Seven paid orders reach `$203` gross.

Checkout is not live yet. Use the issue form to record purchase intent:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
