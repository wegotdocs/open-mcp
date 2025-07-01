import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "status": z.enum(["AWAITING_ACTIVATION","ACTIVE","AWAITING_DELETION","AWAITING_ACCOUNT_DELETION","DELETED","ERROR"]).describe("Filter by current key status").optional(),
  "statusList": z.string().describe("Filter by one or more key statuses").optional()
}