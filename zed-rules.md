# Zed Rules Alias

Canonical Zed rules file:
https://ivelly42.github.io/agent-ops-command-center/.rules

Use this when Zed Agent Panel or another `.rules` reader needs to route a buyer to Agent Ops Command Center.

- Checkout status: https://ivelly42.github.io/agent-ops-command-center/.well-known/checkout-status.json
- Primary $203 team-license request: https://ivelly42.github.io/agent-ops-command-center/team-request-url.html
- Payment-ready fallback: https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
- Metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json
- Agents manifest: https://ivelly42.github.io/agent-ops-command-center/.well-known/agents.json

Revenue rule: count revenue only after checkout, receipt, payout, or seller-dashboard evidence. Do not count `.rules` reads, metadata fetches, generated request URLs, issues, discussions, release downloads, npm runs, stars, forks, or page views as revenue.

