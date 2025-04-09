import { z } from "zod"

export const inputParams = {
  "expiration": z.number().int().optional(),
  "count": z.number().int().optional()
}