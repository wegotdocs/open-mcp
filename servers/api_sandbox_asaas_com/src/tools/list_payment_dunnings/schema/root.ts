import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "status": z.enum(["PENDING","AWAITING_APPROVAL","AWAITING_CANCELLATION","PROCESSED","PAID","PARTIALLY_PAID","DENIED","CANCELLED"]).describe("Filter by payment dunning status").optional(),
  "type": z.enum(["CREDIT_BUREAU","DEBT_RECOVERY_ASSISTANCE"]).describe("Filter by type of payment dunning").optional(),
  "payment": z.string().describe("Filter by dunnings for a specific payment").optional(),
  "requestStartDate": z.string().describe("Filter from initial request date").optional(),
  "requestEndDate": z.string().describe("Filter from end request date").optional()
}