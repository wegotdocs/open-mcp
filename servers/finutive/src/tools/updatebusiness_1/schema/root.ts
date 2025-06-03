import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string().describe("Business ID"),
  "internal_billing_payment_day": z.number().int().gte(1).lte(31).describe("Internal billing payment day of the month (1-31)").optional()
}