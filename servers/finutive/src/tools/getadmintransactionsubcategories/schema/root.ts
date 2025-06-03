import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string().describe("Search term for filtering subcategories").optional(),
  "offset": z.number().int().describe("Number of items to skip").optional(),
  "size": z.number().int().describe("Number of items to return").optional()
}