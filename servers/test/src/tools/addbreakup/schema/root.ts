import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "to_account": z.number().int(),
  "products": z.array(z.object({ "account_id": z.number(), "quantity": z.number().int(), "id": z.number().optional(), "price_percent": z.number().int() })).optional()
}