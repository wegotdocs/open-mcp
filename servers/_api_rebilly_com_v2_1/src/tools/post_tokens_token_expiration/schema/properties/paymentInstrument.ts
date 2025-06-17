import { z } from "zod"

export const inputParamsSchema = {
  "pan": z.string().describe("The card PAN (Primary Account Number)").optional(),
  "expMonth": z.number().int().describe("Card's expiry month").optional(),
  "expYear": z.number().int().describe("Card's expiry year").optional(),
  "cvv": z.string().describe("The CVV/CVC of the payment card").optional(),
  "routingNumber": z.number().int().describe("Routing Number").optional(),
  "accountNumber": z.number().int().describe("AccountNumber").optional(),
  "accountType": z.string().describe("Account Type").optional(),
  "bankName": z.string().describe("Bank name").optional()
}