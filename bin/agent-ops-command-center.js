#!/usr/bin/env node

const teamRequestTitle = "Fast team checkout request: Agent Ops Command Center";
const teamRequestBody = [
  "Fast team checkout request: Agent Ops Command Center",
  "",
  "Request package: Team license - 7 seats - $203 gross",
  "Purchase intent: Ready to pay $203 for the team license when checkout is ready",
  "Preferred checkout: Receipt-capable checkout",
  "Receipt need: Receipt needed after payment",
  "Current blocker: Waiting for checkout link",
  "",
  "Buyer/team:",
  "- Seven-seat AI-agent operator team",
  "",
  "Agent tools:",
  "- Codex",
  "- Claude Code",
  "- Cursor",
  "- Local AI coding agents",
  "",
  "Preview inspected:",
  "- Buy page: https://ivelly42.github.io/agent-ops-command-center/buy.html",
  "- Team license: https://ivelly42.github.io/agent-ops-command-center/team-license.html",
  "- Team purchase packet: https://ivelly42.github.io/agent-ops-command-center/team-purchase-packet.html",
  "- Pricing: https://ivelly42.github.io/agent-ops-command-center/pricing.html",
  "- Catalog: https://ivelly42.github.io/agent-ops-command-center/catalog.json",
  "",
  "Acknowledgement:",
  "- I understand this issue is purchase intent only.",
  "- I understand the private paid ZIP should be delivered only after checkout, receipt, payout, or seller-dashboard proof exists.",
  "- I understand gross revenue is counted only when payment proof exists."
].join("\n");

const teamRequestUrl = new URL("https://github.com/ivelly42/agent-ops-command-center/issues/new");
teamRequestUrl.searchParams.set("title", teamRequestTitle);
teamRequestUrl.searchParams.set("body", teamRequestBody);

const links = {
  homepage: "https://ivelly42.github.io/agent-ops-command-center/",
  discovery: "https://ivelly42.github.io/agent-ops-command-center/discovery.html",
  buy: "https://ivelly42.github.io/agent-ops-command-center/buy.html",
  paymentReadyRequest: "https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml",
  packageFunding: "https://ivelly42.github.io/agent-ops-command-center/team-request-url.html",
  teamRequestUrl: teamRequestUrl.toString(),
  teamCheckoutRequest: "https://ivelly42.github.io/agent-ops-command-center/team-checkout-request.html",
  catalog: "https://ivelly42.github.io/agent-ops-command-center/catalog.json",
  llmsJson: "https://ivelly42.github.io/agent-ops-command-center/.well-known/llms.json",
  llmsJsonAlias: "https://ivelly42.github.io/agent-ops-command-center/llms.json",
  llmsTxt: "https://ivelly42.github.io/agent-ops-command-center/llms.txt",
  geminiInstructions: "https://ivelly42.github.io/agent-ops-command-center/GEMINI.md",
  geminiInstructionsAlias: "https://ivelly42.github.io/agent-ops-command-center/gemini-instructions.md",
  aiderConventions: "https://ivelly42.github.io/agent-ops-command-center/CONVENTIONS.md",
  aiderConventionsAlias: "https://ivelly42.github.io/agent-ops-command-center/aider-conventions.md",
  gooseHints: "https://ivelly42.github.io/agent-ops-command-center/.goosehints",
  gooseHintsAlias: "https://ivelly42.github.io/agent-ops-command-center/goose-hints.md",
  openhandsRepoMicroagent: "https://ivelly42.github.io/agent-ops-command-center/.openhands/microagents/repo.md",
  openhandsRepoMicroagentAlias: "https://ivelly42.github.io/agent-ops-command-center/openhands-repo.md",
  qwenInstructions: "https://ivelly42.github.io/agent-ops-command-center/QWEN.md",
  qwenInstructionsAlias: "https://ivelly42.github.io/agent-ops-command-center/qwen-instructions.md",
  continueRule: "https://ivelly42.github.io/agent-ops-command-center/.continue/rules/agent-ops-command-center.md",
  continueRuleAlias: "https://ivelly42.github.io/agent-ops-command-center/continue-rules.md",
  kiroSteering: "https://ivelly42.github.io/agent-ops-command-center/.kiro/steering/agent-ops-command-center.md",
  kiroSteeringAlias: "https://ivelly42.github.io/agent-ops-command-center/kiro-steering.md",
  clineWorkspaceRule: "https://ivelly42.github.io/agent-ops-command-center/.clinerules/agent-ops-command-center.md",
  clineTeamLicenseWorkflow: "https://ivelly42.github.io/agent-ops-command-center/.clinerules/workflows/team-license-request.md",
  clineRulesAlias: "https://ivelly42.github.io/agent-ops-command-center/cline-rules.md",
  metrics: "https://ivelly42.github.io/agent-ops-command-center/metrics/status.json",
  revenueProofAutoreply: "https://ivelly42.github.io/agent-ops-command-center/revenue-proof-autoreply.md",
  indexNowAutomation: "https://ivelly42.github.io/agent-ops-command-center/indexnow-automation.md",
  discussionAutoreply: "https://ivelly42.github.io/agent-ops-command-center/discussion-autoreply.md",
  paymentReadyNpmAutoreplyDiscussion: "https://github.com/ivelly42/agent-ops-command-center/discussions/10",
  release: "https://github.com/ivelly42/agent-ops-command-center/releases/latest",
  npmReleaseTarball: "https://github.com/ivelly42/agent-ops-command-center/releases/download/v5.130-preview/agent-ops-command-center-0.5.130.tgz"
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
  commands: {
    team_request_url: "npx github:ivelly42/agent-ops-command-center --team-request-url",
    team_request_markdown: "npx github:ivelly42/agent-ops-command-center --team-request-markdown",
    release_tarball_team_request: `npm exec --yes --package=${links.npmReleaseTarball} -- agent-ops-command-center --team-request-url`,
    package_funding: "npm fund agent-ops-command-center"
  },
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

if (args.has("--team-request-url")) {
  process.stdout.write(`${links.teamRequestUrl}\n`);
  process.exit(0);
}

if (args.has("--team-request-markdown")) {
  process.stdout.write(`# ${teamRequestTitle}\n\n${teamRequestBody}\n\nOpen request:\n${links.teamRequestUrl}\n`);
  process.exit(0);
}

process.stdout.write(`Agent Ops Command Center

Public preview for AI coding-agent teams.
Paid ZIP is not included in this npm/GitHub preview.

Team license: 7 seats for $203 gross
Target: $200 gross revenue

Payment-ready request:
${links.paymentReadyRequest}

Prefilled $203 team request:
${links.teamRequestUrl}

Package funding URL:
${links.packageFunding}

Discovery hub:
${links.discovery}

Cline workspace rule:
${links.clineWorkspaceRule}

Cline team-license workflow:
${links.clineTeamLicenseWorkflow}

Buyer commands:
${payload.commands.team_request_url}
${payload.commands.team_request_markdown}
${payload.commands.release_tarball_team_request}

Revenue rule:
${payload.revenue_rule}

Use --json for machine-readable links.
`);
