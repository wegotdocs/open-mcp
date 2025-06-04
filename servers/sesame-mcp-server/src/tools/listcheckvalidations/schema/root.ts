import { z } from "zod"

export const inputParamsSchema = {
  "employeeIds[in]": z.array(z.string().uuid()).describe("EmployeeIds to query").optional(),
  "status": z.enum(["unsent","sent","accepted","rejected"]).describe("Allowed Status").optional(),
  "from": z.string().date().describe("Request a date from").optional(),
  "to": z.string().date().describe("Request a date to").optional(),
  "limit": z.number().int().describe("Limit results").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}