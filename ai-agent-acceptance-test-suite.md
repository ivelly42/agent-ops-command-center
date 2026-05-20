# AI Agent Acceptance Test Suite

Public acceptance-test preview for Agent Ops Command Center.

Use this before accepting Codex, Claude Code, Cursor, review-agent, browser-QA, or local-agent output as production-ready.

## Run Under Test

| Field | Value |
| --- | --- |
| Run ID |  |
| Project |  |
| Objective |  |
| Agent |  |
| Model |  |
| Output link |  |
| Files changed |  |
| Verifier |  |

## Acceptance Criteria

| Criterion | Pass Signal | Evidence |
| --- | --- | --- |
| Objective match | Output satisfies the original done condition |  |
| Scope match | Only allowed files or surfaces changed |  |
| Behavior proof | The changed behavior was tested directly |  |
| Regression check | Relevant existing behavior still passes |  |
| Security / privacy | No secret, auth, payment, or private data leak |  |
| Cost discipline | Model and retry cost match task risk |  |
| Handoff quality | Next action and known gaps are recorded |  |
| Revenue / delivery proof | Money claims use payment or delivery evidence only |  |

## Hold Conditions

Hold the run if:

- The done condition is not testable.
- The evidence does not cover the changed behavior.
- The diff touches out-of-scope files.
- A required command, URL, screenshot, release asset, or digest is missing.
- Payment, auth, legal, or delivery claims lack direct proof.
- The next reviewer cannot understand the current state without chat history.

## Public Companion Files

- Landing page: https://ivelly42.github.io/agent-ops-command-center/
- Prompt regression test: https://ivelly42.github.io/agent-ops-command-center/ai-agent-prompt-regression-test.md
- Verification command library: https://ivelly42.github.io/agent-ops-command-center/ai-agent-verification-command-library.md
- PR review scorecard: https://ivelly42.github.io/agent-ops-command-center/ai-agent-pr-review-scorecard.md
- Model routing matrix: https://ivelly42.github.io/agent-ops-command-center/ai-agent-model-routing-matrix.md
- AI Agent Acceptance Test Suite Gist: https://gist.github.com/ivelly42/d9aacd5506dccc9b5d002ef6fd973c72
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

## Buy / Do Not Buy Check

Buy the full pack if agent output often looks done but later fails scope, regression, verification, handoff, or delivery checks.

Do not buy if every accepted run already has objective proof, scope proof, regression proof, and a reviewable handoff.

## Revenue Rule

Acceptance-test interest is not revenue.

Count revenue only when checkout, receipt, payout, or seller-dashboard evidence proves payment.

## Early Access

Target price: `$29`.

Seven paid orders reach `$203` gross.

Checkout is not live yet. Use the issue form to record purchase intent:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
