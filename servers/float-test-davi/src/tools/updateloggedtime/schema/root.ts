import { z } from "zod"

export const inputParamsSchema = {
  "logged_time_id": z.string().describe("Unique ID of the specific logged time entry to be updated"),
  "b_logged_time_id": z.string().describe("Unique ID of the logged time entry").readonly().optional(),
  "people_id": z.number().int().describe("The ID of the person for the logged time entry"),
  "date": z.string().describe("Date of the logged time entry"),
  "reference_date": z.string().describe("The date on which to suppress a log time suggestion of the corresponding `task_id` in the UI").optional(),
  "hours": z.number().gte(0).lte(24).describe("Total hours of the logged time entry, will be rounded to 2 decimal places, `0` values are valid however this acts as a soft-delete so the response is hidden"),
  "billable": z.number().int().describe("Shows if logged time entry is `1` = billable or `0` = non-billable. Determined by the associated project, phase or task").readonly().optional(),
  "notes": z.string().describe("Additional notes about this logged time entry").optional(),
  "project_id": z.number().int().describe("The ID of the project on which this entry was logged"),
  "phase_id": z.number().int().describe("The ID of the project phase for which this entry was logged. A value of `0` indicates no phase is used").optional(),
  "task_id": z.number().int().describe("The ID of a scheduled allocation, when used with `reference_date` it suppresses a matching log time suggestion in the UI").optional(),
  "task_name": z.string().describe("The name of the project task against which this entry was logged, will create a project task name").optional(),
  "task_meta_id": z.number().int().describe("The ID of the associated project task (named for backwards compatibility), takes higher priority over `task_name`").optional(),
  "locked": z.number().int().describe("Is the logged time entry locked? `1` = true, `0` = false").readonly().optional(),
  "locked_date": z.string().describe("Date this logged time entry was last locked").readonly().optional(),
  "created": z.string().describe("Date/time this record was created").readonly().optional(),
  "created_by": z.number().int().describe("ID of the account that created this record").readonly().optional(),
  "modified": z.string().describe("Date/time this record was last modified").readonly().optional(),
  "modified_by": z.number().int().describe("ID of the account that last modified this record").readonly().optional()
}