# AI Coding Agent Prompt Library Template

Use this free prompt library when you reuse prompts for Codex, Claude Code, Cursor, review agents, browser QA agents, or local coding agents.

The library keeps each prompt versioned, explains why it changed, and records known failures so a good prompt does not become an untracked blob of text.

## Minimal Prompt Library Fields

| Field | What To Record | Example |
| --- | --- | --- |
| Prompt Name | Stable prompt title | `Implementation Brief` |
| Use Case | When to use it | `Coding` |
| Current Version | Version label | `v1` |
| Prompt Text | Reusable prompt body or contract | `Objective; Done When; Allowed Scope...` |
| Last Changed | Date changed | `2026-05-21` |
| Change Reason | Why the prompt changed | `Added stop conditions` |
| Known Failure | What still goes wrong | `Too broad if scope omitted` |
| Eval Score | Simple 1-5 quality score | `4` |

## Copy/Paste Markdown Table

```markdown
| Prompt Name | Use Case | Current Version | Prompt Text | Last Changed | Change Reason | Known Failure | Eval Score |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Implementation Brief | Coding | v1 | Objective; Done When; Allowed Scope; Stop Conditions; Verification. |  | Initial version | Too broad if scope omitted | 4 |
| Review Brief | Code review | v1 | Find bugs first. Use file and line references. Keep summary short. |  | Initial version | Can over-index on style | 4 |
```

## Copy/Paste CSV Header

```csv
Prompt Name,Use Case,Current Version,Prompt Text,Last Changed,Change Reason,Known Failure,Eval Score
```

Public sample CSV:

https://ivelly42.github.io/agent-ops-command-center/sample/prompt_library_sample.csv

Prompt regression test:

https://ivelly42.github.io/agent-ops-command-center/ai-agent-prompt-regression-test.md

## Starter Prompts

| Prompt Name | Use Case | Known Failure |
| --- | --- | --- |
| Implementation Brief | Coding | Too broad if scope omitted |
| Review Brief | Code review | Can over-index on style |
| Failure RCA | Debugging | Weak if logs missing |
| Release Gate | Shipping | Checklist theater without exact commands |
| Scope Freeze | Coding | Too strict for exploratory work |
| Design QA | Frontend | Can miss behavior bugs |

## Versioning Rules

- Never edit a production prompt without a change reason.
- Keep the previous failure visible until a later run proves it is fixed.
- Tie each prompt to a verification rule when the prompt asks an agent to change files.
- If a prompt causes scope drift twice, add an explicit allowed-scope field.
- If a prompt causes false completion, add a pass-signal requirement.

## Strong Implementation Prompt Skeleton

```text
Objective:
Done when:
Inputs to read first:
Allowed scope:
Out of scope:
Stop conditions:
Verification command:
Expected output:
```

## Full Template Pack

The paid Agent Ops Command Center pack expands this free library into a full Notion-ready workspace:

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
