import { z } from "zod"

export const inputParamsSchema = {
  "okadoc-auth-key": z.string().optional()
}