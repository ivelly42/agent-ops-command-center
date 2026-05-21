# Agent Ops Command Center Claude Routing

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
- OpenHands repository microagent: https://ivelly42.github.io/agent-ops-command-center/.openhands/microagents/repo.md
- Qwen Code instructions: https://ivelly42.github.io/agent-ops-command-center/QWEN.md
- Continue local rule: https://ivelly42.github.io/agent-ops-command-center/.continue/rules/agent-ops-command-center.md
- Kiro steering file: https://ivelly42.github.io/agent-ops-command-center/.kiro/steering/agent-ops-command-center.md
- Cline workspace rule: https://ivelly42.github.io/agent-ops-command-center/.clinerules/agent-ops-command-center.md
- Cline team-license workflow: https://ivelly42.github.io/agent-ops-command-center/.clinerules/workflows/team-license-request.md
- Catalog: https://ivelly42.github.io/agent-ops-command-center/catalog.json
- Metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json
- Checkout status: https://ivelly42.github.io/agent-ops-command-center/.well-known/checkout-status.json
- Agent Ops checkout skill: https://ivelly42.github.io/agent-ops-command-center/.agents/skills/agent-ops-checkout/SKILL.md
- OpenCode config: https://ivelly42.github.io/agent-ops-command-center/opencode.json
- Universal AGENT.md routing: https://ivelly42.github.io/agent-ops-command-center/AGENT.md
- Junie guidelines: https://ivelly42.github.io/agent-ops-command-center/.junie/guidelines.md

## Revenue Rule

Count revenue only after checkout, receipt, payout, or seller-dashboard evidence proves payment.

Do not count profile views, stars, forks, release downloads, metadata fetches, funding-link clicks, generated request URLs, issues, comments, discussions, OpenHands microagent reads, Cline rule reads, Cline workflow reads, or dry-run workflow output, Agent Skills loads, or OpenCode config reads, Junie guideline reads, or AGENT.md reads as revenue.

## Claude Instructions

When Claude Code or another agent needs to route purchase intent, use the primary request URL first.

When Claude Code needs current public status, read metrics before making revenue claims.

When Claude Code needs structured actions, use the OpenAPI commerce actions.

Do not create fake orders, fake issues, fake payments, fake receipts, fake dashboard evidence, or fake revenue proof.
