import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "invoice_ids": z.array(z.string()),
  "force": z.boolean().optional(),
  "complement": z.boolean().optional()
}