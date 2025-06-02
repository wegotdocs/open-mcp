import { z } from "zod"

export const inputParamsSchema = {
  "ids": z.string().describe("A comma separated list of NFT IDs. Up to 100 are allowed in a single request."),
  "pageCursor": z.string().describe("Page cursor to fetch").optional(),
  "pageSize": z.number().gte(1).lte(100).describe("Items per page (max 100)").optional(),
  "sort": z.array(z.enum(["collection.name","name","blockchainDescriptor"])).describe("Sort by param, it can be one param or a list of params separated by comma").optional(),
  "order": z.enum(["DESC","ASC"]).describe("Order direction, it can be `ASC` for ascending or `DESC` for descending").optional()
}