# Codex And Claude Code Run Log Template

Use this free run log when an AI coding agent changes files, runs commands, opens a pull request, or produces a release artifact.

The goal is simple: every meaningful agent run should leave enough evidence for a later reviewer to answer three questions.

- What was the agent asked to do?
- What did it actually change?
- What proof shows the result is safe enough to trust?

## Minimal Run Log Fields

| Field | What To Record | Example |
| --- | --- | --- |
| Run ID | Short stable identifier | `2026-05-21-codex-landing-fix` |
| Agent | Tool and model family | `Codex`, `Claude Code`, `Cursor` |
| Objective | One measurable sentence | `Add checkout-blocker audit page` |
| Scope | Allowed files or modules | `public-launch/*.md`, `index.html` |
| Stop Condition | Exact point where the run should stop | `Stop after Pages returns HTTP 200` |
| Inputs Read | Source files, docs, logs, issues, or screenshots | `README.md`, `GOAL_STATUS.md` |
| Changed Files | Files actually changed | `index.html`, `sitemap.xml` |
| Verification | Exact command, URL, screenshot, or review evidence | `curl -fsSI ... returned 200` |
| Result | `passed`, `blocked`, `needs review`, or `reverted` | `passed` |
| Follow-up | One concrete next action | `Monitor order-request issues` |

## Copy/Paste Markdown Row

```markdown
| Run ID | Agent | Objective | Scope | Stop Condition | Inputs Read | Changed Files | Verification | Result | Follow-up |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |
```

## Copy/Paste CSV Header

```csv
run_id,agent,objective,scope,stop_condition,inputs_read,changed_files,verification,result,follow_up
```

## Strong Run Brief

```text
Objective:
Allowed scope:
Do not touch:
Inputs to read first:
Expected artifact:
Verification command:
Stop condition:
```

## Verification Rules

- Prefer exact commands over vague statements.
- For UI work, include a screenshot or rendered URL.
- For release work, record the release URL and artifact digest.
- For code changes, list the tests that cover the changed behavior.
- If verification could not run, mark the run as blocked instead of done.
- If the agent created a workaround, record the risk and the next real fix.

## When A Run Is Not Done

Do not mark a run complete when:

- a payment, payout, tax, legal, or identity setup step is still missing;
- the output exists locally but is not published where users can reach it;
- the verification command only checked a narrow part of a broader claim;
- the agent changed files outside the requested scope;
- the result depends on a user action that has not happened.

## Full Template Pack

Agent Ops Command Center expands this free run log into a full Notion-ready workspace:

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
