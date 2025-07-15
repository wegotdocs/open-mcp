import { z } from "zod"

export const inputParamsSchema = {
  "deal_products": z.array(z.object({ "amount": z.number().optional(), "discount": z.number().optional(), "discount_type": z.string().optional(), "price": z.number().nullable().optional(), "product_id": z.string().optional(), "recurrence": z.string().optional(), "total": z.number().optional() })).optional()
}