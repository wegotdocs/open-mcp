import { z } from "zod"

export const inputParamsSchema = {
  "country_code": z.string().describe("Country for search").optional(),
  "search": z.string().describe("Search word").optional(),
  "newsletter_field": z.enum(["creation_time","subscribers"]).describe("Cursor to continue pagination").optional(),
  "cursor": z.string().describe("Cursor to continue pagination").optional(),
  "count": z.number().gte(1).lte(500).describe("Count of objects to return").optional(),
  "sort": z.enum(["asc","desc"]).describe("Order for items in request").optional()
}