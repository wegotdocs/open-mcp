import { z } from "zod"

export const inputParamsSchema = {
  "Input": z.array(z.object({ "default": z.string().optional(), "key": z.number().int().optional(), "name": z.string().optional() })).optional()
}