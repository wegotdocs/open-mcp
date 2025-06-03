import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "fields": z.string().optional()
}