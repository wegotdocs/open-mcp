import { z } from "zod"

export const inputParamsSchema = {
  "pageCursor": z.string().describe("Page cursor to get the next page, for example - \"MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==\"").optional(),
  "pageSize": z.number().gte(1).lte(100).describe("Number of items per page (max 100), requesting more then 100 will return 100 items").optional(),
  "status": z.any().describe("A comma separated list of statuses to filter. Default is \"COMPLETED\"").optional()
}