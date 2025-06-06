import { z } from "zod"

export const inputParamsSchema = {
  "order_id": z.number().int().describe("The order ID."),
  "amount": z.string().describe("Refund amount.").optional(),
  "reason": z.string().describe("Reason for refund.").optional(),
  "refunded_by": z.number().int().describe("User ID of user who created the refund.").optional(),
  "meta_data": z.array(z.object({ "id": z.number().int().describe("Meta ID.").optional(), "key": z.string().describe("Meta key.").optional(), "value": z.string().describe("Meta value.").optional() })).describe("Meta data.").optional(),
  "api_refund": z.boolean().describe("When true, the payment gateway API is used to generate the refund.").optional(),
  "api_restock": z.boolean().describe("When true, refunded items are restocked.").optional()
}