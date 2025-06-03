import { z } from "zod"

export const inputParamsSchema = {
  "success": z.string().describe("Url to be redirected after the payment was completed").optional(),
  "pending": z.string().describe("Url to be redirected when the payment is pending (for example, when it has status WAITING_PAYER_AUTHORIZATION").optional(),
  "error": z.string().describe("Url to be redirected after the payment ended in error status").optional()
}