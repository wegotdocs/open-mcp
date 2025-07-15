import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int().describe("The ID of the project").readonly().optional(),
  "name": z.string().max(200).describe("The name of the project"),
  "project_code": z.string().max(32).describe("An optional third-party identifier unique across all projects enforced using case-insensitive comparison").optional(),
  "client_id": z.number().int().describe("The ID of the project's client").optional(),
  "color": z.string().describe("Project's color in hexadecimal").optional(),
  "notes": z.string().describe("Notes for this project").optional(),
  "tags": z.array(z.string()).describe("List of tags").optional(),
  "budget_type": z.number().int().describe("Is there a project budget? `1` = Total hours, `2` = Total fee, `3` = Hourly fee").optional(),
  "budget_total": z.number().describe("The budget amount for Total hours or Total fee project budgets. Displays as `null` for Hourly fee, Phase and Task budgets, also see `budget_priority`").optional(),
  "budget_per_phase": z.number().int().describe("(**Deprecated** - see `budget_priority`): Is the budget set per Phase? `1` = Yes, `0` = No").optional(),
  "budget_priority": z.number().int().describe("Defines which level the budget will be determined from; `0` = Project, `1` = Phase, `2` = Task. For non-project levels, the total budget can be calculated from the sum of budgets in each Phase or Task").optional(),
  "default_hourly_rate": z.string().describe("The default hourly rate for fee-based budgets, the request also accepts a decimal `number`").optional(),
  "non_billable": z.number().int().describe("Is this project billable? `0` = Billable, `1` = Non-billable").optional(),
  "status": z.number().int().describe("The status of the project `0` = Draft, `1` = Tentative, `2` = Confirmed").optional(),
  "tentative": z.number().int().describe("(**Deprecated** - see `status`): Is this project tentative? `1` = Yes, `0` = No").optional(),
  "locked_task_list": z.number().int().describe("Are members locked from adding project tasks (Only Project Managers can add to this list)? 1 = Yes, locked to project editors, 0 = No, anyone can add tasks").optional(),
  "active": z.number().int().describe("Is this project active or archived? `1` = Active, `0` = Archived").optional(),
  "project_manager": z.number().int().describe("Account ID of the assigned project manager").optional(),
  "all_pms_schedule": z.number().int().describe("Do all project managers have scheduling rights? `1` = Yes, `0` = No").optional(),
  "created": z.string().describe("Date this record was created").readonly().optional(),
  "modified": z.string().describe("Date this record was last modified").readonly().optional(),
  "start_date": z.string().describe("The start date of this project which is either manually set or calculated from the earliest phase, milestone, allocation, or logged time").optional(),
  "end_date": z.string().describe("The end date of this project which is either manually set or calculated from the latest phase, milestone, allocation, or logged time").optional()
}