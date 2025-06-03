import { z } from "zod"

export const inputParamsSchema = {
  "ids": z.array(z.string()).optional()
}