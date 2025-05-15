import { z } from "zod"

export const inputParamsSchema = {
  "parameter": z.array(z.object({ "name": z.string().optional(), "value": z.string().optional() })).optional()
}