import { z } from "zod"

export const inputParamsSchema = {
  "date": z.string().date().optional(),
  "description": z.string().optional(),
  "id": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "severity": z.string().optional(),
  "title": z.string().optional()
}