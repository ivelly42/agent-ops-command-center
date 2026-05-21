# Discussion Autoreply

Agent Ops Command Center uses a GitHub Actions workflow to reply to buyer-intent GitHub Discussions without manual handling.

Workflow: https://github.com/ivelly42/agent-ops-command-center/blob/main/.github/workflows/discussion-autoreply.yml

Triggers:

- New or edited GitHub Discussion
- New or edited GitHub Discussion comment
- Manual dry-run validation through `workflow_dispatch`

Buyer-intent signals include buy, purchase, pay, price, cost, checkout, invoice, receipt, purchase order, quote, payment-ready, paid ZIP, `$203`, `$29`, or team-license language.

The reply routes buyers to:

- Payment-ready request: https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
- Buy page: https://ivelly42.github.io/agent-ops-command-center/buy.html
- Pricing: https://ivelly42.github.io/agent-ops-command-center/pricing.html
- Buyer reply kit: https://ivelly42.github.io/agent-ops-command-center/buyer-reply-kit.html
- Revenue proof rule: https://ivelly42.github.io/agent-ops-command-center/revenue-proof.html

Duplicate guard: hidden marker `agent-ops-discussion-autoreply-v1`.

Revenue rule: Discussion activity is not revenue. Count revenue only after checkout, receipt, payout, or seller-dashboard evidence.
