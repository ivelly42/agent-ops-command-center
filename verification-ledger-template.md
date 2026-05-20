# AI Coding Agent Verification Ledger Template

Use this free verification ledger when Codex, Claude Code, Cursor, or another AI coding agent claims a task is done.

The ledger forces each run to name the exact proof that makes the result trustworthy. It is useful for code edits, release work, UI changes, docs changes, and any agent run that touches a real project.

## Minimal Ledger Fields

| Field | What To Record | Example |
| --- | --- | --- |
| Check | Short name for the proof | `Build` |
| Command Or Evidence | Exact command, URL, screenshot, or review artifact | `npm run build` |
| When Required | Trigger condition | `Frontend or TypeScript changed` |
| Pass Signal | What proves the check passed | `Build completed with exit code 0` |
| Fail Signal | What blocks completion | `Compiler error or missing route` |
| Owner | Person or agent responsible | `Operator` |

## Copy/Paste Markdown Table

```markdown
| Check | Command Or Evidence | When Required | Pass Signal | Fail Signal | Owner |
| --- | --- | --- | --- | --- | --- |
| Build |  |  |  |  |  |
| Tests |  |  |  |  |  |
| Visual QA |  |  |  |  |  |
| Release Asset |  |  |  |  |  |
```

## Copy/Paste CSV Header

```csv
Check,Command or Evidence,When Required,Pass Signal,Fail Signal,Owner
```

Public sample CSV:

https://ivelly42.github.io/agent-ops-command-center/sample/verification_ledger_sample.csv

## Starter Checks

| Check | Command Or Evidence | When Required | Pass Signal | Fail Signal | Owner |
| --- | --- | --- | --- | --- | --- |
| Unit tests | `npm test` | Code behavior changed | All tests pass | Any failing test | Operator |
| Type check | `npm run typecheck` | TypeScript changed | No type errors | Compiler error | Operator |
| Build | `npm run build` | Release candidate | Build complete | Build failed | Operator |
| Visual QA | Screenshot before and after | Frontend UI changed | No broken layout | Overlap or blank state | Operator |
| Pages smoke | `curl -fsSL URL | rg "expected text"` | Static site changed | HTTP 200 plus expected text | 404 or missing text | Operator |
| Release asset check | `gh release view TAG --json assets` | Release published | Expected asset uploaded | Asset missing or wrong file | Operator |
| Payment gate | Seller dashboard or checkout receipt | Paid launch claimed | Gross revenue visible | No authenticated checkout | Operator |

## Stop Rules

Do not mark an agent run complete when:

- the check only proves a narrow part of a broad claim;
- a local artifact exists but is not published where users can reach it;
- a payment, payout, tax, legal, identity, or credential setup step is still missing;
- the agent cannot show the exact command, URL, screenshot, digest, or issue that proves the result;
- the result depends on user action that has not happened.

## Full Template Pack

The paid Agent Ops Command Center pack expands this free ledger into a full Notion-ready workspace:

- agent registry;
- run log;
- prompt library;
- verification ledger;
- cost tracker;
- failure modes;
- weekly operator review;
- operating templates for run briefs, review briefs, RCA, release gates, and weekly reviews.

The full pack target price is `$29`. Early access requests are collected here:

https://github.com/ivelly42/agent-ops-command-center/issues/new?template=order-request.yml
