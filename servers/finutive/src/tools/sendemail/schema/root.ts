import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "invoice_ids": z.array(z.string()),
  "stakeholder_ids": z.array(z.string()).optional()
}