import { z } from "zod"

export const inputParamsSchema = {
  "employeeIds": z.array(z.string().uuid()).describe("The id of the employees").optional(),
  "from": z.string().date().describe("First day of search period").optional(),
  "to": z.string().date().describe("Last day of search period").optional(),
  "page": z.number().int().describe("Request a specific page").optional(),
  "limit": z.number().int().describe("Limit vacation requests").optional(),
  "orderBy": z.string().describe("field1 asc, field2 desc").optional()
}