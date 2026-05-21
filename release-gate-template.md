# AI Coding Agent Release Gate Template

Use this free release gate before shipping AI-agent work to a public repo, app, website, package, or sales page.

The gate maps every release claim to evidence. If evidence is missing, the release is not done.

## Copy/Paste Release Gate

```markdown
# Release Gate

Release:

Date:

Owner:

## Requirements

| Requirement | Evidence | Status |
| --- | --- | --- |
| Build passes |  |  |
| Tests pass |  |  |
| Visual QA done |  |  |
| No secret exposure |  |  |
| User-facing copy checked |  |  |
| Release asset verified |  |  |
| Revenue claim verified |  |  |
| Rollback path known |  |  |

## Blockers

- 

## Decision

Ship / Hold:

Reason:
```

## Evidence Rules

| Claim | Evidence Needed |
| --- | --- |
| Build passes | Exact build command and exit status |
| Tests pass | Exact test command and result |
| Visual QA done | Screenshot, rendered URL, or browser test result |
| No secret exposure | Search command and result |
| Release asset verified | Release URL, asset name, size, and digest |
| Revenue claim verified | Checkout, receipt, seller dashboard, or payment processor evidence |
| Rollback path known | Revert command, previous release, or rollback notes |

## Hard Stop Conditions

Hold the release when:

- a checkout, payout, tax, legal, identity, or credential step is required;
- the paid product ZIP would be published in a public preview;
- a revenue number is not backed by a checkout or seller dashboard;
- the only proof is a local file that users cannot reach;
- the agent changed files outside the requested release scope.

## Public Companion Files

- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md
- Cost tracker: https://ivelly42.github.io/agent-ops-command-center/cost-tracker-template.md
- Failure modes database: https://ivelly42.github.io/agent-ops-command-center/failure-modes-database-template.md
- Weekly operator review: https://ivelly42.github.io/agent-ops-command-center/weekly-operator-review-template.md

## Full Template Pack

The paid Agent Ops Command Center pack expands this free release gate into a full Notion-ready workspace:

- agent registry;
- run log;
- prompt library;
- verification ledger;
- cost tracker;
- failure modes;
- weekly operator review;
- operating templates for run briefs, review briefs, RCA, release gates, and weekly reviews.

The full pack target price is `$29`. Early access requests are collected here:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
