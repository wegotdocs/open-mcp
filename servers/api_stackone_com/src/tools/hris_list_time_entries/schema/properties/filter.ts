import { z } from "zod"

export const inputParamsSchema = {
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "employee_id": z.string().nullable().describe("Filter to select time entries by employee_id").optional(),
  "start_time": z.string().nullable().describe("Filter to select time entries after a given time").optional(),
  "end_time": z.string().nullable().describe("Filter to select time entries before a given time").optional()
}