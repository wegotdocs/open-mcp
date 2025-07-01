import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "startDate": z.string().describe("List start date").optional(),
  "finishDate": z.string().describe("List end date").optional(),
  "order": z.string().describe("Result ordering").optional()
}