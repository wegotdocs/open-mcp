import { z } from "zod"

export const inputParamsSchema = {
  "returnUrl": z.string().optional()
}