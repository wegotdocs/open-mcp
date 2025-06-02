import { z } from "zod"

export const inputParamsSchema = {
  "pageCursor": z.string().describe("Page cursor to get the next page").optional(),
  "pageSize": z.number().gte(1).lte(100).describe("Number of items per page, requesting more then max will return max items").optional(),
  "status": z.any().describe("A comma separated list of statuses to filter. Default is \"COMPLETED\"").optional()
}