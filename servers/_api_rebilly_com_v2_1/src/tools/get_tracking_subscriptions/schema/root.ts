import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(0).lte(1000).describe("The collection items limit").optional(),
  "offset": z.number().int().gte(0).describe("The collection items offset").optional()
}