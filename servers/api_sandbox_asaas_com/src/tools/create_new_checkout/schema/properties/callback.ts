import { z } from "zod"

export const inputParamsSchema = {
  "successUrl": z.string().describe("Redirect URL for successful checkout"),
  "cancelUrl": z.string().describe("Redirect URL for canceled checkout"),
  "expiredUrl": z.string().describe("Redirect URL for expired checkout")
}