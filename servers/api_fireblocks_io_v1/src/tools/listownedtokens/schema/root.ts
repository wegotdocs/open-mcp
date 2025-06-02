import { z } from "zod"

export const inputParamsSchema = {
  "ncwId": z.string().describe("Non-Custodial Wallet ID").optional(),
  "walletType": z.enum(["VAULT_ACCOUNT","END_USER_WALLET"]).describe("Wallet type, it can be `VAULT_ACCOUNT` or `END_USER_WALLET`").optional(),
  "pageCursor": z.string().describe("Page cursor to fetch").optional(),
  "pageSize": z.number().gte(1).lte(100).describe("Items per page (max 100)").optional(),
  "sort": z.array(z.literal("name")).describe("Sort by param, it can be one param or a list of params separated by comma").optional(),
  "order": z.enum(["DESC","ASC"]).describe("Order direction, it can be `ASC` for ascending or `DESC` for descending").optional(),
  "status": z.enum(["LISTED","ARCHIVED"]).describe("Token ownership status").optional(),
  "search": z.string().describe("Search owned tokens by token name").optional(),
  "spam": z.enum(["true","false","all"]).describe("Token ownership spam status.").optional()
}