import { z } from "zod"

export const inputParams = {
  "type": z.literal("requests").optional(),
  "unit": z.literal("rpm").optional(),
  "value": z.number().int().optional()
}