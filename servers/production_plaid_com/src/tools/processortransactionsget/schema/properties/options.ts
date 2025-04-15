import { z } from "zod"

export const inputParamsSchema = {
  "count": z.number().int().gte(1).lte(500).describe("The number of transactions to fetch.").optional(),
  "offset": z.number().int().gte(0).describe("The number of transactions to skip. The default value is 0.").optional(),
  "include_original_description": z.boolean().nullable().describe("Include the raw unparsed transaction description from the financial institution.").optional()
}