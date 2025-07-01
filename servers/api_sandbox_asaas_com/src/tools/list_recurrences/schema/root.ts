import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "status": z.enum(["AWAITING_CRITICAL_ACTION_AUTHORIZATION","PENDING","SCHEDULED","CANCELLED","DONE"]).describe("Filter by recurrence status").optional(),
  "value": z.number().describe("Filter by recurrence value").optional(),
  "searchText": z.string().describe("Filter by receiver name").optional()
}