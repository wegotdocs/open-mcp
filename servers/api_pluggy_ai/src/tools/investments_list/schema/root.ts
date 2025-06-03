import { z } from "zod"

export const inputParamsSchema = {
  "itemId": z.string().uuid().describe("Item's primary identifier"),
  "type": z.enum(["COE","EQUITY","ETF","FIXED_INCOME","MUTUAL_FUND","SECURITY","OTHER"]).describe("Investment's type to filter").optional(),
  "pageSize": z.number().describe("Page size for the paging request, default: 500").optional(),
  "page": z.number().describe("Page number for the paging request, default: 1").optional()
}