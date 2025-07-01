import { z } from "zod"

export const inputParamsSchema = {
  "value": z.number().describe("Percentage or fixed amount of discount to be applied to the Payment amount").optional(),
  "dueDateLimitDays": z.number().int().describe("Days before expiration to apply discount. Ex: 0 = until expiration, 1 = up to one day before, 2 = up to 2 days before, and so on").optional(),
  "type": z.enum(["FIXED","PERCENTAGE"]).describe("Discount type").optional()
}