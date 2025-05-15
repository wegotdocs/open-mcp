import { z } from "zod"

export const inputParamsSchema = {
  "Node": z.array(z.object({ "name": z.string().optional(), "xpath": z.string().optional() })).optional(),
  "componentId": z.string().optional(),
  "type": z.string().optional()
}