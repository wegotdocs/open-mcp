import { z } from "zod"

export const inputParamsSchema = {
  "query": z.string(),
  "options": z.string()
}