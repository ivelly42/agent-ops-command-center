#!/usr/bin/env node

const links = {
  homepage: "https://ivelly42.github.io/agent-ops-command-center/",
  discovery: "https://ivelly42.github.io/agent-ops-command-center/discovery.html",
  buy: "https://ivelly42.github.io/agent-ops-command-center/buy.html",
  paymentReadyRequest: "https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml",
  teamCheckoutRequest: "https://ivelly42.github.io/agent-ops-command-center/team-checkout-request.html",
  catalog: "https://ivelly42.github.io/agent-ops-command-center/catalog.json",
  metrics: "https://ivelly42.github.io/agent-ops-command-center/metrics/status.json",
  paymentReadyNpmAutoreplyDiscussion: "https://github.com/ivelly42/agent-ops-command-center/discussions/10",
  release: "https://github.com/ivelly42/agent-ops-command-center/releases/latest"
};

const payload = {
  name: "Agent Ops Command Center",
  status: "public_preview_no_paid_checkout",
  product: "Notion and spreadsheet template pack for AI coding-agent teams",
  individual_price_usd: 29,
  team_license_price_usd: 203,
  target_revenue_usd: 200,
  primary_request_path: "Team license - 7 seats - $203 gross",
  paid_zip_public: false,
  revenue_rule: "Count revenue only after checkout, receipt, payout, or seller-dashboard evidence.",
  links
};

const args = new Set(process.argv.slice(2));

if (args.has("--json")) {
  process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
  process.exit(0);
}

if (args.has("--links")) {
  for (const [key, value] of Object.entries(links)) {
    process.stdout.write(`${key}: ${value}\n`);
  }
  process.exit(0);
}

process.stdout.write(`Agent Ops Command Center

Public preview for AI coding-agent teams.
Paid ZIP is not included in this npm/GitHub preview.

Team license: 7 seats for $203 gross
Target: $200 gross revenue

Payment-ready request:
${links.paymentReadyRequest}

Discovery hub:
${links.discovery}

Revenue rule:
${payload.revenue_rule}

Use --json for machine-readable links.
`);
