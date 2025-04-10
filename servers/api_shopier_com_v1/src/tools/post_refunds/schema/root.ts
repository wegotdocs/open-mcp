import { z } from "zod"

export const inputParams = {
  "orderId": z.string().describe("The ID of the order."),
  "amount": z.string().describe("Amount to be refunded."),
  "note": z.string().describe("Seller's note to buyer about the refund.").optional()
}