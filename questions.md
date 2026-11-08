# Clarifying Questions: Timesheet User Story

## Accuracy

- What does “half hour units” mean: fixed 30-minute increments or actual time rounded to the nearest half hour? - The requirement does not specify whether users enter increments or whether the system converts actual durations.
- How should durations that are not multiples of 30 minutes be handled? - It is unclear whether values such as 20 or 45 minutes should be rejected, rounded up, rounded down, or rounded to the nearest increment.
- What amounts of time are valid? - The requirements do not define whether zero, negative values, or unusually large durations are allowed.
- What identifies a “specific project”? - It is unclear whether projects must be selected from a predefined list or can be entered as free text, which could cause time to be attributed incorrectly.
- When did the tracked work occur, and how is that date recorded? - A project and duration alone cannot establish when work happened, making the intended history ambiguous.
- How should project totals be calculated across multiple entries? - The requirements do not specify how entries are aggregated or whether rounding occurs before or after aggregation.
- Who can view tracked time besides the user, if anyone? - “Only I” leaves unclear whether administrators, project managers, or support staff have exceptions.
- How should users correct or delete inaccurate entries? - The requirements do not define whether recorded time can be changed or whether earlier values must remain in an audit history.

## Consistency

- What does “complete a timesheet” mean compared with recording an individual time entry? - It is unclear whether a timesheet contains one project and duration or multiple entries with their own required fields.
- Where must the half-hour restriction apply? - The requirements do not say whether the same rule applies to entry forms, edits, imports, and other supported methods of recording time.
- How should required project and duration fields be validated when creating, editing, and completing a timesheet? - The stated completion rule leaves unclear whether incomplete entries may be saved and whether validation differs between actions.
- Where must “only I should be able to see my tracked time” be enforced? - The scope is unclear for history screens, reports, exports, shared links, and any supported APIs.
- How should project names and historical entries behave when a project is renamed, archived, or deleted? - The requirements do not establish whether history retains the original project details or reflects later changes.
- When should changes to tracked time appear in history and project totals? - It is unclear whether all views must update immediately or whether temporary differences are acceptable.
- Who does “I” refer to if account ownership or access changes? - The requirements do not define whether visibility remains tied to the original person, the account, or another identity.
- Why is viewing restricted to the user, and should that restriction also apply to summaries containing their time? - The privacy intent is unclear for aggregate project reports that might reveal an individual’s tracked time.
