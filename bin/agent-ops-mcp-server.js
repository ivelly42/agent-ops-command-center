#!/usr/bin/env node

const readline = require("node:readline");

const packageJson = require("../package.json");

const baseUrl = "https://ivelly42.github.io/agent-ops-command-center";
const links = {
  checkoutStatus: `${baseUrl}/checkout-status.json`,
  metrics: `${baseUrl}/metrics/status.json`,
  teamRequest: `${baseUrl}/team-request-url.html`,
  paymentReady: "https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml",
  buy: `${baseUrl}/buy.html`,
  releaseTarball: "https://github.com/ivelly42/agent-ops-command-center/releases/download/v5.137-preview/agent-ops-command-center-0.5.137.tgz"
};

const revenueRule = [
  "Count revenue only after checkout, receipt, payout, or seller-dashboard evidence proves payment.",
  "Do not count MCP tool calls, generated request URLs, issues, discussions, metadata fetches, release downloads, npm runs, funding clicks, stars, forks, or page views as revenue."
].join(" ");

const tools = [
  {
    name: "get_checkout_status",
    title: "Get Checkout Status",
    description: "Fetch the live checkout status and demand metrics for Agent Ops Command Center.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false
    }
  },
  {
    name: "get_team_request",
    title: "Get Team License Request",
    description: "Return the $203 team-license request route and fallback payment-ready issue route.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false
    }
  },
  {
    name: "get_revenue_rule",
    title: "Get Revenue Rule",
    description: "Return the proof boundary for counting revenue toward the $200 goal.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false
    }
  }
];

const resources = [
  {
    uri: "agent-ops://checkout-status",
    name: "Agent Ops checkout status",
    description: "Live checkout status URL, demand metrics URL, and current proof boundary.",
    mimeType: "application/json"
  },
  {
    uri: "agent-ops://team-request",
    name: "Agent Ops team request",
    description: "$203 team-license request route and fallback payment-ready route.",
    mimeType: "application/json"
  }
];

const safeFetchJson = async (url) => {
  try {
    const response = await fetch(url, { headers: { accept: "application/json" } });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    return {
      fetch_error: String(error && error.message ? error.message : error),
      source: url
    };
  }
};

const textContent = (value) => ({
  content: [
    {
      type: "text",
      text: typeof value === "string" ? value : JSON.stringify(value, null, 2)
    }
  ]
});

const checkoutPayload = async () => ({
  name: "Agent Ops Command Center",
  offer: "Team license - 7 seats - $203 gross",
  target_revenue_usd: 200,
  team_license_price_usd: 203,
  checkout_status_url: links.checkoutStatus,
  metrics_url: links.metrics,
  checkout_status: await safeFetchJson(links.checkoutStatus),
  metrics: await safeFetchJson(links.metrics),
  revenue_rule: revenueRule
});

const teamRequestPayload = () => ({
  name: "Agent Ops Command Center",
  offer: "Team license - 7 seats - $203 gross",
  team_license_price_usd: 203,
  target_revenue_usd: 200,
  primary_request_url: links.teamRequest,
  fallback_payment_ready_issue: links.paymentReady,
  buy_page: links.buy,
  release_tarball: links.releaseTarball,
  revenue_rule: revenueRule
});

const handleRequest = async (message) => {
  const { id, method, params } = message;

  if (method === "notifications/initialized") return null;

  if (method === "initialize") {
    return {
      jsonrpc: "2.0",
      id,
      result: {
        protocolVersion: params && params.protocolVersion ? params.protocolVersion : "2025-06-18",
        capabilities: {
          tools: {},
          resources: {}
        },
        serverInfo: {
          name: "agent-ops-command-center",
          version: packageJson.version
        }
      }
    };
  }

  if (method === "ping") {
    return { jsonrpc: "2.0", id, result: {} };
  }

  if (method === "tools/list") {
    return { jsonrpc: "2.0", id, result: { tools } };
  }

  if (method === "tools/call") {
    const name = params && params.name;
    if (name === "get_checkout_status") {
      return { jsonrpc: "2.0", id, result: textContent(await checkoutPayload()) };
    }
    if (name === "get_team_request") {
      return { jsonrpc: "2.0", id, result: textContent(teamRequestPayload()) };
    }
    if (name === "get_revenue_rule") {
      return { jsonrpc: "2.0", id, result: textContent(revenueRule) };
    }
    return {
      jsonrpc: "2.0",
      id,
      error: { code: -32602, message: `Unknown tool: ${name}` }
    };
  }

  if (method === "resources/list") {
    return { jsonrpc: "2.0", id, result: { resources } };
  }

  if (method === "resources/read") {
    const uri = params && params.uri;
    const payload = uri === "agent-ops://checkout-status"
      ? await checkoutPayload()
      : uri === "agent-ops://team-request"
        ? teamRequestPayload()
        : null;

    if (!payload) {
      return {
        jsonrpc: "2.0",
        id,
        error: { code: -32602, message: `Unknown resource: ${uri}` }
      };
    }

    return {
      jsonrpc: "2.0",
      id,
      result: {
        contents: [
          {
            uri,
            mimeType: "application/json",
            text: JSON.stringify(payload, null, 2)
          }
        ]
      }
    };
  }

  return {
    jsonrpc: "2.0",
    id,
    error: { code: -32601, message: `Method not found: ${method}` }
  };
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on("line", async (line) => {
  if (!line.trim()) return;
  try {
    const message = JSON.parse(line);
    const response = await handleRequest(message);
    if (response) process.stdout.write(`${JSON.stringify(response)}\n`);
  } catch (error) {
    process.stdout.write(`${JSON.stringify({
      jsonrpc: "2.0",
      id: null,
      error: {
        code: -32700,
        message: String(error && error.message ? error.message : error)
      }
    })}\n`);
  }
});
