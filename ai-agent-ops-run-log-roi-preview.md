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
- AI agent cost leak audit: https://ivelly42.github.io/agent-ops-command-center/ai-agent-cost-leak-audit.md
- AI agent cost leak audit Gist: https://gist.github.com/ivelly42/9c16be3782356faef951d1a3d8509991
- AI agent model routing matrix: https://ivelly42.github.io/agent-ops-command-center/ai-agent-model-routing-matrix.md
- AI agent model routing matrix Gist: https://gist.github.com/ivelly42/6e88c810c57fca1d5c2d7ff35907cb5c
- AI agent prompt regression test: https://ivelly42.github.io/agent-ops-command-center/ai-agent-prompt-regression-test.md
- AI agent prompt regression test Gist: https://gist.github.com/ivelly42/409734bff33d301a847a83f46ea21b31
- AI agent acceptance test suite: https://ivelly42.github.io/agent-ops-command-center/ai-agent-acceptance-test-suite.md
- AI agent acceptance test suite Gist: https://gist.github.com/ivelly42/d9aacd5506dccc9b5d002ef6fd973c72
- AI agent security review checklist: https://ivelly42.github.io/agent-ops-command-center/ai-agent-security-review-checklist.md
- AI agent security review checklist Gist: https://gist.github.com/ivelly42/172041903d2491a4856f9c585f89364a
- AI agent incident report template: https://ivelly42.github.io/agent-ops-command-center/ai-agent-incident-report-template.md
- AI agent incident report template Gist: https://gist.github.com/ivelly42/ec9207c47d152642247989aac2dcad7b
- AI agent operating system template: https://ivelly42.github.io/agent-ops-command-center/ai-agent-operating-system-template.md
- AI agent operating system scorecard Gist: https://gist.github.com/ivelly42/37a14ab70b537aeaef1156549876124b
- Codex vs Claude Code vs Cursor workflow picker: https://ivelly42.github.io/agent-ops-command-center/codex-vs-claude-code-vs-cursor.md
- Codex vs Claude Code vs Cursor workflow picker Gist: https://gist.github.com/ivelly42/75ce3130a95d83a247de6f16eee0060c
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
- Buyer decision matrix: https://ivelly42.github.io/agent-ops-command-center/buyer-decision-matrix.md
- Buyer decision matrix Gist: https://gist.github.com/ivelly42/348c406da907bf02c1bf2be20832906c
- Checkout readiness FAQ: https://ivelly42.github.io/agent-ops-command-center/checkout-readiness-faq.md
- Checkout readiness FAQ Gist: https://gist.github.com/ivelly42/f82bd8c423d1c01be2c838d14abeccba
- Buyer intake packet: https://ivelly42.github.io/agent-ops-command-center/buyer-intake-packet.md
- Buyer intake packet Gist: https://gist.github.com/ivelly42/32252d208c081993f6ad753929aa70bf
- Purchase approval brief: https://ivelly42.github.io/agent-ops-command-center/purchase-approval-brief.md
- Purchase approval brief Gist: https://gist.github.com/ivelly42/165483c835c207be472102f5badc5f70
- AI agent workflow stack comparison: https://ivelly42.github.io/agent-ops-command-center/ai-agent-workflow-stack-comparison.md
- Workflow stack comparison Gist: https://gist.github.com/ivelly42/5d17877646be74639b374e36211f976e
- Run brief template: https://ivelly42.github.io/agent-ops-command-center/run-brief-template.md
- Run log template: https://ivelly42.github.io/agent-ops-command-center/codex-claude-run-log-template.md
- Failure RCA template: https://ivelly42.github.io/agent-ops-command-center/failure-rca-template.md
- Preflight checklist: https://ivelly42.github.io/agent-ops-command-center/checklist.md
- Preview release: https://github.com/ivelly42/agent-ops-command-center/releases/tag/v4.8-preview
- HTML template gallery: https://ivelly42.github.io/agent-ops-command-center/template-gallery.html
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

## Request Early Access

The full paid pack is not published publicly. Checkout is not live yet.

Early-access request:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
