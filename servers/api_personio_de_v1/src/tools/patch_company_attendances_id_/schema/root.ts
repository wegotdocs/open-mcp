import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("ID of the attendance period to update"),
  "break": z.number().int().describe("Break in minutes").optional(),
  "comment": z.string().describe("Optional comment").optional(),
  "date": z.string().date().describe("Attendance date as YYYY-MM-DD").optional(),
  "end_time": z.string().regex(new RegExp("^\\d\\d:\\d\\d$")).describe("End time as HH:MM").optional(),
  "start_time": z.string().regex(new RegExp("^\\d\\d:\\d\\d$")).describe("Start time as HH:MM").optional()
}