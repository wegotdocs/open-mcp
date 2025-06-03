import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "size": z.number().int(),
  "offset": z.number().int(),
  "transaction_id": z.string().optional(),
  "search": z.string().optional()
}