import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "users_ids": z.array(z.string()).optional(),
  "start_date": z.string().datetime({ offset: true }).optional(),
  "end_date": z.string().datetime({ offset: true }).optional()
}