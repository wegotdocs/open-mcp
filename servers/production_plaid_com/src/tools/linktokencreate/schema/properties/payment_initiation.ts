import { z } from "zod"

export const inputParamsSchema = {
  "payment_id": z.string().describe("The `payment_id` provided by the `/payment_initiation/payment/create` endpoint.").optional(),
  "consent_id": z.string().describe("The `consent_id` provided by the `/payment_initiation/consent/create` endpoint.").optional()
}