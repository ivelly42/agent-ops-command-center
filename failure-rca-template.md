# AI Coding Agent Failure RCA Template

Use this free RCA template when an AI coding agent says work is done, but the result fails review, tests, release checks, or buyer-facing proof.

The template turns a bad run into a reusable prevention rule instead of another vague note in chat history.

## Copy/Paste RCA

```markdown
# AI Agent Failure RCA

Failure Name:

Run Or Task:

Expected Result:

Actual Result:

Evidence:

Root Cause:

Missed Detection:

Immediate Fix:

Prevention Rule:

Verification To Prove Fixed:

Prompt Or Workflow Update:
```

## RCA Fields

| Field | What To Write | Example |
| --- | --- | --- |
| Failure Name | Stable short label | `False completion` |
| Expected Result | What should have happened | `Release links latest preview` |
| Actual Result | What happened instead | `Landing page still links old tag` |
| Evidence | Command, URL, screenshot, or log | `curl output shows v1.5` |
| Root Cause | Why the process allowed it | `No public URL check after deploy` |
| Missed Detection | What check would have caught it | `Search deployed page for tag` |
| Immediate Fix | Smallest correction | `Update link and redeploy` |
| Prevention Rule | Rule for future briefs | `Verify deployed URLs, not local files only` |
| Verification To Prove Fixed | Exact proof needed | `curl deployed page and match tag` |
| Prompt Or Workflow Update | Where to store the lesson | `Failure modes database` |

## Common Agent Failures

| Failure | Root Cause Pattern | Prevention Rule |
| --- | --- | --- |
| False completion | Done claim before evidence | No completion without exact proof |
| Scope drift | Allowed files were not named | Write allowed and forbidden paths first |
| Stale public page | Local file checked instead of deployed URL | Verify the live URL after Pages deploy |
| Weak revenue claim | Interest, issue, or download counted as revenue | Revenue requires checkout, receipt, or seller dashboard |
| Missing rollback | Release path has no recovery step | Record rollback before launch |
| Prompt regression | Same weak prompt reused | Version prompts and record known failures |

## Fast RCA Prompt

```text
Analyze this failed AI-agent run.

Expected:
Actual:
Evidence:
Files or URLs:
Verification attempted:
What the agent claimed:

Return:
1. root cause;
2. missed detection;
3. smallest fix;
4. prevention rule;
5. exact verification proof required before done.
```

## Public Companion Files

- Failure modes database: https://ivelly42.github.io/agent-ops-command-center/failure-modes-database-template.md
- Review brief: https://ivelly42.github.io/agent-ops-command-center/review-brief-template.md
- Release gate: https://ivelly42.github.io/agent-ops-command-center/release-gate-template.md
- Verification ledger: https://ivelly42.github.io/agent-ops-command-center/verification-ledger-template.md
- Prompt library: https://ivelly42.github.io/agent-ops-command-center/prompt-library-template.md

## Full Template Pack

The paid Agent Ops Command Center pack expands this free RCA template into a full Notion-ready workspace:

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
