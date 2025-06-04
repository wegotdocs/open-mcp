import { z } from "zod"

export const inputParamsSchema = {
  "country_code": z.string().describe("Country for search").optional(),
  "cursor": z.string().describe("Cursor to continue pagination").optional(),
  "count": z.number().gte(1).lte(500).describe("Count of objects to return").optional()
}