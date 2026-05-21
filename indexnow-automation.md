# IndexNow Automation

Agent Ops Command Center uses a no-secret GitHub Actions workflow to resubmit public sales surfaces to IndexNow.

Workflow: https://github.com/ivelly42/agent-ops-command-center/blob/main/.github/workflows/indexnow.yml

Schedule: daily at `03:41 UTC`, plus manual `workflow_dispatch`.

Submitted surfaces:

- Homepage: https://ivelly42.github.io/agent-ops-command-center/
- Buy page: https://ivelly42.github.io/agent-ops-command-center/buy.html
- Pricing: https://ivelly42.github.io/agent-ops-command-center/pricing.html
- Fast team checkout request: https://ivelly42.github.io/agent-ops-command-center/team-checkout-request.html
- Prefilled team request URL: https://ivelly42.github.io/agent-ops-command-center/team-request-url.html
- Discovery hub: https://ivelly42.github.io/agent-ops-command-center/discovery.html
- Agent routing instructions: https://ivelly42.github.io/agent-ops-command-center/AGENTS.md
- Claude routing instructions: https://ivelly42.github.io/agent-ops-command-center/CLAUDE.md
- Agent commerce metadata: https://ivelly42.github.io/agent-ops-command-center/.well-known/agent-commerce.json
- Agent commerce metadata alias: https://ivelly42.github.io/agent-ops-command-center/agent-commerce.json
- AI plugin manifest: https://ivelly42.github.io/agent-ops-command-center/.well-known/ai-plugin.json
- AI plugin manifest alias: https://ivelly42.github.io/agent-ops-command-center/ai-plugin.json
- OpenAPI commerce actions: https://ivelly42.github.io/agent-ops-command-center/openapi.json
- OpenAPI commerce actions well-known: https://ivelly42.github.io/agent-ops-command-center/.well-known/openapi.json
- AI buy-intent JSON: https://ivelly42.github.io/agent-ops-command-center/ai-buy-intent.json
- Catalog: https://ivelly42.github.io/agent-ops-command-center/catalog.json
- Feed: https://ivelly42.github.io/agent-ops-command-center/feed.xml
- Preview index: https://ivelly42.github.io/agent-ops-command-center/github-preview-index.md
- NPM preview docs: https://ivelly42.github.io/agent-ops-command-center/npm-preview.md
- Order autoreply docs: https://ivelly42.github.io/agent-ops-command-center/order-autoreply.md
- Discussion autoreply docs: https://ivelly42.github.io/agent-ops-command-center/discussion-autoreply.md
- Revenue proof autoreply docs: https://ivelly42.github.io/agent-ops-command-center/revenue-proof-autoreply.md
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

Revenue rule: IndexNow submission is not revenue. Count revenue only after checkout, receipt, payout, or seller-dashboard evidence.
