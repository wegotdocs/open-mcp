import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("Find Assignation by employeeId").optional(),
  "departmentId": z.string().uuid().describe("Find Assignation by departmentId").optional(),
  "limit": z.number().int().describe("Limit assignations").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}