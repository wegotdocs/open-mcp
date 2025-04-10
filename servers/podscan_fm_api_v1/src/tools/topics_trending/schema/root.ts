import { z } from "zod"

export const inputParams = {
  "timeframe": z.string().optional(),
  "with_history": z.boolean().optional()
}