import { z } from "zod"

export const inputParamsSchema = {
  "size": z.number().int().describe("Number of items to return").optional(),
  "offset": z.number().int().describe("Number of items to skip").optional(),
  "search": z.string().describe("Search term to filter businesses").optional()
}