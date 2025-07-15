import { z } from "zod"

export const inputParamsSchema = {
  "timeoff_id": z.number().int().describe("The ID of this time off").readonly().optional(),
  "timeoff_type_id": z.number().int().describe("The ID of this time off type"),
  "start_date": z.string().describe("Start date of this time off"),
  "end_date": z.string().describe("End date of this time off"),
  "start_time": z.string().describe("Start time of this time off in 24 hr format").optional(),
  "hours": z.number().describe("Number of hours per day for this time off. Not required when a full day"),
  "timeoff_notes": z.string().describe("Additional notes about the time off").optional(),
  "repeat_state": z.number().int().describe("Frequency that this timeoff repeats. `0` = No repeat, `1` = Weekly, `2` = Monthly, `3` = Every two weeks, `4` = Every three weeks, `5` = Every six weeks, `6` = Every two months, `7` = Every three months, `8` = Every six months, `9` = Yearly").optional(),
  "status": z.number().int().describe("Status of the time off. `1` = Tentative, `2` = Confirmed").optional(),
  "repeat_end": z.string().describe("Date that the repeating time off will cease").optional(),
  "full_day": z.number().int().describe("Is this time off for a full day? `1` = Yes, `0` = No").optional(),
  "people_ids": z.array(z.number().int()).describe("List of people IDs assigned to this time off"),
  "created": z.string().describe("Date this record was created").readonly().optional(),
  "modified": z.string().describe("Date this record was modified").readonly().optional(),
  "modified_by": z.number().int().describe("Account ID of the person who last modified this record").readonly().optional(),
  "created_by": z.number().int().describe("Account ID of the person who created this record").readonly().optional()
}