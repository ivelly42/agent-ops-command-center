# AI Agent Done Checklist

Use this checklist before you mark an AI-agent run as done.

AI coding agents often produce plausible output before the work is actually complete. This checklist forces a run to prove objective, scope, behavior, regression, handoff, security, cost, and revenue claims before it gets accepted.

This preview is part of Agent Ops Command Center, a $29 Notion and spreadsheet template pack for builders running Codex, Claude Code, Cursor, and local AI coding agents.

## Quick Checklist

| Gate | Done Means | Not Done Means |
| --- | --- | --- |
| Objective | The original done condition is satisfied | The task was redefined after the run started |
| Scope | Only allowed files or surfaces changed | Unknown or unrelated files changed |
| Behavior | The changed behavior was tested directly | The check only proves the app started |
| Regression | Relevant existing behavior still passes | Existing tests or smoke checks were skipped |
| Evidence | Command, URL, screenshot, digest, or dashboard proof is recorded | Proof lives only in chat |
| Handoff | Next action, owner, blockers, and gaps are written down | Another agent needs chat history to continue |
| Security | No secrets, auth, payment data, or private logs leaked | Sensitive data may be exposed |
| Cost | Model and retry cost fit the value of the run | Expensive retries produced no stronger proof |
| Revenue | Money claims use checkout, receipt, payout, or seller dashboard evidence | Interest, downloads, stars, or issues are counted as revenue |

## Copyable Done Statement

Mark this run done only when you can fill this:

| Field | Value |
| --- | --- |
| Objective |  |
| Files changed |  |
| Direct verification |  |
| Regression evidence |  |
| Known gaps |  |
| Next owner |  |
| Revenue evidence, if any |  |

## What The Full Pack Adds

- Full AI Agent Done Checklist template with done gate, required fields, not-done signals, and decision record.
- Run audit, acceptance test suite, verification command library, security review checklist, and revenue proof templates.
- Run log, verification ledger, failure modes database, and handoff template so done decisions are saved outside chat history.
- Cost tracker and model routing matrix to keep expensive runs tied to value and proof.

## Buy / Do Not Buy

Buy the full pack if:

- your agents often say "done" before verification is complete;
- you lose proof across Codex, Claude Code, Cursor, browser QA, or review agents;
- repeated false completion costs more than $29 in cleanup time;
- you need a simple operating system for evidence, handoff, and revenue claims.

Do not buy yet if:

- your AI-agent work is only throwaway experiments;
- you already have durable run logs, verification gates, handoff notes, and revenue proof rules;
- you need account, payment, payout, tax, or legal setup done for you.

## Revenue Rule

Done is not paid. Revenue is proven only by checkout, receipt, payout, or seller-dashboard evidence. Issue requests, release downloads, stars, Gist views, comments, and audit passes are demand signals only.

## Links

- Full preview site: https://ivelly42.github.io/agent-ops-command-center/
- AI agent run audit: https://ivelly42.github.io/agent-ops-command-center/ai-agent-run-audit-template.md
- AI agent acceptance test suite: https://ivelly42.github.io/agent-ops-command-center/ai-agent-acceptance-test-suite.md
- Verification command library: https://ivelly42.github.io/agent-ops-command-center/ai-agent-verification-command-library.md
- Public preview index: https://ivelly42.github.io/agent-ops-command-center/github-preview-index.md
- AI agent done checklist Gist: https://gist.github.com/ivelly42/d9cbe7c188596853618db6bc6714b66e
- Early access request: https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
