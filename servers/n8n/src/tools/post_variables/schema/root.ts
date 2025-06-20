import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().readonly().optional(),
  "key": z.string(),
  "value": z.string(),
  "type": z.string().readonly().optional()
}