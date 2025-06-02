import { z } from "zod"

export const inputParamsSchema = {
  "totalAmountLargerThan": z.number().describe("When specified, only asset wallets with total balance larger than this amount are returned.").optional(),
  "assetId": z.string().describe("When specified, only asset wallets cross vault accounts that have this asset ID are returned.").optional(),
  "orderBy": z.enum(["ASC","DESC"]).optional(),
  "before": z.string().describe("Fetches the next paginated response before this element. This element is a cursor and is returned at the response of the previous page.").optional(),
  "after": z.string().describe("Fetches the next paginated response after this element. This element is a cursor and is returned at the response of the previous page.").optional(),
  "limit": z.number().gte(1).lte(1000).describe("The maximum number of asset wallets in a single response. The default is 200 and the maximum is 1000.").optional()
}