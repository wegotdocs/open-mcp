import { z } from "zod"

export const inputParamsSchema = {
  "ForPurchase": z.boolean().optional(),
  "ForSales": z.boolean().optional(),
  "QuantityOnHand": z.boolean().optional(),
  "QuantityWithPriceAndRate": z.boolean().optional()
}