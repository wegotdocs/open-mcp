import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("The id of the employee").optional(),
  "from": z.string().date().describe("Y-m-d").optional(),
  "to": z.string().date().describe("Y-m-d").optional(),
  "updatedAt[gte]": z.string().describe("UpdatedAt greater or equal").optional(),
  "updatedAt[lte]": z.string().describe("UpdatedAt lesser or equal").optional(),
  "onlyReturn": z.enum(["all","not_deleted","deleted"]).describe("Return specific users").optional(),
  "limit": z.number().int().describe("Limit work entries").optional(),
  "page": z.number().int().describe("Request a specific page").optional(),
  "orderBy": z.string().describe("field1 asc, field2 desc").optional()
}