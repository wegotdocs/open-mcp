import { z } from "zod"

export const inputParamsSchema = {
  "task_id": z.number().int().describe("The ID of this allocation as a task").readonly().optional(),
  "root_task_id": z.number().int().describe("The ID of the earliest linked allocation in a chain").optional(),
  "parent_task_id": z.number().int().describe("The ID of the direct parent of a linked allocation").optional(),
  "project_id": z.number().int().describe("The ID of the project for this allocation"),
  "phase_id": z.number().int().describe("The ID of the project phase for this allocation").optional(),
  "start_date": z.string().describe("Start date of this allocation"),
  "end_date": z.string().describe("End date of this allocation"),
  "start_time": z.string().describe("Start time in 24 hr format").optional(),
  "hours": z.number().describe("Number of hours per day"),
  "people_id": z.number().int().describe("The ID of the person assigned to the allocation (omit when using `people_ids` field)").optional(),
  "people_ids": z.array(z.number().int()).describe("List of one or more people IDs assigned to the allocation (ignored if `people_id` is set)").optional(),
  "status": z.number().int().describe("Status; `0` = Draft, `1` = Tentative, `2` = Confirmed, `3` = Complete").optional(),
  "billable": z.number().int().describe("`1` = Billable, `0` = Non-billable - Billable status is set by the associated project task (`task_meta_id`), updates using this field are deprecated").readonly().optional(),
  "name": z.string().describe("Name of the associated project task").optional(),
  "task_meta_id": z.number().int().describe("The ID of the associated project task (named for backwards compatibility), takes higher priority over `name`").optional(),
  "notes": z.string().describe("Additional details about the work required").optional(),
  "repeat_state": z.number().int().describe("Frequency that this allocation repeats. `0` = No repeat, `1` = Weekly, `2` = Monthly, `3` = Every two weeks, `4` = Every three weeks, `5` = Every six weeks, `6` = Every two months, `7` = Every three months, `8` = Every six months, `9` = Yearly").optional(),
  "repeat_end_date": z.string().describe("Date that the repeating allocation will cease").optional(),
  "created_by": z.number().int().describe("Account ID of the creator").readonly().optional(),
  "created": z.string().describe("Date this record was created").readonly().optional(),
  "modified_by": z.number().int().describe("Account ID who last modified").readonly().optional(),
  "modified": z.string().describe("Date this record was last modified").readonly().optional()
}