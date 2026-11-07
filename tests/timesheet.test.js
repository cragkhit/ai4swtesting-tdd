const Timesheet = require('../src/timesheet');


test('submitting a timesheet with a project name and hours returns true', () => {
  const timesheet = new Timesheet();
  const result = timesheet.submitTimesheet('Project 1', 8);
  expect(result).toBe(true);
});

test('submitted timesheets can be retrieved as a list', () => {
  const timesheet = new Timesheet();
  timesheet.submitTimesheet('Project 1', 8);
  timesheet.submitTimesheet('Project 2', 4);
  expect(timesheet.getTimesheets()).toEqual([
    { projectName: 'Project 1', duration: 8 },
    { projectName: 'Project 2', duration: 4 },
  ]);
});

test('total hours worked can be calculated from timesheets of one project', () => {
  const timesheet = new Timesheet();
  timesheet.submitTimesheet('Project 1', 8);
  timesheet.submitTimesheet('Project 1', 4);
  timesheet.submitTimesheet('Project 1', 2);
  expect(timesheet.getTotalHours('Project 1')).toBe(14);
});
