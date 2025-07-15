import { z } from "zod"

export const inputParamsSchema = {
  "phase_id": z.number().int().describe("The ID of this phase").readonly().optional(),
  "project_id": z.number().int().describe("The ID of the project to which this phase belongs"),
  "name": z.string().max(200).describe("The name of the phase"),
  "color": z.string().describe("Phase's color in hexadecimal (defaults to project color)").optional(),
  "notes": z.string().describe("Notes for this phase").optional(),
  "start_date": z.string().describe("The start date of this phase which is either manually set or calculated from the earliest milestone, allocation, or logged time within this phase"),
  "end_date": z.string().describe("The end date of this phase which is either manually set or calculated from the latest milestone, allocation, or logged time within this phase"),
  "budget_total": z.number().describe("The budget amount for 'hours by phase' or 'fee by phase' project budgets").optional(),
  "default_hourly_rate": z.string().describe("The default hourly rate for fee-based budgets, the request also accepts a decimal `number`").optional(),
  "non_billable": z.number().int().describe("Is this phase billable? `0` = Billable, `1` = Non-billable").optional(),
  "status": z.number().int().describe("The status of the phase `0` = Draft, `1` = Tentative, `2` = Confirmed. Draft phases must belong to draft projects, tentative phase can belong to tentative or confirmed projects, confirmed phases must belong to confirmed projects").optional(),
  "tentative": z.number().int().describe("(**Deprecated** - see `status`): Is this phase tentative? `1` = Yes, `0` = No").optional(),
  "active": z.number().int().describe("Is this phase active or archived? `1` = Active, `0` = Archived").optional(),
  "created": z.string().describe("Date this record was created").readonly().optional(),
  "modified": z.string().describe("Date this record was last modified").readonly().optional()
}