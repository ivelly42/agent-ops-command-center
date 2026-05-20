# AI Coding Agent Cost Tracker Template

Use this free cost tracker when AI coding agents run often enough that token spend, review time, and saved cleanup time need a visible record.

The tracker keeps cost and value in the same row, so an agent run is not judged only by whether it produced output.

## Minimal Cost Tracker Fields

| Field | What To Record | Example |
| --- | --- | --- |
| Date | Run date | `2026-05-21` |
| Agent | Agent or workflow used | `Codex Implementation Agent` |
| Model | Model or model family | `GPT-5.5` |
| Task | Work performed | `Small bug fix` |
| Estimated Tokens | Rough token estimate | `25000` |
| Direct Cost | Direct dollar cost if known | `$0.00` |
| Human Minutes Saved | Estimated time saved | `45` |
| ROI Notes | Why the run was or was not worth it | `Good ROI if verified` |

## Copy/Paste Markdown Table

```markdown
| Date | Agent | Model | Task | Estimated Tokens | Direct Cost | Human Minutes Saved | ROI Notes |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
|  | Codex Implementation Agent | GPT-5.5 | Small bug fix | 25000 | $0.00 | 45 | Good ROI if verified |
```

## Copy/Paste CSV Header

```csv
Date,Agent,Model,Task,Estimated Tokens,Direct Cost,Human Minutes Saved,ROI Notes
```

Public sample CSV:

https://ivelly42.github.io/agent-ops-command-center/sample/cost_tracker_sample.csv

## Simple ROI Formula

```text
value_saved = (human_minutes_saved / 60) * hourly_value
net_value = value_saved - direct_cost
```

Example:

```text
human_minutes_saved: 45
hourly_value: 50
direct_cost: 0

value_saved = (45 / 60) * 50 = $37.50
net_value = 37.50 - 0 = $37.50
```

## When To Track A Run

Track a run when:

- an agent changes files in a real repo;
- a review agent catches a blocker before release;
- browser QA replaces manual smoke testing;
- a failed run consumes meaningful time;
- the same workflow repeats weekly;
- a release or revenue claim depends on proof.

## Full Template Pack

The paid Agent Ops Command Center pack expands this free tracker into a full Notion-ready workspace:

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
