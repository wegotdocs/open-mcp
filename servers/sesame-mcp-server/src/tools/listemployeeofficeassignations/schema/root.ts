import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("Find Assignation by employeeId").optional(),
  "officeId": z.string().uuid().describe("Find Assignation by officeId").optional(),
  "limit": z.number().int().describe("Limit assignations").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}