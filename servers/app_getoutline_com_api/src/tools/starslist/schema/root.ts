import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().optional(),
  "limit": z.number().optional()
}