import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("Employee ID").optional(),
  "type": z.string().uuid().describe("Absence Type ID").optional(),
  "year[in]": z.array(z.number().int()).min(1).describe("Year calendar").optional(),
  "limit": z.number().int().describe("Limit results").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}