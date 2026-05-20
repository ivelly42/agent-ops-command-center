# AI Coding Agent Registry Template

Use this free agent registry when a project uses more than one AI coding agent, model, skill, or automation.

The registry helps decide which agent should do the work, what it should avoid, and what proof is required before its output is trusted.

## Minimal Agent Registry Fields

| Field | What To Record | Example |
| --- | --- | --- |
| Agent | Stable agent name | `Codex Implementation Agent` |
| Type | Coding, review, QA, research, ops, or marketing | `Coding` |
| Best For | Work this agent should own | `Small complete repo changes` |
| Avoid For | Work this agent should not own | `Unbounded product strategy` |
| Default Model | Usual model or model family | `GPT-5.5` |
| Tools | Tools the agent can use | `Shell and file tools` |
| Prompt Contract | Required brief shape | `Objective plus allowed scope plus stop conditions` |
| Verification Needed | Proof required before done | `Tests or build logs` |
| Owner | Human or workflow owner | `Operator` |
| Status | Active, optional, paused, or retired | `Active` |

## Copy/Paste Markdown Table

```markdown
| Agent | Type | Best For | Avoid For | Default Model | Tools | Prompt Contract | Verification Needed | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Codex Implementation Agent | Coding | Small complete repo changes | Unbounded product strategy | GPT-5.5 | Shell and file tools | Objective plus allowed scope plus stop conditions | Tests or build logs | Operator | Active |
| Browser QA Agent | QA | Frontend smoke testing and screenshots | Backend-only bugs | Fast browser agent | Browser and screenshot tools | URL plus flows plus expected states | Screenshot and pass/fail notes | Operator | Optional |
```

## Copy/Paste CSV Header

```csv
Agent,Type,Best For,Avoid For,Default Model,Tools,Prompt Contract,Verification Needed,Owner,Status
```

Public sample CSV:

https://ivelly42.github.io/agent-ops-command-center/sample/agent_registry_sample.csv

## Starter Agent Types

| Agent Type | Good Fit | Required Evidence |
| --- | --- | --- |
| Implementation Agent | Small scoped code changes | Tests, build logs, or exact command output |
| Research Agent | Large codebase reading and synthesis | File references and quoted evidence |
| Browser QA Agent | Frontend smoke tests and screenshots | URL, flow, screenshot, pass/fail note |
| Review Agent | Pre-ship bug and risk review | Findings with file and line references |
| Design Critic | Visual hierarchy and product polish | Annotated screenshot findings |
| Memory Curator | Durable lessons and RCA promotion | Source evidence and reason to preserve |

## Routing Rules

- Do not assign account, payout, tax, legal, secret, or identity setup to an autonomous agent.
- Send broad product strategy to a research or planning agent before implementation.
- Send UI changes through browser QA when a rendered surface exists.
- Require exact evidence for any release, payment, or revenue claim.
- Retire agents that repeatedly fail the same prevention rule.

## Full Template Pack

The paid Agent Ops Command Center pack expands this free registry into a full Notion-ready workspace:

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
