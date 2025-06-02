import { z } from "zod"

export const inputParamsSchema = {
  "order": z.enum(["ASC","DESC"]).describe("ASC / DESC ordering (default DESC)").optional(),
  "pageCursor": z.string().describe("Cursor of the required page").optional(),
  "pageSize": z.number().gte(1).lte(100).describe("Maximum number of items in the page").optional()
}