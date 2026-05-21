Checkout status manifest: https://ivelly42.github.io/agent-ops-command-center/.well-known/checkout-status.json
Checkout status alias: https://ivelly42.github.io/agent-ops-command-center/checkout-status.json
Release tarball: https://github.com/ivelly42/agent-ops-command-center/releases/download/v5.132-preview/agent-ops-command-center-0.5.132.tgz
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

Team request CLI Discussion: https://github.com/ivelly42/agent-ops-command-center/discussions/11

Cline workflow Discussion: https://github.com/ivelly42/agent-ops-command-center/discussions/12

NPX team request mirror: https://ivelly42.github.io/ai-agent-npx-team-request-template/

## Main Commands

```bash
npx github:ivelly42/agent-ops-command-center
npx github:ivelly42/agent-ops-command-center --links
npx github:ivelly42/agent-ops-command-center --json
npx github:ivelly42/agent-ops-command-center --team-request-url
npx github:ivelly42/agent-ops-command-center --team-request-markdown
```

## Release Tarball Install

The npm registry name is currently unpublished, and this machine is not logged in to npm, so the no-user-intervention path is a GitHub Release tarball.

```bash
npm exec --yes --package=https://github.com/ivelly42/agent-ops-command-center/releases/download/v5.132-preview/agent-ops-command-center-0.5.132.tgz -- agent-ops-command-center --team-request-url
npm exec --yes --package=https://github.com/ivelly42/agent-ops-command-center/releases/download/v5.132-preview/agent-ops-command-center-0.5.132.tgz -- agent-ops-command-center --json
```

Tarball: https://github.com/ivelly42/agent-ops-command-center/releases/download/v5.132-preview/agent-ops-command-center-0.5.132.tgz

Running the tarball preview is not revenue.

## Team Request Shortcut

`--team-request-url` prints a prefilled GitHub issue URL for:

- `Fast team checkout request: Agent Ops Command Center`
- `Request package: Team license - 7 seats - $203 gross`
- `Purchase intent: Ready to pay $203 for the team license when checkout is ready`

`--team-request-markdown` prints the same request as copy-ready markdown plus the prefilled issue URL.

## Revenue Rule

Installing or running this preview is not revenue.

Count revenue only after checkout, receipt, payout, or seller-dashboard evidence proves payment for the paid template pack.
