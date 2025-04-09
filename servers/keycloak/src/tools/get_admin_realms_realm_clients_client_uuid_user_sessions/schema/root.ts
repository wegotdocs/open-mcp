import { z } from "zod"

export const inputParams = {
  "first": z.number().int().describe("Paging offset").optional(),
  "max": z.number().int().describe("Maximum results size (defaults to 100)").optional()
}