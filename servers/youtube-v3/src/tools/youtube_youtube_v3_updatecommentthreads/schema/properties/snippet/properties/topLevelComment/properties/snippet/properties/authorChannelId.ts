import { z } from "zod"

export const inputParamsSchema = {
  "value": z.string().optional()
}