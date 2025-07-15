import { z } from "zod"

export const inputParamsSchema = {
  "day": z.number().optional(),
  "month": z.number().optional(),
  "year": z.number().optional()
}