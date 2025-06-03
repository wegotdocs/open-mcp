import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "business_id": z.string().optional(),
  "name": z.string().optional(),
  "subject": z.string().optional(),
  "content": z.string().optional(),
  "base_color": z.string().optional(),
  "text_color": z.string().optional(),
  "show_payment_type": z.boolean().optional(),
  "show_signature": z.boolean().optional(),
  "editable": z.boolean().optional(),
  "deleted": z.boolean().optional()
}