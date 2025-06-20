import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().readonly().optional(),
  "name": z.string(),
  "type": z.string().readonly().optional()
}