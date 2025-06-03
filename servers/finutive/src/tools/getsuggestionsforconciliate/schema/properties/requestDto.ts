import { z } from "zod"

export const inputParamsSchema = {
  "size": z.number().int().optional(),
  "offset": z.number().int().optional(),
  "type": z.string().optional()
}