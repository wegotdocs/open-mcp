import { z } from "zod"

export const inputParamsSchema = {
  "DynamicProcessProperty": z.array(z.object({ "name": z.string().optional(), "value": z.string().optional() })).optional()
}