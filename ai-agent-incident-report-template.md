# AI Agent Incident Report Template

Public incident-report and postmortem preview for Agent Ops Command Center.

Use this after an AI-agent run causes a regression, wrong edit, public release mistake, missed verification, cost spike, or false completion claim.

## Incident Summary

| Field | Value |
| --- | --- |
| Incident ID |  |
| Project |  |
| Date detected |  |
| Detected by |  |
| Agent |  |
| Model |  |
| Severity |  |
| Status |  |
| Owner |  |

## Timeline

| Time | Event | Evidence |
| --- | --- | --- |
|  | Problem introduced |  |
|  | First signal |  |
|  | Detection |  |
|  | Containment |  |
|  | Fix shipped |  |
|  | Verification passed |  |

## Impact And Root Cause

| Area | What To Record |
| --- | --- |
| User / buyer impact | Who was affected and how |
| Code / product impact | Feature, file, release, or workflow affected |
| Cost / time impact | Extra tokens, review time, support time, or rework |
| Public release impact | Bad asset, wrong Gist, stale page, or leaked material |
| Revenue / delivery impact | Payment, delivery, or buyer trust risk |
| Primary cause | Prompt, context, model route, verification, scope, handoff, or release process |
| Missed detection | Why existing checks did not catch it |

## Recovery Checklist

| Action | Pass Signal |
| --- | --- |
| Revert or patch | Broken behavior is removed or fixed |
| Verify fixed behavior | Direct proof covers the original failure |
| Verify no regression | Relevant existing behavior still passes |
| Update prompt or rule | Prevention rule is written somewhere durable |
| Update template or checklist | Future run has a stronger gate |
| Notify buyer or stakeholder if needed | Public or private follow-up is recorded |

## Public Companion Files

- Landing page: https://ivelly42.github.io/agent-ops-command-center/
- Failure RCA template: https://ivelly42.github.io/agent-ops-command-center/failure-rca-template.md
- Acceptance test suite: https://ivelly42.github.io/agent-ops-command-center/ai-agent-acceptance-test-suite.md
- Security review checklist: https://ivelly42.github.io/agent-ops-command-center/ai-agent-security-review-checklist.md
- Verification command library: https://ivelly42.github.io/agent-ops-command-center/ai-agent-verification-command-library.md
- AI Agent Incident Report Gist: https://gist.github.com/ivelly42/ec9207c47d152642247989aac2dcad7b
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

## Buy / Do Not Buy Check

Buy the full pack if agent mistakes keep repeating because incident notes, missed detection, verification proof, and prevention rules are scattered across chat history.

Do not buy if every agent incident already has timeline, impact, root cause, fix evidence, and a durable prevention rule.

## Revenue Rule

Incident-report interest is not revenue.

Count revenue only when checkout, receipt, payout, or seller-dashboard evidence proves payment.

## Early Access

Target price: `$29`.

Seven paid orders reach `$203` gross.

Checkout is not live yet. Use the issue form to record purchase intent:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
