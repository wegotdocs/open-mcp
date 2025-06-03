import { z } from "zod"

export const inputParamsSchema = {
  "Webhook-Signature": z.string().describe("GoCardless webhook signature for verification")
}