import { z } from "zod"

export const inputParamsSchema = {
  "range": z.string().optional()
}