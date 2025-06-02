import { z } from "zod"

export const inputParamsSchema = {
  "pageCursor": z.string().describe("Page cursor to get the next page").optional(),
  "pageSize": z.number().gte(1).lte(100).describe("Number of items per page, requesting more then max will return max items").optional(),
  "contractAddress": z.string().describe("The contract's onchain address").optional(),
  "baseAssetId": z.string().describe("The blockchain asset ID").optional(),
  "contractTemplateId": z.string().describe("The contract template identifier").optional()
}