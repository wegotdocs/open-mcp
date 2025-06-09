import { z } from "zod"

export const inputParamsSchema = {
  "document": z.string(),
  "price": z.number(),
  "account_id": z.number()
}