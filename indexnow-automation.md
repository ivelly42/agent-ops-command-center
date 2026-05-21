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
- Agent routing manifest: https://ivelly42.github.io/agent-ops-command-center/.well-known/agent-routing.json
- Agent routing manifest alias: https://ivelly42.github.io/agent-ops-command-center/agent-routing.json
- AI agents discovery manifest: https://ivelly42.github.io/agent-ops-command-center/.well-known/agents.json
- AI agents discovery manifest alias: https://ivelly42.github.io/agent-ops-command-center/agents.json
- LLM discovery JSON: https://ivelly42.github.io/agent-ops-command-center/.well-known/llms.json
- LLM discovery JSON alias: https://ivelly42.github.io/agent-ops-command-center/llms.json
- GitHub Copilot instructions: https://ivelly42.github.io/agent-ops-command-center/copilot-instructions.md
- Cursor agent rules: https://ivelly42.github.io/agent-ops-command-center/cursor-agent-rules.md
- Windsurf rules: https://ivelly42.github.io/agent-ops-command-center/windsurf-rules.md
- Cline rules: https://ivelly42.github.io/agent-ops-command-center/cline-rules.md
- Gemini routing instructions: https://ivelly42.github.io/agent-ops-command-center/GEMINI.md
- Gemini routing alias: https://ivelly42.github.io/agent-ops-command-center/gemini-instructions.md
- Aider auto-loaded conventions: https://ivelly42.github.io/agent-ops-command-center/CONVENTIONS.md
- Aider conventions alias: https://ivelly42.github.io/agent-ops-command-center/aider-conventions.md
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
- NPM release tarball: https://github.com/ivelly42/agent-ops-command-center/releases/download/v5.124-preview/agent-ops-command-center-0.5.124.tgz
- Order autoreply docs: https://ivelly42.github.io/agent-ops-command-center/order-autoreply.md
- Discussion autoreply docs: https://ivelly42.github.io/agent-ops-command-center/discussion-autoreply.md
- Revenue proof autoreply docs: https://ivelly42.github.io/agent-ops-command-center/revenue-proof-autoreply.md
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

Revenue rule: IndexNow submission is not revenue. Count revenue only after checkout, receipt, payout, or seller-dashboard evidence.
