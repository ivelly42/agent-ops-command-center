# AI Agent Security Review Checklist

Public security-review preview for Agent Ops Command Center.

Use this before publishing, shipping, or sharing AI-agent output that touches user data, secrets, auth, payments, files, logs, screenshots, or public release surfaces.

## Security Review Target

| Field | Value |
| --- | --- |
| Run ID |  |
| Project |  |
| Agent |  |
| Model |  |
| Change summary |  |
| Files or surfaces changed |  |
| Reviewer |  |

## Security And Privacy Checklist

| Risk Area | Pass Signal | Evidence |
| --- | --- | --- |
| Secrets | No API keys, tokens, cookies, private URLs, or credentials in files, logs, screenshots, or release assets |  |
| Personal data | No unnecessary names, emails, account IDs, customer data, or private chat content |  |
| Auth / permission | Agent did not bypass login, weaken permission checks, or expose admin paths |  |
| Payment / revenue | Money claims use checkout, receipt, payout, or seller-dashboard proof only |  |
| External sharing | Public repo, Gist, release, screenshot, and issue content are safe to publish |  |
| Dependency / supply chain | New packages, actions, scripts, or binaries are justified and reviewable |  |
| Destructive actions | Delete, migration, reset, or overwrite paths have explicit approval and backup |  |
| Prompt leakage | System prompts, private instructions, hidden context, and buyer data are not exposed |  |

## Stop Conditions

Hold the run if:

- A secret, token, cookie, private URL, or customer identifier appears in public output.
- A payment, auth, legal, or destructive boundary requires user setup or approval.
- The reviewer cannot prove what was published.
- The public preview includes the paid ZIP or private buyer delivery material.
- The revenue claim uses issues, downloads, comments, stars, or Gist views as payment evidence.

## Public Companion Files

- Landing page: https://ivelly42.github.io/agent-ops-command-center/
- Acceptance test suite: https://ivelly42.github.io/agent-ops-command-center/ai-agent-acceptance-test-suite.md
- Incident report template: https://ivelly42.github.io/agent-ops-command-center/ai-agent-incident-report-template.md
- Verification command library: https://ivelly42.github.io/agent-ops-command-center/ai-agent-verification-command-library.md
- PR review scorecard: https://ivelly42.github.io/agent-ops-command-center/ai-agent-pr-review-scorecard.md
- Revenue proof template: https://ivelly42.github.io/agent-ops-command-center/ai-agent-revenue-proof-template.md
- AI Agent Security Review Checklist Gist: https://gist.github.com/ivelly42/172041903d2491a4856f9c585f89364a
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

## Buy / Do Not Buy Check

Buy the full pack if public agent output, release assets, logs, screenshots, or payment claims need a repeatable safety gate.

Do not buy if every shared agent run already has a secrets check, public asset review, permission review, and revenue-proof gate.

## Revenue Rule

Security-review interest is not revenue.

Count revenue only when checkout, receipt, payout, or seller-dashboard evidence proves payment.

## Early Access

Target price: `$29`.

Seven paid orders reach `$203` gross.

Checkout is not live yet. Use the issue form to record purchase intent:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
