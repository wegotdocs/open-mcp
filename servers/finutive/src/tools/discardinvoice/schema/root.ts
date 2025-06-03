import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "invoice_id": z.string().optional(),
  "reason": z.string().optional(),
  "discard_text": z.string().optional(),
  "dont_send_email": z.boolean().optional()
}