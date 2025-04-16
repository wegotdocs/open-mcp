import { z } from "zod"

export const inputParamsSchema = {
  "term": z.string().optional()
}