import { z } from "zod"

export const inputParams = {
  "title": z.string().describe("The title of the automatic discount."),
  "scope": z.enum(["all","selectedProducts","selectedCategories"]).describe("The scope of the automatic discount. Automatic discounts can be applied for all or some of the products or categories."),
  "productIds": z.array(z.string()).describe("List of product IDs the automatic discount is applicable. Used when the scope is \"all\" or \"selectedProducts\".").optional(),
  "categoryIds": z.array(z.string()).describe("List of category IDs the automatic discount is applicable. Used when the scope is \"all\" or \"selectedCategories\".").optional(),
  "type": z.enum(["percent","amount"]).describe("Type of the discount."),
  "amountOff": z.string().describe("The absolute value of the discount amount. Used when the automatic discount type is \"amount\".").optional(),
  "percentOff": z.string().describe("The percentage rate of the discount. Used when the automatic discount type is \"percent\".").optional(),
  "currency": z.enum(["TRY","USD","EUR"]).describe("Currency of the automatic discount."),
  "requirement": z.enum(["amount","quantity"]).describe("The requirement type of the automatic discount."),
  "amountMinimum": z.string().describe("The minimum purchase amount for the automatic discount to be applicable. Used when the automatic discount requirement is \"amount\".").optional(),
  "quantityMinimum": z.number().int().describe("The minimum number of items to be purchased for the automatic discount to be applicable. Used when the automatic discount requirement is \"quantity\".").optional(),
  "startsAt": z.string().describe("Start date of the automatic discount. yyyy-MM-ddZ format is used (e.g., 2022-07-21+0300)."),
  "expiresAt": z.string().describe("Expiry date of the automatic discount. yyyy-MM-ddZ format is used (e.g., 2022-07-21+0300).")
}