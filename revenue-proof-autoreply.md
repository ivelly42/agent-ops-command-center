# Revenue Proof Autoreply

Agent Ops Command Center uses a GitHub Actions workflow to respond when real revenue proof is recorded.

Workflow: https://github.com/ivelly42/agent-ops-command-center/blob/main/.github/workflows/revenue-proof-autoreply.yml

Triggers:

- New, edited, reopened, or labeled GitHub issue
- Manual dry-run validation through `workflow_dispatch`
- Synthetic positive-path validation through `mock_revenue_proof=true` during dry-run only

The workflow only acts on `revenue-proof` issues or issues containing the revenue proof form text.

Required proof:

- Gross revenue proven USD greater than `0`
- Confirmation text that the issue records real checkout, receipt, payout, or seller-dashboard evidence

Automatic labels:

- `revenue-confirmed`
- `delivery-ready`
- `revenue-target-reached` when gross revenue proof is at least `$200`

Automatic reply links:

- Paid delivery manifest: https://ivelly42.github.io/agent-ops-command-center/paid-delivery-manifest.md
- Delivery acceptance packet: https://ivelly42.github.io/agent-ops-command-center/team-delivery-acceptance.html
- Metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

Duplicate guard: hidden marker `agent-ops-revenue-proof-autoreply-v1`.

Revenue rule: the workflow does not create revenue. It only reacts after checkout, receipt, payout, or seller-dashboard evidence exists.
