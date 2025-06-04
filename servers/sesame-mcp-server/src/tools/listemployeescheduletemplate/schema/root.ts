import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("Employee ID"),
  "from": z.string().date(),
  "to": z.string().date(),
  "limit": z.number().int().describe("Limit results").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}