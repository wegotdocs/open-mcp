import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "period_id": z.string(),
  "invoice_ids": z.array(z.string()).optional()
}