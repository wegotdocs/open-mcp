import { z } from "zod"

export const inputParamsSchema = {
  "tracking_url": z.union([z.string().describe("Tracking URL"), z.null().describe("Tracking URL")]).describe("Tracking URL").optional(),
  "shipping_provider": z.union([z.string().describe("Shipping Provider"), z.null().describe("Shipping Provider")]).describe("Shipping Provider").optional(),
  "tracking_code": z.union([z.string().describe("Tracking Code"), z.null().describe("Tracking Code")]).describe("Tracking Code").optional(),
  "notify_customer": z.boolean().describe("Send an email to the customer when the fulfillment is updated. Will use workspace default behavior if left unset").optional()
}