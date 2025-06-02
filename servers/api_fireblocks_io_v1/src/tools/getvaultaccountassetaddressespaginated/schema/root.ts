import { z } from "zod"

export const inputParamsSchema = {
  "vaultAccountId": z.string().describe("The ID of the vault account to return"),
  "assetId": z.string().describe("The ID of the asset"),
  "limit": z.number().describe("Limit the number of results per page").optional(),
  "before": z.string().describe("Cursor string for the previous page").optional(),
  "after": z.string().describe("Cursor string for the next page").optional()
}