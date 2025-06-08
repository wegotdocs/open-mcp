import { z } from "zod"

export const inputParamsSchema = {
  "Parameters": z.string().optional(),
  "offset": z.number().int().optional(),
  "limit": z.number().int().optional(),
  "timeout": z.number().int().optional()
}