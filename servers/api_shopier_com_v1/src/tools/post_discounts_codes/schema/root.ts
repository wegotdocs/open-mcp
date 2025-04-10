import { z } from "zod"

export const inputParams = {
  "code": z.string().describe("The discount code for the buyers used at the checkout."),
  "type": z.enum(["amount","percent"]).describe("Type of the discount."),
  "amountOff": z.string().describe("The absolute value of the discount amount. Required when the discount code type is \"amount\".").optional(),
  "percentOff": z.string().describe("The percentage rate of the discount. Required when the discount code type is \"percent\".").optional(),
  "amountMinimum": z.string().describe("Required minimum order amount for the discount code to be applicable."),
  "currency": z.enum(["TRY","USD","EUR"]).describe("Currency of the discount code."),
  "numAvailable": z.number().int().describe("Number of discount codes that can be used."),
  "expiresAt": z.string().describe("Expiry date of the discount code. yyyy-MM-ddZ format is used (e.g., 2022-07-21+0300).")
}