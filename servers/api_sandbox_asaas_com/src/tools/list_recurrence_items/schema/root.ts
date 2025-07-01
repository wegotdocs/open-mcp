import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique recurrence identifier in Asaas"),
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional()
}