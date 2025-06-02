import { z } from "zod"

export const inputParamsSchema = {
  "walletId": z.string().describe("The ID of the internal wallet to return assets for"),
  "pageSize": z.number().gte(1).lte(200).describe("Number of assets to return per page").optional(),
  "pageCursor": z.string().describe("Cursor for pagination").optional()
}