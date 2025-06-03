import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().optional(),
  "start_date": z.string().datetime({ offset: true }).optional(),
  "end_date": z.string().datetime({ offset: true }).optional(),
  "view_more": z.number().int().optional()
}