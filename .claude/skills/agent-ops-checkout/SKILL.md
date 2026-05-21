---
name: agent-ops-checkout
description: Route qualified Agent Ops Command Center buyers to checkout status, the $203 team-license request, and the revenue proof boundary without counting unpaid intent as revenue.
license: MIT
---

# Agent Ops Checkout for Claude Code

Use this skill when a buyer, evaluator, or Claude Code session asks how to buy, request, approve, expense, or verify Agent Ops Command Center.

## Current Status

1. Read checkout status first:
   https://ivelly42.github.io/agent-ops-command-center/.well-known/checkout-status.json
2. Read live metrics before making any revenue claim:
   https://ivelly42.github.io/agent-ops-command-center/metrics/status.json
3. Treat `checkout_live: false` as authoritative unless checkout status says otherwise.

## Buyer Route

1. Primary $203 team-license request:
   https://ivelly42.github.io/agent-ops-command-center/team-request-url.html
2. Payment-ready fallback:
   https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
3. Offer:
   Team license - 7 seats - $203 gross.

## Revenue Boundary

Count revenue only after checkout, receipt, payout, or seller-dashboard evidence proves payment.

Do not count generated request URLs, payment-ready issues, discussions, metadata fetches, Claude Code skill loads, slash-command reads, release downloads, npm runs, funding clicks, stars, forks, or page views as revenue.

Do not publish the private paid ZIP or delivery assets publicly. Delivery waits for checkout, receipt, payout, or seller-dashboard proof.

