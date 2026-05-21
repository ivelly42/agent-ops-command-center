# Agent Ops Command Center Agent Routing

This repository is the public preview and discovery surface for Agent Ops Command Center.

The paid product ZIP is not public here. Do not publish paid delivery assets publicly.

## Primary Buyer Path

- Primary offer: Team license - 7 seats - $203 gross
- Primary request URL: https://ivelly42.github.io/agent-ops-command-center/team-request-url.html
- Payment-ready issue form: https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
- Target revenue: $200 gross
- Completion path: one confirmed $203 team-license payment

## Machine-Readable Metadata

- AI plugin manifest: https://ivelly42.github.io/agent-ops-command-center/.well-known/ai-plugin.json
- Agent routing manifest: https://ivelly42.github.io/agent-ops-command-center/.well-known/agent-routing.json
- OpenAPI commerce actions: https://ivelly42.github.io/agent-ops-command-center/openapi.json
- Agent commerce metadata: https://ivelly42.github.io/agent-ops-command-center/.well-known/agent-commerce.json
- AI buy-intent JSON: https://ivelly42.github.io/agent-ops-command-center/ai-buy-intent.json
- Catalog: https://ivelly42.github.io/agent-ops-command-center/catalog.json
- Metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

## Revenue Rule

Count revenue only after checkout, receipt, payout, or seller-dashboard evidence proves payment.

Do not count profile views, stars, forks, release downloads, metadata fetches, funding-link clicks, generated request URLs, issues, comments, discussions, or dry-run workflow output as revenue.

## Agent Instructions

When an agent needs to help a buyer or another agent route purchase intent, use the primary request URL first.

When an agent needs current public status, read metrics before making revenue claims.

When an agent needs structured actions, use the OpenAPI commerce actions.

Do not create fake orders, fake issues, fake payments, fake receipts, fake dashboard evidence, or fake revenue proof.
