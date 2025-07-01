import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "startDate": z.string().describe("Initial date of the creation").optional(),
  "endDate": z.string().describe("Final date of the creation").optional()
}