import { z } from "zod"

export const inputParamsSchema = {
  "query": z.string(),
  "context": z.string().optional()
}