# NPM GitHub Install Preview

Agent Ops Command Center can be previewed as a GitHub-installable npm package without publishing the paid ZIP.

```bash
npx github:ivelly42/agent-ops-command-center --json
```

## What It Does

- Prints public preview links for the Agent Ops Command Center launch surface
- Prints a prefilled `$203` team-license request URL for buyers who want the shortest GitHub path
- Prints copy-ready team request markdown for buyer teams that need to route the request internally first
- Routes payment-ready buyers to the `$203` team-license request path
- Keeps the paid ZIP private
- Preserves the revenue rule that only checkout, receipt, payout, or seller-dashboard evidence counts as revenue
- Links the public payment-ready npm/autoreply Discussion for teams evaluating checkout readiness

Discussion: https://github.com/ivelly42/agent-ops-command-center/discussions/10

## Main Commands

```bash
npx github:ivelly42/agent-ops-command-center
npx github:ivelly42/agent-ops-command-center --links
npx github:ivelly42/agent-ops-command-center --json
npx github:ivelly42/agent-ops-command-center --team-request-url
npx github:ivelly42/agent-ops-command-center --team-request-markdown
```

## Team Request Shortcut

`--team-request-url` prints a prefilled GitHub issue URL for:

- `Fast team checkout request: Agent Ops Command Center`
- `Request package: Team license - 7 seats - $203 gross`
- `Purchase intent: Ready to pay $203 for the team license when checkout is ready`

`--team-request-markdown` prints the same request as copy-ready markdown plus the prefilled issue URL.

## Revenue Rule

Installing or running this preview is not revenue.

Count revenue only after checkout, receipt, payout, or seller-dashboard evidence proves payment for the paid template pack.
