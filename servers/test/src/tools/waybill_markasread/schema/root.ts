import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "transaction_id": z.number().int().optional(),
  "waybill_id": z.array(z.number().int()).optional()
}