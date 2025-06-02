import { z } from "zod"

export const inputParamsSchema = {
  "pageCursor": z.string().describe("Cursor to the next page").optional(),
  "pageSize": z.number().gte(1).lte(50).describe("Amount of results to return in the next page").optional(),
  "sortBy": z.literal("createdAt").describe("Field(s) to use for sorting").optional(),
  "order": z.enum(["ASC","DESC"]).describe("Is the order ascending or descending").optional()
}