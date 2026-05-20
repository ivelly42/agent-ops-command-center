# AI Agent Verification Command Library

Use this free verification command library to choose proof before calling Codex, Claude Code, Cursor, or another AI coding-agent run done.

The library is built for reviewers who need current evidence, not agent claims.

## Copy/Paste Library

```markdown
# AI Agent Verification Command Library

Project:
Run ID:
Agent:
Objective:
Risk level:
Reviewer:

| Check | Command / Evidence | Use When | Pass Signal | Fail Signal |
| --- | --- | --- | --- | --- |
| Git state | `git status --short` | Any code change | Only intended files changed | Unexpected files changed |
| Diff review | `git diff --check` | Any patch | No whitespace or conflict marker errors | Whitespace errors or conflict markers |
| Unit tests | Project test command | Logic changed | Tests pass | Failures or skipped relevant tests |
| Typecheck | Project typecheck command | Typed code changed | Typecheck exits 0 | Type errors |
| Lint | Project lint command | Shared code changed | Lint exits 0 | New lint failures |
| Build | Project build command | Deployable app changed | Build exits 0 | Build failure |
| Browser smoke | Screenshot or browser check | Web UI changed | Page loads and target text exists | Blank, overlap, or console errors |
| Mobile layout | Narrow viewport screenshot | Responsive UI changed | Text fits and controls usable | Clipped or overlapping UI |
| Release asset | Archive test + digest | ZIP/release created | `unzip -t` passes and digest recorded | Archive error or missing digest |
| Revenue proof | Checkout, receipt, payout, or seller dashboard | Revenue claimed | Paid evidence exists | Only issues, downloads, stars, or views |
| Secret safety | Secret scan or manual env check | Config/auth touched | No secret exposed | Secret, token, or private key leaked |
| Rollback | Rollback command or previous artifact | Production release changed | Rollback path documented | No recovery path |

Changed files:
Commands run:
Outputs inspected:
Screenshots:
URLs:
Artifact digests:
Known gaps:

Done rule:
```

## Selection Rule

Pick at least one verification command per changed behavior. High-risk changes need two independent forms of proof.

## Stop Rule

Stop and record a blocker if a required command cannot run, asks for credentials, requires paid infrastructure, or produces evidence that does not cover the actual change.

## Revenue Rule

Count only checkout, receipt, payout, or seller-dashboard evidence as revenue proof. GitHub issues, release downloads, stars, Gist views, Hugging Face likes, and comments are demand signals only.

## Ready-To-Use Prompt

```text
Use the AI Agent Verification Command Library.

Original request:
Changed behavior:
Changed files:
Risk level:
Available commands:
Known blockers:

Choose the minimum verification set that proves this work. Explain what each command proves, what it does not prove, and what evidence is still missing. Do not count indirect checks as completion proof.
```

## Public Companion Files

- Verification Command Library Gist: https://gist.github.com/ivelly42/0f35039dbb5e455cfe36c316632f96fb
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md
- PR review scorecard: https://ivelly42.github.io/agent-ops-command-center/ai-agent-pr-review-scorecard.md
- Release gate: https://ivelly42.github.io/agent-ops-command-center/release-gate-template.md
- Scope freeze: https://ivelly42.github.io/agent-ops-command-center/ai-agent-scope-freeze-template.md
- Revenue proof: https://ivelly42.github.io/agent-ops-command-center/ai-agent-revenue-proof-template.md
- Demand metrics: https://ivelly42.github.io/agent-ops-command-center/metrics/status.json

## Full Template Pack

The paid Agent Ops Command Center pack expands this free command library into a full Notion-ready workspace:

- agent registry;
- run log;
- prompt library;
- verification ledger;
- cost tracker;
- failure modes;
- weekly operator review;
- operating templates for verification command libraries, PR review scorecards, revenue proof, scope freezes, Cursor runs, Codex runs, Claude Code runs, handoffs, run briefs, review briefs, RCA, release gates, Notion import plans, and weekly reviews.

The full pack target price is `$29`. Early access requests are collected here:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
