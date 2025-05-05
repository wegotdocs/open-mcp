import { z } from "zod"

export const inputParamsSchema = {
  "rootId": z.string().optional(),
  "count": z.number().int().optional()
}