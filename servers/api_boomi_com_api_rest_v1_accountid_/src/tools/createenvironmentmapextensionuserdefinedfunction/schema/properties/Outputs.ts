import { z } from "zod"

export const inputParamsSchema = {
  "Output": z.array(z.object({ "key": z.number().int().optional(), "name": z.string().optional() })).optional()
}