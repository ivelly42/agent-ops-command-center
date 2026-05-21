# AI Agent Ops Preflight Checklist

Use this before a Codex, Claude Code, Cursor, or local-agent run that can change files, publish work, or affect production behavior.

## 1. Define The Run

- Objective: one sentence, measurable.
- Stop condition: exact point where the agent must stop.
- Allowed files or modules: explicit paths when scope matters.
- Disallowed work: adjacent refactors, formatting churn, or optional features.
- Expected artifact: code patch, report, package, release, or verified answer.

## 2. Confirm Inputs

- Source of truth: issue, plan, PRD, screenshot, log, or user message.
- Required context read: exact files, docs, or command output.
- Freshness risk: live API docs, prices, laws, schedules, model behavior, or account state.
- Credentials boundary: never ask the agent to invent payment, tax, legal, or identity setup.

## 3. Pick The Agent

- Codex: repo edits, terminal verification, packaging, local workflow automation.
- Claude Code: long-form codebase reasoning, strict plan execution, multi-file edits.
- Cursor: interactive IDE pass, local refactors, human-guided implementation.
- External review model: design critique, product risk, security review, second opinion.

## 4. Require Evidence

- Exact command run.
- Expected pass signal.
- Output artifact path or URL.
- Screenshots for UI work.
- Before/after metric for performance or cost work.
- Failure note if verification could not run.

## 5. Close The Loop

- Changed files listed.
- User-visible behavior summarized.
- Remaining blocker named plainly.
- Follow-up separated from completed work.
- Reusable lesson added to the failure-mode log when the same issue can recur.

## Copy/Paste Run Brief

```text
Objective:
Scope:
Do not touch:
Inputs to read first:
Success criteria:
Verification command:
Stop condition:
```

## Full Template Pack

Agent Ops Command Center turns this checklist into a Notion-ready workspace with run logs, prompt versions, verification ledgers, cost notes, and failure-mode tracking.

- Preview: https://ivelly42.github.io/agent-ops-command-center/preview.md
- Sample run log: https://ivelly42.github.io/agent-ops-command-center/sample/run_log_sample.csv
- Early access request: https://github.com/ivelly42/agent-ops-command-center/issues/new?template=payment-ready.yml
