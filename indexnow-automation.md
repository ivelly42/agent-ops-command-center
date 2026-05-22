MCP buyer router template repo: https://github.com/ivelly42/ai-agent-mcp-buyer-router-template
MCP buyer router template Pages: https://ivelly42.github.io/ai-agent-mcp-buyer-router-template/
MCP buyer router template config: https://ivelly42.github.io/ai-agent-mcp-buyer-router-template/.mcp.json
Template repo activity is not revenue; revenue requires checkout, receipt, payout, or seller-dashboard proof.
Project MCP config: https://ivelly42.github.io/agent-ops-command-center/.mcp.json
Project MCP config alias: https://ivelly42.github.io/agent-ops-command-center/mcp-client-config.json
Project MCP config guide: https://ivelly42.github.io/agent-ops-command-center/mcp-client-config.md
MCP config loads are not revenue; revenue requires checkout, receipt, payout, or seller-dashboard proof.
MCP stdio server guide: https://ivelly42.github.io/agent-ops-command-center/mcp-server.md
MCP stdio server manifest: https://ivelly42.github.io/agent-ops-command-center/.well-known/mcp-server.json
MCP stdio server manifest alias: https://ivelly42.github.io/agent-ops-command-center/mcp-server.json
MCP calls and resource reads are not revenue; revenue requires checkout, receipt, payout, or seller-dashboard proof.
Claude Code checkout skill: https://ivelly42.github.io/agent-ops-command-center/.claude/skills/agent-ops-checkout/SKILL.md
Claude Code checkout skill alias: https://ivelly42.github.io/agent-ops-command-center/claude-code-checkout-skill.md
Claude Code /buy-agent-ops command: https://ivelly42.github.io/agent-ops-command-center/.claude/commands/buy-agent-ops.md
Claude Code buy command alias: https://ivelly42.github.io/agent-ops-command-center/claude-code-buy-command.md
Skill and command reads are not revenue; revenue requires checkout, receipt, payout, or seller-dashboard proof.
Zed rules: https://ivelly42.github.io/agent-ops-command-center/.rules
Zed rules alias: https://ivelly42.github.io/agent-ops-command-center/zed-rules.md
Rule reads are not revenue; revenue requires checkout, receipt, payout, or seller-dashboard proof.
Universal AGENT.md routing: https://ivelly42.github.io/agent-ops-command-center/AGENT.md
Amp AGENT.md alias: https://ivelly42.github.io/agent-ops-command-center/amp-agent.md
Junie guidelines: https://ivelly42.github.io/agent-ops-command-center/.junie/guidelines.md
Junie guidelines alias: https://ivelly42.github.io/agent-ops-command-center/junie-guidelines.md
Instruction-file reads are not revenue; revenue requires checkout, receipt, payout, or seller-dashboard proof.
Agent Ops checkout skill: https://ivelly42.github.io/agent-ops-command-center/.agents/skills/agent-ops-checkout/SKILL.md
Agent Ops checkout skill alias: https://ivelly42.github.io/agent-ops-command-center/agent-ops-checkout-skill.md
OpenCode config: https://ivelly42.github.io/agent-ops-command-center/opencode.json
Skill/config loads are not revenue; revenue requires checkout, receipt, payout, or seller-dashboard proof.
Checkout status manifest now included in IndexNow submissions: https://ivelly42.github.io/agent-ops-command-center/.well-known/checkout-status.json and https://ivelly42.github.io/agent-ops-command-center/checkout-status.json.
# IndexNow Automation

Agent Ops Command Center uses a no-secret GitHub Actions workflow to resubmit public sales surfaces to IndexNow.

Workflow: https://github.com/ivelly42/agent-ops-command-center/blob/main/.github/workflows/indexnow.yml

Schedule: daily at `03:41 UTC`, plus manual `workflow_dispatch`.

Submitted surfaces:

- Homepage: https://ivelly42.github.io/agent-ops-command-center/
- Buy page: https://ivelly42.github.io/agent-ops-command-center/buy.html
- Pricing: https://ivelly42.github.io/agent-ops-command-center/pricing.html
- Primary team request: https://ivelly42.github.io/agent-ops-command-center/team-request-url.html
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
- Cline workspace rule: https://ivelly42.github.io/agent-ops-command-center/.clinerules/agent-ops-command-center.md
- Cline team-license workflow: https://ivelly42.github.io/agent-ops-command-center/.clinerules/workflows/team-license-request.md
- Cline workflow Discussion: https://github.com/ivelly42/agent-ops-command-center/discussions/12
- Gemini routing instructions: https://ivelly42.github.io/agent-ops-command-center/GEMINI.md
- Gemini routing alias: https://ivelly42.github.io/agent-ops-command-center/gemini-instructions.md
- Aider auto-loaded conventions: https://ivelly42.github.io/agent-ops-command-center/CONVENTIONS.md
- Aider conventions alias: https://ivelly42.github.io/agent-ops-command-center/aider-conventions.md
- Goose project hints: https://ivelly42.github.io/agent-ops-command-center/.goosehints
- Goose hints alias: https://ivelly42.github.io/agent-ops-command-center/goose-hints.md
- OpenHands repository microagent: https://ivelly42.github.io/agent-ops-command-center/.openhands/microagents/repo.md
- OpenHands microagent alias: https://ivelly42.github.io/agent-ops-command-center/openhands-repo.md
- Qwen Code instructions: https://ivelly42.github.io/agent-ops-command-center/QWEN.md
- Qwen Code instructions alias: https://ivelly42.github.io/agent-ops-command-center/qwen-instructions.md
- Continue local rule: https://ivelly42.github.io/agent-ops-command-center/.continue/rules/agent-ops-command-center.md
- Continue rule alias: https://ivelly42.github.io/agent-ops-command-center/continue-rules.md
- Kiro steering file: https://ivelly42.github.io/agent-ops-command-center/.kiro/steering/agent-ops-command-center.md
- Kiro steering alias: https://ivelly42.github.io/agent-ops-command-center/kiro-steering.md
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
- NPM release tarball: https://github.com/ivelly42/agent-ops-command-center/releases/download/v5.141-preview/agent-ops-command-center-0.5.141.tgz
- Order autoreply docs: https://ivelly42.github.io/agent-ops-command-center/order-autoreply.md
- Discussion autoreply docs: https://ivelly42.github.io/agent-ops-command-center/discussion-autoreply.md
- Revenue proof autoreply docs: https://ivelly42.github.io/agent-ops-command-center/revenue-proof-autoreply.md
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

Revenue rule: IndexNow submission is not revenue. Count revenue only after checkout, receipt, payout, or seller-dashboard evidence.
