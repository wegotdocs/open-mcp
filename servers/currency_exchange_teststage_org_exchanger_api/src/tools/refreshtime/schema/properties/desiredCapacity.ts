import { z } from "zod"

export const inputParamsSchema = {
  "seconds": z.number().int().optional(),
  "zero": z.boolean().optional(),
  "nano": z.number().int().optional(),
  "negative": z.boolean().optional(),
  "positive": z.boolean().optional(),
  "units": z.array(z.object({ "durationEstimated": z.boolean().optional(), "duration": z.object({ "seconds": z.number().int().optional(), "zero": z.boolean().optional(), "nano": z.number().int().optional(), "negative": z.boolean().optional(), "positive": z.boolean().optional() }).optional(), "timeBased": z.boolean().optional(), "dateBased": z.boolean().optional() })).optional()
}