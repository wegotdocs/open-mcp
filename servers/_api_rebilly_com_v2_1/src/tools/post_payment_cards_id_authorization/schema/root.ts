import { z } from "zod"

export const inputParamsSchema = {
  "websiteId": z.string().describe("The Website ID"),
  "currency": z.string().describe("Currency (three letter code)"),
  "gatewayAccountId": z.string().describe("The Gateway account ID").optional(),
  "amount": z.number().describe("Amount").optional()
}