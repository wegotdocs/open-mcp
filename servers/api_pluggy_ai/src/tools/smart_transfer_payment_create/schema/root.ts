import { z } from "zod"

export const inputParamsSchema = {
  "preauthorizationId": z.string().describe("Primary identifier of the preauthorization").optional(),
  "recipientId": z.string().describe("Primary identifier of the paymen recipient").optional(),
  "amount": z.number().describe("Payment amount").optional(),
  "description": z.string().describe("Payment description").optional(),
  "clientPaymentId": z.string().describe("Client payment identifier").optional()
}