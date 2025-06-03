import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string().describe("Business ID"),
  "tag_ids": z.string().optional(),
  "invoice_ids": z.string().optional(),
  "mode": z.string().optional()
}