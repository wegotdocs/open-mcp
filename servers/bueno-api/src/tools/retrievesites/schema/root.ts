import { z } from "zod"

export const inputParamsSchema = {
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "expr": z.string().describe("Expression to search Sites with").optional(),
  "limit": z.number().describe("Result set size limit").optional()
}