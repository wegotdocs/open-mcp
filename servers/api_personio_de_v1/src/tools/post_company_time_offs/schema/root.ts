import { z } from "zod"

export const inputParamsSchema = {
  "comment": z.string().describe("Optional comment").optional(),
  "employee_id": z.number().int().describe("Employee identifier"),
  "end_date": z.string().date().describe("Absence end date as YYYY-MM-DD"),
  "half_day_end": z.boolean().describe("Weather the end date is a half-day off"),
  "half_day_start": z.boolean().describe("Weather the start date is a half-day off"),
  "start_date": z.string().date().describe("Absence start date as YYYY-MM-DD"),
  "time_off_type_id": z.number().int().describe("Time-off type identifier")
}