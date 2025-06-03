import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().optional(),
  "business_id": z.string().optional(),
  "invoice_id": z.string().optional(),
  "start_timestamp": z.string().datetime({ offset: true }).optional(),
  "end_timestamp": z.string().datetime({ offset: true }).optional()
}