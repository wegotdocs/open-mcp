import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "name": z.string().optional(),
  "prefix": z.string().optional(),
  "invoice_starter": z.string().optional(),
  "is_default": z.boolean().optional()
}