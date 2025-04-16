import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "after": z.number().int().optional()
}