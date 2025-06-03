import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "size": z.number().int(),
  "offset": z.number().int(),
  "start_date": z.string().datetime({ offset: true }).optional(),
  "end_date": z.string().datetime({ offset: true }).optional(),
  "status": z.string().optional()
}