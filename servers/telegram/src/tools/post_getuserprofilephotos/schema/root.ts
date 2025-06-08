import { z } from "zod"

export const inputParamsSchema = {
  "Parameters": z.string().optional(),
  "user_id": z.number().int(),
  "offset": z.number().int().optional(),
  "limit": z.number().int().optional()
}