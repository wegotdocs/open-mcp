import { z } from "zod"

export const inputParamsSchema = {
  "pastDays": z.number().int().optional(),
  "futureDays": z.number().int().optional(),
  "tags": z.string().optional(),
  "unmonitored": z.boolean().optional()
}