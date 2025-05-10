import { z } from "zod"

export const inputParamsSchema = {
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "email": z.string().nullable().describe("Filter to select employees by email").optional(),
  "employee_number": z.string().nullable().describe("Filter to select employees by employee_number").optional()
}