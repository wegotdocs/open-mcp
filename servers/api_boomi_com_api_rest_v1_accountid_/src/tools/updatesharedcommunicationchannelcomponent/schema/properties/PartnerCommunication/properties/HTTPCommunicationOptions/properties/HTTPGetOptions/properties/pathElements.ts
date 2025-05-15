import { z } from "zod"

export const inputParamsSchema = {
  "element": z.array(z.object({ "name": z.string().optional() })).optional()
}