import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "invoiceId": z.string(),
  "invoice_id": z.string().optional(),
  "recurrence_delete_option": z.string().optional()
}