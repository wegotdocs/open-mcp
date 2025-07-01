import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "paymentId": z.string().describe("Filter by payment ID").optional(),
  "status": z.enum(["PENDING","AWAITING_CREDIT","CANCELLED","DONE","REFUNDED","BLOCKED_BY_VALUE_DIVERGENCE"]).describe("Filter by status").optional(),
  "paymentConfirmedDate[ge]": z.string().describe("Filter from the initial payment confirmation date").optional(),
  "paymentConfirmedDate[le]": z.string().describe("Filter from final payment confirmation date").optional(),
  "creditDate[ge]": z.string().describe("Filter by date of receipt of initial split").optional(),
  "creditDate[le]": z.string().describe("Filter by date of receipt of final split").optional()
}