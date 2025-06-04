import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("Filter directories by employee id").optional(),
  "parentDirectoryType": z.string().describe("Parent directory type").optional(),
  "limit": z.number().int().describe("Limit results").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}