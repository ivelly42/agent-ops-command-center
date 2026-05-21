# Order Autoreply

Agent Ops Command Center uses a GitHub Actions autoreply for public order-intent issues.

## Trigger

The workflow runs when a public issue is opened, reopened, or labeled.

It replies only when the issue has an order-intent label or order-intent title/body text.

## What The Reply Says

- Checkout is not live yet
- Team license is seven seats for `$203` gross
- The paid ZIP is not public
- The paid ZIP should be delivered only after payment proof exists
- Public issues must not contain secrets, card data, tax IDs, private invoices, or private billing details
- Revenue is counted only after checkout, receipt, payout, or seller-dashboard evidence

## Duplicate Guard

The workflow adds a hidden marker to its comment and skips future replies when that marker already exists on the issue.

## Revenue Rule

The autoreply is not revenue.

Count revenue only after checkout, receipt, payout, or seller-dashboard evidence proves payment for the paid template pack.
