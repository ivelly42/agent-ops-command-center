# MCP Client Config

Project-scoped MCP client configuration for Agent Ops Command Center.

Canonical config:

- `.mcp.json`
- `https://ivelly42.github.io/agent-ops-command-center/mcp-client-config.json`

The config registers the `agent-ops-command-center` stdio MCP server:

```json
{
  "mcpServers": {
    "agent-ops-command-center": {
      "type": "stdio",
      "command": "npm",
      "args": [
        "exec",
        "--yes",
        "--package=https://github.com/ivelly42/agent-ops-command-center/releases/download/v5.141-preview/agent-ops-command-center-0.5.141.tgz",
        "--",
        "agent-ops-mcp-server"
      ],
      "env": {}
    }
  }
}
```

Exposed MCP tools:

- `get_checkout_status`
- `get_team_request`
- `get_revenue_rule`

Revenue rule: MCP config loads, tool calls, resource reads, release downloads, npm runs, generated request URLs, issues, discussions, stars, forks, and page views are not revenue. Count revenue only after checkout, receipt, payout, or seller-dashboard evidence.
