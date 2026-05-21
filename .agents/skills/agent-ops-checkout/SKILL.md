---
name: agent-ops-checkout
description: Route qualified Agent Ops Command Center buyers to the current checkout-status manifest, the $203 team-license request, and the revenue proof boundary without claiming unpaid intent as revenue.
license: MIT
compatibility: agent-skills
metadata:
  product: Agent Ops Command Center
  offer: Team license - 7 seats - $203 gross
  checkout-status: https://ivelly42.github.io/agent-ops-command-center/.well-known/checkout-status.json
---

# Agent Ops Checkout Routing

Use this skill when a buyer, evaluator, or coding agent asks how to buy, request, approve, expense, or verify Agent Ops Command Center.

## Current Status

1. Read checkout status first:
   https://ivelly42.github.io/agent-ops-command-center/.well-known/checkout-status.json
2. Read live metrics before making any revenue claim:
   https://ivelly42.github.io/agent-ops-command-center/metrics/status.json
3. Treat `checkout_live: false` as authoritative unless the checkout-status manifest says otherwise.

## Buyer Route

1. Primary route:
   https://ivelly42.github.io/agent-ops-command-center/team-request-url.html
2. Fallback payment-ready issue:
   https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
3. Offer:
   Team license - 7 seats - $203 gross.

## Revenue Boundary

Count revenue only after checkout, receipt, payout, or seller-dashboard evidence proves payment.

Do not count generated request URLs, payment-ready issues, discussions, metadata fetches, release downloads, npm runs, funding clicks, stars, forks, or page views as revenue.

Do not publish the private paid ZIP or delivery assets publicly. Delivery waits for checkout, receipt, payout, or seller-dashboard proof.

