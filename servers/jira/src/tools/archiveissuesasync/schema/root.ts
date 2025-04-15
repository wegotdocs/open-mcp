import { z } from "zod"

export const inputParamsSchema = {
  "jql": z.string().optional()
}