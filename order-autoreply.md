# Order Autoreply

Agent Ops Command Center uses a GitHub Actions autoreply for public order-intent issues.

## Trigger

The workflow runs when a public issue is opened, reopened, or labeled.

It replies only when the issue has an order-intent label or order-intent title/body text.

It also adds missing order-intent labels when a prefilled public issue contains recognizable request text.

It also supports manual dry-run validation through `workflow_dispatch`:

- `mock_prefilled_team_request=true` validates the direct `$203` prefilled request path without creating a fake issue.
- `issue_number` validates an existing issue without adding labels or comments.
- `dry_run=false` is blocked for workflow_dispatch.

Public discussion for the payment-ready npm preview and autoreply path:
https://github.com/ivelly42/agent-ops-command-center/discussions/10

## What The Reply Says

- Checkout is not live yet
- Team license is seven seats for `$203` gross
- The paid ZIP is not public
- The paid ZIP should be delivered only after payment proof exists
- Public issues must not contain secrets, card data, tax IDs, private invoices, or private billing details
- Revenue is counted only after checkout, receipt, payout, or seller-dashboard evidence

## Automatic Labels

The workflow adds `order-request`, the matching request-type label, and `order-autolabeled` when a public prefilled issue has order-intent text but no labels yet.

For the direct prefilled team request page, the expected dry-run labels are `order-request`, `payment-ready`, and `order-autolabeled`.

## Duplicate Guard

The workflow adds a hidden marker to its comment and skips future replies when that marker already exists on the issue.

## Revenue Rule

The autoreply is not revenue.

Count revenue only after checkout, receipt, payout, or seller-dashboard evidence proves payment for the paid template pack.
