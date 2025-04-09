import { z } from "zod"

export const inputParams = {
  "start_time": z.string().describe("The start time in UTC of the maintenance window policy in 24-hour clock format / HH:MM notation (e.g., `15:00`).").optional(),
  "duration": z.string().describe("The duration of the maintenance window policy in human-readable format.").readonly().optional(),
  "day": z.enum(["any","monday","tuesday","wednesday","thursday","friday","saturday","sunday"]).describe("The day of the maintenance window policy. May be one of `monday` through `sunday`, or `any` to indicate an arbitrary week day.").optional()
}