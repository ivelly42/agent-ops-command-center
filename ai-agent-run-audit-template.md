# AI Agent Run Audit Template

Use this audit when an AI coding agent says a run is done, but you need proof before you ship, reuse, or hand off the result.

This preview is part of Agent Ops Command Center, a $29 Notion and spreadsheet template pack for builders running Codex, Claude Code, Cursor, and local AI coding agents.

## Quick Audit

| Area | Pass Signal | Hold Signal |
| --- | --- | --- |
| Objective | Output matches the original done condition | Done state changed mid-run |
| Scope | Only allowed files or surfaces changed | Agent edited unrelated files |
| Verification | Changed behavior was tested directly | Evidence only proves the app started |
| Regression | Related existing behavior still passes | Existing checks were skipped |
| Security | No secrets, auth, payment, or private data leaked | Logs or screenshots expose sensitive data |
| Cost | Model and retries fit the task risk | Expensive retries produced no new proof |
| Handoff | Next agent can continue without chat history | State lives only in the conversation |
| Revenue | Money claims use checkout, receipt, payout, or dashboard evidence | Issues, comments, downloads, or stars are counted as revenue |

## Audit Packet

| Field | Value |
| --- | --- |
| Run ID |  |
| Objective |  |
| Agent / model |  |
| Files changed |  |
| Verification command or URL |  |
| Screenshot, release asset, digest, or dashboard proof |  |
| Known gaps |  |
| Follow-up owner |  |
| Decision | Accept / Hold / Rerun |

## When To Use It

Use the run audit when:

- an agent changed production code, release assets, payment copy, or public docs;
- the run crossed from Codex to Claude Code, Cursor, browser QA, or a review agent;
- the agent claimed a fix without direct behavior proof;
- a previous run failed because context, scope, or evidence was missing;
- you need to decide whether a result is safe to reuse in another project.

## What The Full Pack Adds

- Full AI Agent Run Audit template with evidence checklist, hold rules, decision field, and prevention rule.
- Run log, verification ledger, failure modes database, and handoff template so the audit result has somewhere to live.
- Acceptance test suite, security review checklist, prompt regression test, model routing matrix, and incident report for deeper checks.
- Cost tracker and revenue proof template to keep cost and money claims separate from confidence signals.

## Buy / Do Not Buy

Buy the full pack if:

- you regularly accept AI-agent output after a quick skim;
- you lose proof when a task crosses tools or sessions;
- repeated bad runs cost more than $29 in cleanup time;
- you need a lightweight audit trail for code, prompts, releases, or buyer-facing claims.

Do not buy yet if:

- every agent run is throwaway experimentation;
- your existing run log already captures objective, scope, proof, cost, handoff, and failure prevention;
- you need account, payment, payout, tax, or legal setup done for you.

## Revenue Rule

Revenue is proven only by checkout, receipt, payout, or seller-dashboard evidence. Audit passes, issue requests, release downloads, stars, Gist views, and comments are demand signals only.

## Links

- Full preview site: https://ivelly42.github.io/agent-ops-command-center/
- AI agent acceptance test suite: https://ivelly42.github.io/agent-ops-command-center/ai-agent-acceptance-test-suite.md
- Verification command library: https://ivelly42.github.io/agent-ops-command-center/ai-agent-verification-command-library.md
- Public preview index: https://ivelly42.github.io/agent-ops-command-center/github-preview-index.md
- AI agent run audit Gist: https://gist.github.com/ivelly42/4c9c05a9823cb88148ff5a658a3607d4
- Early access request: https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
