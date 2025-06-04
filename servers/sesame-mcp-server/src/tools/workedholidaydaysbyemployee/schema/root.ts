import { z } from "zod"

export const inputParamsSchema = {
  "employeeIds[in]": z.array(z.string().uuid()).describe("Array of employee ids").optional(),
  "from": z.string().date().describe("Y-m-d"),
  "to": z.string().date().describe("Y-m-d"),
  "limit": z.number().int().describe("Limit employees").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}