import { z } from "zod"

export const inputParams = {
  "query": z.string().optional(),
  "per_page": z.string().optional()
}