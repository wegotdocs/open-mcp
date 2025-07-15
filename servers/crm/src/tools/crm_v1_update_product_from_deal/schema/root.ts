import { z } from "zod"

export const inputParamsSchema = {
  "amount": z.number().optional(),
  "discount": z.number().optional(),
  "discount_type": z.string().optional(),
  "price": z.number().optional(),
  "product_id": z.string().optional(),
  "recurrence": z.string().optional()
}