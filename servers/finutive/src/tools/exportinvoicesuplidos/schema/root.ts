import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "type": z.string(),
  "start_date": z.string().datetime({ offset: true }).optional(),
  "end_date": z.string().datetime({ offset: true }).optional()
}