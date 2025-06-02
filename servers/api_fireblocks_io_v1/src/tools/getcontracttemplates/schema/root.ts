import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().gte(1).lte(100).describe("Items per page (max 100)").optional(),
  "offset": z.number().gte(0).describe("Paging offset").optional(),
  "pageCursor": z.string().describe("Page cursor to get the next page").optional(),
  "pageSize": z.number().gte(1).lte(100).describe("Number of items per page, requesting more then max will return max items").optional(),
  "type": z.enum(["FUNGIBLE_TOKEN","NON_FUNGIBLE_TOKEN","TOKEN_UTILITY"]).describe("The type of the contract templates you wish to retrieve. Can accept one type, more or none").optional(),
  "initializationPhase": z.enum(["ON_DEPLOYMENT","POST_DEPLOYMENT"]).describe("For standalone contracts use ON_DEPLOYMENT and for contracts that are behind proxies use POST_DEPLOYMENT").optional()
}