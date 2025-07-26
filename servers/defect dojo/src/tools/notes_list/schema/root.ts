import { z } from "zod"

export const inputParamsSchema = {
  "author": z.number().int().optional(),
  "date": z.string().datetime({ offset: true }).optional(),
  "edit_time": z.string().datetime({ offset: true }).optional(),
  "edited": z.boolean().optional(),
  "editor": z.number().int().optional(),
  "entry": z.string().optional(),
  "id": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "private": z.boolean().optional()
}