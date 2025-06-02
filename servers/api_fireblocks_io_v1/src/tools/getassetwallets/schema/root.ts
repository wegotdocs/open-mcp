import { z } from "zod"

export const inputParamsSchema = {
  "totalAmountLargerThan": z.number().describe("When specified, only vault wallets with total balance greater than this amount are returned.").optional(),
  "assetId": z.string().describe("When specified, only vault wallets with the specified ID are returned.").optional(),
  "orderBy": z.enum(["ASC","DESC"]).optional(),
  "before": z.string().describe("Fetches the next paginated response before this element. \nThis element is a cursor and is returned at the response of the previous page.\n").optional(),
  "after": z.string().describe("Fetches the next paginated response after this element. This element is a cursor and is returned at the response of the previous page.").optional(),
  "limit": z.number().gte(1).lte(1000).describe("The maximum number of vault wallets in a single response. \n\nThe default is 200 and the maximum is 1000.\n").optional()
}