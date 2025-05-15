import { z } from "zod"

export const inputParamsSchema = {
  "alias": z.string().optional(),
  "certificate": z.array(z.string()).optional(),
  "componentId": z.string().optional()
}