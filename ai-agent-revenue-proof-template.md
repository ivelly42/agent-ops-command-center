# AI Agent Revenue Proof Template

Use this free revenue proof template when an AI-agent product, template pack, or launch run needs to separate real paid revenue from interest signals.

The template is designed for builders who track launch work with Codex, Claude Code, Cursor, GitHub Pages, Gists, issue forms, releases, and lightweight demand metrics.

## Copy/Paste Revenue Proof

```markdown
# AI Agent Revenue Proof

Product:

Price:

Revenue Target:

Paid Orders Needed:

Checkout URL:

Seller Dashboard URL:

Receipt Or Payout Evidence:

Gross Revenue Proven:

Refunds Or Failed Payments:

Net Revenue If Known:

Demand Signals Not Counted:

Public Metrics URL:

Last Verified:

Completion Rule:
```

## Minimal Fields

| Field | What To Record | Example |
| --- | --- | --- |
| Product | Product or pack name | `Agent Ops Command Center` |
| Price | Public price | `$29` |
| Revenue Target | Goal amount | `$200` |
| Paid Orders Needed | Count required to pass target | `7 orders = $203 gross` |
| Checkout URL | Real payment page | `Stripe, Gumroad, Ko-fi, Lemon Squeezy, or other checkout` |
| Seller Dashboard URL | Private proof source | `seller dashboard order list` |
| Receipt Or Payout Evidence | Proof artifact | `receipt id, order id, payout line, screenshot reference` |
| Gross Revenue Proven | Count only paid proof | `$0 until checkout or seller dashboard exists` |
| Refunds Or Failed Payments | Deductions or invalid orders | `none known` |
| Demand Signals Not Counted | Interest only | `GitHub issues, release downloads, stars, Gist views` |
| Public Metrics URL | Public status page | `metrics/status.json` |
| Last Verified | Timestamp | `2026-05-21T05:40:00+09:00` |
| Completion Rule | Exact finish condition | `gross_revenue_usd >= 200 with checkout, receipt, or seller-dashboard evidence` |

## Revenue Proof Rules

- Count only checkout, receipt, payout, or seller-dashboard evidence.
- Do not count GitHub issues, preview downloads, stars, comments, Gist views, or discussions as paid revenue.
- If checkout is not live, record `gross revenue proven: $0`.
- If account, payout, tax, legal, or credential setup is required, record the blocker instead of inventing a payment path.
- Keep public demand metrics separate from private payment evidence.

## Ready-To-Use Prompt

```text
Use the AI Agent Revenue Proof Template.

Product:
Price:
Revenue target:
Public demand metrics:
Accessible checkout or seller dashboard:
Demand signals:
Stop conditions:

Verify whether revenue is proven. Count only checkout, receipt, payout, or seller-dashboard evidence. Return gross revenue proven, missing proof, blocker, and next action.
```

## Public Companion Files

- Revenue Proof Gist: https://gist.github.com/ivelly42/bc14bd257cbcc139a93aba5e3606c156
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json
- Scope freeze: https://ivelly42.github.io/agent-ops-command-center/ai-agent-scope-freeze-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md
- Release gate: https://ivelly42.github.io/agent-ops-command-center/release-gate-template.md
- AI agent handoff: https://ivelly42.github.io/agent-ops-command-center/ai-agent-handoff-template.md
- Cursor workflow tracker: https://ivelly42.github.io/agent-ops-command-center/cursor-workflow-tracker-template.md

## Full Template Pack

The paid Agent Ops Command Center pack expands this free revenue proof template into a full Notion-ready workspace:

- agent registry;
- run log;
- prompt library;
- verification ledger;
- cost tracker;
- failure modes;
- weekly operator review;
- operating templates for revenue proof, scope freezes, Cursor runs, Codex runs, Claude Code runs, handoffs, run briefs, review briefs, RCA, release gates, and weekly reviews.

The full pack target price is `$29`. Early access requests are collected here:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
