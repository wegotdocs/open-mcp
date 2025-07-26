import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().optional(),
  "id": z.number().int().optional(),
  "is_active": z.boolean().optional(),
  "is_mandatory": z.boolean().optional(),
  "is_single": z.boolean().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "name": z.string().optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional()
}