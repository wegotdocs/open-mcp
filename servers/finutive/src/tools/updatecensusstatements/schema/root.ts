import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "period": z.string(),
  "model": z.string(),
  "csv": z.string().optional(),
  "value": z.number().optional()
}