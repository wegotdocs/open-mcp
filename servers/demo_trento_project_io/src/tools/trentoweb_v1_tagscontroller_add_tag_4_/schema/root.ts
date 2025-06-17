import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid(),
  "value": z.string().optional()
}