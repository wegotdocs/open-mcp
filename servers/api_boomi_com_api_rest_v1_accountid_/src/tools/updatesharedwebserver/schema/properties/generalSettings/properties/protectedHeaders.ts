import { z } from "zod"

export const inputParamsSchema = {
  "header": z.array(z.string()).optional()
}