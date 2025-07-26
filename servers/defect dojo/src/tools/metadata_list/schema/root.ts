import { z } from "zod"

export const inputParamsSchema = {
  "endpoint": z.number().int().optional(),
  "finding": z.number().int().optional(),
  "id": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "name": z.string().optional(),
  "name_case_insensitive": z.string().optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "product": z.number().int().optional(),
  "value": z.string().optional(),
  "value_case_insensitive": z.string().optional()
}