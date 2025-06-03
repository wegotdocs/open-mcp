import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().optional(),
  "name": z.string().optional(),
  "prefix": z.string().optional(),
  "invoice_starter": z.string().optional(),
  "is_default": z.boolean().optional()
}