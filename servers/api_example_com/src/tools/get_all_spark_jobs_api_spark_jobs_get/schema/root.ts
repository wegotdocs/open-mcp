import { z } from "zod"

export const inputParamsSchema = {
  "include_history": z.boolean().optional()
}