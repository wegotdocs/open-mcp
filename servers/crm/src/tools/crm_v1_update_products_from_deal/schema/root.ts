import { z } from "zod"

export const inputParamsSchema = {
  "deal_products": z.array(z.object({ "amount": z.number().nullable().optional(), "id": z.string().optional(), "price": z.number().optional() })).optional()
}