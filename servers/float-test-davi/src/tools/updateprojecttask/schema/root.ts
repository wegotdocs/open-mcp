import { z } from "zod"

export const inputParamsSchema = {
  "project_task_id": z.number().int().describe("The project tasks ID as described in the `task_meta_id` field"),
  "task_meta_id": z.number().int().describe("The ID of the project task (named for backwards compatibility)").readonly().optional(),
  "project_id": z.number().int().describe("The ID of the project the project task belongs to"),
  "phase_id": z.number().int().describe("The ID of the phase the project task belongs to; `0` indicates it does not belong to a phase").optional(),
  "task_name": z.string().min(0).max(200).describe("The name of the project task, an empty string is valid and is the default on the UI when a project task has not been chosen"),
  "billable": z.number().int().describe("`1` = Billable, `0` = Non-billable - Billable project tasks may not belong to non-billable projects or phases").optional(),
  "budget": z.number().describe("The budget amount for 'hours by task' or 'fee by task' project budgets").optional(),
  "count_tasks": z.number().int().describe("The number of allocations (`task_id`) this project task is associated with.").readonly().optional(),
  "count_logged_time": z.number().int().describe("The number of logged time entries (`logged_time_id`) this project task is associated with.").readonly().optional(),
  "created": z.string().describe("Date this record was created").readonly().optional(),
  "modified": z.string().describe("Date this record was last modified").readonly().optional()
}