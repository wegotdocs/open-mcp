import { z } from "zod"

export const inputParamsSchema = {
  "expiration": z.number().int().optional(),
  "count": z.number().int().optional()
}