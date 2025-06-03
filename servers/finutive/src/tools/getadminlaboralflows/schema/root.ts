import { z } from "zod"

export const inputParamsSchema = {
  "size": z.number().int(),
  "offset": z.number().int(),
  "flow": z.string().optional(),
  "search": z.string().optional(),
  "step": z.string().optional(),
  "responsible": z.string().optional(),
  "business_responsible": z.string().optional(),
  "start_date": z.string().datetime({ offset: true }).optional(),
  "end_date": z.string().datetime({ offset: true }).optional(),
  "status": z.string().optional(),
  "date_type": z.number().int().optional(),
  "business": z.string().optional()
}