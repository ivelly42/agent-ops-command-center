# AI Agent Operating System Template

Use this scorecard to decide whether your AI coding-agent workflow needs a real operating system instead of more chat history.

This preview is part of Agent Ops Command Center, a $29 Notion and spreadsheet template pack for builders running Codex, Claude Code, Cursor, and local AI coding agents.

## Maturity Scorecard

Rate each area from 0 to 3.

| Area | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| Run capture | Runs disappear in chat | Some notes | Every meaningful run logged | Run log drives follow-up |
| Scope control | Agents edit freely | Ad hoc instructions | Allowed files and stops named | Scope freeze reused |
| Verification | Done by trust | Some commands | Proof tied to each run | Verification ledger required |
| Prompt control | Prompts overwritten | Prompt copies scattered | Prompt library versioned | Regression tests before promotion |
| Cost control | Cost unknown | Rough estimates | Cost tracker used | Model routing reduces waste |
| Failure handling | Same failures repeat | Manual fixes | Failure modes recorded | Prevention rules promoted |
| Handoff | Context lost | Manual summary | Handoff template used | Continuation has proof and next action |
| Revenue proof | Signals counted as revenue | Buyer intent tracked | Checkout evidence separated | Revenue claims require receipt/dashboard |

## Score Bands

| Total | State | What It Means | Next Action |
| --- | --- | --- | --- |
| 0-7 | Chat history chaos | Agent output is hard to trust or resume | Start with run log and verification ledger |
| 8-15 | Useful but leaky | Work happens, but context and proof are uneven | Add scope freeze, failure modes, and cost tracker |
| 16-21 | Operational | Most runs have objective, proof, and follow-up | Add prompt regression and model routing |
| 22-24 | Production-ready | The workflow can survive handoff, review, and revenue claims | Keep weekly review and incident reports current |

## What The Full Pack Adds

- Run log for objective, files changed, verification, result, and follow-up.
- Agent registry for model, tool, use case, avoid list, and owner.
- Prompt library for prompt versions, change reasons, known failures, and eval score.
- Verification ledger for exact pass and fail signals before calling work done.
- Cost tracker for model cost, time saved, and ROI notes.
- Failure modes database for repeated symptoms, root causes, fixes, and prevention rules.
- Scope freeze, handoff, model routing, prompt regression, acceptance test, security review, incident report, and revenue proof templates.

## Buy / Do Not Buy

Buy the full pack if:

- your score is below 16 and you want structure immediately;
- you run more than one AI coding agent or model;
- you need proof for code review, release, security, handoff, or revenue claims;
- repeated failures cost more than $29 in cleanup time.

Do not buy yet if:

- you only run one-off experiments;
- you already have a complete run log, verification ledger, prompt library, cost tracker, and failure database;
- you need account, payment, tax, legal, or payout setup done for you.

## Revenue Rule

Revenue is proven only by checkout, receipt, payout, or seller-dashboard evidence. GitHub issues, release downloads, stars, Gist views, and comments are demand signals only.

## Links

- Full preview site: https://ivelly42.github.io/agent-ops-command-center/
- Public preview index: https://ivelly42.github.io/agent-ops-command-center/github-preview-index.md
- Maturity scorecard Gist: https://gist.github.com/ivelly42/37a14ab70b537aeaef1156549876124b
- Early access request: https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
