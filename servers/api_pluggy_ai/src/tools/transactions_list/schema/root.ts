import { z } from "zod"

export const inputParamsSchema = {
  "accountId": z.string().uuid().describe("Account primary identifier"),
  "ids": z.array(z.string().uuid()).describe("Array of transaction identifiers. If defined, 'from' and 'to' parameters will be discarded").optional(),
  "from": z.string().datetime({ offset: true }).describe("Filter greater than date. Format (yyyy-mm-dd)").optional(),
  "to": z.string().datetime({ offset: true }).describe("Filter lower than date. Format (yyyy-mm-dd)").optional(),
  "pageSize": z.number().gte(1).lte(500).describe("Page size for the paging request, default: 20").optional(),
  "page": z.number().describe("Page number for the paging request, default: 1").optional(),
  "billId": z.string().uuid().describe("Credit Card Bill's primary identifier, if account is a credit card.").optional(),
  "createdAtFrom": z.string().datetime({ offset: true }).describe("Filter greater than createdAt. Format (yyyy-mm-ddThh:mm:ss.000Z)").optional()
}