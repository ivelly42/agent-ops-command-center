# Agent Ops MCP Server

Public stdio MCP server for Agent Ops Command Center buyer routing.

Run from the release tarball:

```sh
npm exec --yes --package=https://github.com/ivelly42/agent-ops-command-center/releases/download/v5.137-preview/agent-ops-command-center-0.5.137.tgz -- agent-ops-mcp-server
```

Tools:

- `get_checkout_status`: returns checkout status, metrics, and the proof boundary.
- `get_team_request`: returns the $203 team-license request route and fallback payment-ready issue.
- `get_revenue_rule`: returns the revenue counting rule.

Resources:

- `agent-ops://checkout-status`
- `agent-ops://team-request`

Revenue rule: MCP calls, metadata reads, generated request URLs, issues, discussions, release downloads, npm runs, stars, forks, and page views are not revenue. Count revenue only after checkout, receipt, payout, or seller-dashboard evidence.
