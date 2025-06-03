import { z } from "zod"

export const inputParamsSchema = {
  "bank_id": z.string().optional(),
  "afterbanks_service": z.string().optional(),
  "afterbanks_params": z.string().optional(),
  "business_bank": z.boolean().optional(),
  "name": z.string().optional(),
  "active": z.boolean().optional(),
  "logo": z.string().optional(),
  "priority": z.number().int().optional(),
  "neobank": z.boolean().optional()
}