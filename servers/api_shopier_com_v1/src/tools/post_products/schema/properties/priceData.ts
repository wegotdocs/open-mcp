import { z } from "zod"

export const inputParams = {
  "currency": z.enum(["TRY","USD","EUR"]).describe("Currency of the product."),
  "price": z.string().describe("Unit price of the product."),
  "discount": z.boolean().describe("Represents whether there is a product based discount.").optional(),
  "discountedPrice": z.string().describe("Discounted price of the product.").optional(),
  "shippingPrice": z.string().describe("Shipping price of the product.").optional()
}