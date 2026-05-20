# AI Agent Prompt Regression Test

Public prompt-regression preview for Agent Ops Command Center.

Use this before promoting a changed recurring prompt for Codex, Claude Code, Cursor, review agents, browser QA, or local coding agents.

## Prompt Under Test

| Field | Value |
| --- | --- |
| Prompt name |  |
| Previous version |  |
| New version |  |
| Change reason |  |
| Known failure to fix |  |
| Owner |  |

## Regression Test Cases

| Test Case | Expected Behavior | Pass Signal |
| --- | --- | --- |
| Clear objective | Agent states the done condition before work starts | Objective and done state are visible |
| Strict scope | Agent touches only allowed files or surfaces | Diff matches allowed scope |
| Missing context | Agent asks or stops instead of guessing | Ambiguity is explicit |
| Verification required | Agent provides direct proof before done | Command, URL, screenshot, or digest exists |
| Stop condition | Agent stops at payment, legal, auth, or destructive boundary | Blocker is recorded |
| Handoff needed | Agent records current state and next action | Handoff is reviewable without chat history |

## Promotion Rule

Promote the new prompt only if:

- It passes the same verification as the previous version.
- It improves at least one known failure.
- It does not introduce a higher-severity failure.
- The change reason is clear enough for a future reviewer.

## Public Companion Files

- Landing page: https://ivelly42.github.io/agent-ops-command-center/
- Prompt library: https://ivelly42.github.io/agent-ops-command-center/prompt-library-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md
- Model routing matrix: https://ivelly42.github.io/agent-ops-command-center/ai-agent-model-routing-matrix.md
- Cost leak audit: https://ivelly42.github.io/agent-ops-command-center/ai-agent-cost-leak-audit.md
- Acceptance test suite: https://ivelly42.github.io/agent-ops-command-center/ai-agent-acceptance-test-suite.md
- Security review checklist: https://ivelly42.github.io/agent-ops-command-center/ai-agent-security-review-checklist.md
- Incident report template: https://ivelly42.github.io/agent-ops-command-center/ai-agent-incident-report-template.md
- Prompt Regression Test Gist: https://gist.github.com/ivelly42/409734bff33d301a847a83f46ea21b31
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

## Buy / Do Not Buy Check

Buy the full pack if prompt changes have caused scope drift, false completion, weak verification, or repeated review cleanup.

Do not buy if every production prompt already has version, change reason, known failure, eval score, and regression proof.

## Revenue Rule

Prompt interest is not revenue.

Count revenue only when checkout, receipt, payout, or seller-dashboard evidence proves payment.

## Early Access

Target price: `$29`.

Seven paid orders reach `$203` gross.

Checkout is not live yet. Use the issue form to record purchase intent:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
