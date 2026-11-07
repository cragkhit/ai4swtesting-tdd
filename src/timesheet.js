/** Maximum hours a single timesheet entry may record. */
const MAX_HOURS_PER_TIMESHEET = 24;

/** Hours are stored as integer hundredths of an hour to avoid floating-point drift. */
const PRECISION = 100;

function validateProjectName(projectName) {
  if (typeof projectName !== 'string' || projectName.trim() === '') {
    throw new TypeError('projectName must be a non-empty string');
  }
  return projectName.trim();
}

function projectKey(projectName) {
  return projectName.trim().toLowerCase();
}

function validateHours(hours) {
  if (typeof hours !== 'number' || !Number.isFinite(hours)) {
    throw new TypeError('hours must be a finite number');
  }
  if (hours <= 0 || hours > MAX_HOURS_PER_TIMESHEET) {
    throw new RangeError(`hours must be greater than 0 and at most ${MAX_HOURS_PER_TIMESHEET}`);
  }
}

function toHundredths(hours) {
  return Math.round(hours * PRECISION);
}

function fromHundredths(hundredths) {
  return hundredths / PRECISION;
}

/**
 * Records timesheet entries per project. All durations are in hours.
 */
class Timesheet {
  constructor() {
    this.entries = [];
  }

  /**
   * Records one timesheet entry.
   * @param {string} projectName - non-empty project name (matched case-insensitively, trimmed)
   * @param {number} hours - hours worked, greater than 0 and at most 24
   * @returns {true} when the entry was recorded
   * @throws {TypeError|RangeError} when the input is invalid; nothing is recorded
   */
  submitTimesheet(projectName, hours) {
    const name = validateProjectName(projectName);
    validateHours(hours);
    this.entries.push({ projectName: name, hundredths: toHundredths(hours) });
    return true;
  }

  /**
   * Returns every submitted entry, sorted by project name (case-insensitive);
   * entries of the same project keep their submission order.
   * @returns {{projectName: string, duration: number}[]} duration in hours
   */
  getTimesheets() {
    return this.entries
      .map((entry) => ({ projectName: entry.projectName, duration: fromHundredths(entry.hundredths) }))
      .sort((a, b) => projectKey(a.projectName).localeCompare(projectKey(b.projectName)));
  }

  /**
   * Total hours recorded for a project; 0 when the project has no entries.
   * @param {string} projectName
   * @returns {number} total hours
   */
  getTotalHours(projectName) {
    const key = projectKey(validateProjectName(projectName));
    const total = this.entries
      .filter((entry) => projectKey(entry.projectName) === key)
      .reduce((sum, entry) => sum + entry.hundredths, 0);
    return fromHundredths(total);
  }
}

module.exports = Timesheet;
