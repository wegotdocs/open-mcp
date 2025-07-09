import { z } from "zod"

export const inputParamsSchema = {
  "attendances": z.array(z.object({ "break": z.number().int().describe("Break in minutes"), "comment": z.string().describe("Optional comment"), "date": z.string().date().describe("Attendance date as YYYY-MM-DD"), "employee": z.number().int().describe("Employee identifier"), "end_time": z.string().regex(new RegExp("^\\d\\d:\\d\\d$")).describe("End time as HH:MM"), "start_time": z.string().regex(new RegExp("^\\d\\d:\\d\\d$")).describe("Start time as HH:MM") })).optional()
}