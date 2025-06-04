import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().optional(),
  "from": z.string().date().optional(),
  "to": z.string().date().optional(),
  "employeeStatus": z.enum(["active","inactive"]).optional(),
  "limit": z.number().int().describe("Limit results").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}