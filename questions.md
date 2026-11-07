# Clarifying Questions: Timesheet User Story

## Accuracy

**What does "half hour units" mean for entry and storage?**
Time is tracked in half-hour units, but can a user enter 0.25 h or 1 h 10 min? If so, is it rejected, rounded up, rounded down, or rounded to the nearest unit? Each choice gives a different stored value.

**How is a value between units rounded?**
If rounding happens, which rule applies? For example, does 0:45 become 0:30 or 1:00, and does 0:15 become 0:00 or 0:30? A test needs the exact expected value at each boundary.

**What is the minimum and maximum time per entry?**
Is 0 allowed? Is 0.5 h the smallest value? Is there an upper limit, such as 24 h per day or a set number per week? Without limits we can't write boundary tests.

**How is time entered: as a duration or as start and end times?**
"Amount of time" suggests a duration, but users may expect start and end times. With start and end times, the system has to calculate the duration, which brings in rounding, overnight shifts, and time zones.

**Which units and formats are accepted?**
Is "1.5", "1:30", "1h30m", or "90 minutes" accepted? A format the system misreads would record the wrong amount, for example "1.30" read as 1.3 hours instead of 1 hour 30 minutes.

**When is time counted: on the day worked or the day entered?**
If I enter Monday's time on Wednesday, which date does it count toward? This decides whether the history is correct.

**How is time near midnight or across days handled?**
If work runs from 23:30 to 00:30, is it one entry or split across two days? Which date does it belong to?

**Which time zone is used?**
If a user travels or the server is in another time zone, entries could land on the wrong date, which makes the history wrong.

**What does "complete a timesheet" mean?**
Is a timesheet one entry, a day, or a week? Is "complete" the same as "submit"? We need to know the unit before we can define the pass and fail conditions.

**What is a valid project?**
Must the project come from a fixed list, or can it be free text? Can inactive, closed, or archived projects be chosen? Free text could create several spellings of the same project.

**Can one timesheet include more than one project?**
If I worked on two projects in a day, can I log both? Can I split a half-hour unit between them?

**Can negative values or corrections be entered?**
Can I enter -0.5 h to fix a mistake, or must I edit the original entry? This affects whether totals stay correct.

**How much history is kept, and is it accurate?**
How far back can I see my history, and can past entries be changed? If they can, is there an audit trail that shows the original value and the change?

## Consistency

**Is "half hour units" applied the same way in every place time appears?**
Is the same unit used for entry, storage, display, reports, and totals? If storage keeps minutes but display rounds to half hours, the totals may not match the sum of the displayed entries.

**How do totals add up?**
Is the project total the sum of rounded entries, or is the total rounded once from the raw entries? These give different results. For example, three 20-minute entries rounded up give 1.5 h, while 60 minutes rounded once gives 1.0 h.

**Are "project" and "amount of time" checked the same way everywhere they can be entered?**
If entries can be created in a form, an import, an API, or a mobile app, does each one require both fields and apply the same unit rule?

**What happens when only one required field is filled in?**
Is the timesheet rejected, saved as a draft, or saved with a default value? Is the error message the same for a missing project and for missing time?

**Who is "I", and who else can see the data?**
"Only I should be able to see my tracked time" conflicts with common needs. Can managers, admins, payroll, or project owners see it? If anyone else can, the rule as written is wrong, and access rules need to be stated for each role.

**Is the visibility rule applied everywhere?**
Does "only I" also apply to reports, exports, project totals, search, notifications, backups, and APIs? For example, if a project report shows total hours by person, my data is visible to someone else.

**How does visibility apply to project totals?**
If a project total includes my hours, can other members of the project see the total? Does that count as seeing my tracked time?

**When does the visibility rule apply?**
Does it still apply after I leave the organisation, after a project is closed, or after my account is deleted? Is the data kept, hidden, or removed?

**Where is the history shown, and is it the same in every view?**
Are the history view, the timesheet view, and the exports all built from the same data with the same rounding, so the numbers match?

**Why is half an hour the unit?**
Does the reason come from billing, payroll, or company policy? If it comes from billing, the rounding rule may have to follow the client contract. That could differ by project and break the "one rule for everyone" assumption.

**Can the same time be logged twice?**
Can I log 09:00–10:00 to two projects, or enter the same block twice? Should the system prevent overlapping entries so that totals stay consistent?

**Does the wording match across the story?**
The story says "track time" and also "complete a timesheet". Are tracking an entry and completing a timesheet the same action? If they are different, does each one have its own acceptance criteria?