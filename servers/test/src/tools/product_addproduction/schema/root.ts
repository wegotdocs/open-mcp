import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "to_account": z.number().int(),
  "products": z.array(z.object({ "account_id": z.number(), "quantity": z.number().int(), "price": z.number().optional(), "id": z.number().optional() })).optional()
}